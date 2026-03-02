"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockProduct } from "@/data/mockProduct";
import Link from "next/link";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const suggestions = ["Runner Pro", "Midnight Black", "Cloud White", "Ocean Blue", "Training Shoes", "Sale"];

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const results = query.length > 1
    ? mockProduct.variants
        .filter((v) =>
          mockProduct.name.toLowerCase().includes(query.toLowerCase()) ||
          v.color.toLowerCase().includes(query.toLowerCase()) ||
          v.size.toLowerCase().includes(query.toLowerCase())
        )
        .filter((v, i, arr) => arr.findIndex((x) => x.color === v.color) === i)
        .slice(0, 4)
    : [];

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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-xl z-50 px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100">

              {/* Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-100">
                <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="6" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, colors, sizes..."
                  className="flex-1 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none bg-transparent"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="text-neutral-400 hover:text-neutral-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <button onClick={onClose} className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors border border-neutral-200 rounded-lg px-2 py-1">
                  ESC
                </button>
              </div>

              {/* Results */}
              <div className="px-5 py-4">
                {query.length === 0 && (
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Popular Searches</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => setQuery(s)}
                          className="px-3 py-1.5 text-sm text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {query.length > 1 && results.length === 0 && (
                  <p className="text-sm text-neutral-400 text-center py-4">No results for &quot;{query}&quot;</p>
                )}

                {results.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Results</p>
                    <div className="flex flex-col gap-2">
                      {results.map((variant) => (
                        <Link
                          key={variant.id}
                          href="/product"
                          onClick={onClose}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                            <img src={variant.images[0]} alt={variant.color} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-neutral-900">{mockProduct.name}</p>
                            <p className="text-xs text-neutral-500">{variant.color} · from ${variant.price}</p>
                          </div>
                          <svg className="w-4 h-4 text-neutral-300 ml-auto" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}