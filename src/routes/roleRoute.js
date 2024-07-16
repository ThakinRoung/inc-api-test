const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");

const jwtMiddleware = require("../middleware/jwtMiddlewares");

router.put("/:siteId/user/userId", jwtMiddleware.verifyToken, roleController.isSiteAdmin, roleController.UpdateUserRole);
module.exports = router;