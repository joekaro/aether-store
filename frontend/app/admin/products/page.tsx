"use client";

import { useState, useEffect, useCallback } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAdminApi } from "@/hooks/useAdminApi";

interface Variant {
  id: string;
  color: string;
  colorHex: string;
  size: string;
  price: number;
  stock: number;
  images: string[];
}

interface Product {
  _id: string;
  id: string;
  name: string;
  category: string;
  basePrice: number;
  variants: Variant[];
}

export default function AdminProductsPage() {
  const { products: productsApi } = useAdminApi();
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteName, setDeleteName] = useState("");
  const [stockEdit, setStockEdit] = useState<{ productId: string; variantId: string; value: number } | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await productsApi.getAll() as { products: Product[] };
      setProducts(res.products || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  async function handleDelete(id: string) {
    setSaving(true);
    try {
      await productsApi.delete(id);
      setProducts((prev) => prev.filter((p) => p.id !== id && p._id !== id));
      setDeleteId(null);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  async function handleStockSave() {
    if (!stockEdit) return;
    setSaving(true);
    try {
      await productsApi.updateStock(stockEdit.productId, stockEdit.variantId, stockEdit.value);
      setProducts((prev) =>
        prev.map((p) => {
          if (p.id !== stockEdit.productId && p._id !== stockEdit.productId) return p;
          return { ...p, variants: p.variants.map((v) => v.id === stockEdit.variantId ? { ...v, stock: stockEdit.value } : v) };
        })
      );
      setStockEdit(null);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Products</h1>
            <p className="text-sm text-neutral-500 mt-0.5">{products.length} products total</p>
          </div>
          <Link href="/admin/products/new" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
            Add Product
          </Link>
        </div>

        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="6" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="w-full h-11 pl-11 pr-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white" />
        </div>

        <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
          {loading ? (
            <div className="p-8 flex flex-col gap-4">
              {[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-neutral-50 rounded-xl animate-pulse" />)}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 border-b border-neutral-100">
                  <tr>
                    {["Product", "Category", "Colors", "Stock", "Base Price", "Actions"].map((h) => (
                      <th key={h} className="px-5 py-3.5 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-50">
                  {filtered.map((product) => (
                    <tr key={product._id || product.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                            {product.variants?.[0]?.images?.[0] && (
                              <img src={product.variants[0].images[0]} alt={product.name} className="w-full h-full object-cover" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-neutral-900">{product.name}</p>
                            <p className="text-xs text-neutral-400">{product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-semibold rounded-lg">{product.category}</span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {[...new Map(product.variants?.map((v) => [v.color, v]) || []).values()].map((v) => (
                            <span key={v.color} title={v.color} className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: v.colorHex }} />
                          ))}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col gap-1">
                          {(product.variants || []).slice(0, 3).map((v) => (
                            <div key={v.id} className="flex items-center gap-2">
                              <span className="text-xs text-neutral-400 w-24 truncate">{v.color} {v.size}</span>
                              <button
                                onClick={() => setStockEdit({ productId: product.id || product._id, variantId: v.id, value: v.stock })}
                                className={`text-xs font-semibold px-2 py-0.5 rounded-lg cursor-pointer ${v.stock === 0 ? "bg-red-100 text-red-600" : v.stock <= 3 ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}
                              >
                                {v.stock} in stock
                              </button>
                            </div>
                          ))}
                          {(product.variants || []).length > 3 && (
                            <span className="text-xs text-neutral-400">+{product.variants.length - 3} more</span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-4 font-semibold text-neutral-900">${product.basePrice}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Link href={`/admin/products/${product.id || product._id}`} className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all" title="Edit">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                          </Link>
                          <Link href={`/product/${product.id}`} target="_blank" className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all" title="View in store">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </Link>
                          <button onClick={() => { setDeleteId(product.id || product._id); setDeleteName(product.name); }} className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all" title="Delete">
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
          {!loading && filtered.length === 0 && <div className="text-center py-16 text-neutral-400 text-sm">No products found</div>}
        </div>
      </div>

      {/* Delete Modal */}
      <AnimatePresence>
        {deleteId && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDeleteId(null)} className="fixed inset-0 bg-black/40 z-50" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl p-6 w-80 shadow-2xl">
              <h3 className="text-base font-bold text-neutral-900 mb-1">Delete product?</h3>
              <p className="text-sm text-neutral-500 mb-5">This will permanently delete <span className="font-semibold">{deleteName}</span>.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 border border-neutral-200 text-sm font-medium rounded-xl hover:bg-neutral-50 transition-colors">Cancel</button>
                <button onClick={() => handleDelete(deleteId)} disabled={saving} className="flex-1 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-xl hover:bg-red-600 transition-colors disabled:opacity-60">
                  {saving ? "Deleting..." : "Delete"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Stock Edit Modal */}
      <AnimatePresence>
        {stockEdit && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setStockEdit(null)} className="fixed inset-0 bg-black/40 z-50" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl p-6 w-72 shadow-2xl">
              <h3 className="text-base font-bold text-neutral-900 mb-4">Update Stock</h3>
              <input type="number" min={0} value={stockEdit.value} onChange={(e) => setStockEdit({ ...stockEdit, value: parseInt(e.target.value) || 0 })} className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors mb-4" />
              <div className="flex gap-3">
                <button onClick={() => setStockEdit(null)} className="flex-1 py-2.5 border border-neutral-200 text-sm font-medium rounded-xl hover:bg-neutral-50">Cancel</button>
                <button onClick={handleStockSave} disabled={saving} className="flex-1 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 disabled:opacity-60">
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AdminLayout>
  );
}