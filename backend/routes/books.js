const express=require("express");
const router = express.Router();
const Books = require("../models/Books");
//Get All Books
router.get("/", async (req, res) => {
    try {
        const data = await Books.find({});

        if (!data) {
            throw new Error("Empty Data");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})


//Get Book by Id
router.get("/:id", async (req, res) => {
    try {
        const book_id = req.params.id;
        const data = await Books.findById(book_id);

        if (!data) {
            throw new Error("Book not found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: "Book not found" });
    }
});


//Create a Book
router.post("/", async (req, res) => {
    try {

        const { title, description, author, published_year } = req.body;

        const data = await Books.create({ title, description, author, published_year });

        if (!data) {
            throw new Error("Error occured while creating a book");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: "Error occured while creating a book" });
    }
});


//Update a Book
router.put("/:id", async (req, res) => {
    try {
        const book_id = req.params.id;

        const { title, description, author, published_year } = req.body;

        const data = await Books.findByIdAndUpdate(book_id, { title, description, author, published_year });

        if (!data) {
            throw new Error("Error occured while updating a book");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({error: "Error occured while updating a book"});
    }
});


//Delete a Book
router.delete("/:id", async (req, res) => {
    try {
        const book_id = req.params.id;

        const data = await Books.findByIdAndDelete(book_id);

        if (!data) {
            throw new Error("Error occured while deleting a book");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({error: "Error occured while deleting a book"});
    }
});

module.exports = router;