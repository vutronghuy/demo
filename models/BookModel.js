const mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
    title : String,
    author : String,
    date : String,
    price : Number,
    quantity : Number,
    image : String,
    video : String


});

//note
var BookModel = mongoose.model("sach", BookSchema, "gch1103");

module.exports = BookModel;