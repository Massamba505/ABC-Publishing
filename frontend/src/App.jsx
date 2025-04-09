import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ReadBook from "./pages/ReadBook";
import BookTableOfContent from "./pages/BookTableOfContent";
import NotFound from "./pages/NotFound";
import Page from "./pages/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/preface" />} />
        <Route path="/:section" element={<Page />} />
        <Route path="/book/:bookname" element={<BookTableOfContent />} />
        <Route path="/book/:bookname/chapter/:chapter" element={<ReadBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
