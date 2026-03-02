import Link from "next/link";

export default function Footer() {
  const links = {
    Shop: [
      { label: "Men", href: "/men" },
      { label: "Women", href: "/women" },
      { label: "Running", href: "/running" },
      { label: "Training", href: "/training" },
      { label: "Sale", href: "/sale" },
    ],
    Help: [
      { label: "Size Guide", href: "/size-guide" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-widest text-white mb-3 block">AETHER</Link>
            <p className="text-xs leading-relaxed text-neutral-500 max-w-[200px]">
              Engineered for performance. Built for the everyday.
            </p>
          </div>
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4">{heading}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-neutral-500 hover:text-neutral-200 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-neutral-800 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Aether. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}