import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  

  const load = useCallback(() => {
    let apiKey = "39a3014fd34afe90bc14c4tc7oed280d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }, [keyword]);

  
  useEffect(() => {
    load();
  }, [load]);

  function handleSubmit(event) {
    event.preventDefault();
    load();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="search-box">
        <h1>What word do you want to look up?</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={updateKeyword}
            value={keyword}
            placeholder="Type a word..."
            autoFocus
          />
        </form>

        <small>i.e. paris, wine, yoga, coding</small>
      </section>

      <Results results={results} />
    </div>
  );
}
