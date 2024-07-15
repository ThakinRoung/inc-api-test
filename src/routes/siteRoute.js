const express = require('express');
const router = express.Router();
const siteController = require("../controllers/siteController");

// GET /api/sites/admin/{user_id}
router.get("/admin/:user_id", siteController.readSiteById);

// POST /api/sites
router.post("/", siteController.createSite);

module.exports = router;
