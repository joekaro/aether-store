import { getProductsByCategory } from "@/lib/api";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export default async function SalePage() {
  const products = await getProductsByCategory("Sale");

  return (
    <CategoryPageLayout
      title="Sale"
      description="Premium gear. Reduced prices. Limited time only."
      banner="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80"
      products={products}
    />
  );
}