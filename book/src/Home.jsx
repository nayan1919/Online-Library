import React from "react";
import { Link } from "react-router-dom";
import { booksData } from "./booksData";
import BookCard from "./Card";

const Home = () => {
  // Ensure categories are unique
  // const categories = [...new Set(booksData.map((book) => book.category))];

  return (
    <div>
      <h1 className="online">Online Library</h1>
      <h2 className="online">Book Categories</h2>

      <div className="category-links">
        <Link to={`/books/fictionBooks`}>FICTION</Link>
        <Link to={`/books/nonFictionBooks`}>NON-FICTION</Link>
        <Link to={`/books/sciFiBooks`}>SCI-fi</Link>
      </div>

      <div className="parent">
        {booksData.popularBooks.map((book, index) => (
          <BookCard key={index} book={book} category="popularBooks" />
        ))}
      </div>

    </div>
  );
};

export default Home;
