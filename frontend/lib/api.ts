import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// ─────────────────────────────────────────────────────────
// Generic fetch helper
// ─────────────────────────────────────────────────────────
async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "API error");
  return data;
}

// ─────────────────────────────────────────────────────────
// Products
// ─────────────────────────────────────────────────────────
export async function getAllProducts(): Promise<Product[]> {
  const data = await apiFetch<{ products: Product[] }>("/products");
  return data.products;
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const data = await apiFetch<{ product: Product }>(`/products/${id}`);
    return data.product;
  } catch {
    return null;
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const data = await apiFetch<{ products: Product[] }>(`/products?category=${encodeURIComponent(category)}`);
  return data.products;
}

// ─────────────────────────────────────────────────────────
// Auth
// ─────────────────────────────────────────────────────────
export async function register(payload: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  return apiFetch<{ token: string; user: object }>("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function login(payload: { email: string; password: string }) {
  return apiFetch<{ token: string; user: object }>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getMe(token: string) {
  return apiFetch<{ user: object }>("/auth/me", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
}

// ─────────────────────────────────────────────────────────
// Orders
// ─────────────────────────────────────────────────────────
export interface CreateOrderPayload {
  items: Array<{
    productId: string;
    variantId: string;
    quantity: number;
  }>;
  shippingAddress: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  shippingMethod: "standard" | "express";
}

export async function createOrder(payload: CreateOrderPayload, token?: string) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  return apiFetch<{ order: object }>("/orders", {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
}

// ─────────────────────────────────────────────────────────
// Paystack Payment
// ─────────────────────────────────────────────────────────
export async function initializePayment(orderNumber: string, email: string) {
  return apiFetch<{ authorization_url: string; reference: string }>("/payment/initialize", {
    method: "POST",
    body: JSON.stringify({ orderNumber, email }),
  });
}

export async function verifyPayment(reference: string) {
  return apiFetch<{ order: object }>(`/payment/verify/${reference}`);
}