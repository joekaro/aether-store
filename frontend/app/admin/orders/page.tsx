"use client";

import { useState, useEffect, useCallback } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useAdminApi } from "@/hooks/useAdminApi";

const STATUS_OPTIONS = ["processing", "shipped", "delivered", "cancelled"] as const;
type OrderStatus = typeof STATUS_OPTIONS[number];

const statusColors: Record<string, string> = {
  processing: "bg-amber-100 text-amber-700 border-amber-200",
  shipped:    "bg-blue-100 text-blue-700 border-blue-200",
  delivered:  "bg-emerald-100 text-emerald-700 border-emerald-200",
  cancelled:  "bg-red-100 text-red-600 border-red-200",
};

const paymentColors: Record<string, string> = {
  paid:    "bg-emerald-100 text-emerald-700",
  pending: "bg-neutral-100 text-neutral-500",
  failed:  "bg-red-100 text-red-600",
};

interface Order {
  _id: string;
  orderNumber: string;
  user?: { firstName: string; lastName: string; email: string };
  items: { quantity: number }[];
  total: number;
  status: OrderStatus;
  paymentStatus: string;
  createdAt: string;
  shippingAddress?: { street: string; city: string };
  shippingMethod?: string;
}

export default function AdminOrdersPage() {
  const { orders: ordersApi } = useAdminApi();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await ordersApi.getAll(1) as { orders: Order[] };
      setOrders(res.orders || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = orders.filter((o) => {
    const name = o.user ? `${o.user.firstName} ${o.user.lastName}` : "";
    const matchSearch = o.orderNumber.toLowerCase().includes(search.toLowerCase()) || name.toLowerCase().includes(search.toLowerCase()) || (o.user?.email || "").toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  async function handleStatusChange(orderId: string, newStatus: OrderStatus) {
    setSaving(true);
    try {
      await ordersApi.updateStatus(orderId, newStatus);
      setOrders((prev) => prev.map((o) => o._id === orderId ? { ...o, status: newStatus } : o));
      setSelectedOrder((o) => o?._id === orderId ? { ...o, status: newStatus } : o);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    setSaving(true);
    try {
      setOrders((prev) => prev.filter((o) => o._id !== id));
      setDeleteId(null);
      setSelectedOrder(null);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  const itemCount = (o: Order) => o.items?.reduce((s, i) => s + (i.quantity || 1), 0) || 0;

  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Orders</h1>
            <p className="text-sm text-neutral-500 mt-0.5">{orders.length} total orders</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-xl px-4 py-2 text-center">
            <p className="font-bold text-neutral-900">${orders.reduce((s, o) => s + (o.total || 0), 0).toLocaleString()}</p>
            <p className="text-xs text-neutral-400">Total Revenue</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6" /><path d="M21 21l-4.35-4.35" /></svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by order number or customer..." className="w-full h-11 pl-11 pr-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["all", ...STATUS_OPTIONS].map((s) => (
              <button key={s} onClick={() => setStatusFilter(s)} className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all capitalize ${statusFilter === s ? "bg-neutral-900 text-white border-neutral-900" : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400"}`}>{s}</button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
          {loading ? (
            <div className="p-8 flex flex-col gap-4">{[...Array(5)].map((_, i) => <div key={i} className="h-14 bg-neutral-50 rounded-xl animate-pulse" />)}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 border-b border-neutral-100">
                  <tr>{["Order", "Customer", "Items", "Total", "Payment", "Status", "Date", "Actions"].map((h) => (
                    <th key={h} className="px-5 py-3.5 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}</tr>
                </thead>
                <tbody className="divide-y divide-neutral-50">
                  {filtered.map((order) => (
                    <tr key={order._id} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-5 py-4 font-mono text-xs font-semibold text-neutral-700">{order.orderNumber}</td>
                      <td className="px-5 py-4">
                        <p className="font-semibold text-neutral-900">{order.user ? `${order.user.firstName} ${order.user.lastName}` : "Guest"}</p>
                        <p className="text-xs text-neutral-400">{order.user?.email}</p>
                      </td>
                      <td className="px-5 py-4 text-neutral-600">{itemCount(order)}</td>
                      <td className="px-5 py-4 font-bold text-neutral-900">${order.total}</td>
                      <td className="px-5 py-4"><span className={`text-xs font-semibold px-2.5 py-1 rounded-lg capitalize ${paymentColors[order.paymentStatus] || "bg-neutral-100 text-neutral-500"}`}>{order.paymentStatus}</span></td>
                      <td className="px-5 py-4">
                        <select value={order.status} onChange={(e) => handleStatusChange(order._id, e.target.value as OrderStatus)} className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border cursor-pointer outline-none capitalize ${statusColors[order.status] || "bg-neutral-100 text-neutral-600 border-neutral-200"}`}>
                          {STATUS_OPTIONS.map((s) => <option key={s} value={s} className="bg-white text-neutral-900">{s}</option>)}
                        </select>
                      </td>
                      <td className="px-5 py-4 text-xs text-neutral-400">{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setSelectedOrder(order)} className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                          </button>
                          <button onClick={() => setDeleteId(order._id)} className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6m5 0V4a1 1 0 011-1h2a1 1 0 011 1v2" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!loading && filtered.length === 0 && <p className="text-center py-16 text-sm text-neutral-400">No orders found</p>}
        </div>
      </div>

      {/* Order Detail Drawer */}
      <AnimatePresence>
        {selectedOrder && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedOrder(null)} className="fixed inset-0 bg-black/30 z-50" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 300 }} className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col">
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
                <div>
                  <p className="text-sm font-bold text-neutral-900">Order Details</p>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5">{selectedOrder.orderNumber}</p>
                </div>
                <button onClick={() => setSelectedOrder(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 text-neutral-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
                <div className="bg-neutral-50 rounded-xl p-4 flex flex-col gap-2.5 text-sm">
                  {[
                    { label: "Customer", value: selectedOrder.user ? `${selectedOrder.user.firstName} ${selectedOrder.user.lastName}` : "Guest" },
                    { label: "Email",    value: selectedOrder.user?.email || "-" },
                    { label: "Date",     value: new Date(selectedOrder.createdAt).toLocaleDateString() },
                    { label: "Shipping", value: selectedOrder.shippingMethod || "-" },
                    { label: "Items",    value: `${itemCount(selectedOrder)} item(s)` },
                    { label: "Total",    value: `$${selectedOrder.total}` },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-4">
                      <span className="text-neutral-500 shrink-0">{label}</span>
                      <span className="font-semibold text-neutral-900 text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Payment</p>
                  <span className={`text-sm font-semibold px-3 py-1.5 rounded-lg capitalize ${paymentColors[selectedOrder.paymentStatus] || "bg-neutral-100 text-neutral-500"}`}>{selectedOrder.paymentStatus}</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Update Status</p>
                  <div className="flex flex-col gap-2">
                    {STATUS_OPTIONS.map((s) => (
                      <button key={s} onClick={() => handleStatusChange(selectedOrder._id, s)} disabled={saving} className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-semibold capitalize transition-all ${selectedOrder.status === s ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 text-neutral-600 hover:border-neutral-400"}`}>
                        {s}
                        {selectedOrder.status === s && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Delete Confirm */}
      <AnimatePresence>
        {deleteId && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDeleteId(null)} className="fixed inset-0 bg-black/40 z-[60]" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] bg-white rounded-2xl p-6 w-80 shadow-2xl">
              <h3 className="text-base font-bold text-neutral-900 mb-2">Delete order?</h3>
              <p className="text-sm text-neutral-500 mb-5">This will permanently remove this order.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 border border-neutral-200 text-sm font-medium rounded-xl hover:bg-neutral-50">Cancel</button>
                <button onClick={() => handleDelete(deleteId)} disabled={saving} className="flex-1 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-xl hover:bg-red-600 disabled:opacity-60">Delete</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AdminLayout>
  );
}