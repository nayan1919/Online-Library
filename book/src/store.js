import { configureStore, createSlice } from "@reduxjs/toolkit";

// Dummy books data
const initialBooks = [
  { id: 1, title: "Book One", author: "Author A", category: "Fiction" },
  { id: 2, title: "Book Two", author: "Author B", category: "Non-Fiction" },
];

// Redux slice for books
const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export default store;
