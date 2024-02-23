const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String
    },
    published_year: {
        type: Number
    }
});

module.exports = mongoose.model("Books", BooksSchema);