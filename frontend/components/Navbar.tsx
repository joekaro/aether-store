"use client";

import { useState, useRef, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import CartDrawer from "@/components/CartDrawer";
import SearchModal from "@/components/SearchModal";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Men",      href: "/men" },
  { label: "Women",    href: "/women" },
  { label: "Running",  href: "/running" },
  { label: "Training", href: "/training" },
  { label: "Sale",     href: "/sale" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  // Close account dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleLogout() {
    logout();
    setAccountOpen(false);
    router.push("/");
  }

  return (
    <>
      <header className="w-full border-b border-neutral-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-widest text-neutral-900">
            AETHER
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-neutral-900 border-b-2 border-neutral-900 pb-0.5"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <button onClick={() => setSearchOpen(true)} className="text-neutral-500 hover:text-neutral-900 transition-colors" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="6" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative text-neutral-500 hover:text-neutral-900 transition-colors" aria-label="Wishlist">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button onClick={() => setCartOpen(true)} className="relative text-neutral-500 hover:text-neutral-900 transition-colors" aria-label="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 bg-neutral-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Account — desktop */}
            <div className="hidden md:block relative" ref={accountRef}>
              {user ? (
                <>
                  <button
                    onClick={() => setAccountOpen(!accountOpen)}
                    className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold">
                      {user.firstName[0]}{user.lastName[0]}
                    </div>
                    <span className="hidden lg:block">{user.firstName}</span>
                    <svg className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${accountOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7" /></svg>
                  </button>

                  <AnimatePresence>
                    {accountOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden z-50"
                      >
                        <div className="px-4 py-3 border-b border-neutral-100">
                          <p className="text-sm font-bold text-neutral-900">{user.firstName} {user.lastName}</p>
                          <p className="text-xs text-neutral-400 truncate">{user.email}</p>
                        </div>
                        <div className="py-1">
                          <Link href="/account" onClick={() => setAccountOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors">
                            <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            My Orders
                          </Link>
                          <Link href="/account?tab=profile" onClick={() => setAccountOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors">
                            <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            Profile
                          </Link>
                        </div>
                        <div className="border-t border-neutral-100 py-1">
                          <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" /></svg>
                            Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href="/login" className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors border border-neutral-200 px-4 py-1.5 rounded-xl hover:border-neutral-400">
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile menu */}
            <button className="md:hidden text-neutral-500 hover:text-neutral-900 transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-neutral-200 bg-white overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                    className={`py-2.5 text-sm font-medium transition-colors ${pathname === link.href ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"}`}>
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-neutral-100 my-2" />
                <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2">
                  Wishlist {wishlistCount > 0 && <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{wishlistCount}</span>}
                </Link>
                <Link href="/cart" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2">
                  Cart {totalItems > 0 && <span className="bg-neutral-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{totalItems}</span>}
                </Link>
                <div className="h-px bg-neutral-100 my-2" />
                {user ? (
                  <>
                    <Link href="/account" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                      My Orders
                    </Link>
                    <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="py-2.5 text-sm font-medium text-red-500 text-left">
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Sign In</Link>
                    <Link href="/register" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-neutral-900 font-semibold">Create Account</Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}