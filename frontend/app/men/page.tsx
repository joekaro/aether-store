export const dynamic = "force-dynamic";
import { getAllProducts } from "@/lib/api";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export default async function MenPage() {
  const all = await getAllProducts();
  // Men's page shows all products (in real app filter by gender tag)
  const products = all.filter((p) =>
    ["Men", "Running", "Training"].includes(p.category)
  );

  return (
    <CategoryPageLayout
      title="Men's Collection"
      description="Performance footwear engineered for the modern athlete"
      banner="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80"
      products={products}
    />
  );
}