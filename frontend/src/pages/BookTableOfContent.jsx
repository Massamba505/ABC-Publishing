import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import useFetchData from "../hooks/useFetchData";
import Header from "../components/Header";
import Content from "../components/Content";

function BookTableOfContent() {
  const { bookname } = useParams();
  const { data, loading, error } = useFetchData(bookname);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <Header title={data.title} />
      <Content contents={data.content} />
      <Navigation
        where={`book/${bookname}/chapter`}
        navigations={data.navigation}
      />
    </div>
  );
}

export default BookTableOfContent;
