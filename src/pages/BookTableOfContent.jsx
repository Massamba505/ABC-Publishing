import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { getData } from "../Util/FetchData";

function BookTableOfContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { bookname } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getData(bookname);

        if (!result) {
          setError("Book not found");
        } else {
          setData(result);
          setError(null);
        }
      } catch (err) {
        setError("Error loading book");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [bookname]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <h1>{bookname}</h1>
      <Navigation
        where={`book/${bookname}/chapter`}
        navigations={data.navigation}
      />
    </div>
  );
}

export default BookTableOfContent;
