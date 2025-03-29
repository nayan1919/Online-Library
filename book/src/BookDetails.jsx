import React from "react";
import { useParams } from "react-router-dom";
import { booksData } from "./booksData";

const BookDetails = () => {
  const { category,id } = useParams();
  const book = booksData[category].find((b) => b.id === Number(id));
  if (!book) return <h2>Book not found</h2>;
  return (
    <div>
      <img src={book.coverImage} alt={book.title} />
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <p>{book.description}</p>
      <p>Price: {book.price}</p>
    </div>
  );
};
export default BookDetails;