const express = require("express");
const { protect } = require("../middleware/auth");
const { isAdmin } = require("../middleware/isAdmin");
const {
  adminGetProducts, adminGetProductById, adminCreateProduct, adminUpdateProduct,
  adminDeleteProduct, adminUpdateStock,
  adminGetOrders, adminUpdateOrderStatus, adminDeleteOrder,
  adminGetCustomers, adminDeleteCustomer, adminToggleSuspend,
  adminGetAnalytics,
} = require("../controllers/adminController");

const router = express.Router();
router.use(protect, isAdmin);

// Products
router.get("/products",           adminGetProducts);
router.get("/products/:id",       adminGetProductById);
router.post("/products",          adminCreateProduct);
router.put("/products/:id",       adminUpdateProduct);
router.delete("/products/:id",    adminDeleteProduct);
router.patch("/products/:id/stock", adminUpdateStock);

// Orders
router.get("/orders",             adminGetOrders);
router.patch("/orders/:id/status",adminUpdateOrderStatus);
router.delete("/orders/:id",      adminDeleteOrder);

// Customers
router.get("/customers",          adminGetCustomers);
router.delete("/customers/:id",   adminDeleteCustomer);
router.patch("/customers/:id/suspend", adminToggleSuspend);

// Analytics
router.get("/analytics",          adminGetAnalytics);

module.exports = router;