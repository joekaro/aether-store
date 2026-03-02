import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const goals = [
  { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", label: "Carbon Neutral by 2027", desc: "Offsetting 100% of our manufacturing emissions" },
  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "50% Recycled Materials", desc: "Already using recycled knit in 3 of our models" },
  { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: "Zero Waste Packaging", desc: "100% plastic-free shipping materials by 2025" },
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-64 sm:h-80 bg-neutral-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80" alt="Sustainability" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-3">Our Commitment</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Built to Last the Planet</h1>
        </div>
      </section>

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">

        <p className="text-xl text-neutral-700 leading-relaxed mb-12">
          At Aether, sustainability isn't a marketing talking point — it's an engineering challenge we take seriously every day.
        </p>

        {/* Goals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {goals.map((goal) => (
            <div key={goal.label} className="bg-neutral-50 rounded-2xl p-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d={goal.icon} />
                </svg>
              </div>
              <p className="text-sm font-bold text-neutral-900 mb-1">{goal.label}</p>
              <p className="text-xs text-neutral-500 leading-relaxed">{goal.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          {[
            { heading: "Materials", content: "We are actively transitioning our full product line to use recycled and bio-based materials. Our knit uppers currently use 40% recycled polyester, and we are working with our manufacturing partners to increase this to 80% by 2026. Our packaging is already 100% recycled cardboard." },
            { heading: "Manufacturing", content: "All of our manufacturing partners are audited annually for environmental compliance. We prioritise factories that use renewable energy and have water recycling programmes. We do not work with manufacturers that fail to meet our environmental standards." },
            { heading: "Longevity Over Trends", content: "We deliberately design shoes to last. Our 2-year warranty is not just a customer promise — it's a sustainability commitment. A shoe that lasts twice as long has half the environmental impact. We publish repairability scores for all our models." },
            { heading: "Giving Back", content: "One dollar from every pair sold goes to reforestation projects through our partnership with One Tree Planted. Since 2021, Aether has funded the planting of over 180,000 trees across six continents." },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-neutral-900 mb-3">{s.heading}</h2>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-neutral-900 rounded-2xl p-8 text-white text-center">
          <p className="text-lg font-bold mb-2">Have sustainability feedback?</p>
          <p className="text-sm text-neutral-400 mb-6">We want to hear from you. Your input shapes our environmental roadmap.</p>
          <Link href="/contact" className="px-8 py-3.5 bg-white text-neutral-900 text-sm font-semibold rounded-xl hover:bg-neutral-100 transition-colors inline-block">
            Share Your Thoughts
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}