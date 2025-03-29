import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./store";

const AddBookPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.title || !formData.author || !formData.category) {
      alert("All fields are required!");
      return;
    }

    // Add new book to Redux store
    dispatch(addBook({ id: Date.now(), ...formData }));

    // Redirect to Browse Books page
    navigate("/browse");
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
