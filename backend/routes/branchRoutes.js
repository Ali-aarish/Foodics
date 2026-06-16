// Branch routes — Demo (mounts at /api/branches)
const express = require("express");
const router = express.Router();
const branchController = require("../controllers/branchController");

// GET  /api/branches → list all branches
// POST /api/branches → add a new branch
router.get("/", branchController.getBranches);
router.post("/", branchController.addBranch);

module.exports = router;
