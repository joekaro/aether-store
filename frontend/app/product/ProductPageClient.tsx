"use client";

import { useMemo } from "react";
import { Product } from "@/types/product";
import { useVariantSelection } from "@/hooks/useVariantSelection";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ColorSelector from "@/components/product/ColorSelector";
import SizeSelector from "@/components/product/SizeSelector";
import QuantitySelector from "@/components/product/QuantitySelector";
import AddToCartButton from "@/components/product/AddToCartButton";
import StickyCartBar from "@/components/product/StickyCartBar";
import { motion } from "framer-motion";

interface ProductPageClientProps {
  product: Product;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const {
    selectedColor,
    selectedSize,
    selectedVariant,
    availableColors,
    availableSizes,
    displayPrice,
    inStock,
    quantity,
    maxQuantity,
    handleColorSelect,
    handleSizeSelect,
    handleQuantityChange,
  } = useVariantSelection(product);

  const { addToCart } = useCart();
  const { toggle, isWishlisted } = useWishlist();

  // Update gallery as soon as a color is picked — don't wait for size
  const activeImages = useMemo(() => {
    if (selectedVariant?.images?.length) return selectedVariant.images;
    if (selectedColor) {
      const colorVariant = product?.variants?.find((v) => v.color === selectedColor);
      if (colorVariant?.images?.length) return colorVariant.images;
    }
    return product?.variants?.[0]?.images ?? [];
  }, [selectedVariant, selectedColor, product?.variants]);

  // One thumbnail per unique color for the left panel
  const colorThumbs = useMemo(() => {
    const seen = new Set<string>();
    return (product?.variants ?? [])
      .filter((v) => {
        if (seen.has(v.color)) return false;
        seen.add(v.color);
        return true;
      })
      .map((v) => ({ color: v.color, colorHex: v.colorHex, image: v.images?.[0] ?? "" }));
  }, [product?.variants]);

  const variantSelected = !!selectedVariant;
  const outOfStock = variantSelected && !inStock;
  const addToCartDisabled = !variantSelected || outOfStock;
  const wishlisted = isWishlisted(product?.id ?? "");

  function handleAddToCart() {
    if (!selectedVariant) return;
    addToCart({
      productId: product?.id ?? "",
      variantId: selectedVariant.id,
      productName: product?.name ?? "",
      color: selectedVariant.color,
      size: selectedVariant.size,
      price: selectedVariant.price,
      image: selectedVariant?.images?.[0] ?? "",
      quantity,
    });
  }

  function handleWishlist() {
    toggle({
      productId: product?.id ?? "",
      productName: product?.name ?? "",
      brand: product?.brand ?? "",
      price: displayPrice ?? 0,
      image: product?.variants?.[0]?.images[0] ?? "",
    });
  }

  function renderStars(rating: number) {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      const partial = !filled && i < rating;
      return (
        <span key={i} className="relative inline-block w-4 h-4">
          <svg className="w-4 h-4 text-neutral-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {(filled || partial) && (
            <span className="absolute inset-0 overflow-hidden" style={{ width: filled ? "100%" : `${(rating % 1) * 100}%` }}>
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          )}
        </span>
      );
    });
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-28 lg:pb-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400 mb-8 overflow-x-auto whitespace-nowrap pb-1">
          <a href="/" className="hover:text-neutral-700 transition-colors shrink-0">Home</a>
          <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          <a href="#" className="hover:text-neutral-700 transition-colors shrink-0">{product?.category ?? ""}</a>
          <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          <span className="text-neutral-600 font-medium truncate">{product?.name ?? ""}</span>
        </nav>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-24">

          {/* LEFT — Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="w-full lg:sticky lg:top-24 lg:self-start"
          >
            <ProductGallery images={activeImages} productName={product?.name ?? ""} colorThumbs={colorThumbs} selectedColor={selectedColor ?? undefined} onColorSelect={handleColorSelect} />
          </motion.div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">

            {/* Brand + Mobile Wishlist */}
            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.05 }} className="flex items-center justify-between">
              <p className="text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase">{product?.brand ?? ""}</p>
              <motion.button
                onClick={handleWishlist}
                whileTap={{ scale: 0.88 }}
                className={`lg:hidden w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                  wishlisted ? "bg-rose-50 border-rose-200 text-rose-500" : "border-neutral-200 text-neutral-400 hover:text-rose-500 hover:border-rose-200"
                }`}
              >
                <svg className="w-4 h-4" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Title */}
            <motion.h1 {...fadeUp} transition={{ duration: 0.4, delay: 0.1 }} className="text-2xl sm:text-3xl xl:text-4xl font-bold text-neutral-900 leading-[1.15] tracking-tight">
              {product?.name ?? ""}
            </motion.h1>

            {/* Rating */}
            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.15 }} className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-0.5">{renderStars(product?.rating ?? 0)}</div>
              <span className="text-sm font-semibold text-neutral-800">{product?.rating ?? 0}</span>
              <span className="text-neutral-300 text-sm">·</span>
              <a href="#" className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors underline underline-offset-2">
                {product?.reviewCount?.toLocaleString() ?? "0"} reviews
              </a>
            </motion.div>

            {/* Price */}
            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.2 }} className="flex items-baseline gap-3">
              <motion.span key={displayPrice} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="text-3xl font-bold text-neutral-900">
                ${displayPrice}
              </motion.span>
              {selectedVariant && selectedVariant.price !== (product?.basePrice ?? 0) && (
                <span className="text-base text-neutral-400 line-through font-medium">${product?.basePrice ?? 0}</span>
              )}
              {selectedVariant && selectedVariant.price > (product?.basePrice ?? 0) && (
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">Premium color</span>
              )}
            </motion.div>

            <div className="h-px bg-neutral-100" />

            {/* Description */}
            <motion.p {...fadeUp} transition={{ duration: 0.4, delay: 0.25 }} className="text-sm text-neutral-500 leading-relaxed">
              {product?.description ?? ""}
            </motion.p>

            <div className="h-px bg-neutral-100" />

            {/* Color */}
            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.3 }}>
              <ColorSelector availableColors={availableColors} selectedColor={selectedColor} onColorSelect={handleColorSelect} />
            </motion.div>

            {/* Size */}
            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.35 }}>
              <SizeSelector availableSizes={availableSizes} selectedSize={selectedSize} selectedColor={selectedColor} onSizeSelect={handleSizeSelect} />
            </motion.div>

            <div className="h-px bg-neutral-100" />

            {/* Desktop: Quantity + Cart */}
            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.4 }} className="hidden sm:flex flex-col gap-5">
              <QuantitySelector quantity={quantity} maxQuantity={maxQuantity} onQuantityChange={handleQuantityChange} disabled={!variantSelected || outOfStock} />
              <AddToCartButton onAddToCart={handleAddToCart} onWishlist={handleWishlist} disabled={addToCartDisabled} outOfStock={outOfStock} variantSelected={variantSelected} />
            </motion.div>

            {/* Mobile: Quantity only */}
            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.4 }} className="sm:hidden">
              <QuantitySelector quantity={quantity} maxQuantity={maxQuantity} onQuantityChange={handleQuantityChange} disabled={!variantSelected || outOfStock} />
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile Sticky Bar */}
      <StickyCartBar productName={product?.name ?? ""} price={displayPrice} onAddToCart={handleAddToCart} disabled={addToCartDisabled} outOfStock={outOfStock} variantSelected={variantSelected} />
    </div>
  );
}