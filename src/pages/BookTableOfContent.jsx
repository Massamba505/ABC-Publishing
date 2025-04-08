import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import useFetchData from "../hooks/useFetchData";

function BookTableOfContent() {
  const { bookname } = useParams();
  const { data, loading, error } = useFetchData(bookname);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <Navigation
        where={`book/${bookname}/chapter`}
        navigations={data.navigation}
      />
    </div>
  );
}

export default BookTableOfContent;
