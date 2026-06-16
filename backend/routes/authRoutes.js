// Auth routes — Demo (mounts at /api/auth)
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /api/auth/login    → demo login (returns fake token)
// POST /api/auth/register → demo register
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
