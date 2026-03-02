import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const mensSizes = [
  { us: "US 7", uk: "UK 6", eu: "EU 40", cm: "25 cm" },
  { us: "US 8", uk: "UK 7", eu: "EU 41", cm: "26 cm" },
  { us: "US 9", uk: "UK 8", eu: "EU 42", cm: "27 cm" },
  { us: "US 10", uk: "UK 9", eu: "EU 43", cm: "28 cm" },
  { us: "US 11", uk: "UK 10", eu: "EU 44", cm: "29 cm" },
  { us: "US 12", uk: "UK 11", eu: "EU 45", cm: "30 cm" },
  { us: "US 13", uk: "UK 12", eu: "EU 46", cm: "31 cm" },
];

const womensSizes = [
  { us: "US 5", uk: "UK 3", eu: "EU 36", cm: "22 cm" },
  { us: "US 6", uk: "UK 4", eu: "EU 37", cm: "23 cm" },
  { us: "US 7", uk: "UK 5", eu: "EU 38", cm: "24 cm" },
  { us: "US 8", uk: "UK 6", eu: "EU 39", cm: "25 cm" },
  { us: "US 9", uk: "UK 7", eu: "EU 40", cm: "26 cm" },
  { us: "US 10", uk: "UK 8", eu: "EU 41", cm: "27 cm" },
];

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400 mb-8">
          <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          <span className="text-neutral-600 font-medium">Size Guide</span>
        </nav>

        <h1 className="text-4xl font-bold text-neutral-900 mb-3">Size Guide</h1>
        <p className="text-base text-neutral-500 mb-10 leading-relaxed">Find your perfect fit. All Aether shoes are true to size. If you are between sizes, we recommend sizing up.</p>

        <div className="h-px bg-neutral-100 mb-10" />

        {/* How to Measure */}
        <div className="bg-neutral-50 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-neutral-900 mb-3">How to Measure Your Foot</h2>
          <ol className="flex flex-col gap-2 text-sm text-neutral-500 list-decimal list-inside leading-relaxed">
            <li>Place a blank piece of paper on a hard floor against a wall.</li>
            <li>Stand on the paper with your heel against the wall.</li>
            <li>Mark the tip of your longest toe on the paper.</li>
            <li>Measure the distance from the edge of the paper to your mark in centimetres.</li>
            <li>Use the chart below to find your size.</li>
          </ol>
        </div>

        {/* Men's Table */}
        <h2 className="text-xl font-bold text-neutral-900 mb-4">Men's Sizes</h2>
        <div className="overflow-x-auto rounded-2xl border border-neutral-100 mb-10">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50">
              <tr>
                {["US", "UK", "EU", "CM"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {mensSizes.map((row, i) => (
                <tr key={i} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-neutral-900">{row.us}</td>
                  <td className="px-4 py-3 text-neutral-500">{row.uk}</td>
                  <td className="px-4 py-3 text-neutral-500">{row.eu}</td>
                  <td className="px-4 py-3 text-neutral-500">{row.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Women's Table */}
        <h2 className="text-xl font-bold text-neutral-900 mb-4">Women's Sizes</h2>
        <div className="overflow-x-auto rounded-2xl border border-neutral-100 mb-10">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50">
              <tr>
                {["US", "UK", "EU", "CM"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {womensSizes.map((row, i) => (
                <tr key={i} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-neutral-900">{row.us}</td>
                  <td className="px-4 py-3 text-neutral-500">{row.uk}</td>
                  <td className="px-4 py-3 text-neutral-500">{row.eu}</td>
                  <td className="px-4 py-3 text-neutral-500">{row.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-neutral-400">Still not sure? <Link href="/contact" className="underline hover:text-neutral-700 transition-colors">Contact our team</Link> and we'll help you find the right size.</p>
      </main>
      <Footer />
    </div>
  );
}