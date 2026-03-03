import { getProductById, getAllProducts } from "@/lib/api";
import ProductPageClient from "../ProductPageClient";
import { notFound } from "next/navigation";

// Don't pre-render at build time — render on demand
export const dynamic = "force-dynamic";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}