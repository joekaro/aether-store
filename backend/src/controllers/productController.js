const Product = require("../models/Product");

// GET /api/products
async function getAllProducts(req, res) {
  try {
    const { category, search } = req.query;
    const filter = {};

    if (category) filter.category = new RegExp(category, "i");
    if (search)   filter.$text = { $search: search };

    const products = await Product.find(filter).select("-__v");
    res.json({ success: true, count: products.length, products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// GET /api/products/:id
async function getProductById(req, res) {
  try {
    const product = await Product.findOne({ id: req.params.id }).select("-__v");
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = { getAllProducts, getProductById };