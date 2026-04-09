import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (!props.photos || props.photos.length === 0) {
    return null;
  }

  return (
    <section className="Photos">
      <div className="grid">
        {props.photos.map(function (photo, index) {
          return (
            <a
              href={photo.src.original}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <img src={photo.src.landscape} alt={photo.alt} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
