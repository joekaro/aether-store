"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Your Cart</h1>
        <p className="text-sm text-neutral-400 mb-10">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 gap-5 text-center">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center">
              <svg className="w-9 h-9 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-neutral-900">Your cart is empty</p>
              <p className="text-sm text-neutral-400 mt-1">Browse our collection and add something you love</p>
            </div>
            <Link href="/" className="px-8 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Items */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.variantId}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-5 p-4 rounded-2xl border border-neutral-100 bg-neutral-50"
                  >
                    <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-white">
                      <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">{item.productName}</p>
                          <p className="text-xs text-neutral-500 mt-0.5">{item.color} · {item.size}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.variantId)} className="text-neutral-300 hover:text-red-400 transition-colors shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-neutral-200 rounded-xl overflow-hidden bg-white">
                          <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="w-9 h-9 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" strokeLinecap="round"><path d="M5 12h14" /></svg>
                          </button>
                          <span className="w-10 text-center text-sm font-semibold text-neutral-900 border-x border-neutral-200">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="w-9 h-9 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                          </button>
                        </div>
                        <p className="text-base font-bold text-neutral-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <button onClick={clearCart} className="text-xs text-neutral-400 hover:text-red-400 transition-colors text-left mt-2">
                Remove all items
              </button>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 rounded-2xl p-6 sticky top-24">
                <h2 className="text-base font-bold text-neutral-900 mb-5">Order Summary</h2>
                <div className="flex flex-col gap-3 text-sm mb-5">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span className="text-emerald-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Tax (est.)</span>
                    <span>${(totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                </div>
                <div className="h-px bg-neutral-200 mb-4" />
                <div className="flex justify-between text-base font-bold text-neutral-900 mb-6">
                  <span>Total</span>
                  <span>${(totalPrice * 1.08).toFixed(2)}</span>
                </div>
                <Link href="/checkout" className="block w-full py-4 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors text-center">
                  Proceed to Checkout
                </Link>
                <Link href="/" className="block text-center text-sm text-neutral-400 hover:text-neutral-700 transition-colors mt-3">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}