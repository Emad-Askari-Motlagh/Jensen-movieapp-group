import React from "react";
import "./styles.scss";

export default function FirstPageMovie({ src, title }) {
  return (
    <div className="first-page-movie-wrapper">
      <div className="info">
        <h1 className="info__main-header">{title}</h1>
        <h2 className="info__cecoundary-header">
          A movie collection from all over the world
        </h2>
      </div>

      <div>
        <img src={src} alt={title} />
      </div>
    </div>
  );
}
