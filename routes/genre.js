const express = require('express');
const controller = require('../controllers/genre');
const router = express.Router();

//http://localhost:4000/api/genres
router.get('', controller.getGenres);

module.exports = router;
