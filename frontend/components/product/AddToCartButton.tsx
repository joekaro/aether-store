"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AddToCartButtonProps {
  onAddToCart: () => void;
  onWishlist: () => void;
  disabled: boolean;
  outOfStock: boolean;
  variantSelected: boolean;
}

export default function AddToCartButton({
  onAddToCart,
  onWishlist,
  disabled,
  outOfStock,
  variantSelected,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  function handleAddToCart() {
    if (disabled) return;
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  function handleWishlist() {
    onWishlist();
    setWishlisted((prev) => !prev);
  }

  function getLabel() {
    if (outOfStock) return "Out of Stock";
    if (!variantSelected) return "Select Size to Continue";
    if (added) return "Added to Cart";
    return "Add to Cart";
  }

  const isActive = variantSelected && !outOfStock;

  return (
    <div className="flex flex-col gap-4">

      {/* Buttons Row */}
      <div className="flex gap-3">

        {/* CTA Button */}
        <motion.button
          onClick={handleAddToCart}
          disabled={disabled}
          whileHover={isActive && !added ? { scale: 1.015 } : {}}
          whileTap={isActive && !added ? { scale: 0.985 } : {}}
          className={`
            relative flex-1 h-14 rounded-2xl text-sm font-semibold
            tracking-wide overflow-hidden transition-all duration-300
            ${outOfStock
              ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
              : !variantSelected
              ? "bg-neutral-900 text-neutral-500 cursor-not-allowed"
              : added
              ? "bg-emerald-600 text-white"
              : "bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg shadow-neutral-900/20"}
          `}
        >
          {/* Shimmer effect on active hover */}
          {isActive && !added && (
            <span className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <span className="absolute inset-0 translate-x-[-100%] hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700" />
            </span>
          )}

          <AnimatePresence mode="wait">
            <motion.span
              key={getLabel()}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              {added ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : isActive ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              ) : null}
              {getLabel()}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Wishlist */}
        <motion.button
          onClick={handleWishlist}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.93 }}
          className={`
            w-14 h-14 rounded-2xl border flex items-center justify-center
            transition-all duration-200
            ${wishlisted
              ? "bg-rose-50 border-rose-200 text-rose-500"
              : "border-neutral-200 text-neutral-500 hover:border-rose-200 hover:text-rose-400 hover:bg-rose-50"}
          `}
          aria-label="Add to wishlist"
        >
          <svg
            className="w-5 h-5"
            fill={wishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.button>
      </div>

      {/* Helper hint */}
      <AnimatePresence>
        {!variantSelected && !outOfStock && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 0.6, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-neutral-400 text-center"
          >
            Select a color and size to continue
          </motion.p>
        )}
      </AnimatePresence>

      {/* Trust signals */}
      <div className="grid grid-cols-1 gap-2 pt-1">
        {[
          {
            icon: "M5 12h14M12 5l7 7-7 7",
            text: "Free shipping on orders over $100",
          },
          {
            icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
            text: "Free 30-day returns & exchanges",
          },
          {
            icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            text: "2-year manufacturer warranty",
          },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-500">
            <svg className="w-3.5 h-3.5 shrink-0 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.icon} />
            </svg>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Payment methods */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs text-neutral-400">Accepted payments:</span>
        <div className="flex items-center gap-1.5">
          {["VISA", "MC", "AMEX", "PayPal"].map((method) => (
            <span
              key={method}
              className="text-[10px] font-bold text-neutral-500 border border-neutral-200 rounded px-1.5 py-0.5 bg-neutral-50"
            >
              {method}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}