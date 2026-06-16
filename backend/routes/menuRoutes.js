// Menu routes — Demo
const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

// GET  /api/menu        → list all menu items
// POST /api/menu        → add a new menu item
router.get("/", menuController.getMenu);
router.post("/", menuController.addMenuItem);

module.exports = router;
