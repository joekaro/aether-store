"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function handleThumbnailClick(index: number) {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  return (
    <div className="flex flex-row gap-4 w-full">

      <div className="flex flex-col gap-3 w-20 shrink-0">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`
              relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200
              ${activeIndex === index
                ? "border-neutral-900 opacity-100"
                : "border-transparent opacity-50 hover:opacity-80"}
            `}
          >
            <img
              src={img}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden bg-neutral-100">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={productName}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          />
        </AnimatePresence>

        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-neutral-700 text-xs font-medium px-3 py-1.5 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

    </div>
  );
}