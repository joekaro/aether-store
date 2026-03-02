const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  id:       { type: String, required: true },
  color:    { type: String, required: true },
  colorHex: { type: String, required: true },
  size:     { type: String, required: true },
  price:    { type: Number, required: true },
  stock:    { type: Number, required: true, default: 0 },
  images:   [{ type: String }],
});

const productSchema = new mongoose.Schema(
  {
    id:          { type: String, required: true, unique: true }, // slug e.g. "aether-runner-pro"
    name:        { type: String, required: true },
    brand:       { type: String, required: true },
    category:    { type: String, required: true },
    description: { type: String, required: true },
    basePrice:   { type: Number, required: true },
    rating:      { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    variants:    [variantSchema],
  },
  { timestamps: true }
);

// Index for fast category filtering and text search
productSchema.index({ category: 1 });
productSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Product", productSchema);