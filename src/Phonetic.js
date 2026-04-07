import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (!props.phonetic) {
    return null;
  }

  return (
    <div className="Phonetic">
      {props.phonetic.audio && (
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}