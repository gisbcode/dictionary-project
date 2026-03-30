import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "39a3014fd34afe90bc14c4tc7oed280d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
        />
      </form>

      {results && (
        <div className="Results">
          <h2>{results.word}</h2>
          <p>{results.meanings[0].definition}</p>
        </div>
      )}
    </div>
  );
}
