const axios = require("axios");
const Order = require("../models/Order");
const Product = require("../models/Product");

const PAYSTACK_BASE = "https://api.paystack.co";

function paystackHeaders() {
  return {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    "Content-Type": "application/json",
  };
}

// POST /api/payment/initialize
// Called after order is created — returns Paystack authorization_url
async function initializePayment(req, res) {
  const { orderNumber, email } = req.body;

  if (!orderNumber || !email) {
    return res.status(400).json({ success: false, message: "orderNumber and email required" });
  }

  try {
    const order = await Order.findOne({ orderNumber });
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    if (order.paymentStatus === "paid") {
      return res.status(400).json({ success: false, message: "Order already paid" });
    }

    // Initialize Paystack transaction
    // Amount must be in kobo (NGN) or pesewas (GHS) — multiply by 100
    const response = await axios.post(
      `${PAYSTACK_BASE}/transaction/initialize`,
      {
        email,
        amount: Math.round(order.total * 100), // convert to smallest currency unit
        reference: orderNumber,
        currency: "NGN", // Change to USD, GHS etc as needed
        metadata: {
          orderNumber,
          custom_fields: [
            { display_name: "Order Number", variable_name: "order_number", value: orderNumber },
          ],
        },
        callback_url: `${process.env.FRONTEND_URL}/checkout/verify?ref=${orderNumber}`,
      },
      { headers: paystackHeaders() }
    );

    const { authorization_url, reference, access_code } = response.data.data;

    res.json({
      success: true,
      authorization_url,
      reference,
      access_code,
    });
  } catch (err) {
    const msg = err.response?.data?.message || err.message;
    res.status(500).json({ success: false, message: msg });
  }
}

// GET /api/payment/verify/:reference
// Called after Paystack redirects back — verify the transaction
async function verifyPayment(req, res) {
  const { reference } = req.params;

  try {
    const response = await axios.get(
      `${PAYSTACK_BASE}/transaction/verify/${reference}`,
      { headers: paystackHeaders() }
    );

    const { status, amount, metadata } = response.data.data;

    if (status !== "success") {
      return res.status(400).json({ success: false, message: "Payment was not successful" });
    }

    // Find and update the order
    const order = await Order.findOne({ orderNumber: metadata?.orderNumber || reference });
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    if (order.paymentStatus === "paid") {
      return res.json({ success: true, message: "Already verified", order });
    }

    // Verify amount matches (Paystack returns amount in kobo)
    const expectedKobo = Math.round(order.total * 100);
    if (amount < expectedKobo) {
      return res.status(400).json({ success: false, message: "Amount mismatch — possible fraud" });
    }

    // Mark order as paid and deduct stock
    order.paymentStatus = "paid";
    order.paystackRef = reference;
    await order.save();

    // Deduct stock for each variant
    for (const item of order.items) {
      await Product.updateOne(
        { id: item.productId, "variants.id": item.variantId },
        { $inc: { "variants.$.stock": -item.quantity } }
      );
    }

    res.json({ success: true, order });
  } catch (err) {
    const msg = err.response?.data?.message || err.message;
    res.status(500).json({ success: false, message: msg });
  }
}

// POST /api/payment/webhook
// Paystack sends events here — verify signature and handle
async function webhook(req, res) {
  const crypto = require("crypto");
  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.status(401).send("Invalid signature");
  }

  const { event, data } = req.body;

  if (event === "charge.success") {
    try {
      const order = await Order.findOne({ orderNumber: data.reference });
      if (order && order.paymentStatus !== "paid") {
        order.paymentStatus = "paid";
        order.paystackRef = data.reference;
        await order.save();

        for (const item of order.items) {
          await Product.updateOne(
            { id: item.productId, "variants.id": item.variantId },
            { $inc: { "variants.$.stock": -item.quantity } }
          );
        }
      }
    } catch (err) {
      console.error("Webhook error:", err.message);
    }
  }

  res.sendStatus(200);
}

module.exports = { initializePayment, verifyPayment, webhook };