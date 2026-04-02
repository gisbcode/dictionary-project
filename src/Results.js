import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <section className="Results">
      <h2>{props.results.word}</h2>
      <Phonetic phonetic={props.results.phonetic} />

      {props.results.meanings.map(function (meaning, index) {
        return <Meaning meaning={meaning} key={index} />;
      })}
    </section>
  );
}

