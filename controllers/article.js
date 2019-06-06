// Require article model in our routes module
let article = require('../models/article');
let genre = require('../models/genre');

module.exports.viewAll = function (req, res) {
    article.find().populate('author', 'username')
        .populate('genre','name')
        .exec(function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            res.json(docs);
        }
    });
};

module.exports.chaptersView = function (req, res) {
    article.findOne({"_id": req.params.articleId}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    })
};
