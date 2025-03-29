import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const BookCard = ({ book,category }) => {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <p>by {book.author} ({book.year})</p>
      <span className="genre">{book.genre}</span>
      <p className="description">{book.description}</p>
      <div className="card-footer">
        <span className="rating">⭐ {book.rating}</span>
        <Link to={`/book/${category}/${book.id}`}><button className="details-btn">View Details</button></Link>
      </div>
    </div>
  );
};

export default BookCard;
