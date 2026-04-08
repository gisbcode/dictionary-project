import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // 🔊 FREE DICTIONARY API (audio included)
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    // 🖼️ PEXELS API
    let pexelsApiKey =
      "wwT4SEN3DiDgSlUwCPlXMj9umXPdOHsIIPuwrprFi2pQ7C1338eoqGpe";
    let headers = { Authorization: pexelsApiKey };
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="Dictionary">
      <section className="search-box">
        <h1>What word do you want to look up?</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="search"
            defaultValue={props.defaultKeyword}
            onChange={updateKeyword}
            placeholder="Type a word..."
            autoFocus
          />
        </form>

        <small>i.e. paris, wine, yoga, coding</small>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
