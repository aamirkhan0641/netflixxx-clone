import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./requests";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Let's Go Build the Netflix Clone </h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW " fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchURL={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
