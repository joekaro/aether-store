import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/api";

const categories = [
  { label: "Men", href: "/men", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", desc: "Performance for him" },
  { label: "Women", href: "/women", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80", desc: "Built for her" },
  { label: "Running", href: "/running", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80", desc: "Go further, faster" },
  { label: "Training", href: "/training", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80", desc: "Built for the gym" },
];

export default async function HomePage() {
  const allProducts = await getAllProducts();
  const featured = allProducts.slice(0, 4);
  const heroProduct = allProducts[0];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 sm:py-40">
          <p className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-4">New Season</p>
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6 max-w-2xl">
            Built for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              Relentless
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-md mb-10 leading-relaxed">
            Premium performance footwear engineered for every stride, every surface, every goal.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href={`/product/${heroProduct.id}`}
              className="px-8 py-4 bg-white text-neutral-900 text-sm font-bold rounded-xl hover:bg-neutral-100 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/running"
              className="px-8 py-4 border border-white/20 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              View Running
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase mb-2">Shop by Category</p>
            <h2 className="text-3xl font-bold text-neutral-900">Find your fit</h2>
          </div>
          <Link href="/sale" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors hidden sm:block">
            View Sale →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-lg leading-tight">{cat.label}</p>
                <p className="text-white/70 text-xs mt-0.5">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase mb-2">Trending Now</p>
              <h2 className="text-3xl font-bold text-neutral-900">Best Sellers</h2>
            </div>
            <Link href="/men" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors hidden sm:block">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {featured.map((product) => (
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
        </div>
      </section>

      {/* Featured Single Product */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100">
            <img
              src={heroProduct.variants[0]?.images[0]}
              alt={heroProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase mb-3">Featured</p>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 leading-tight">{heroProduct.name}</h2>
            <p className="text-neutral-500 leading-relaxed mb-8">{heroProduct.description}</p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-neutral-900">From ${heroProduct.basePrice}</span>
              <Link
                href={`/product/${heroProduct.id}`}
                className="px-8 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}