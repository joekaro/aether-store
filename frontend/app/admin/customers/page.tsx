"use client";

import { useState, useEffect, useCallback } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useAdminApi } from "@/hooks/useAdminApi";

interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  suspended: boolean;
  orderCount: number;
  totalSpent: number;
  createdAt: string;
}

export default function AdminCustomersPage() {
  const { customers: customersApi } = useAdminApi();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Customer | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await customersApi.getAll(1) as { users: Customer[] };
      setCustomers(res.users || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = customers.filter((c) =>
    `${c.firstName} ${c.lastName} ${c.email}`.toLowerCase().includes(search.toLowerCase())
  );

  async function handleDelete(id: string) {
    setSaving(true);
    try {
      await customersApi.delete(id);
      setCustomers((prev) => prev.filter((c) => c._id !== id));
      setDeleteId(null);
      if (selected?._id === id) setSelected(null);
    } catch (e) { console.error(e); }
    finally { setSaving(false); }
  }

  async function handleToggleSuspend(id: string) {
    setSaving(true);
    try {
      const res = await customersApi.toggleSuspend(id) as { suspended: boolean };
      setCustomers((prev) => prev.map((c) => c._id === id ? { ...c, suspended: res.suspended } : c));
      setSelected((prev) => prev?._id === id ? { ...prev, suspended: res.suspended } : prev);
    } catch (e) { console.error(e); }
    finally { setSaving(false); }
  }

  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Customers</h1>
            <p className="text-sm text-neutral-500 mt-0.5">{customers.length} registered customers</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white border border-neutral-200 rounded-xl px-4 py-2 text-center">
              <p className="font-bold text-neutral-900">{customers.filter((c) => !c.suspended).length}</p>
              <p className="text-xs text-neutral-400">Active</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-xl px-4 py-2 text-center">
              <p className="font-bold text-neutral-900">${customers.reduce((s, c) => s + c.totalSpent, 0).toLocaleString()}</p>
              <p className="text-xs text-neutral-400">Total Spent</p>
            </div>
          </div>
        </div>

        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6" /><path d="M21 21l-4.35-4.35" /></svg>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or email..." className="w-full h-11 pl-11 pr-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white" />
        </div>

        <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
          {loading ? (
            <div className="p-8 flex flex-col gap-4">{[...Array(5)].map((_, i) => <div key={i} className="h-14 bg-neutral-50 rounded-xl animate-pulse" />)}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 border-b border-neutral-100">
                  <tr>{["Customer", "Email", "Orders", "Total Spent", "Joined", "Status", "Actions"].map((h) => (
                    <th key={h} className="px-5 py-3.5 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}</tr>
                </thead>
                <tbody className="divide-y divide-neutral-50">
                  {filtered.map((c) => (
                    <tr key={c._id} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                            {c.firstName[0]}{c.lastName[0]}
                          </div>
                          <p className="font-semibold text-neutral-900">{c.firstName} {c.lastName}</p>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-neutral-500">{c.email}</td>
                      <td className="px-5 py-4 font-medium text-neutral-700">{c.orderCount}</td>
                      <td className="px-5 py-4 font-bold text-neutral-900">${c.totalSpent}</td>
                      <td className="px-5 py-4 text-xs text-neutral-400">{new Date(c.createdAt).toLocaleDateString()}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${!c.suspended ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
                          {c.suspended ? "suspended" : "active"}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setSelected(c)} className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all" title="View">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                          </button>
                          <button onClick={() => handleToggleSuspend(c._id)} disabled={saving} className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-all ${!c.suspended ? "border-neutral-200 text-neutral-500 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200" : "border-emerald-200 text-emerald-600 bg-emerald-50 hover:bg-emerald-100"}`} title={c.suspended ? "Activate" : "Suspend"}>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                              {c.suspended ? <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> : <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />}
                            </svg>
                          </button>
                          <button onClick={() => setDeleteId(c._id)} className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all" title="Delete">
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
          {!loading && filtered.length === 0 && <p className="text-center py-16 text-sm text-neutral-400">No customers found</p>}
        </div>
      </div>

      {/* Customer Drawer */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 bg-black/30 z-50" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 300 }} className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col">
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
                <p className="text-sm font-bold text-neutral-900">Customer Profile</p>
                <button onClick={() => setSelected(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 text-neutral-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xl font-bold mb-3">
                    {selected.firstName[0]}{selected.lastName[0]}
                  </div>
                  <p className="text-base font-bold text-neutral-900">{selected.firstName} {selected.lastName}</p>
                  <p className="text-sm text-neutral-400">{selected.email}</p>
                  <span className={`mt-2 text-xs font-semibold px-3 py-1 rounded-lg ${!selected.suspended ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
                    {selected.suspended ? "suspended" : "active"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[{ label: "Orders", value: selected.orderCount }, { label: "Spent", value: `$${selected.totalSpent}` }].map((s) => (
                    <div key={s.label} className="bg-neutral-50 rounded-xl p-3 text-center">
                      <p className="text-base font-bold text-neutral-900">{s.value}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Joined</span>
                    <span className="font-semibold text-neutral-900">{new Date(selected.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button onClick={() => handleToggleSuspend(selected._id)} disabled={saving} className={`w-full py-3 rounded-xl text-sm font-semibold border transition-colors ${!selected.suspended ? "border-amber-200 text-amber-700 bg-amber-50 hover:bg-amber-100" : "border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100"}`}>
                    {selected.suspended ? "Activate Customer" : "Suspend Customer"}
                  </button>
                  <button onClick={() => { setDeleteId(selected._id); setSelected(null); }} className="w-full py-3 rounded-xl text-sm font-semibold border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 transition-colors">
                    Delete Customer
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Delete Modal */}
      <AnimatePresence>
        {deleteId && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDeleteId(null)} className="fixed inset-0 bg-black/40 z-[60]" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] bg-white rounded-2xl p-6 w-80 shadow-2xl">
              <h3 className="text-base font-bold text-neutral-900 mb-2">Delete customer?</h3>
              <p className="text-sm text-neutral-500 mb-5">This will permanently delete this customer account.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 border border-neutral-200 text-sm font-medium rounded-xl hover:bg-neutral-50">Cancel</button>
                <button onClick={() => handleDelete(deleteId)} disabled={saving} className="flex-1 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-xl hover:bg-red-600 disabled:opacity-60">
                  {saving ? "Deleting..." : "Delete"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AdminLayout>
  );
}