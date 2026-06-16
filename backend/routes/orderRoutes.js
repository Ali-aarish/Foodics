// Order routes — Demo
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// GET  /api/orders     → list all orders
// POST /api/orders     → create a new order
router.get("/", orderController.getOrders);
router.post("/", orderController.createOrder);

module.exports = router;
