const express=require("express");
const router = express.Router();
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require("../controllers/booksController");

router.use((req,res,next)=>{
    req.startTime = performance.now();
    next();
})

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