const express = require('express');
const router = express.Router();
const sessionRoute = require("./sessionRoute");
const siteRoute = require("./siteRoute");
const roleRoute = require("./roleRoute");

const sessionController = require("../controllers/sessionController");

router.use("/users", userRoute);
router.use("/sessions", sessionRoute);
router.use("/sites", siteRoute);
router.use ("/roles", roleRoute);


router.use("/sessions", sessionController.updateLogoutTimestamp);

router.put("/logout")
module.exports = router;