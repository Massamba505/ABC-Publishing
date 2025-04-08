import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { getData } from "../Util/FetchData";

function TableOfContents() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getData("table-of-contents");

        if (!result) {
          setError("Table of Contents not found");
        } else {
          setData(result);
          setError(null);
        }
      } catch (err) {
        setError("Error loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <h1>Table Of Contents</h1>
      <Navigation where="book" navigations={data.navigation} />
    </div>
  );
}

export default TableOfContents;
