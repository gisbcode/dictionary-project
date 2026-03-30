import React from "react";

export default function Meaning(props) {
  if (!props.meaning || !props.meaning.definitions) {
    return null;
  }

  let definition = props.meaning.definitions[0];
  let example = definition.example;

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{definition.definition}</p>

      {example && <p className="example">"{example}"</p>}
    </div>
  );
}
