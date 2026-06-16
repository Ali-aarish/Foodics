// Auth middleware — Demo (simple token presence check, not real verification)

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  // Demo only: any token is accepted.
  next();
};

module.exports = authMiddleware;
