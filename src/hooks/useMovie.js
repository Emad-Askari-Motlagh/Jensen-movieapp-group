import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { groupedByGenre } from "utils/group-by-name";

export const MovieContext = createContext(undefined);

export const MovieProvider = ({ children }) => {
  const [allMoviesLoading, setLoading] = useState(false);

  async function fetchMoviesFromDb() {
    try {
      setLoading(true);
      const res = await axios.get("movies.json");

      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }

  const groupByGenres = async () => {
    try {
      setLoading(true);
      const moviesData = await axios.get("movies.json");
      const res = groupedByGenre(moviesData.data, "genre");
      console.log(res);
      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw error;
    }
  };
  const values = { fetchMoviesFromDb, allMoviesLoading, groupByGenres };
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
