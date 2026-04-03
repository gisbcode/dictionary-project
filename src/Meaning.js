import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (!props.meaning || !props.meaning.definition) {
    return null;
  }

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="Definition">
        <p>{props.meaning.definitions}</p>

        {props.meaning.example && (
          <div className="Example">{props.meaning.example}</div>
        )}
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
