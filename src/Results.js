import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  let data = props.results;

  if (Array.isArray(data)) {
    data = data[0];
  }

  if (!data || !data.meanings) {
    return null;
  }

  return (
    <div className="Results">
      <h2>{data.word}</h2>

      {data.phonetic && <p>{data.phonetic}</p>}

      {data.meanings.map(function (meaning, index) {
        return <Meaning meaning={meaning} key={index} />;
      })}
    </div>
  );
}
