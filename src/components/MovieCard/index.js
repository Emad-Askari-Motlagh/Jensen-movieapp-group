import React from "react";
import "./MovieCard.styles.scss";

export default function MovieCard({ onClick, movie, index }) {
  return (
    <div key={index}>
      <li onClick={() => onClick(movie.title)} className="movie">
        <img className="movie__image" src={movie.thumbnail} alt={movie.title} />
      </li>
    </div>
  );
}
