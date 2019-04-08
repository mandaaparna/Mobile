var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
    BookID: Number,
    name: String,
    Professor: String,
    img: String,
    rating: String,
    availability:Number
});
module.exports = mongoose.model('Book', BookSchema);
