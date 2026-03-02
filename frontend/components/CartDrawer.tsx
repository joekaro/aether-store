"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <h2 className="text-lg font-bold text-neutral-900">
                Your Cart {totalItems > 0 && <span className="text-neutral-400 font-normal text-sm">({totalItems} items)</span>}
              </h2>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors text-neutral-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Your cart is empty</p>
                    <p className="text-xs text-neutral-400 mt-1">Add something to get started</p>
                  </div>
                  <button onClick={onClose} className="mt-2 px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-colors">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.variantId}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4 p-3 rounded-2xl border border-neutral-100 bg-neutral-50"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-white">
                        <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-neutral-900 truncate">{item.productName}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.color} · {item.size}</p>
                        <p className="text-sm font-bold text-neutral-900 mt-1">${item.price}</p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-colors text-neutral-600"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round"><path d="M5 12h14" /></svg>
                          </button>
                          <span className="text-sm font-semibold text-neutral-900 w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-colors text-neutral-600"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.variantId)}
                        className="self-start text-neutral-300 hover:text-red-400 transition-colors p-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-neutral-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-neutral-500">Subtotal</span>
                  <span className="text-lg font-bold text-neutral-900">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-neutral-400 mb-4 text-center">Shipping & taxes calculated at checkout</p>
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="block w-full h-13 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl text-center hover:bg-neutral-800 transition-colors"
                >
                  Checkout — ${totalPrice.toFixed(2)}
                </Link>
                <button onClick={onClose} className="block w-full text-center text-sm text-neutral-400 hover:text-neutral-700 transition-colors mt-3">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}