const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

// ── PRODUCTS ─────────────────────────────────────────────

async function adminGetProducts(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function adminGetProductById(req, res) {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function adminCreateProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}

async function adminUpdateProduct(req, res) {
  try {
    const product = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, product });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}

async function adminDeleteProduct(req, res) {
  try {
    const product = await Product.findOneAndDelete({ id: req.params.id });
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function adminUpdateStock(req, res) {
  const { variantId, stock } = req.body;
  try {
    const product = await Product.findOneAndUpdate(
      { id: req.params.id, "variants.id": variantId },
      { $set: { "variants.$.stock": stock } },
      { new: true }
    );
    if (!product) return res.status(404).json({ success: false, message: "Product or variant not found" });
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// ── ORDERS ───────────────────────────────────────────────

async function adminGetOrders(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    const [orders, total] = await Promise.all([
      Order.find().sort({ createdAt: -1 }).skip(skip).limit(limit).populate("user", "firstName lastName email"),
      Order.countDocuments(),
    ]);
    res.json({ success: true, orders, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function adminUpdateOrderStatus(req, res) {
  const { status } = req.body;
  const valid = ["processing", "shipped", "delivered", "cancelled"];
  if (!valid.includes(status)) return res.status(400).json({ success: false, message: "Invalid status" });
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!order) return res.status(404).json({ success: false, message: "Order not found" });
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function adminDeleteOrder(req, res) {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ success: false, message: "Order not found" });
    res.json({ success: true, message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// ── CUSTOMERS ────────────────────────────────────────────

async function adminGetCustomers(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    const [users, total] = await Promise.all([
      User.find({ isAdmin: { $ne: true } }).select("-password").sort({ createdAt: -1 }).skip(skip).limit(limit),
      User.countDocuments({ isAdmin: { $ne: true } }),
    ]);
    const enriched = await Promise.all(
      users.map(async (u) => {
        const orders = await Order.find({ user: u._id, paymentStatus: "paid" });
        return { ...u.toObject(), orderCount: orders.length, totalSpent: orders.reduce((s, o) => s + o.total, 0) };
      })
    );
    res.json({ success: true, users: enriched, total, page });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function adminDeleteCustomer(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function adminToggleSuspend(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    user.suspended = !user.suspended;
    await user.save();
    res.json({ success: true, suspended: user.suspended });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// ── ANALYTICS ────────────────────────────────────────────

async function adminGetAnalytics(req, res) {
  try {
    const [totalOrders, totalCustomers, totalProducts, paidOrders] = await Promise.all([
      Order.countDocuments(),
      User.countDocuments({ isAdmin: { $ne: true } }),
      Product.countDocuments(),
      Order.find({ paymentStatus: "paid" }),
    ]);
    const totalRevenue = paidOrders.reduce((s, o) => s + o.total, 0);

    const now = new Date();
    const months = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const start = new Date(date.getFullYear(), date.getMonth(), 1);
      const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const monthOrders = paidOrders.filter((o) => { const d = new Date(o.createdAt); return d >= start && d <= end; });
      months.push({
        month: date.toLocaleString("default", { month: "short" }),
        revenue: monthOrders.reduce((s, o) => s + o.total, 0),
        orders: monthOrders.length,
      });
    }

    res.json({ success: true, summary: { totalRevenue, totalOrders, totalCustomers, totalProducts }, salesChart: months });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = {
  adminGetProducts, adminGetProductById, adminCreateProduct, adminUpdateProduct,
  adminDeleteProduct, adminUpdateStock,
  adminGetOrders, adminUpdateOrderStatus, adminDeleteOrder,
  adminGetCustomers, adminDeleteCustomer, adminToggleSuspend,
  adminGetAnalytics,
};