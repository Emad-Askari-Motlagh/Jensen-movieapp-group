import React from "react";
import "./MovieCard.styles.scss";

export default function MovieCard({ onClick, movie, index }) {
  return (
    <div key={index} className="movie-card-wrapper">
      <li onClick={() => onClick(movie.title)} className="movie">
        <label className="movie__label">{movie?.title}</label>
        <img className="movie__image" src={movie.thumbnail} alt={movie.title} />
      </li>
    </div>
  );
}
