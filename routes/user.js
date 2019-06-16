const express = require('express');
const controller = require('../controllers/user');
const passport = require('passport');
const router = express.Router();

//http://localhost:4000/api/user/
router.get('/',
    passport.authenticate('jwt', {session: false}),controller.getUser);
router.post('/destroy',
    passport.authenticate('jwt', {session: false}),controller.destroyArticle);
router.patch('/update/:articleId',
    passport.authenticate('jwt', {session: false}),controller.updateArticle);
router.post('/create',
    passport.authenticate('jwt', {session: false}),controller.createArticle);
router.get('/edit/:articleId',
    passport.authenticate('jwt', {session: false}),controller.getArticleUser);


module.exports = router;
