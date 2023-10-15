import React, { createContext, useContext, useEffect, useState } from "react";
import getALlMovies from "utils/getAllMovies";
import { groupedByGenre1 } from "utils/group-by-name";

export const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
  const [allMoviesLoading, setLoading] = useState(false);
  const [choosedMovie, setChoosedMovie] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);

  async function fetchMoviesFromDb() {
    try {
      setLoading(true);
      const res = await getALlMovies();
      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
      return error;
    }
  }

  const groupByGenres = async () => {
    try {
      setLoading(true);
      const moviesData = await getALlMovies();
      const res = groupedByGenre1(moviesData, "genre");
      console.log(res);
      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
      console.log(error);
      return error;
    }
  };

  const getMovieByName = async (title) => {
    try {
      const res = await getALlMovies();

      const movie = res.find((m) => {
        if (m) {
          if (m.title) {
            return m.title === title;
          } else {
            throw new Error("Movie doesnt exist");
          }
        } else {
          throw new Error("Movie doesnt exist");
        }
      });
      setChoosedMovie(movie);
      return movie;
    } catch (error) {
      throw error;
    }
  };

  const searchMoviesByName = async (title) => {
    try {
      const res = await getALlMovies();

      const movies = res.filter((m) => {
        return m.title?.toLowerCase().includes(title?.toLowerCase());
      });
      setFilteredMovies([...movies.slice(0, 5)]);

      return movies;
    } catch (error) {
      return error;
    }
  };
  const values = {
    fetchMoviesFromDb,
    allMoviesLoading,
    groupByGenres,
    getMovieByName,
    choosedMovie,
    searchMoviesByName,
    filteredMovies,
  };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
export default function useMovie() {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useContext must be used within an MovieProvider");
  }
  return context;
}
