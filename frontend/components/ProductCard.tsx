"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: number;
  badge?: string;
}

export default function ProductCard({
  id,
  name,
  brand,
  price,
  originalPrice,
  image,
  colors,
  badge,
}: ProductCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link href={`/product/${id}`} className="group block">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-3">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {badge && (
            <span className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-lg ${
              badge === "Sale" ? "bg-rose-500" :
              badge === "New" ? "bg-emerald-600" :
              badge === "Best Seller" ? "bg-amber-500" :
              "bg-neutral-900"
            }`}>
              {badge}
            </span>
          )}
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">{brand}</p>
          <p className="text-sm font-semibold text-neutral-900 mt-0.5">{name}</p>
          <p className="text-xs text-neutral-400 mt-0.5">{colors} color{colors !== 1 ? "s" : ""}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-bold text-neutral-900">${price}</span>
            {originalPrice && (
              <span className="text-xs text-neutral-400 line-through">${originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}