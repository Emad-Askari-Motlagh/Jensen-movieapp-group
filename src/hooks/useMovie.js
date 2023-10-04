import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";

export const MovieContext = createContext(undefined);

export const MovieProvider = ({ children }) => {
  async function fetchMoviesFromDb() {
    try {
      const res = await axios.get("movies.jsn");
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  const values = { fetchMoviesFromDb };
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
