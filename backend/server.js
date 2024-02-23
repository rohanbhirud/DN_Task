require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const booksRouter = require("./routes/books");


const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, res.method);
    next();
});
app.use("/api/books", booksRouter);


app.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT)
});