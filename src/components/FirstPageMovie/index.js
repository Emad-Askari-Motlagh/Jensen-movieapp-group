import React from "react";
import "./styles.scss";

export default function FirstPageMovie({ src, title }) {
  return (
    <div className="first-page-movie-wrapper">
      <div className="info">
        <label>{title}</label>
      </div>

      <div>
        <img src={src} alt={title} />
      </div>
    </div>
  );
}
