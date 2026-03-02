"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useWishlist } from "@/context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function WishlistPage() {
  const { items, toggle } = useWishlist();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Wishlist</h1>
        <p className="text-sm text-neutral-400 mb-10">{items.length} saved item{items.length !== 1 ? "s" : ""}</p>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 gap-5 text-center">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center">
              <svg className="w-9 h-9 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-neutral-900">No saved items yet</p>
              <p className="text-sm text-neutral-400 mt-1">Tap the heart icon on any product to save it here</p>
            </div>
            <Link href="/" className="px-8 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors">
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.productId}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-3">
                    <img src={item.image} alt={item.productName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <button
                      onClick={() => toggle(item)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-rose-500 hover:scale-110 transition-transform"
                    >
                      <svg className="w-4 h-4" fill="currentColor" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">{item.brand}</p>
                  <p className="text-sm font-semibold text-neutral-900 mt-0.5">{item.productName}</p>
                  <p className="text-sm font-bold text-neutral-900 mt-1">${item.price}</p>
                  <Link
                    href="/product"
                    className="mt-3 block w-full py-2.5 bg-neutral-900 text-white text-xs font-semibold rounded-xl text-center hover:bg-neutral-800 transition-colors"
                  >
                    View Product
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}