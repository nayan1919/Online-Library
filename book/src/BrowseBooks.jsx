import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "./Card";
import "./style.css"; // Import CSS file

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books); // Fetch books from Redux store

  // Filter books by category
  const filteredBooks = category
    ? books.filter((book) => book.category.toLowerCase() === category.toLowerCase())
    : books;

  const [search, setSearch] = useState("");

  // Filter books by search query
  const searchedBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Browse Books</h1>
      <Link to="/add">Add New Book</Link>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title or author..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Book Cards */}
      <div className="parent">
        {searchedBooks.length > 0 ? (
          searchedBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p style={{ textAlign: "center" }}>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
