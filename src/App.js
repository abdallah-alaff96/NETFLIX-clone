import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>My name is Abdallah</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchActionMovies} />
      <Row title="Trending Now" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
