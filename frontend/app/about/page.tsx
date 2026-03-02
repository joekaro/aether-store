import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-64 sm:h-80 bg-neutral-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80" alt="About" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Built Different</h1>
        </div>
      </section>

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col gap-12">

          <div>
            <p className="text-2xl font-bold text-neutral-900 leading-snug mb-4">
              Aether was founded on a simple belief — that performance footwear shouldn't make you choose between speed and style.
            </p>
            <p className="text-base text-neutral-500 leading-relaxed">
              Founded in 2019 in San Francisco, Aether began in a garage with three engineers and one obsession: build the perfect running shoe. What started as a side project quickly grew into a brand trusted by over 200,000 athletes worldwide.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 py-8 border-y border-neutral-100">
            {[
              { number: "200K+", label: "Athletes worldwide" },
              { number: "50+", label: "Countries shipped to" },
              { number: "4.8★", label: "Average rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-neutral-900">{stat.number}</p>
                <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Our Mission</h2>
            <p className="text-base text-neutral-500 leading-relaxed">
              We exist to make elite performance accessible. Every shoe we make is built with the same materials and technology used by professional athletes — without the professional price tag. We believe the best gear should be available to everyone who is willing to put in the work.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">How We Build</h2>
            <p className="text-base text-neutral-500 leading-relaxed">
              Every Aether shoe starts with data. We analyze thousands of biomechanical data points to understand exactly how the human foot moves during different activities. Our design process combines this data with input from professional athletes, physical therapists, and everyday runners to create shoes that truly work.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 text-white text-center">
            <p className="text-lg font-bold mb-2">Join the movement</p>
            <p className="text-sm text-neutral-400 mb-6">Be the first to know about new launches, exclusive offers, and athlete stories.</p>
            <Link href="/running" className="px-8 py-3.5 bg-white text-neutral-900 text-sm font-semibold rounded-xl hover:bg-neutral-100 transition-colors inline-block">
              Shop Running
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}