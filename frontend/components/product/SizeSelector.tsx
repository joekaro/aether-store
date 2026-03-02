"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProductVariant } from "@/types/product";

interface SizeSelectorProps {
  availableSizes: ProductVariant[];
  selectedSize: string | null;
  selectedColor: string | null;
  onSizeSelect: (size: string) => void;
}

export default function SizeSelector({
  availableSizes,
  selectedSize,
  selectedColor,
  onSizeSelect,
}: SizeSelectorProps) {
  const stockMessage = (() => {
    if (!selectedSize) return null;
    const stock = availableSizes.find((v) => v.size === selectedSize)?.stock ?? 0;
    if (stock === 0) return { text: "Out of stock", color: "text-red-400" };
    if (stock <= 2) return { text: `Only ${stock} left — order soon`, color: "text-amber-500" };
    if (stock <= 5) return { text: `Only ${stock} left in stock`, color: "text-amber-400" };
    return { text: "In stock and ready to ship", color: "text-emerald-600" };
  })();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
          Size
        </span>
        <button className="text-xs text-neutral-400 hover:text-neutral-700 underline underline-offset-2 transition-colors">
          Size Guide
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!selectedColor ? (
          <motion.p
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-neutral-400 italic h-10 flex items-center"
          >
            Select a color to view sizes
          </motion.p>
        ) : (
          <motion.div
            key="sizes"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {availableSizes.map((variant) => {
              const isSelected = selectedSize === variant.size;
              const isOOS = variant.stock === 0;
              const isLowStock = variant.stock > 0 && variant.stock <= 3;

              return (
                <motion.button
                  key={variant.size}
                  onClick={() => !isOOS && onSizeSelect(variant.size)}
                  whileHover={!isOOS ? { scale: 1.04, y: -1 } : {}}
                  whileTap={!isOOS ? { scale: 0.96 } : {}}
                  disabled={isOOS}
                  className={`
                    relative px-4 py-2.5 rounded-xl text-sm font-medium
                    border transition-all duration-200 min-w-[4rem] text-center
                    ${isSelected
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                      : isOOS
                      ? "bg-neutral-50 text-neutral-300 border-neutral-100 cursor-not-allowed"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-800 hover:text-neutral-900"}
                  `}
                >
                  {variant.size}

                  {/* OOS diagonal line */}
                  {isOOS && (
                    <span className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-xl">
                      <span className="w-[130%] h-px bg-neutral-200 absolute rotate-[-18deg]" />
                    </span>
                  )}

                  {/* Low stock dot */}
                  {isLowStock && !isSelected && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full border border-white" />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stock message */}
      <AnimatePresence>
        {stockMessage && (
          <motion.p
            key={stockMessage.text}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`text-xs font-medium ${stockMessage.color} flex items-center gap-1.5`}
          >
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${
              stockMessage.color.includes("emerald") ? "bg-emerald-500" :
              stockMessage.color.includes("amber") ? "bg-amber-400" : "bg-red-400"
            }`} />
            {stockMessage.text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}