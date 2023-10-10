import React, { useState, useEffect } from "react";
import "./FavoriteMovies.styles.scss";
import useFavorites from "../../hooks/useFavorites";
import MovieCard from "../../components/MovieCard/index";
import { BiMinus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const FavoriteMovies = () => {
  const { removeFavorite, fetchFavorites, favorites } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const res = fetchFavorites();
    setFavoriteMovies([...res]);
  }, []);

  const removeFromFavorites = (movieToRemove) => {
    removeFavorite(movieToRemove);
  };

  return (
    <div className="favorite-movies-wrapper">
      <h1>Favorited Movies</h1>
      {favorites?.length === 0 ? (
        <p>No movies in favorites.</p>
      ) : (
        <div className="favorite-movies">
          {favorites.map((movie, i) => (
            <div key={i} className="favorite-movies__item">
              <MovieCard
                movie={movie}
                onClick={() => navigate(`/movies/${movie?.title}`)}
              />
              <div className="favorite-movies__minus">
                <BiMinus onClick={() => removeFromFavorites(movie)}></BiMinus>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMovies;
