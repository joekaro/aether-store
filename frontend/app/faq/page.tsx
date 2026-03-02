"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How do I find my size?", a: "All Aether shoes are true to size. We recommend measuring your foot and comparing to our size guide. If you are between sizes, we suggest sizing up for running shoes and staying true to size for training shoes." },
  { q: "How long does shipping take?", a: "Standard shipping takes 5–7 business days. Express shipping takes 2–3 business days. Overnight shipping is also available. All orders placed before 2 PM EST are processed the same day." },
  { q: "Can I return or exchange my order?", a: "Yes! We accept free returns and exchanges within 30 days of delivery on unworn items in original packaging. Visit our returns portal or contact our support team to start a return." },
  { q: "Are your shoes vegan-friendly?", a: "All of our knit and synthetic upper shoes are vegan-friendly. Some of our leather styles use genuine leather. Each product page specifies the materials used." },
  { q: "How do I care for my Aether shoes?", a: "For knit uppers, hand wash with mild soap and cold water. Allow to air dry — never use a dryer or direct heat. For the outsole, wipe with a damp cloth. Avoid submerging in water." },
  { q: "Do you offer a warranty?", a: "Yes, all Aether shoes come with a 2-year manufacturer's warranty covering defects in materials and workmanship. Normal wear and tear is not covered. Contact warranty@aether.com to make a claim." },
  { q: "Can I change or cancel my order?", a: "Orders can be modified or cancelled within 1 hour of placement. After that, our fulfilment system processes orders automatically. Contact us immediately at support@aether.com if you need to make changes." },
  { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries. International orders typically take 7–14 business days. Import duties and taxes are the responsibility of the recipient." },
  { q: "How do I track my order?", a: "You will receive a shipping confirmation email with a tracking number as soon as your order ships. You can track your order on our website or directly on the carrier's website." },
  { q: "Do you have physical stores?", a: "Currently, Aether is an online-only brand. This allows us to pass savings directly to our customers. We do partner with select retailers — check our Store Locator for locations near you." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-semibold text-neutral-900">{q}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 text-neutral-400 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-neutral-500 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400 mb-8">
          <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          <span className="text-neutral-600 font-medium">FAQ</span>
        </nav>

        <h1 className="text-4xl font-bold text-neutral-900 mb-3">Frequently Asked Questions</h1>
        <p className="text-base text-neutral-500 mb-10 leading-relaxed">Everything you need to know about Aether products and services. Can't find what you're looking for? <Link href="/contact" className="underline hover:text-neutral-700 transition-colors">Contact us</Link>.</p>

        <div className="h-px bg-neutral-100 mb-4" />

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-12 bg-neutral-50 rounded-2xl p-8 text-center">
          <p className="text-base font-semibold text-neutral-900 mb-2">Still have questions?</p>
          <p className="text-sm text-neutral-500 mb-5">Our team is ready to help you with anything.</p>
          <Link href="/contact" className="px-8 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors inline-block">
            Contact Support
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}