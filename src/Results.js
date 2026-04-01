import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>

      {props.results.meanings.map(function (meaning, index) {
        return <Meaning meaning={meaning} key={index} />;
      })}
    </div>
  );
}
