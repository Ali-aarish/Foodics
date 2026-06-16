// Inventory routes — Demo (mounts at /api/inventory)
const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

// GET /api/inventory → list stock items
// PUT /api/inventory → update stock for an item
router.get("/", inventoryController.getInventory);
router.put("/", inventoryController.updateStock);

module.exports = router;
