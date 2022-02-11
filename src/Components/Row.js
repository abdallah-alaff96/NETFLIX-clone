import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../APIs/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";

// From API Docs
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);

      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const clickHandler = (movie) => {
    console.log(movie.name);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.name ||
          movie?.original_name ||
          movie?.title ||
          movie?.original_title ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  const moviesArray = movies.map((movie) => (
    <img
      key={movie.id}
      onClick={clickHandler.bind(null, movie)}
      className={`row__poster ${isLargeRow && "row__posterLarge"}`}
      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
      alt={movie.name}
    />
  ));

  console.log(movies);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">{moviesArray}</div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
