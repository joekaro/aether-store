"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyCartBarProps {
  productName: string;
  price: number;
  onAddToCart: () => void;
  disabled: boolean;
  outOfStock: boolean;
  variantSelected: boolean;
}

export default function StickyCartBar({
  productName,
  price,
  onAddToCart,
  disabled,
  outOfStock,
  variantSelected,
}: StickyCartBarProps) {
  const [added, setAdded] = useState(false);

  function handleClick() {
    if (disabled) return;
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function getLabel() {
    if (outOfStock) return "Out of Stock";
    if (!variantSelected) return "Select a Size First";
    if (added) return "Added!";
    return "Add to Cart";
  }

  const isActive = variantSelected && !outOfStock;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-md border-t border-neutral-200" />

      <div className="relative px-4 py-3 safe-area-pb">
        <div className="flex items-center gap-3 max-w-lg mx-auto">

          {/* Price block */}
          <div className="flex flex-col justify-center shrink-0">
            <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider leading-none mb-0.5">
              Price
            </span>
            <motion.span
              key={price}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-bold text-neutral-900"
            >
              ${price}
            </motion.span>
          </div>

          {/* CTA */}
          <motion.button
            onClick={handleClick}
            disabled={disabled}
            whileTap={isActive ? { scale: 0.97 } : {}}
            className={`
              flex-1 h-12 rounded-xl text-sm font-semibold
              tracking-wide transition-all duration-300 overflow-hidden
              ${outOfStock
                ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                : !variantSelected
                ? "bg-neutral-900 text-white/40 cursor-not-allowed"
                : added
                ? "bg-emerald-600 text-white"
                : "bg-neutral-900 text-white shadow-lg shadow-neutral-900/25"}
            `}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={getLabel()}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-center gap-2"
              >
                {added && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
                {getLabel()}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}