import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import useFetchData from "../hooks/useFetchData";
import Header from "../components/Header";
import Content from "../components/Content";
import NotFound from "./NotFound";

function BookTableOfContent() {
  const { bookname } = useParams();
  const { data, loading, error } = useFetchData(bookname);

  if (loading) return <Header title={"Loading..."} />;
  if (error) return <NotFound />;

  return (
    <>
      <Header title={data.title} />
      <Content contents={data.content} />
      <Navigation
        where={`book/${bookname}/chapter`}
        navigations={data.navigation}
      />
    </>
  );
}

export default BookTableOfContent;
