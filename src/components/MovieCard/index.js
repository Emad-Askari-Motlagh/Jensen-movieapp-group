import React from "react";
import "./MovieCard.styles.scss";
import { AiOutlineStar } from "react-icons/ai";

export default function MovieCard({ onClick, movie, index, addFavorite }) {
  return (
    <div key={index} className="movie-card-wrapper">
      <li className="movie">
        <AiOutlineStar
          className="movie__start"
          size={24}
          onClick={() => addFavorite(movie)}
        />
        <label className="movie__label">{movie?.title}</label>
        <img
          onClick={() => onClick(movie.title)}
          className="movie__image"
          src={movie.thumbnail}
          alt={movie.title}
        />
      </li>
    </div>
  );
}
