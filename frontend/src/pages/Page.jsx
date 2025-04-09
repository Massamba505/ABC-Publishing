import React from "react";
import Navigation from "../components/Navigation";
import useFetchData from "../hooks/useFetchData";
import Header from "../components/Header";
import Content from "../components/Content";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

function Page() {
  const { section } = useParams();

  const { data, loading, error } = useFetchData(`${section}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <Layout>
      <Header title={data.title} />
      <Content contents={data.content} />
      <Navigation where="book" navigations={data.navigation} />
    </Layout>
  );
}

export default Page;
