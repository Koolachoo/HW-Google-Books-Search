const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  
  authors: {
    type: Array,
    default: "",
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default: ""
  },
  
  link: {
    type: String,
    default: "",
    unique: true
  }
});

const Book = mongoose.model("googlebooks", BookSchema);

module.exports = Book;
