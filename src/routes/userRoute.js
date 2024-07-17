const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.delete('/super-admin/:userId', userController.deleteUserBySuperAdmin);
router.delete('/admin/:userId', userController.deleteUserBySiteAdmin);
module.exports = router; 