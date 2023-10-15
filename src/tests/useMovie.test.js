import React from "react";
import { render, act } from "@testing-library/react";
import useMovie, { MovieProvider, MovieContext } from "hooks/useMovie"; // Adjust import paths

describe("MovieProvider", () => {
  it("should provide the context values", async () => {
    let result;

    await act(async () => {
      render(
        <MovieProvider>
          <MovieContext.Consumer>
            {(contextValue) => {
              result = contextValue;
              return null;
            }}
          </MovieContext.Consumer>
        </MovieProvider>
      );
    });

    // Access the context values
    const {
      fetchMoviesFromDb,
      allMoviesLoading,
      groupByGenres,
      getMovieByName,
      choosedMovie,
      searchMoviesByName,
      filteredMovies,
    } = result;

    // Perform assertions on the context values
    expect(typeof fetchMoviesFromDb).toBe("function");
    expect(typeof groupByGenres).toBe("function");
    expect(typeof getMovieByName).toBe("function");
    expect(typeof choosedMovie).toBe("object"); // Change this assertion as per your initial state
    expect(typeof allMoviesLoading).toBe("boolean"); // Change this assertion as per your initial state
    expect(Array.isArray(filteredMovies)).toBe(true); // Change this assertion as per your initial state
  });

  // Write more tests for your context functions if needed
});
