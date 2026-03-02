"use client";

import { motion } from "framer-motion";
import { ProductVariant } from "@/types/product";

interface ColorSelectorProps {
  availableColors: ProductVariant[];
  selectedColor: string | null;
  onColorSelect: (color: string) => void;
}

export default function ColorSelector({
  availableColors,
  selectedColor,
  onColorSelect,
}: ColorSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
          Color
        </span>
        <AnimatedColorLabel color={selectedColor} />
      </div>

      <div className="flex items-center gap-3">
        {availableColors.map((variant) => {
          const isSelected = selectedColor === variant.color;
          const isLight =
            variant.colorHex === "#f5f5f5" ||
            variant.colorHex === "#f0f0f0" ||
            variant.colorHex === "#ffffff";

          return (
            <motion.button
              key={variant.color}
              onClick={() => onColorSelect(variant.color)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.93 }}
              title={variant.color}
              aria-label={`Select color: ${variant.color}`}
              className={`
                relative w-8 h-8 rounded-full transition-all duration-200
                ${isSelected
                  ? "ring-2 ring-neutral-900 ring-offset-2"
                  : "ring-1 ring-neutral-200 hover:ring-neutral-400 ring-offset-1"}
                ${isLight ? "border border-neutral-200" : ""}
              `}
              style={{ backgroundColor: variant.colorHex }}
            >
              {isSelected && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center rounded-full"
                >
                  <svg
                    className={`w-3.5 h-3.5 ${isLight ? "text-neutral-800" : "text-white"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.8}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function AnimatedColorLabel({ color }: { color: string | null }) {
  if (!color) return null;
  return (
    <motion.span
      key={color}
      initial={{ opacity: 0, x: 6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="text-sm font-medium text-neutral-700"
    >
      {color}
    </motion.span>
  );
}