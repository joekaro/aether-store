"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface Order {
  orderNumber: string;
  total: number;
  status: string;
  paymentStatus: string;
  items: { productName: string; color: string; size: string; quantity: number; price: number; image: string }[];
  shippingAddress: { firstName: string; lastName: string; address: string; city: string; country: string };
}

function VerifyPageInner() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("reference") || searchParams.get("ref") || searchParams.get("trxref");
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState("");
  const verified = useRef(false);

  useEffect(() => {
    if (!ref || verified.current) return;
    verified.current = true;

    async function verify() {
      try {
        const res = await fetch(`${API_URL}/payment/verify/${ref}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Verification failed");
        setOrder(data.order);
        setStatus("success");
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Verification failed");
        setStatus("failed");
      }
    }
    verify();
  }, [ref]);

  if (!ref) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <p className="text-neutral-500 mb-4">No payment reference found.</p>
          <Link href="/" className="text-sm font-semibold text-neutral-900 hover:underline">Go home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-4 py-12">
      <Link href="/" className="text-xl font-bold tracking-widest text-neutral-900 mb-10">AETHER</Link>

      {status === "loading" && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-neutral-200 border-t-neutral-900 rounded-full animate-spin" />
          <p className="text-sm text-neutral-500">Verifying your payment...</p>
        </div>
      )}

      {status === "success" && order && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white rounded-2xl border border-neutral-100 p-8 text-center"
        >
          {/* Success icon */}
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1 className="text-xl font-bold text-neutral-900 mb-1">Payment Successful!</h1>
          <p className="text-sm text-neutral-500 mb-6">Your order has been confirmed and is being processed.</p>

          <div className="bg-neutral-50 rounded-xl p-4 mb-6 text-left space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-500">Order Number</span>
              <span className="font-bold text-neutral-900 font-mono">{order.orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Total Paid</span>
              <span className="font-bold text-neutral-900">${order.total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Shipping To</span>
              <span className="font-semibold text-neutral-900 text-right">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                <span className="text-neutral-400 font-normal">{order.shippingAddress.city}, {order.shippingAddress.country}</span>
              </span>
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-col gap-3 mb-6 text-left">
            {order.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                  {item.image && <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-neutral-900 truncate">{item.productName}</p>
                  <p className="text-xs text-neutral-400">{item.color} · {item.size} · Qty {item.quantity}</p>
                </div>
                <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/account" className="w-full h-11 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center">
              View My Orders
            </Link>
            <Link href="/" className="w-full h-11 border border-neutral-200 text-sm font-medium rounded-xl hover:bg-neutral-50 transition-colors flex items-center justify-center">
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      )}

      {status === "failed" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white rounded-2xl border border-neutral-100 p-8 text-center"
        >
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-neutral-900 mb-1">Payment Failed</h1>
          <p className="text-sm text-neutral-500 mb-2">{error}</p>
          <p className="text-xs text-neutral-400 mb-6">Reference: {ref}</p>
          <div className="flex flex-col gap-3">
            <Link href="/checkout" className="w-full h-11 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center">
              Try Again
            </Link>
            <Link href="/" className="w-full h-11 border border-neutral-200 text-sm font-medium rounded-xl hover:bg-neutral-50 transition-colors flex items-center justify-center">
              Go Home
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neutral-200 border-t-neutral-900 rounded-full animate-spin" />
      </div>
    }>
      <VerifyPageInner />
    </Suspense>
  );
}