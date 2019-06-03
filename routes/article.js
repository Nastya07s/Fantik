const express = require('express');
const controller = require('../controllers/article');
const router = express.Router();

// Defined get data(index or listing) route
//http://localhost:4000/api/name
router.get('', controller.viewAll);
//http://localhost:4000/api/name/:id
router.get('/:id', controller.chaptersView);

module.exports = router;
