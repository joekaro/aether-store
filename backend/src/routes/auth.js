const express = require("express");
const { register, login, getMe, toggleWishlist } = require("../controllers/authController");
const { protect } = require("../middleware/auth");

const router = express.Router();

// POST /api/auth/register
router.post("/register", register);

// POST /api/auth/login
router.post("/login", login);

// GET /api/auth/me
router.get("/me", protect, getMe);

// PUT /api/auth/wishlist
router.put("/wishlist", protect, toggleWishlist);

module.exports = router;