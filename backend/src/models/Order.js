const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId:   { type: String, required: true },
  variantId:   { type: String, required: true },
  productName: { type: String, required: true },
  color:       { type: String, required: true },
  size:        { type: String, required: true },
  price:       { type: Number, required: true },
  image:       { type: String },
  quantity:    { type: Number, required: true, min: 1 },
});

const shippingAddressSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true },
  phone:     { type: String },
  address:   { type: String, required: true },
  city:      { type: String, required: true },
  state:     { type: String, required: true },
  zip:       { type: String, required: true },
  country:   { type: String, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    // Not required — auto-generated in pre-validate hook before Mongoose checks
    orderNumber:     { type: String, unique: true },
    user:            { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    items:           [orderItemSchema],
    shippingAddress: shippingAddressSchema,
    shippingMethod:  { type: String, enum: ["standard", "express"], default: "standard" },
    shippingCost:    { type: Number, required: true },
    subtotal:        { type: Number, required: true },
    tax:             { type: Number, required: true },
    total:           { type: Number, required: true },
    paymentStatus:   { type: String, enum: ["pending", "paid", "failed", "refunded"], default: "pending" },
    paystackRef:     { type: String, default: null },
    status:          { type: String, enum: ["processing", "shipped", "delivered", "cancelled"], default: "processing" },
  },
  { timestamps: true }
);

// Use pre("validate") instead of pre("save") so orderNumber exists before required check
orderSchema.pre("validate", function () {
  if (!this.orderNumber) {
    this.orderNumber = `AE-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
  }
});

module.exports = mongoose.model("Order", orderSchema);