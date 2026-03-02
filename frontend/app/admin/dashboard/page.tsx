"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { useAdminApi } from "@/hooks/useAdminApi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

interface Summary { totalRevenue: number; totalOrders: number; totalCustomers: number; totalProducts: number; }
interface SalesPoint { month: string; revenue: number; orders: number; }
interface Order { _id: string; orderNumber: string; user?: { firstName: string; lastName: string }; total: number; status: string; createdAt: string; }

const statusColors: Record<string, string> = {
  processing: "bg-amber-100 text-amber-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-red-100 text-red-600",
};

export default function AdminDashboardPage() {
  const { analytics, orders: ordersApi } = useAdminApi();
  const [summary, setSummary] = useState<Summary | null>(null);
  const [salesChart, setSalesChart] = useState<SalesPoint[]>([]);
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    const h = new Date().getHours();
    if (h >= 12 && h < 17) setGreeting("Good afternoon");
    else if (h >= 17) setGreeting("Good evening");

    async function load() {
      try {
        const [analyticsRes, ordersRes] = await Promise.all([
          analytics.getSummary() as Promise<{ summary: Summary; salesChart: SalesPoint[] }>,
          ordersApi.getAll(1) as Promise<{ orders: Order[] }>,
        ]);
        setSummary(analyticsRes.summary);
        setSalesChart(analyticsRes.salesChart || []);
        setRecentOrders((ordersRes.orders || []).slice(0, 5));
      } catch (e) {
        console.error("Dashboard load error:", e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const statCards = [
    { label: "Total Revenue", value: `$${(summary?.totalRevenue || 0).toLocaleString()}`,   icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Total Orders",  value: (summary?.totalOrders || 0).toLocaleString(),           icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { label: "Customers",     value: (summary?.totalCustomers || 0).toLocaleString(),        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { label: "Products",      value: (summary?.totalProducts || 0).toLocaleString(),         icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  ];

  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">{greeting} 👋</h1>
          <p className="text-sm text-neutral-500 mt-0.5">Here&apos;s what&apos;s happening with your store today.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((card) => (
            <div key={card.label} className="bg-white rounded-2xl p-6 border border-neutral-100">
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-medium text-neutral-500">{card.label}</p>
                <div className="w-9 h-9 bg-neutral-100 rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d={card.icon} /></svg>
                </div>
              </div>
              {loading ? <div className="h-8 w-24 bg-neutral-100 rounded-lg animate-pulse" /> : <p className="text-2xl font-bold text-neutral-900">{card.value}</p>}
            </div>
          ))}
        </div>

        {salesChart.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-neutral-100">
              <h2 className="text-sm font-bold text-neutral-900 mb-5">Revenue Over Time</h2>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={salesChart} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                  <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]} contentStyle={{ borderRadius: 12, border: "1px solid #f0f0f0", fontSize: 12 }} />
                  <Line type="monotone" dataKey="revenue" stroke="#171717" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-neutral-100">
              <h2 className="text-sm font-bold text-neutral-900 mb-5">Orders per Month</h2>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={salesChart} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #f0f0f0", fontSize: 12 }} />
                  <Bar dataKey="orders" fill="#171717" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
              <h2 className="text-sm font-bold text-neutral-900">Recent Orders</h2>
              <Link href="/admin/orders" className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors">View all →</Link>
            </div>
            {loading ? (
              <div className="p-6 flex flex-col gap-3">{[...Array(4)].map((_, i) => <div key={i} className="h-10 bg-neutral-50 rounded-xl animate-pulse" />)}</div>
            ) : recentOrders.length === 0 ? (
              <p className="text-center py-12 text-sm text-neutral-400">No orders yet</p>
            ) : (
              <div className="divide-y divide-neutral-50">
                {recentOrders.map((o) => (
                  <div key={o._id} className="flex items-center justify-between px-6 py-3.5">
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{o.user ? `${o.user.firstName} ${o.user.lastName}` : "Guest"}</p>
                      <p className="text-xs text-neutral-400">{o.orderNumber} · {new Date(o.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg capitalize ${statusColors[o.status] || "bg-neutral-100 text-neutral-500"}`}>{o.status}</span>
                      <p className="text-sm font-bold text-neutral-900">${o.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-neutral-100 p-6">
            <h2 className="text-sm font-bold text-neutral-900 mb-5">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Add Product",  href: "/admin/products/new", icon: "M12 5v14M5 12h14" },
                { label: "View Orders",  href: "/admin/orders",       icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                { label: "Customers",    href: "/admin/customers",    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                { label: "All Products", href: "/admin/products",     icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              ].map((a) => (
                <Link key={a.label} href={a.href} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-all group">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-neutral-900 transition-colors">
                    <svg className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d={a.icon} /></svg>
                  </div>
                  <span className="text-sm font-semibold text-neutral-700">{a.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}