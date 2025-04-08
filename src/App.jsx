import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Preface from "./pages/Preface";
import ReadBook from "./pages/ReadBook";
import TableOfContent from "./pages/TableOfContents";
import BookTableOfContent from "./pages/BookTableOfContent";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/preface" />} />
        <Route path="/preface" element={<Preface />} />
        <Route path="/table-of-contents" element={<TableOfContent />} />
        <Route path="/book/:bookname" element={<BookTableOfContent />} />
        <Route path="/book/:bookname/chapter/:chapter" element={<ReadBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
