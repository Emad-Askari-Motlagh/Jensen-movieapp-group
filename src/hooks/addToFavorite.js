import React from "react";
import { FaStar } from "react-icons/fa";
import { useFavorites } from "./useFavorites";

const AddToFavorites = ({ movie }) => {
  const { addFavorite, removeFavorite, favorites } = useFavorites(); // Use useFavorites hook

  const isFavorite = favorites.some(
    (favMovie) => favMovie.title === movie.title
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div>
      <button onClick={toggleFavorite}>
        <FaStar color={isFavorite ? "gold" : "gray"} size={24} />
      </button>
    </div>
  );
};

export default AddToFavorites;
