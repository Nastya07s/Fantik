const mongoose = require('mongoose');
  // require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

// var SchemaTypes = mongoose.Schema.Types;
// Define collection and schema for article
let articleSchema = new Schema({
  name: {
    type: String
  },
  author: {
    ref: 'users',
    type: Schema.Types.ObjectId
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
  chapters: {
    type: Number
  },
  genre: {
    type: String
  }
},{
  collection: 'articles'
});

module.exports = mongoose.model('articles', articleSchema);
