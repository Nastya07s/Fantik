let user = require('../models/user');
let article = require('../models/article');
let genre = require('../models/genre');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.getUser = function (req, res) {
    let token = req.headers.authorization;
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    user.findOne({_id: jwt.verify(token, keys.jwt).userId})
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
    article.find({author: {_id: jwt.verify(token, keys.jwt).userId}})
        .exec(function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.json(docs);
            }
        });
};

module.exports.createArticle = async function (req, res) {
    let token = req.headers.authorization;
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    await genre.findOne({name: req.body.genre})
        .exec(async function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                const newArticle = new article({
                    name: req.body.name,
                    author: jwt.verify(token, keys.jwt).userId,
                    description: req.body.description,
                    createDate: new Date(),
                    updateDate: new Date(),
                    rating: 0,
                    chapters: [],
                    genre: doc._id,
                });
                try {
                    await newArticle.save();
                    res.status(201).json(newArticle);
                } catch (e) {
                    errorHandler(res, e)
                }
            }
        });
};

module.exports.getArticleUser = function (req, res) {
    article.findOne({"_id": req.params.articleId})
        .populate('genre','name')
        .exec(function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    })
};

module.exports.destroyArticle = function (req, res) {
    article.deleteOne({"_id": req.body.articleId}, function (err, result) {

        if (err) {

            console.log("error query");
            res.json({fl: false});
        } else {

            console.log(result);
            res.json({fl: true});
        }
    });
};

module.exports.updateArticle = async function (req,res){
    try {
        // const newGenre:{};
        genre.findOne({name: req.body.genre}).exec(async function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                const newArticle = await article.findOneAndUpdate({_id: req.params.articleId}, {
                    name: req.body.name,
                    description: req.body.description,
                    genre: doc._id,
                    updateDate: new Date(),
                }, {new: true});
                res.status(200).json(newArticle)
            }
        });
        // console.log(newGenre);

    }
    catch (e){
     errorHandler(res,e)
    }
};
