import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("http://localhost:3001/api/books");
    },
    searchBooks: (title) => {
        console.log('about ot serach this title', title)
        return axios.post("http://localhost:3001/search", {title: title});
    },
    addBookToDB: (bookData) => {
        return axios.post("http://localhost:3001/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete(`http://localhost:3001/api/books/${id}`);
    }
}