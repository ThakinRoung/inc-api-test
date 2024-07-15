const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET /api/users/{user_id}
router.get("/:user_id", userController.readUserById);

// GET /api/users
router.get("/", userController.readAllUsers);

module.exports = router;
