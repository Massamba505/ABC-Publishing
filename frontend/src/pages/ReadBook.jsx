import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import useFetchData from "../hooks/useFetchData";
import Header from "../components/Header";
import Content from "../components/Content";
import Layout from "../components/Layout";

function Book() {
  const { bookname, chapter } = useParams();
  const { data, loading, error } = useFetchData(chapter);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <Layout>
      <Header title={data.title} />
      <Content contents={data.content} />
      <Navigation
        where={`book/${bookname}/chapter`}
        navigations={data.navigation}
      />
    </Layout>
  );
}

export default Book;
