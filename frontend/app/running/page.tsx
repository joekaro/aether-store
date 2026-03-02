import { getProductsByCategory } from "@/lib/api";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export default async function RunningPage() {
  const products = await getProductsByCategory("Running");

  return (
    <CategoryPageLayout
      title="Running"
      description="Go further, faster. Built for every distance."
      banner="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1600&q=80"
      products={products}
    />
  );
}