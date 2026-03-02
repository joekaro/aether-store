require("dotenv").config();
const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");

const MONGO_URI = process.env.MONGO_URI;

const products = [
  {
    id: "aether-runner-pro", name: "Aether Runner Pro", brand: "AETHER", category: "Running",
    description: "Engineered for performance and refined for everyday wear. Lightweight knit upper, responsive foam midsole, and a carbon-fiber heel plate.",
    basePrice: 180, rating: 4.8, reviewCount: 2340,
    variants: [
      { id: "arp-blk-8",  color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8",  price: 180, stock: 5, images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80","https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
      { id: "arp-blk-9",  color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9",  price: 180, stock: 3, images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80","https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
      { id: "arp-blk-10", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 10", price: 180, stock: 0, images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80","https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
      { id: "arp-wht-8",  color: "Cloud White",    colorHex: "#f0f0f0", size: "US 8",  price: 190, stock: 4, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "arp-wht-9",  color: "Cloud White",    colorHex: "#f0f0f0", size: "US 9",  price: 190, stock: 6, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "arp-blu-8",  color: "Ocean Blue",     colorHex: "#2563eb", size: "US 8",  price: 195, stock: 8, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80","https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80","https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
      { id: "arp-blu-9",  color: "Ocean Blue",     colorHex: "#2563eb", size: "US 9",  price: 195, stock: 0, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80","https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80","https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
    ],
  },
  {
    id: "stride-elite", name: "Stride Elite", brand: "AETHER", category: "Running",
    description: "Dual-density foam stack absorbs impact while the breathable mesh upper keeps your foot cool mile after mile.",
    basePrice: 160, rating: 4.6, reviewCount: 1850,
    variants: [
      { id: "se-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 160, stock: 6, images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80","https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "se-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 160, stock: 4, images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80","https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
      { id: "se-red-8", color: "Ember Red",     colorHex: "#dc2626", size: "US 8", price: 170, stock: 5, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80","https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80","https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
    ],
  },
  {
    id: "apex-trainer", name: "Apex Trainer", brand: "AETHER", category: "Training",
    description: "Wide base platform for heavy lifts, flexible forefoot for lateral movements.",
    basePrice: 145, rating: 4.7, reviewCount: 980,
    variants: [
      { id: "at-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 145, stock: 10, images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"] },
      { id: "at-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 145, stock: 8,  images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"] },
      { id: "at-grn-8", color: "Forest Green",   colorHex: "#16a34a", size: "US 8", price: 155, stock: 4,  images: ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80","https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80"] },
    ],
  },
  {
    id: "velocity-x", name: "Velocity X", brand: "AETHER", category: "Running",
    description: "Full-length carbon fibre plate and ultra-responsive ZeroG foam for maximum energy return.",
    basePrice: 200, rating: 4.9, reviewCount: 3200,
    variants: [
      { id: "vx-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 200, stock: 3, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80","https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80","https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
      { id: "vx-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 200, stock: 5, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80","https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80","https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
      { id: "vx-wht-8", color: "Cloud White",    colorHex: "#f0f0f0", size: "US 8", price: 210, stock: 4, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
    ],
  },
  {
    id: "urban-runner", name: "Urban Runner", brand: "AETHER", category: "Men",
    description: "Street style meets athletic performance. Premium suede and mesh upper with cushioned EVA sole.",
    basePrice: 135, rating: 4.5, reviewCount: 760,
    variants: [
      { id: "ur-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 135, stock: 8, images: ["https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"] },
      { id: "ur-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 135, stock: 6, images: ["https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"] },
      { id: "ur-tan-8", color: "Desert Tan",     colorHex: "#d4a57a", size: "US 8", price: 140, stock: 4, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80","https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80","https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"] },
    ],
  },
  {
    id: "grace-runner", name: "Grace Runner", brand: "AETHER", category: "Women",
    description: "Engineered for the female foot — narrower heel, wider toe box, lighter construction.",
    basePrice: 165, rating: 4.8, reviewCount: 1420,
    variants: [
      { id: "gr-wht-6", color: "Cloud White", colorHex: "#f0f0f0", size: "US 6", price: 165, stock: 7, images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80","https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "gr-wht-7", color: "Cloud White", colorHex: "#f0f0f0", size: "US 7", price: 165, stock: 5, images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80","https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "gr-pnk-6", color: "Blush Pink",  colorHex: "#f9a8d4", size: "US 6", price: 175, stock: 4, images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80","https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80","https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"] },
    ],
  },
  {
    id: "pro-lite", name: "Pro Lite", brand: "AETHER", category: "Sale",
    description: "Lightweight everyday performance at an unbeatable price. Now on sale.",
    basePrice: 150, rating: 4.3, reviewCount: 540,
    variants: [
      { id: "pl-blk-8", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 8", price: 99,  stock: 6, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"] },
      { id: "pl-blk-9", color: "Midnight Black", colorHex: "#1a1a1a", size: "US 9", price: 99,  stock: 8, images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"] },
      { id: "pl-wht-8", color: "Cloud White",    colorHex: "#f0f0f0", size: "US 8", price: 105, stock: 4, images: ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80","https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80"] },
    ],
  },
  {
    id: "cloud-racer", name: "Cloud Racer", brand: "AETHER", category: "Running",
    description: "Multi-density foam pods deliver a cushioned yet propulsive ride for long training runs.",
    basePrice: 190, rating: 4.7, reviewCount: 2100,
    variants: [
      { id: "cr-wht-8", color: "Cloud White", colorHex: "#f0f0f0", size: "US 8", price: 190, stock: 6, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "cr-wht-9", color: "Cloud White", colorHex: "#f0f0f0", size: "US 9", price: 190, stock: 4, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"] },
      { id: "cr-blu-8", color: "Ocean Blue",  colorHex: "#2563eb", size: "US 8", price: 200, stock: 5, images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80","https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80","https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"] },
    ],
  },
];

async function seed() {
  const client = new MongoClient(MONGO_URI, { family: 4 });

  try {
    await client.connect();
    console.log("✅ MongoDB connected");

    const db = client.db("aether");

    // ── Seed products ──────────────────────────────────
    await db.collection("products").deleteMany({});
    await db.collection("products").insertMany(products);
    console.log(`✅ Seeded ${products.length} products`);

    // ── Create admin user ──────────────────────────────
    const existing = await db.collection("users").findOne({ email: "admin@aether.com" });
    if (!existing) {
      const hashedPassword = await bcrypt.hash("admin123456", 12);
      await db.collection("users").insertOne({
        firstName: "Admin",
        lastName: "Aether",
        email: "admin@aether.com",
        password: hashedPassword,
        isAdmin: true,
        suspended: false,
        wishlist: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log("✅ Admin created → admin@aether.com / admin123456");
    } else {
      console.log("ℹ️  Admin already exists");
    }

    console.log("🎉 Database seeded successfully!");
  } catch (err) {
    console.error("❌ Seed failed:", err.message);
  } finally {
    await client.close();
    process.exit(0);
  }
}

seed();