"use client";

import { useAdminAuth } from "@/context/AdminAuthContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export function useAdminApi() {
  const { token: contextToken } = useAdminAuth();

  // Read token directly from localStorage as fallback so it's always
  // available even before the context re-renders with the stored value
  function getToken(): string | null {
    if (contextToken) return contextToken;
    if (typeof window !== "undefined") {
      return localStorage.getItem("admin_token");
    }
    return null;
  }

  async function adminFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
    const token = getToken();

    if (!token) {
      throw new Error("Not authenticated");
    }

    const res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.headers || {}),
      },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Request failed");
    return data;
  }

  const products = {
    getAll: () =>
      adminFetch<{ products: unknown[] }>("/admin/products"),
    getById: (id: string) =>
      adminFetch<{ product: unknown }>(`/admin/products/${id}`),
    create: (body: unknown) =>
      adminFetch("/admin/products", { method: "POST", body: JSON.stringify(body) }),
    update: (id: string, body: unknown) =>
      adminFetch(`/admin/products/${id}`, { method: "PUT", body: JSON.stringify(body) }),
    delete: (id: string) =>
      adminFetch(`/admin/products/${id}`, { method: "DELETE" }),
    updateStock: (productId: string, variantId: string, stock: number) =>
      adminFetch(`/admin/products/${productId}/stock`, {
        method: "PATCH",
        body: JSON.stringify({ variantId, stock }),
      }),
  };

  const orders = {
    getAll: (page = 1) =>
      adminFetch<{ orders: unknown[]; total: number }>(`/admin/orders?page=${page}`),
    updateStatus: (id: string, status: string) =>
      adminFetch(`/admin/orders/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      }),
    delete: (id: string) =>
      adminFetch(`/admin/orders/${id}`, { method: "DELETE" }),
  };

  const customers = {
    getAll: (page = 1) =>
      adminFetch<{ users: unknown[]; total: number }>(`/admin/customers?page=${page}`),
    delete: (id: string) =>
      adminFetch(`/admin/customers/${id}`, { method: "DELETE" }),
    toggleSuspend: (id: string) =>
      adminFetch(`/admin/customers/${id}/suspend`, { method: "PATCH" }),
  };

  // Backend: GET /admin/analytics → { summary, salesChart }
  const analytics = {
    getSummary: () =>
      adminFetch<{ summary: unknown; salesChart: unknown[] }>("/admin/analytics"),
  };

  return { adminFetch, products, orders, customers, analytics };
}