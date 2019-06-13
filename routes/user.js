const express = require('express');
const controller = require('../controllers/user');
const passport = require('passport');
const router = express.Router();

//http://localhost:4000/api/user/:userId
router.get('/', passport.authenticate('jwt', {session: false}),controller.getUser);
router.get('/myArticles', passport.authenticate('jwt', {session: false}),controller.getMyArticles);

module.exports = router;
