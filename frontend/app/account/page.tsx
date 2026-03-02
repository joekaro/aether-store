"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface OrderItem { productName: string; color: string; size: string; price: number; quantity: number; image: string; }
interface Order { _id: string; orderNumber: string; items: OrderItem[]; total: number; status: string; paymentStatus: string; createdAt: string; shippingAddress: { firstName: string; lastName: string }; }

const statusColors: Record<string, string> = {
  processing: "bg-amber-100 text-amber-700",
  shipped:    "bg-blue-100 text-blue-700",
  delivered:  "bg-emerald-100 text-emerald-700",
  cancelled:  "bg-red-100 text-red-600",
};

const paymentColors: Record<string, string> = {
  paid:    "bg-emerald-100 text-emerald-700",
  pending: "bg-neutral-100 text-neutral-500",
  failed:  "bg-red-100 text-red-600",
};

export default function AccountPage() {
  const { user, token, logout, isLoading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"orders" | "profile">("orders");
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !user) router.push("/login");
  }, [user, isLoading, router]);

  useEffect(() => {
    if (!token) return;
    async function loadOrders() {
      try {
        const res = await fetch(`${API_URL}/orders/my`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setOrders(data.orders || []);
      } catch { /* ignore */ }
      finally { setOrdersLoading(false); }
    }
    loadOrders();
  }, [token]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neutral-200 border-t-neutral-900 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">
              Hello, {user.firstName} 👋
            </h1>
            <p className="text-sm text-neutral-500 mt-0.5">{user.email}</p>
          </div>
          <button
            onClick={() => { logout(); router.push("/"); }}
            className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-4 py-2 rounded-xl hover:border-neutral-400 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
            </svg>
            Sign out
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white border border-neutral-200 rounded-xl p-1 w-fit mb-8">
          {(["orders", "profile"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-semibold rounded-lg capitalize transition-all ${activeTab === tab ? "bg-neutral-900 text-white" : "text-neutral-500 hover:text-neutral-700"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div>
            {ordersLoading ? (
              <div className="flex flex-col gap-4">
                {[...Array(3)].map((_, i) => <div key={i} className="h-24 bg-white rounded-2xl border border-neutral-100 animate-pulse" />)}
              </div>
            ) : orders.length === 0 ? (
              <div className="bg-white rounded-2xl border border-neutral-100 p-12 text-center">
                <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-neutral-900 mb-1">No orders yet</p>
                <p className="text-sm text-neutral-400 mb-5">Start shopping to see your orders here</p>
                <Link href="/" className="inline-flex px-5 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors">
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {orders.map((order) => (
                  <motion.div
                    key={order._id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl border border-neutral-100 overflow-hidden"
                  >
                    {/* Order header */}
                    <div
                      className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-neutral-50 transition-colors"
                      onClick={() => setExpandedOrder(expandedOrder === order._id ? null : order._id)}
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-sm font-bold text-neutral-900 font-mono">{order.orderNumber}</p>
                          <p className="text-xs text-neutral-400 mt-0.5">{new Date(order.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg capitalize ${statusColors[order.status] || "bg-neutral-100 text-neutral-500"}`}>{order.status}</span>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg capitalize ${paymentColors[order.paymentStatus] || "bg-neutral-100 text-neutral-500"}`}>{order.paymentStatus}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-base font-bold text-neutral-900">${order.total}</p>
                        <svg className={`w-4 h-4 text-neutral-400 transition-transform ${expandedOrder === order._id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>

                    {/* Order items */}
                    {expandedOrder === order._id && (
                      <div className="border-t border-neutral-100 px-6 py-4 flex flex-col gap-3">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                              {item.image && <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-neutral-900 truncate">{item.productName}</p>
                              <p className="text-xs text-neutral-400">{item.color} · {item.size} · Qty {item.quantity}</p>
                            </div>
                            <p className="text-sm font-bold text-neutral-900">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-2xl border border-neutral-100 p-6">
            <h2 className="text-sm font-bold text-neutral-900 mb-5">Profile Information</h2>
            <div className="flex flex-col gap-4 max-w-sm">
              {[
                { label: "First Name", value: user.firstName },
                { label: "Last Name",  value: user.lastName },
                { label: "Email",      value: user.email },
              ].map(({ label, value }) => (
                <div key={label}>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">{label}</label>
                  <div className="h-11 px-4 flex items-center text-sm text-neutral-900 bg-neutral-50 border border-neutral-200 rounded-xl">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}