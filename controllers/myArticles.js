let article = require('../models/article');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports.getMyArticles = function (req, res) {
    let token = req.headers.authorization;
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    // console.log(jwt.verify(token,keys.jwt).userId);
    // res.json(jwt.verify(token,keys.jwt).userId);
    article.find({author:{_id: jwt.verify(token,keys.jwt).userId}})
        .exec(function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.json(docs);
            }
        });
};
