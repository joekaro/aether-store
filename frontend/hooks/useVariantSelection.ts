"use client";

import { useState, useMemo } from "react";
import { Product, ProductVariant } from "@/types/product";

export function useVariantSelection(product: Product) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const variants = product?.variants ?? [];

  const availableColors = useMemo(() => {
    const seen = new Set<string>();
    return variants.filter((v) => {
      if (seen.has(v.color)) return false;
      seen.add(v.color);
      return true;
    });
  }, [variants]);

  const availableSizes = useMemo(() => {
    if (!selectedColor) return [];
    return variants.filter((v) => v.color === selectedColor);
  }, [variants, selectedColor]);

  const selectedVariant: ProductVariant | null = useMemo(() => {
    if (!selectedColor || !selectedSize) return null;
    return variants.find(
      (v) => v.color === selectedColor && v.size === selectedSize
    ) ?? null;
  }, [variants, selectedColor, selectedSize]);

  const displayPrice = selectedVariant?.price ?? product?.basePrice ?? 0;
  const inStock = (selectedVariant?.stock ?? 0) > 0;
  const maxQuantity = selectedVariant?.stock ?? 1;

  function handleColorSelect(color: string) {
    setSelectedColor(color);
    setSelectedSize(null);
    setQuantity(1);
  }

  function handleSizeSelect(size: string) {
    setSelectedSize(size);
    setQuantity(1);
  }

  function handleQuantityChange(value: number) {
    setQuantity(Math.min(Math.max(1, value), maxQuantity));
  }

  return {
    selectedColor,
    selectedSize,
    selectedVariant,
    availableColors,
    availableSizes,
    displayPrice,
    inStock,
    maxQuantity,
    quantity,
    handleColorSelect,
    handleSizeSelect,
    handleQuantityChange,
  };
}