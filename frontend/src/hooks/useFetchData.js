import { useState, useEffect } from "react";
import { getData } from "../Util/FetchData";

function useFetchData(page) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getData(page);

        if (!result) {
          setError(`${page.charAt(0).toUpperCase() + page.slice(1)} not found`);
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
  }, [page]);

  return { data, loading, error };
}

export default useFetchData;
