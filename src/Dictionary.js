import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
  }

  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=book&key=39a3014fd34afe90bc14c4tc7oed280d`;
  console.log(apiUrl);
  axios.get(apiUrl).then(handleResponse);

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
        />
      </form>
    </div>
  );
}