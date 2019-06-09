let user = require('../models/user');

module.exports.getUser = function (req, res) {
    user.findOne({_id: req.params.userId})
        .exec(function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.json(docs);
            }
        });
};
