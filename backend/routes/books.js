const express=require("express");
const router = express.Router();
const Books = require("../models/Books");
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require("../controllers/booksController");


//Get All Books
router.get("/", getAllBooks)


//Get Book by Id
router.get("/:id", getBookById);


//Create a Book
router.post("/", createBook);


//Update a Book
router.put("/:id", updateBook);


//Delete a Book
router.delete("/:id", deleteBook);

module.exports = router;