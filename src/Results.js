import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
       {props.results.meanings.map(function (meaning, index) {
    return <Meaning meaning={meaning} key={index} />;
  })}
      </div>
    );
  } else {
    return null;
  }
}
