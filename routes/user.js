const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

//http://localhost:4000/api/user/:userId
router.get('/:userId', controller.getUser);

module.exports = router;
