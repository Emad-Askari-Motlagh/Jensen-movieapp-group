import React, { useState, useEffect } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import MovieCard from "../../components/MovieCard/index";

const FavoriteMovies = () => {
  const { favorites, removeFavorite } = useFavorites();

  useEffect(() => {
    setFavoritedMovies(favorites);
  }, [favorites]);

  const [favoritedMovies, setFavoritedMovies] = useState(favorites);

  const removeFromFavorites = (movieToRemove) => {
    removeFavorite(movieToRemove);
  };

  return (
    <div>
      <h1>Favorited Movies</h1>
      {favoritedMovies.length === 0 ? (
        <p>No movies in favorites.</p>
      ) : (
        <ul>
          {favoritedMovies.map((movie) => (
            <li key={movie.title}>
              <MovieCard movie={movie} />
              <button onClick={() => removeFromFavorites(movie)}>
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteMovies;
