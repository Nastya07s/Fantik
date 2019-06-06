let genre = require('../models/genre');

module.exports.getGenres = function (req, res) {
    genre.find()
        .exec(function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.json(docs);
            }
        });
};
