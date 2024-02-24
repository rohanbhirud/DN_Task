import axios from 'axios';
const IP = "https://dn-task.onrender.com";

const getAllBooks = async () => {
  try {
    const response = await axios.get(IP+'/api/books');
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

const getBookById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:9999/api/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with id ${id}:`, error);
  }
};

const createBook = async (newBook) => {
  try {
    const response = await axios.post('http://localhost:9999/api/books', newBook);
    return response.data;
  } catch (error) {
    console.error('Error creating book:', error);
  }
};

const updateBook = async (id, updatedBook) => {
  try {
    const response = await axios.put(`http://localhost:9999/api/books/${id}`, updatedBook);
    return response.data;
  } catch (error) {
    console.error(`Error updating book with id ${id}:`, error);
  }
};

const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:9999/api/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting book with id ${id}:`, error);
  }
};

export {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};