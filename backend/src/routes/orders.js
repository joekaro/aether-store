const express = require("express");
const { createOrder, getMyOrders, getOrderByNumber } = require("../controllers/orderController");
const { protect, optionalAuth } = require("../middleware/auth");

const router = express.Router();

// POST /api/orders  — guest OR logged in
router.post("/", optionalAuth, createOrder);

// GET /api/orders/my  — logged in only
router.get("/my", protect, getMyOrders);

// GET /api/orders/:orderNumber
router.get("/:orderNumber", optionalAuth, getOrderByNumber);

module.exports = router;