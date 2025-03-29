import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Import CSS file

export const Header = () => {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/books/popular">Browse Books</Link> 
          <Link to="/add">Add Book</Link>
        </div>
      </nav>
    </div>
  );
};
