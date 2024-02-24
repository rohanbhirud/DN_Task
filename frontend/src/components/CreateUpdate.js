import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById, updateBook, createBook } from "../api/books";

const CreateUpdate = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [published_year, setYear] = useState("");

  useEffect(() => {
    if (id) {
      getBookById(id).then((book) => {
        setTitle(book.title);
        setAuthor(book.author);
        setDescription(book.description);
        setYear(book.published_year);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      description,
      published_year: Number(published_year),
    };
    try {
      if (id) {
        await updateBook(id, book);
      } else {
        await createBook(book);
      }
      navigate("/");
    } catch (error) {
      console.error("Error creating book:", error);
    }
    navigate('/');
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ fontWeight: 'bold' }}>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Author:</label>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Published Year:</label>
              <input
                type="number"
                className="form-control"
                value={published_year}
                max="2022"
                onChange={(e) => {
                    const currentYear = new Date().getFullYear();
                    if (e.target.value > currentYear) {
                      setYear(currentYear);
                    } else {
                      setYear(e.target.value);
                    }
                  }}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {id ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default CreateUpdate;
