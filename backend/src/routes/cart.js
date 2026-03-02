const express = require("express");
const { protect } = require("../middleware/auth");
const User = require("../models/User");
const Product = require("../models/Product");

const router = express.Router();

// All cart routes require auth
// The frontend CartContext handles guest cart state locally.
// These routes sync cart to DB for logged-in users.

// GET /api/cart
router.get("/", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("cart");
    res.json({ success: true, cart: user.cart || [] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/cart/sync  — sync frontend cart to DB on login
router.post("/sync", protect, async (req, res) => {
  const { items } = req.body;
  if (!Array.isArray(items)) {
    return res.status(400).json({ success: false, message: "items array required" });
  }

  try {
    // Validate each item against DB
    const validated = [];
    for (const item of items) {
      const product = await Product.findOne({ id: item.productId });
      if (!product) continue;
      const variant = product.variants.find((v) => v.id === item.variantId);
      if (!variant || variant.stock <= 0) continue;
      validated.push({
        productId:   item.productId,
        variantId:   item.variantId,
        productName: product.name,
        color:       variant.color,
        size:        variant.size,
        price:       variant.price,
        image:       variant.images?.[0] ?? "",
        quantity:    Math.min(item.quantity, variant.stock),
      });
    }

    res.json({ success: true, cart: validated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;