import { render, screen, act } from "@testing-library/react";
import App from "./App";
import { FavoriteProvider } from "hooks/useFavorites";
import { MovieProvider } from "hooks/useMovie";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import useMovie from "hooks/useMovie";

jest.mock("hooks/useMovie");

const movieSampleData = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: "R",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    genre: "Drama",
    synopsis:
      "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  },
];

beforeEach(() => {
  useMovie.mockReturnValue({
    allMoviesLoading: false,
    groupByGenres: jest.fn(),
    movies: { Drama: [movieSampleData[0]] },
    randomMovie: movieSampleData[0],
    fetchMoviesError: "",
    isAdded: false,
    setIsAdded: jest.fn(),
  });
});

describe("App component", () => {
  test("renders learn react link", async () => {
    render(
      <React.StrictMode>
        <BrowserRouter>
          <MovieProvider>
            <FavoriteProvider>
              <App />
            </FavoriteProvider>
          </MovieProvider>
        </BrowserRouter>
      </React.StrictMode>
    );
  });
});
