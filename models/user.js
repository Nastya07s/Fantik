const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username:{
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  password: {
    type: String
  }
},{
  collection: 'users'
});

module.exports = mongoose.model('users', userSchema);
