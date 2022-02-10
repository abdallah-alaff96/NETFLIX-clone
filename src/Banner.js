import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const reques = await axios.get(fetchUrl);

      setMovie(
        reques.data.results[
          Math.floor(Math.random() * reques.data.results.length - 1)
        ]
      );

      return reques;
    }
    fetchData();
  }, []);

  console.log(movie);

  return <header>hi</header>;
}

export default Banner;
