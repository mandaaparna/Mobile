var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  UserID: Number,
  name: String,
  birthday: String,
  gender: String,
  email: String,
  username: String,
  user_password: String,
});

module.exports = mongoose.model('User', UserSchema);
/*var BookSchema = new mongoose.Schema({
  BookID: Number,
  name: String,
  Professor: String,
  img: String,
  rating: String,
  availability:Number
});
module.exports = mongoose.model('Book', BookSchema);*/
