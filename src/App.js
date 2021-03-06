import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./APIs/requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  const NetflixOriginals = requests.fetchNetflixOriginals;
  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={NetflixOriginals} />

      <Row title="NETFLIX ORIGINALS" fetchUrl={NetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
