const express = require('express');
const router = express.Router();

const siteController = require("../controllers/siteController");
const roleController = require("../controllers/roleController");
const jwtMiddleware = require("../middleware/jwtMiddlewares");

// GET /api/sites/admin/{user_id}
router.get("/admin", jwtMiddleware.verifyToken, roleController.isSiteAdmin, siteController.getAdminSites);

// POST /api/sites
router.post("/admin", siteController.createSite);

module.exports = router;

