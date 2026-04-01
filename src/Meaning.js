import React from "react";

export default function Meaning(props) {
  if (!props.meaning || !props.meaning.definitions) {
    return null;
  }

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            {definition.example && <p>{definition.example}</p>}
          </div>
        );
      })}
    </div>
  );
}
