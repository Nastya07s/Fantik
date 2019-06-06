const express = require('express');
const controller = require('../controllers/article');
const router = express.Router();

// Defined get data(index or listing) route
//http://localhost:4000/api
router.get('', controller.viewAll);
//http://localhost:4000/api/:articleId
router.get('/:articleId', controller.chaptersView);

module.exports = router;
