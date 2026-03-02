"use client";

import { motion } from "framer-motion";

interface QuantitySelectorProps {
  quantity: number;
  maxQuantity: number;
  onQuantityChange: (value: number) => void;
  disabled?: boolean;
}

export default function QuantitySelector({
  quantity,
  maxQuantity,
  onQuantityChange,
  disabled = false,
}: QuantitySelectorProps) {
  const canDecrease = quantity > 1 && !disabled;
  const canIncrease = quantity < maxQuantity && !disabled;

  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
        Quantity
      </span>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-xl border border-neutral-200 overflow-hidden bg-white">

          <motion.button
            whileTap={canDecrease ? { scale: 0.85 } : {}}
            onClick={() => canDecrease && onQuantityChange(quantity - 1)}
            disabled={!canDecrease}
            className={`
              w-11 h-11 flex items-center justify-center transition-colors duration-150
              ${canDecrease
                ? "text-neutral-600 hover:bg-neutral-50 active:bg-neutral-100"
                : "text-neutral-300 cursor-not-allowed"}
            `}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" strokeLinecap="round">
              <path d="M5 12h14" />
            </svg>
          </motion.button>

          <motion.div
            key={quantity}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="w-12 h-11 flex items-center justify-center border-x border-neutral-200"
          >
            <span className="text-sm font-semibold text-neutral-900">{quantity}</span>
          </motion.div>

          <motion.button
            whileTap={canIncrease ? { scale: 0.85 } : {}}
            onClick={() => canIncrease && onQuantityChange(quantity + 1)}
            disabled={!canIncrease}
            className={`
              w-11 h-11 flex items-center justify-center transition-colors duration-150
              ${canIncrease
                ? "text-neutral-600 hover:bg-neutral-50 active:bg-neutral-100"
                : "text-neutral-300 cursor-not-allowed"}
            `}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </motion.button>
        </div>

        {!disabled && maxQuantity <= 5 && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-neutral-400"
          >
            Max {maxQuantity} per order
          </motion.span>
        )}
      </div>
    </div>
  );
}