import React, { createContext, useContext, useState } from "react";
import FetchFromStorage from "utils/fetchFromStorage";
import addToStorage from "utils/addToStorage";

const FavoriteContext = createContext(undefined);

const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error("useContext must be used within an AuthProvider");
  }
  return context;
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");
  const [edited, setIsEdited] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const fetchFavorites = () => {
    try {
      const movies = FetchFromStorage("favorites");
      setFavorites([...movies]);
      return movies;
    } catch (error) {
      return [];
    }
  };
  const addFavorite = (movie) => {
    try {
      let isDuplicated = false;

      const movies = FetchFromStorage("favorites");
      if (movies?.length > 0) {
        movies.map((res) => {
          if (res.title == movie.title) {
            isDuplicated = true;
          }
        });

        if (!isDuplicated) {
          addToStorage("favorites", [...movies, movie]);
        }
      } else {
        addToStorage("favorites", [movie]);
      }

      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    } catch (error) {
      setIsAdded(false);
      console.log(error);
      setError(error);
      return false;
    }
  };

  const removeFavorite = (movie) => {
    const fetchedMovies = FetchFromStorage("favorites");
    const movies = fetchedMovies.filter((res) => res.title !== movie.title);
    addToStorage("favorites", movies);
    setFavorites([...movies]);
  };
  const values = {
    favorites,
    addFavorite,
    removeFavorite,
    error,
    fetchFavorites,
    edited,
    isAdded,
    setIsAdded,
  };
  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};
export default useFavorites;
