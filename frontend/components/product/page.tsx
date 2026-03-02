import { getProductById } from "@/lib/api";
import ProductPageClient from "./ProductPageClient";

// ─────────────────────────────────────────────
// Server Component — fetches product data
// Phase 2: getProductById will call real API
// ─────────────────────────────────────────────

export default async function ProductPage() {
  const product = await getProductById("prod_001");

  return <ProductPageClient product={product} />;
}