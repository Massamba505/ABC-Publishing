import React from "react";
import Navigation from "../components/Navigation";
import useFetchData from "../hooks/useFetchData";
import Header from "../components/Header";
import Content from "../components/Content";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

function Page() {
  const { section } = useParams();

  const { data, loading, error } = useFetchData(`${section}`);

  if (loading) return <Header title={"Loading..."} />;
  if (error) return <NotFound />;

  return (
    <div className="page">
      <Header title={data.title} />
      <Content contents={data.content} />
      <Navigation where="book" navigations={data.navigation} />
    </div>
  );
}

export default Page;
