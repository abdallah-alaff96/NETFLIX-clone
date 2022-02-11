import React, { useState, useEffect } from "react";
import axios from "../APIs/axios";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

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

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        // backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        // backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* div 2 buttons */}
        <div>
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* description */}
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
        <div className="banner--fadeBottom"></div>
      </div>
    </header>
  );
}

export default Banner;
