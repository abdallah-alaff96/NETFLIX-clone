import React, { useEffect, useState } from "react";
import axios from "../APIs/axios";
import "./Row.css";

// From API Docs
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  console.log(fetchUrl);
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
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
