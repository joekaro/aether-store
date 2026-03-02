"use client";

import { useState, useEffect, use } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAdminApi } from "@/hooks/useAdminApi";

interface VariantForm {
  id: string; color: string; colorHex: string;
  size: string; price: string; stock: string; images: string;
}

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const { products: productsApi } = useAdminApi();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [form, setForm] = useState({ name: "", brand: "", category: "", description: "", basePrice: "" });
  const [variants, setVariants] = useState<VariantForm[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await productsApi.getById(id) as { product: { name: string; brand: string; category: string; description: string; basePrice: number; variants: { id: string; color: string; colorHex: string; size: string; price: number; stock: number; images: string[] }[] } };
        const p = res.product;
        if (!p) { setNotFound(true); return; }
        setForm({ name: p.name, brand: p.brand, category: p.category, description: p.description, basePrice: String(p.basePrice) });
        setVariants(p.variants.map((v) => ({ id: v.id, color: v.color, colorHex: v.colorHex, size: v.size, price: String(v.price), stock: String(v.stock), images: v.images.join(", ") })));
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  function updateVariant(i: number, field: string, value: string) {
    setVariants((prev) => prev.map((v, idx) => idx === i ? { ...v, [field]: value } : v));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        ...form,
        basePrice: parseFloat(form.basePrice),
        variants: variants.map((v, i) => ({ ...v, id: v.id || `${id}-v${i}-${Date.now()}`, price: parseFloat(v.price), stock: parseInt(v.stock), images: v.images.split(",").map((s) => s.trim()).filter(Boolean) })),
      };
      await productsApi.update(id, payload);
      router.push("/admin/products");
    } catch (e) {
      console.error(e);
      alert("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return (
    <AdminLayout>
      <div className="p-8 flex items-center justify-center min-h-96">
        <div className="w-8 h-8 border-2 border-neutral-200 border-t-neutral-900 rounded-full animate-spin" />
      </div>
    </AdminLayout>
  );

  if (notFound) return (
    <AdminLayout>
      <div className="p-8 flex flex-col items-center justify-center min-h-96 gap-4">
        <p className="text-lg font-bold text-neutral-900">Product not found</p>
        <button onClick={() => router.push("/admin/products")} className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl">Back to Products</button>
      </div>
    </AdminLayout>
  );

  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => router.push("/admin/products")} className="w-8 h-8 flex items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 hover:bg-neutral-100 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Edit Product</h1>
            <p className="text-xs text-neutral-400 mt-0.5">{id}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-neutral-100 p-6">
            <h2 className="text-sm font-bold text-neutral-900 mb-5">Basic Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">Product Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">Brand</label>
                <input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} required className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">Base Price ($)</label>
                <input type="number" value={form.basePrice} onChange={(e) => setForm({ ...form, basePrice: e.target.value })} required className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 bg-white transition-colors">
                  {["Running", "Training", "Men", "Women", "Sale"].map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">Description</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} required className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors resize-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-100 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-bold text-neutral-900">Variants ({variants.length})</h2>
              <button type="button" onClick={() => setVariants((prev) => [...prev, { id: `${id}-v${Date.now()}`, color: "", colorHex: "#000000", size: "", price: "", stock: "", images: "" }])} className="text-xs font-semibold border border-neutral-200 px-3 py-1.5 rounded-lg hover:bg-neutral-50 transition-colors">+ Add Variant</button>
            </div>
            <div className="flex flex-col gap-4">
              {variants.map((v, i) => (
                <div key={i} className="border border-neutral-100 rounded-xl p-4 bg-neutral-50">
                  <div className="flex justify-between mb-3">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Variant #{i + 1}</p>
                    {variants.length > 1 && <button type="button" onClick={() => setVariants((prev) => prev.filter((_, idx) => idx !== i))} className="text-xs text-red-400 hover:text-red-600">Remove</button>}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { label: "Color Name", field: "color", placeholder: "Midnight Black" },
                      { label: "Size",        field: "size",  placeholder: "US 9" },
                      { label: "Price ($)",   field: "price", placeholder: "180" },
                      { label: "Stock",       field: "stock", placeholder: "10" },
                    ].map(({ label, field, placeholder }) => (
                      <div key={field}>
                        <label className="block text-xs text-neutral-400 mb-1">{label}</label>
                        <input type={["price","stock"].includes(field) ? "number" : "text"} value={v[field as keyof VariantForm]} onChange={(e) => updateVariant(i, field, e.target.value)} placeholder={placeholder} className="w-full h-9 px-3 text-sm border border-neutral-200 rounded-lg outline-none focus:border-neutral-900 bg-white transition-colors" />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Color Hex</label>
                      <div className="flex items-center gap-2 h-9 px-3 border border-neutral-200 rounded-lg bg-white">
                        <input type="color" value={v.colorHex} onChange={(e) => updateVariant(i, "colorHex", e.target.value)} className="w-5 h-5 cursor-pointer border-0 bg-transparent" />
                        <span className="text-xs text-neutral-500 font-mono">{v.colorHex}</span>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs text-neutral-400 mb-1">Image URLs (comma-separated)</label>
                      <input value={v.images} onChange={(e) => updateVariant(i, "images", e.target.value)} placeholder="https://..." className="w-full h-9 px-3 text-sm border border-neutral-200 rounded-lg outline-none focus:border-neutral-900 bg-white transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button type="button" onClick={() => router.push("/admin/products")} className="px-6 py-3 border border-neutral-200 text-sm font-medium rounded-xl hover:bg-neutral-50 transition-colors">Cancel</button>
            <motion.button type="submit" disabled={saving} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="flex-1 py-3 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors disabled:opacity-60">
              {saving ? "Saving..." : "Save Changes"}
            </motion.button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}