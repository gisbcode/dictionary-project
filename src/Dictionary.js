import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [error, setError] = useState("");

  function handleResponse(response) {
    console.log("API response:", response.data);
    setResults(response.data);
    setError("");
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "39a3014fd34afe90bc14c4tc7oed280d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        console.log("API error:", error);
        setError("Something went wrong. Check your API response.");
      });
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          value={keyword}
          onChange={keywordChange}
          placeholder="Search a word..."
          autoFocus
        />
      </form>

      {error && <p>{error}</p>}

      <Results results={results} />
    </div>
  );
}
