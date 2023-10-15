import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext({});

const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a FavoriteProvider");
  }
  return context;
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const fetchFavorites = () => {
    try {
      const movies = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites([...movies]);
      return movies;
    } catch (error) {
      return [];
    }
  };

  const addFavorite = (movie) => {
    try {
      let isDuplicated = false;
      const movies = fetchFavorites();

      movies.forEach((res) => {
        if (res.title === movie.title) {
          isDuplicated = true;
        }
      });

      if (!isDuplicated) {
        setFavorites([...movies, movie]);
        localStorage.setItem("favorites", JSON.stringify([...movies, movie]));
        setIsAdded(true);
        setTimeout(() => {
          setIsAdded(false);
        }, 2000);
      }
    } catch (error) {
      setIsAdded(false);
      setError(error);
      return false;
    }
  };

  const removeFavorite = (movie) => {
    const fetchedMovies = fetchFavorites();
    const movies = fetchedMovies.filter((res) => res.title !== movie.title);
    localStorage.setItem("favorites", JSON.stringify(movies));
    setFavorites([...movies]);
  };

  const values = {
    favorites,
    addFavorite,
    removeFavorite,
    error,
    fetchFavorites,
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
