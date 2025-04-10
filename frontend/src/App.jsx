import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ReadBook from "./pages/ReadBook";
import BookTableOfContent from "./pages/BookTableOfContent";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/preface" />} />
        <Route path="/:section" element={<Page />} />
        <Route path="/book/:bookname" element={<BookTableOfContent />} />
        <Route path="/book/:bookname/chapter/:chapter" element={<ReadBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
