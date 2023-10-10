import React, { useState, useEffect } from "react";
import "./FavoriteMovies.styles.scss";
import useFavorites from "../../hooks/useFavorites";
import MovieCard from "../../components/MovieCard/index";
import Button from "components/Button";
import { BiMinus } from "react-icons/bi";

const FavoriteMovies = () => {
  const { removeFavorite, fetchFavorites, favorites } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const res = fetchFavorites();
    setFavoriteMovies([...res]);
  }, []);

  const removeFromFavorites = (movieToRemove) => {
    removeFavorite(movieToRemove);
  };
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <div className="favorite-movies-wrapper">
      <h1>Favorited Movies</h1>
      {favoriteMovies.length === 0 ? (
        <p>No movies in favorites.</p>
      ) : (
        <ul className="favorite-movies">
          {favoriteMovies.map((movie, i) => (
            <div key={i} style={{ color: "wheat", position: "relative" }}>
              <MovieCard movie={movie} />
              <div className="favorite-movies__minus">
                <BiMinus onClick={() => removeFromFavorites(movie)}></BiMinus>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteMovies;
