import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

// From API Docs
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);

      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>

      <div className="row__posters">
        {/* several row posters */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
