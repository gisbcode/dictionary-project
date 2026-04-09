import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (!props.photos || props.photos.length === 0) {
    return null;
  }

  return (
    <div className="Photos">
      <div className="grid">
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.medium} alt={photo.alt} key={index} />;
        })}
      </div>
    </div>
  );
}
