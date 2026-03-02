import { Product } from "@/types/product";

// ─────────────────────────────────────────────────────────────────
// MOCK PRODUCTS CATALOG — Phase 1
// Phase 2: Replace with → fetch('/api/products')
// ─────────────────────────────────────────────────────────────────

export const mockProducts: Product[] = [
  // ── 1. Aether Runner Pro ──────────────────────────────────────
  {
    id: "aether-runner-pro",
    name: "Aether Runner Pro",
    brand: "AETHER",
    category: "Running",
    description:
      "Engineered for performance and refined for everyday wear. The Aether Runner Pro features a lightweight knit upper, responsive foam midsole, and a carbon-fiber heel plate — delivering elite energy return in a silhouette that moves from track to street effortlessly.",
    basePrice: 180,
    rating: 4.8,
    reviewCount: 2340,
    variants: [
      { id: "arp-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 180, stock: 5, images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
      { id: "arp-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 180, stock: 3, images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
      { id: "arp-blk-10", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 10", price: 180, stock: 0, images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
      { id: "arp-blk-11", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 11", price: 180, stock: 7, images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
      { id: "arp-wht-8", color: "Cloud White", colorHex: "#f0f0f0", size: "US 8", price: 190, stock: 4, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "arp-wht-9", color: "Cloud White", colorHex: "#f0f0f0", size: "US 9", price: 190, stock: 6, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "arp-wht-10", color: "Cloud White", colorHex: "#f0f0f0", size: "US 10", price: 190, stock: 2, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "arp-blu-8", color: "Ocean Blue", colorHex: "#2563eb", size: "US 8", price: 195, stock: 8, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
      { id: "arp-blu-9", color: "Ocean Blue", colorHex: "#2563eb", size: "US 9", price: 195, stock: 0, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
      { id: "arp-blu-10", color: "Ocean Blue", colorHex: "#2563eb", size: "US 10", price: 195, stock: 5, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
    ],
  },

  // ── 2. Stride Elite ───────────────────────────────────────────
  {
    id: "stride-elite",
    name: "Stride Elite",
    brand: "AETHER",
    category: "Running",
    description:
      "The Stride Elite redefines long-distance comfort. A dual-density foam stack absorbs impact while the breathable mesh upper keeps your foot cool and locked in — mile after mile.",
    basePrice: 160,
    rating: 4.6,
    reviewCount: 1850,
    variants: [
      { id: "se-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 160, stock: 6, images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "se-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 160, stock: 4, images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "se-blk-10", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 10", price: 160, stock: 2, images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "se-red-8", color: "Ember Red", colorHex: "#dc2626", size: "US 8", price: 170, stock: 5, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
      { id: "se-red-9", color: "Ember Red", colorHex: "#dc2626", size: "US 9", price: 170, stock: 3, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
      { id: "se-red-10", color: "Ember Red", colorHex: "#dc2626", size: "US 10", price: 170, stock: 0, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
    ],
  },

  // ── 3. Apex Trainer ───────────────────────────────────────────
  {
    id: "apex-trainer",
    name: "Apex Trainer",
    brand: "AETHER",
    category: "Training",
    description:
      "Stability meets versatility. The Apex Trainer features a wide base platform for heavy lifts and a flexible forefoot for lateral movements — your one shoe for every gym session.",
    basePrice: 145,
    rating: 4.7,
    reviewCount: 980,
    variants: [
      { id: "at-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 145, stock: 10, images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"] },
      { id: "at-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 145, stock: 8, images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"] },
      { id: "at-blk-10", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 10", price: 145, stock: 6, images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"] },
      { id: "at-grn-8", color: "Forest Green", colorHex: "#16a34a", size: "US 8", price: 155, stock: 4, images: ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"] },
      { id: "at-grn-9", color: "Forest Green", colorHex: "#16a34a", size: "US 9", price: 155, stock: 2, images: ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"] },
      { id: "at-grn-10", color: "Forest Green", colorHex: "#16a34a", size: "US 10", price: 155, stock: 7, images: ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"] },
    ],
  },

  // ── 4. Velocity X ─────────────────────────────────────────────
  {
    id: "velocity-x",
    name: "Velocity X",
    brand: "AETHER",
    category: "Running",
    description:
      "Our fastest shoe yet. The Velocity X uses a full-length carbon fibre plate and ultra-responsive ZeroG foam to return energy with every stride. Designed for race day, worn every day.",
    basePrice: 200,
    rating: 4.9,
    reviewCount: 3200,
    variants: [
      { id: "vx-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 200, stock: 3, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "vx-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 200, stock: 5, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "vx-blk-10", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 10", price: 200, stock: 0, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "vx-wht-8", color: "Cloud White", colorHex: "#f0f0f0", size: "US 8", price: 210, stock: 4, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "vx-wht-9", color: "Cloud White", colorHex: "#f0f0f0", size: "US 9", price: 210, stock: 6, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "vx-wht-10", color: "Cloud White", colorHex: "#f0f0f0", size: "US 10", price: 210, stock: 2, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
    ],
  },

  // ── 5. Urban Runner ───────────────────────────────────────────
  {
    id: "urban-runner",
    name: "Urban Runner",
    brand: "AETHER",
    category: "Men",
    description:
      "Where street style meets athletic performance. The Urban Runner features a premium suede and mesh upper with a cushioned EVA sole — built for the city, ready for anything.",
    basePrice: 135,
    rating: 4.5,
    reviewCount: 760,
    variants: [
      { id: "ur-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 135, stock: 8, images: ["https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"] },
      { id: "ur-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 135, stock: 5, images: ["https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"] },
      { id: "ur-blk-10", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 10", price: 135, stock: 3, images: ["https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"] },
      { id: "ur-tan-8", color: "Desert Tan", colorHex: "#d4a57a", size: "US 8", price: 140, stock: 4, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "ur-tan-9", color: "Desert Tan", colorHex: "#d4a57a", size: "US 9", price: 140, stock: 6, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "ur-tan-10", color: "Desert Tan", colorHex: "#d4a57a", size: "US 10", price: 140, stock: 0, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
    ],
  },

  // ── 6. Grace Runner (Women) ───────────────────────────────────
  {
    id: "grace-runner",
    name: "Grace Runner",
    brand: "AETHER",
    category: "Women",
    description:
      "Engineered specifically for the female foot — narrower heel, wider toe box, and a lighter construction. The Grace Runner delivers a smooth ride whether you're racing or exploring.",
    basePrice: 165,
    rating: 4.8,
    reviewCount: 1420,
    variants: [
      { id: "gr-wht-6", color: "Cloud White", colorHex: "#f0f0f0", size: "US 6", price: 165, stock: 7, images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "gr-wht-7", color: "Cloud White", colorHex: "#f0f0f0", size: "US 7", price: 165, stock: 5, images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "gr-wht-8", color: "Cloud White", colorHex: "#f0f0f0", size: "US 8", price: 165, stock: 3, images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "gr-pnk-6", color: "Blush Pink", colorHex: "#f9a8d4", size: "US 6", price: 175, stock: 4, images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "gr-pnk-7", color: "Blush Pink", colorHex: "#f9a8d4", size: "US 7", price: 175, stock: 2, images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "gr-pnk-8", color: "Blush Pink", colorHex: "#f9a8d4", size: "US 8", price: 175, stock: 0, images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
    ],
  },

  // ── 7. Pro Lite (Sale) ─────────────────────────────────────────
  {
    id: "pro-lite",
    name: "Pro Lite",
    brand: "AETHER",
    category: "Sale",
    description:
      "Lightweight, fast, and affordable. The Pro Lite delivers a no-frills performance experience with a breathable mesh upper and responsive foam midsole. Now on sale.",
    basePrice: 150,
    rating: 4.3,
    reviewCount: 540,
    variants: [
      { id: "pl-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 99, stock: 6, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"] },
      { id: "pl-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 99, stock: 4, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"] },
      { id: "pl-blk-10", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 10", price: 99, stock: 2, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"] },
      { id: "pl-wht-8", color: "Cloud White", colorHex: "#f0f0f0", size: "US 8", price: 105, stock: 8, images: ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"] },
      { id: "pl-wht-9", color: "Cloud White", colorHex: "#f0f0f0", size: "US 9", price: 105, stock: 5, images: ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"] },
      { id: "pl-wht-10", color: "Cloud White", colorHex: "#f0f0f0", size: "US 10", price: 105, stock: 0, images: ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"] },
    ],
  },

  // ── 8. Cloud Racer ────────────────────────────────────────────
  {
    id: "cloud-racer",
    name: "Cloud Racer",
    brand: "AETHER",
    category: "Running",
    description:
      "Inspired by cloud formations, the Cloud Racer uses multi-density foam pods to deliver a cushioned yet propulsive ride. The engineered knit upper wraps the foot like a second skin.",
    basePrice: 190,
    rating: 4.7,
    reviewCount: 2100,
    variants: [
      { id: "cr-wht-8", color: "Cloud White", colorHex: "#f0f0f0", size: "US 8", price: 190, stock: 6, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"] },
      { id: "cr-wht-9", color: "Cloud White", colorHex: "#f0f0f0", size: "US 9", price: 190, stock: 4, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"] },
      { id: "cr-wht-10", color: "Cloud White", colorHex: "#f0f0f0", size: "US 10", price: 190, stock: 2, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"] },
      { id: "cr-blu-8", color: "Ocean Blue", colorHex: "#2563eb", size: "US 8", price: 200, stock: 5, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
      { id: "cr-blu-9", color: "Ocean Blue", colorHex: "#2563eb", size: "US 9", price: 200, stock: 3, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
      { id: "cr-blu-10", color: "Ocean Blue", colorHex: "#2563eb", size: "US 10", price: 200, stock: 0, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
    ],
  },
];

// Helper: get product by ID
export function getProductByIdFromMock(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id);
}

// Keep backward compat for any file still importing mockProduct
export const mockProduct = mockProducts[0];