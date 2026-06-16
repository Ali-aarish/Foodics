// Customer routes — Demo (mounts at /api/customers)
const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// GET  /api/customers → list loyalty customers
// POST /api/customers → add a new customer
router.get("/", customerController.getCustomers);
router.post("/", customerController.addCustomer);

module.exports = router;
