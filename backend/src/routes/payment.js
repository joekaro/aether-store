const express = require("express");
const { initializePayment, verifyPayment, webhook } = require("../controllers/paymentController");

const router = express.Router();

// POST /api/payment/initialize
router.post("/initialize", initializePayment);

// GET /api/payment/verify/:reference
router.get("/verify/:reference", verifyPayment);

// POST /api/payment/webhook  — called by Paystack
// Raw body needed for signature verification
router.post("/webhook", express.raw({ type: "application/json" }), webhook);

module.exports = router;