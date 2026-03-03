export const dynamic = "force-dynamic";
import { getProductsByCategory } from "@/lib/api";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export default async function TrainingPage() {
  const products = await getProductsByCategory("Training");

  return (
    <CategoryPageLayout
      title="Training"
      description="Built for the gym. Ready for anything."
      banner="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1600&q=80"
      products={products}
    />
  );
}