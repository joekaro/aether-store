"use client";

import { useEffect } from "react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { useRouter, usePathname } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { admin, isLoading } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    // Wait until localStorage has been read before making any decision
    if (isLoading) return;

    // Not logged in and not on login page → go to login
    if (!admin && !isLoginPage) {
      router.push("/admin/login");
    }

    // Already logged in but landed on login page → go to dashboard
    if (admin && isLoginPage) {
      router.push("/admin/dashboard");
    }
  }, [admin, isLoading, isLoginPage, router]);

  // ── Still checking localStorage ──────────────────────
  // This is the key fix: nothing renders (no API calls fire)
  // until we know whether a token exists or not.
  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neutral-200 border-t-neutral-900 rounded-full animate-spin" />
      </div>
    );
  }

  // ── Login page — no sidebar ──────────────────────────
  if (isLoginPage) {
    return <>{children}</>;
  }

  // ── Not authenticated — show nothing while redirecting ─
  if (!admin) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neutral-200 border-t-neutral-900 rounded-full animate-spin" />
      </div>
    );
  }

  // ── Authenticated — full layout with sidebar ─────────
  return (
    <div className="flex min-h-screen bg-neutral-100">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}