const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    author: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    description:{
        type: String
    },
    createDate: {
        type: Date
    },
    updateDate: {
        type: Date
    },
    rating: {
        type: Number
    },
    chapters: [{
        img: {
            type: String
        },
        name: {
            type: String
        },
        text: {
            type: String
        }
    }],
    genre: {
        ref: 'genres',
        type: Schema.Types.ObjectId
    }
}, {
    collection: 'articles'
});

module.exports = mongoose.model('articles', articleSchema);
