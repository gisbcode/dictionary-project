import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (!props.synonyms || props.synonyms.length === 0) {
    return null;
  }

  return (
    <div className="Synonyms">
      <strong>Similar:</strong>
      <ul>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    </div>
  );
}
