import React from "react";
import Navigation from "../components/Navigation";
import useFetchData from "../hooks/useFetchData";

function Preface() {
  const { data, loading, error } = useFetchData("preface");

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <Navigation navigations={data.navigation} />
    </div>
  );
}

export default Preface;
