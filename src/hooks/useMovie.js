import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import getALlMovies from "utils/getAllMovies";
import { groupedByGenre } from "utils/group-by-name";

export const MovieContext = createContext(undefined);

export const MovieProvider = ({ children }) => {
  const [allMoviesLoading, setLoading] = useState(false);

  async function fetchMoviesFromDb() {
    try {
      setLoading(true);
      const res = await getALlMovies();
      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }

  const groupByGenres = async () => {
    try {
      setLoading(true);
      const moviesData = await getALlMovies();
      const res = groupedByGenre(moviesData, "genre");

      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw error;
    }
  };

  const getMovieByName = async (title) => {
    try {
      const res = await getALlMovies();

      const movie = res.find((m) => {
        console.log(m?.title, title);
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
      console.log(movie);
      return movie;
    } catch (error) {
      throw error;
    }
  };
  const values = {
    fetchMoviesFromDb,
    allMoviesLoading,
    groupByGenres,
    getMovieByName,
  };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
export default function useMovie() {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useContext must be used within an AuthProvider");
  }
  return context;
}
