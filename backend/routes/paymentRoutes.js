// Payment routes — Demo (mounts at /api/payments)
const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// GET  /api/payments → list processed payments
// POST /api/payments → process a payment
router.get("/", paymentController.getPayments);
router.post("/", paymentController.processPayment);

module.exports = router;
