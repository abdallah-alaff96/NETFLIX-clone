import React, { useEffect, useState } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      console.log(response.data.results);
      return response;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Row;
