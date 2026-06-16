// User routes — Demo (mounts at /api/users)
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET  /api/users → list staff users
// POST /api/users → add a new staff user
router.get("/", userController.getUsers);
router.post("/", userController.addUser);

module.exports = router;
