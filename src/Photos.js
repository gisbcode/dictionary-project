import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (!props.photos) return null;

  return (
    <div className="Photos">
      <div className="grid">
        {props.photos.map(function (photo, index) {
          return (
            <img
              src={photo.src.medium}
              alt=""
              key={index}
              className="img-fluid"
            />
          );
        })}
      </div>
    </div>
  );
}
