"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ColorThumb {
  color: string;
  colorHex: string;
  image: string;
}

interface ProductGalleryProps {
  images: string[];
  productName: string;
  colorThumbs?: ColorThumb[];
  selectedColor?: string;
  onColorSelect?: (color: string) => void;
}

export default function ProductGallery({
  images,
  productName,
  colorThumbs = [],
  selectedColor,
  onColorSelect,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Reset to first image whenever the color changes
  useEffect(() => {
    setActiveIndex(0);
    setDirection(0);
  }, [images]);

  function handleThumbnailClick(index: number) {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  const safeIndex = Math.min(activeIndex, images.length - 1);
  const hasMultipleColors = colorThumbs.length > 1;

  return (
    <div className="flex flex-row gap-3 sm:gap-4 w-full">

      {/* Left Panel */}
      <div className="flex flex-col gap-2 sm:gap-3 w-16 sm:w-20 shrink-0">

        {/* Color thumbnails — one per unique color, clicking switches color */}
        {hasMultipleColors && colorThumbs.map((ct) => (
          <motion.button
            key={ct.color}
            onClick={() => onColorSelect?.(ct.color)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            title={ct.color}
            className={`
              relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden
              border-2 transition-all duration-200
              ${selectedColor === ct.color
                ? "border-neutral-900 shadow-sm opacity-100"
                : "border-neutral-200 opacity-50 hover:opacity-80 hover:border-neutral-400"}
            `}
          >
            {ct.image ? (
              <img src={ct.image} alt={ct.color} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full" style={{ backgroundColor: ct.colorHex }} />
            )}
            {selectedColor === ct.color && (
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900" />
            )}
          </motion.button>
        ))}

        {/* Divider between color thumbs and image thumbs */}
        {hasMultipleColors && images.length > 1 && (
          <div className="w-8 sm:w-10 mx-auto h-px bg-neutral-200 my-1" />
        )}

        {/* Image thumbnails — all images of current selected color */}
        {images.map((img, index) => (
          <motion.button
            key={`${img}-${index}`}
            onClick={() => handleThumbnailClick(index)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`
              relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden
              border-2 transition-all duration-200
              ${safeIndex === index
                ? "border-neutral-900 shadow-sm opacity-100"
                : "border-neutral-200 opacity-55 hover:opacity-85 hover:border-neutral-300"}
            `}
          >
            <img
              src={img}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Main Image */}
      <div
        className="relative flex-1 rounded-2xl overflow-hidden bg-neutral-50 cursor-zoom-in select-none"
        style={{ aspectRatio: "1 / 1" }}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={`${safeIndex}-${images[safeIndex]}`}
            src={images[safeIndex]}
            alt={productName}
            className="w-full h-full object-cover"
            style={
              isZoomed
                ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%`, transform: "scale(1.6)", transition: "transform 0.1s ease" }
                : { transformOrigin: "center center", transform: "scale(1)", transition: "transform 0.3s ease" }
            }
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            draggable={false}
          />
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />

        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-neutral-600 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm pointer-events-none">
          {safeIndex + 1} / {images.length}
        </div>

        {!isZoomed && (
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-neutral-500 text-[10px] font-medium px-2 py-1 rounded-full shadow-sm pointer-events-none flex items-center gap-1 opacity-70">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="6" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            Hover to zoom
          </div>
        )}
      </div>
    </div>
  );
}