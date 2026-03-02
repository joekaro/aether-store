import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const shippingOptions = [
  { method: "Standard Shipping", time: "5–7 business days", cost: "Free over $100 / $6.99 otherwise" },
  { method: "Express Shipping", time: "2–3 business days", cost: "$14.99" },
  { method: "Overnight Shipping", time: "Next business day", cost: "$24.99" },
  { method: "International", time: "7–14 business days", cost: "From $19.99" },
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400 mb-8">
          <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          <span className="text-neutral-600 font-medium">Shipping</span>
        </nav>

        <h1 className="text-4xl font-bold text-neutral-900 mb-3">Shipping Information</h1>
        <p className="text-base text-neutral-500 mb-10 leading-relaxed">We ship to over 50 countries worldwide. All orders are processed within 1–2 business days.</p>

        <div className="h-px bg-neutral-100 mb-10" />

        {/* Shipping Options Table */}
        <h2 className="text-xl font-bold text-neutral-900 mb-4">Shipping Options</h2>
        <div className="overflow-x-auto rounded-2xl border border-neutral-100 mb-10">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50">
              <tr>
                {["Method", "Delivery Time", "Cost"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {shippingOptions.map((row, i) => (
                <tr key={i} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-neutral-900">{row.method}</td>
                  <td className="px-4 py-3 text-neutral-500">{row.time}</td>
                  <td className="px-4 py-3 text-neutral-500">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-8">
          {[
            { heading: "Order Processing", content: "All orders placed before 2:00 PM EST on business days are processed the same day. Orders placed after 2:00 PM or on weekends/holidays are processed the next business day. You will receive a shipping confirmation email with tracking information once your order has been dispatched." },
            { heading: "Tracking Your Order", content: "Once your order ships, you will receive an email with a tracking number. You can use this number to track your package on our website or directly on the carrier's website. Tracking information may take up to 24 hours to update after your order ships." },
            { heading: "International Shipping", content: "International orders may be subject to import duties and taxes, which are the responsibility of the recipient. Aether is not responsible for delays caused by customs. Delivery times for international orders are estimates and may vary." },
            { heading: "Missing or Delayed Orders", content: "If your order has not arrived within the estimated delivery window, please check your tracking information first. If you still have concerns, contact our support team at shipping@aether.com and we will investigate promptly." },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-neutral-900 mb-2">{s.heading}</h2>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}