import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (!props.meaning || !props.meaning.definitions) {
    return null;
  }

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="Definition">
            <p>{definition.definition}</p>

            {definition.example && (
              <div className="Example">{definition.example}</div>
            )}
          </div>
        );
      })}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
