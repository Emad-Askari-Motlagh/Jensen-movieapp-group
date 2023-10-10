import React from "react";
import "./Slider.styles.scss";

export default function Slider({ movie, onClose }) {
  return (
    <div className="slider-container">
      <div className="slider">
        <img src={movie?.thumbnail} alt={movie?.title} className="row_poster" />
        <h2>{movie?.title}</h2>
        <p>{movie?.synopsis}</p>
        <div className="dialog_status">
          <h2>
            Rating: <span>{movie?.rating}</span>
          </h2>
          <h2>
            Year: <span>{movie?.year}</span>
          </h2>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
