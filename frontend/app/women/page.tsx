export const dynamic = "force-dynamic";
import { getAllProducts } from "@/lib/api";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export default async function WomenPage() {
  const all = await getAllProducts();
  const products = all.filter((p) =>
    ["Women", "Running"].includes(p.category)
  );

  return (
    <CategoryPageLayout
      title="Women's Collection"
      description="Designed for her — where performance meets style"
      banner="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1600&q=80"
      products={products}
    />
  );
}