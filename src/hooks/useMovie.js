import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext(undefined);

export const MovieProvider = ({ children }) => {
  const [allMoviesLoading, setLoading] = useState(false);

  async function fetchMoviesFromDb() {
    try {
      setLoading(true);
      const res = await axios.get("movies.jsn");

      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }

  const groupByGenres = async () => {
    try {
      const res = await axios.get("movies.jsn");
    } catch (error) {
      throw error;
    }
  };
  const values = { fetchMoviesFromDb, allMoviesLoading };
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
