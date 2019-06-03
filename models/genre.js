const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: {
        type: String
    }
}, {
    collection: 'genres'
});

module.exports = mongoose.model('genres', genreSchema);
