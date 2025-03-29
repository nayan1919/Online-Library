import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import BrowseBooks from "./BrowseBooks";
import AddBookPage from "./AddBookPage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
      <Route path="/add-book" element={<AddBookPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
