"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      await register(form.firstName, form.lastName, form.email, form.password);
      router.push("/account");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <div className="w-full px-6 py-5 border-b border-neutral-200 bg-white flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-widest text-neutral-900">AETHER</Link>
        <Link href="/login" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
          Sign in →
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-sm"
        >
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-neutral-900">Create account</h1>
            <p className="text-sm text-neutral-500 mt-1">Join Aether for a better shopping experience</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              {[{ label: "First Name", field: "firstName", placeholder: "John" }, { label: "Last Name", field: "lastName", placeholder: "Doe" }].map(({ label, field, placeholder }) => (
                <div key={field}>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">{label}</label>
                  <input
                    type="text"
                    value={form[field as keyof typeof form]}
                    onChange={(e) => update(field, e.target.value)}
                    required
                    placeholder={placeholder}
                    className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">Password</label>
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-xs text-neutral-400 hover:text-neutral-700">
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                required
                placeholder="Min 6 characters"
                className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={form.confirm}
                onChange={(e) => update("confirm", e.target.value)}
                required
                placeholder="Repeat password"
                className="w-full h-11 px-4 text-sm border border-neutral-200 rounded-xl outline-none focus:border-neutral-900 transition-colors bg-white"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.98 }}
              className="w-full h-12 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors disabled:opacity-60 mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Creating account...
                </span>
              ) : "Create Account"}
            </motion.button>
          </form>

          <p className="text-center text-sm text-neutral-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-neutral-900 hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}