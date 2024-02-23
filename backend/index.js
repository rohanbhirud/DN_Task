require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Books = require("./models/Books");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT)
});


//Get All Books
app.get("/api/books", async (req, res) => {
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
app.get("/api/books/:id", async (req, res) => {
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
app.post("/api/books", async (req, res) => {
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
app.put("/api/books/:id", async (req, res) => {
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