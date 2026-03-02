// Must be used AFTER the protect middleware
function isAdmin(req, res, next) {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ success: false, message: "Admin access required" });
  }
  next();
}

module.exports = { isAdmin };