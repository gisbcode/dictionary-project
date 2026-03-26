import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventdefault();
    alert(`Searching for ${keyword} definition`);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" autoFocus={true} onChange={keywordChange} />
      </form>
    </div>
  );
}
