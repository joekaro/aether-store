"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

type Step = "shipping" | "review";

interface ShippingForm {
  firstName: string; lastName: string; email: string; phone: string;
  address: string; city: string; state: string; zip: string; country: string;
}

const emptyShipping: ShippingForm = {
  firstName: "", lastName: "", email: "", phone: "",
  address: "", city: "", state: "", zip: "", country: "Nigeria",
};

function StepIndicator({ current }: { current: Step }) {
  const steps = [{ key: "shipping", label: "Shipping" }, { key: "review", label: "Review & Pay" }];
  const idx = steps.findIndex((s) => s.key === current);
  return (
    <div className="flex items-center gap-2 mb-10">
      {steps.map((step, i) => (
        <div key={step.key} className="flex items-center gap-2">
          <div className={`flex items-center gap-2 ${i <= idx ? "text-neutral-900" : "text-neutral-400"}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i <= idx ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-400"}`}>
              {i < idx ? <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> : i + 1}
            </div>
            <span className="text-sm font-medium hidden sm:block">{step.label}</span>
          </div>
          {i < steps.length - 1 && <div className={`h-px w-8 sm:w-16 transition-all ${i < idx ? "bg-neutral-900" : "bg-neutral-200"}`} />}
        </div>
      ))}
    </div>
  );
}

function InputField({ label, value, onChange, type = "text", placeholder, required = true, span = false }: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; required?: boolean; span?: boolean;
}) {
  return (
    <div className={span ? "sm:col-span-2" : ""}>
      <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">{label}</label>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)}
        required={required} placeholder={placeholder}
        className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white"
      />
    </div>
  );
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { user, token } = useAuth();
  const [step, setStep] = useState<Step>("shipping");
  const [shipping, setShipping] = useState<ShippingForm>(() => ({
    ...emptyShipping,
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
  }));
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shippingCost = shippingMethod === "express" ? 14.99 : totalPrice >= 100 ? 0 : 6.99;
  const tax = parseFloat((totalPrice * 0.08).toFixed(2));
  const total = parseFloat((totalPrice + shippingCost + tax).toFixed(2));

  function updateShipping(field: keyof ShippingForm, value: string) {
    setShipping((p) => ({ ...p, [field]: value }));
  }

  function handleShippingSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("review");
  }

  async function handlePlaceOrder() {
    setError("");
    setLoading(true);
    try {
      // 1. Create order in backend
      const orderRes = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.productId, variantId: i.variantId, quantity: i.quantity,
          })),
          shippingAddress: shipping,
          shippingMethod,
        }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.message || "Failed to create order");

      const order = orderData.order;

      // 2. Initialize Paystack payment
      const payRes = await fetch(`${API_URL}/payment/initialize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderNumber: order.orderNumber, email: shipping.email }),
      });

      const payData = await payRes.json();
      if (!payRes.ok) throw new Error(payData.message || "Failed to initialize payment");

      // 3. Clear cart and redirect to Paystack
      clearCart();
      window.location.href = payData.authorization_url;

    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  if (items.length === 0 && step !== "review") {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-4">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <p className="text-lg font-bold text-neutral-900">Your cart is empty</p>
          <Link href="/" className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 pb-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-neutral-900">Checkout</h1>
          {!user && (
            <p className="text-sm text-neutral-500 mt-1">
              Have an account?{" "}
              <Link href="/login" className="font-semibold text-neutral-900 hover:underline">Sign in</Link>
              {" "}to track your order
            </p>
          )}
        </div>

        <StepIndicator current={step} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Forms */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">

              {/* STEP 1 — Shipping */}
              {step === "shipping" && (
                <motion.div key="shipping" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <form onSubmit={handleShippingSubmit} className="bg-white rounded-2xl border border-neutral-100 p-6">
                    <h2 className="text-sm font-bold text-neutral-900 mb-5">Shipping Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <InputField label="First Name" value={shipping.firstName} onChange={(v) => updateShipping("firstName", v)} placeholder="John" />
                      <InputField label="Last Name" value={shipping.lastName} onChange={(v) => updateShipping("lastName", v)} placeholder="Doe" />
                      <InputField label="Email" value={shipping.email} onChange={(v) => updateShipping("email", v)} type="email" placeholder="you@example.com" span />
                      <InputField label="Phone" value={shipping.phone} onChange={(v) => updateShipping("phone", v)} type="tel" placeholder="+234 801 234 5678" required={false} />
                      <InputField label="Address" value={shipping.address} onChange={(v) => updateShipping("address", v)} placeholder="123 Victoria Island" span />
                      <InputField label="City" value={shipping.city} onChange={(v) => updateShipping("city", v)} placeholder="Lagos" />
                      <InputField label="State" value={shipping.state} onChange={(v) => updateShipping("state", v)} placeholder="Lagos" />
                      <InputField label="ZIP / Postal Code" value={shipping.zip} onChange={(v) => updateShipping("zip", v)} placeholder="100001" />
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">Country</label>
                        <select value={shipping.country} onChange={(e) => updateShipping("country", e.target.value)} className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 bg-white transition-colors">
                          {["Nigeria", "Ghana", "Kenya", "South Africa", "United States", "United Kingdom"].map((c) => <option key={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Shipping Method */}
                    <h2 className="text-sm font-bold text-neutral-900 mb-3">Shipping Method</h2>
                    <div className="flex flex-col gap-3 mb-6">
                      {[
                        { key: "standard", label: "Standard Shipping", sublabel: "5–7 business days", price: totalPrice >= 100 ? "Free" : "$6.99" },
                        { key: "express",  label: "Express Shipping",  sublabel: "1–3 business days", price: "$14.99" },
                      ].map((m) => (
                        <label key={m.key} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${shippingMethod === m.key ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"}`}>
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${shippingMethod === m.key ? "border-neutral-900" : "border-neutral-300"}`}>
                              {shippingMethod === m.key && <div className="w-2 h-2 rounded-full bg-neutral-900" />}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-neutral-900">{m.label}</p>
                              <p className="text-xs text-neutral-400">{m.sublabel}</p>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-neutral-900">{m.price}</p>
                          <input type="radio" name="shippingMethod" value={m.key} checked={shippingMethod === m.key as "standard" | "express"} onChange={() => setShippingMethod(m.key as "standard" | "express")} className="sr-only" />
                        </label>
                      ))}
                    </div>

                    <button type="submit" className="w-full h-12 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors">
                      Continue to Review
                    </button>
                  </form>
                </motion.div>
              )}

              {/* STEP 2 — Review & Pay */}
              {step === "review" && (
                <motion.div key="review" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <div className="bg-white rounded-2xl border border-neutral-100 p-6 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-sm font-bold text-neutral-900">Shipping To</h2>
                      <button onClick={() => setStep("shipping")} className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors">Edit</button>
                    </div>
                    <div className="text-sm text-neutral-600 space-y-0.5">
                      <p className="font-semibold text-neutral-900">{shipping.firstName} {shipping.lastName}</p>
                      <p>{shipping.address}</p>
                      <p>{shipping.city}, {shipping.state} {shipping.zip}</p>
                      <p>{shipping.country}</p>
                      <p className="text-neutral-400">{shipping.email}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-neutral-100 p-6">
                    <h2 className="text-sm font-bold text-neutral-900 mb-4">Order Items</h2>
                    <div className="flex flex-col gap-4 mb-6">
                      {items.map((item) => (
                        <div key={item.variantId} className="flex items-center gap-4">
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

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-4">
                        {error}
                      </div>
                    )}

                    <motion.button
                      onClick={handlePlaceOrder}
                      disabled={loading}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-12 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Pay ${total.toFixed(2)} with Paystack
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                    <p className="text-center text-xs text-neutral-400 mt-3 flex items-center justify-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                      Secured by Paystack — test card: 4084 0840 8408 4081
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right — Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-neutral-100 p-6 sticky top-24">
              <h2 className="text-sm font-bold text-neutral-900 mb-5">Order Summary</h2>
              <div className="flex flex-col gap-3 mb-5">
                {items.map((item) => (
                  <div key={item.variantId} className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-neutral-100">
                        {item.image && <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />}
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-neutral-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-neutral-900 truncate">{item.productName}</p>
                      <p className="text-xs text-neutral-400">{item.color} · {item.size}</p>
                    </div>
                    <p className="text-xs font-bold text-neutral-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-neutral-100 pt-4 flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-neutral-500"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
                <div className="flex justify-between text-neutral-500">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? <span className="text-emerald-600 font-semibold">Free</span> : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-neutral-500"><span>Tax (8%)</span><span>${tax.toFixed(2)}</span></div>
                <div className="flex justify-between font-bold text-neutral-900 text-base border-t border-neutral-100 pt-3 mt-1">
                  <span>Total</span><span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}