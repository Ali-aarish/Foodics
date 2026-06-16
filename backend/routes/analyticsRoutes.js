// Analytics routes — Demo (mounts at /api/analytics)
const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analyticsController");

// GET /api/analytics → summary stats
router.get("/", analyticsController.getAnalytics);

module.exports = router;
