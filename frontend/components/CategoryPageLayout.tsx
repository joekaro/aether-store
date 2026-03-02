import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

interface CategoryPageLayoutProps {
  title: string;
  description: string;
  banner: string;
  products: Product[];
}

export default function CategoryPageLayout({
  title,
  description,
  banner,
  products,
}: CategoryPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Banner */}
      <section className="relative h-56 sm:h-72 bg-neutral-900 overflow-hidden">
        <img src={banner} alt={title} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">{title}</h1>
          <p className="text-sm text-neutral-300 max-w-md">{description}</p>
        </div>
      </section>

      {/* Products */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-neutral-500">{products.length} product{products.length !== 1 ? "s" : ""}</p>
          <select className="text-sm text-neutral-700 border border-neutral-200 rounded-xl px-4 py-2 bg-white outline-none cursor-pointer">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
            <p className="text-lg font-semibold text-neutral-700">No products found</p>
            <p className="text-sm text-neutral-400">Check back soon for new arrivals</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                price={product.basePrice}
                image={product.variants[0]?.images[0] ?? ""}
                colors={new Set(product.variants.map((v) => v.color)).size}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}