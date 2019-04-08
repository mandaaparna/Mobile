var mongoose = require('mongoose');
var UserBookSchema = new mongoose.Schema({
    uid: String,
    bid: String
});
module.exports = mongoose.model('UserCourse', UserBookSchema);
