"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Phase 2: POST to /api/contact
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400 mb-8">
          <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
          <span className="text-neutral-600 font-medium">Contact</span>
        </nav>

        <h1 className="text-4xl font-bold text-neutral-900 mb-3">Contact Us</h1>
        <p className="text-base text-neutral-500 mb-10 leading-relaxed">We typically respond within 24 hours on business days.</p>

        <div className="h-px bg-neutral-100 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {[
              { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "support@aether.com" },
              { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "Phone", value: "+1 (800) 928-4374" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Hours", value: "Mon–Fri, 9am–6pm EST" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-medium text-neutral-800 mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="sm:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-neutral-900">Message sent!</p>
                <p className="text-sm text-neutral-500">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white text-neutral-700"
                  >
                    <option value="">Select a topic</option>
                    <option>Order Issue</option>
                    <option>Returns & Exchanges</option>
                    <option>Shipping Question</option>
                    <option>Product Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="px-4 py-3 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-12 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors mt-2"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}