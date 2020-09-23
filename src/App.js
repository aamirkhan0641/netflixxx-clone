import React from "react";
import "./App.css";
import Row from "./Row.js";
import request from "./requesst";
import requests from "./requesst";

function App() {
  return (
    <div className="App">
      <h1>Let's Go Aamir Build the Netflix Clone </h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW " fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
