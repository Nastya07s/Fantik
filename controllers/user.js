let user = require('../models/user');
let article = require('../models/article');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports.getUser = function (req, res) {
    let token = req.headers.authorization;
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    user.findOne({_id: jwt.verify(token,keys.jwt).userId})
        .exec(function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.json(docs);
            }
        });
};

module.exports.getMyArticles = function (req, res) {
    let token = req.headers.authorization;
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    article.find({author:{_id: jwt.verify(token,keys.jwt).userId}})
        .exec(function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.json(docs);
            }
        });
};
