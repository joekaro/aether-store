import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Section {
  heading: string;
  content: string;
}

interface InfoPageLayoutProps {
  title: string;
  subtitle: string;
  sections: Section[];
  breadcrumb: string;
}

export default function InfoPageLayout({ title, subtitle, sections, breadcrumb }: InfoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400 mb-8">
          <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          <span className="text-neutral-600 font-medium">{breadcrumb}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-neutral-900 mb-3">{title}</h1>
          <p className="text-base text-neutral-500 leading-relaxed">{subtitle}</p>
        </div>

        <div className="h-px bg-neutral-100 mb-10" />

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">{section.heading}</h2>
              <p className="text-sm text-neutral-500 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}