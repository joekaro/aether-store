export type ProductVariant = {
  id: string;
  color: string;
  colorHex: string;
  size: string;
  price: number;
  stock: number;
  images: string[];
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  basePrice: number;
  rating: number;
  reviewCount: number;
  variants: ProductVariant[];
};

export type CartItem = {
  productId: string;
  variantId: string;
  quantity: number;
};