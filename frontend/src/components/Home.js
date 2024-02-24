import { Link } from 'react-router-dom';
import { getAllBooks, deleteBook } from '../api/books';
import { useState, useEffect } from 'react';


const Home = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = () => {
        getAllBooks().then(setBooks);
      };
    
      useEffect(() => {
        fetchBooks();
      }, []);
    
      const handleDelete = (id) => {
        deleteBook(id).then(() => {
          fetchBooks();
        });
      };

    console.log(books);
    return (
        <div className="home container mt-3">
            <div className="row">
                <div className="col">
                    <div className='btn btn-primary mb-3'>
                        <Link className='nav-link' to="/add">Add Book</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="table-responsive">
                        <table className="table table-light">
                            <thead>
                                <tr>
                                    <th scope="col">Book title</th>
                                    <th scope="col">Published Date</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(book => (
                                    <tr key={book._id}>
                                        <td>{book.title}</td>
                                        <td>{book.published_year}</td>
                                        <td>{book.author}</td>
                                        <td>
                                        <Link className="btn btn-primary" to={`/update/${book._id}`}>Update</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger"  onClick={() => handleDelete(book._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;