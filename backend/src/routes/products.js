const express = require("express");
const { getAllProducts, getProductById } = require("../controllers/productController");

const router = express.Router();

// GET /api/products?category=Running&search=runner
router.get("/", getAllProducts);

// GET /api/products/:id
router.get("/:id", getProductById);

module.exports = router;