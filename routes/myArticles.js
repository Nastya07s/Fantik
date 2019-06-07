const express = require('express');
const controller = require('../controllers/myArticles');
const router = express.Router();

//http://localhost:4000/api/myArticles/:userId
router.get('/:userId', controller.getMyArticles);

module.exports = router;
