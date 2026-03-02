import { getProductById } from "@/lib/api";
import ProductPageClient from "./ProductPageClient";

export default async function ProductPage() {
  const product = await getProductById("prod_001");
  return <ProductPageClient product={product} />;
}