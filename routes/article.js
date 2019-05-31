const express = require('express');
const controller = require('../controllers/article');
const router = express.Router();

// Defined get data(index or listing) route
//http://localhost:4000/api/name
router.get('/name', controller.viewAll);

module.exports = router;
