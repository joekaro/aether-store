import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const openings = [
  { role: "Senior Frontend Engineer", dept: "Engineering", location: "San Francisco / Remote", type: "Full-time" },
  { role: "Product Designer", dept: "Design", location: "San Francisco", type: "Full-time" },
  { role: "Supply Chain Manager", dept: "Operations", location: "New York", type: "Full-time" },
  { role: "Brand Marketing Manager", dept: "Marketing", location: "Remote", type: "Full-time" },
  { role: "Customer Experience Lead", dept: "Support", location: "Remote", type: "Full-time" },
  { role: "Data Analyst", dept: "Engineering", location: "San Francisco / Remote", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400 mb-8">
          <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          <span className="text-neutral-600 font-medium">Careers</span>
        </nav>

        <h1 className="text-4xl font-bold text-neutral-900 mb-3">Join the Team</h1>
        <p className="text-base text-neutral-500 mb-10 leading-relaxed">We're building something special. If you're passionate about performance, design, and making great products, we'd love to hear from you.</p>

        <div className="h-px bg-neutral-100 mb-10" />

        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { label: "Team Members", value: "85+" },
            { label: "Countries", value: "12" },
            { label: "Open Roles", value: `${openings.length}` },
          ].map((s) => (
            <div key={s.label} className="bg-neutral-50 rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-neutral-900">{s.value}</p>
              <p className="text-xs text-neutral-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-neutral-900 mb-5">Open Positions</h2>
        <div className="flex flex-col gap-3">
          {openings.map((job, i) => (
            <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:shadow-sm transition-all group">
              <div>
                <p className="text-sm font-semibold text-neutral-900">{job.role}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{job.dept} · {job.location} · {job.type}</p>
              </div>
              <svg className="w-4 h-4 text-neutral-300 group-hover:text-neutral-700 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neutral-50 rounded-2xl p-8 text-center">
          <p className="text-base font-semibold text-neutral-900 mb-2">Don't see your role?</p>
          <p className="text-sm text-neutral-500 mb-5">We're always looking for talented people. Send us your CV and tell us how you'd contribute.</p>
          <Link href="/contact" className="px-8 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}