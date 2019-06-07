let article = require('../models/article');

module.exports.getMyArticles = function (req, res) {
    article.find({author:{_id: req.params.userId}})
        .exec(function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.json(docs);
            }
        });
};
