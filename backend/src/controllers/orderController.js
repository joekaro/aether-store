const Order = require("../models/Order");
const Product = require("../models/Product");

// POST /api/orders  — Create order (guest or logged in)
async function createOrder(req, res) {
  const { items, shippingAddress, shippingMethod } = req.body;

  if (!items?.length || !shippingAddress) {
    return res.status(400).json({ success: false, message: "Items and shipping address are required" });
  }

  try {
    // Verify stock and calculate totals from DB (never trust client prices)
    let subtotal = 0;
    const verifiedItems = [];

    for (const item of items) {
      const product = await Product.findOne({ id: item.productId });
      if (!product) {
        return res.status(400).json({ success: false, message: `Product not found: ${item.productId}` });
      }

      const variant = product.variants.find((v) => v.id === item.variantId);
      if (!variant) {
        return res.status(400).json({ success: false, message: `Variant not found: ${item.variantId}` });
      }

      if (variant.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${product.name} — ${variant.color} ${variant.size}`,
        });
      }

      subtotal += variant.price * item.quantity;
      verifiedItems.push({
        productId:   item.productId,
        variantId:   item.variantId,
        productName: product.name,
        color:       variant.color,
        size:        variant.size,
        price:       variant.price,
        image:       variant.images?.[0] ?? "",
        quantity:    item.quantity,
      });
    }

    const shippingCost = shippingMethod === "express" ? 14.99 : subtotal >= 100 ? 0 : 6.99;
    const tax = parseFloat((subtotal * 0.08).toFixed(2));
    const total = parseFloat((subtotal + shippingCost + tax).toFixed(2));

    const order = await Order.create({
      user:            req.user?._id ?? null,
      items:           verifiedItems,
      shippingAddress,
      shippingMethod:  shippingMethod || "standard",
      shippingCost,
      subtotal,
      tax,
      total,
    });

    res.status(201).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// GET /api/orders/my  — Get logged-in user's orders
async function getMyOrders(req, res) {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// GET /api/orders/:orderNumber  — Get single order by number
async function getOrderByNumber(req, res) {
  try {
    const order = await Order.findOne({ orderNumber: req.params.orderNumber });
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = { createOrder, getMyOrders, getOrderByNumber };