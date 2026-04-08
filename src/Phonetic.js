import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (!props.phonetic.text) return null;

  return (
    <div className="Phonetic">
      {props.phonetic.audio && (
        <audio controls src={props.phonetic.audio}>
          Your browser does not support audio
        </audio>
      )}

      <div className="text">{props.phonetic.text}</div>
    </div>
  );
}
