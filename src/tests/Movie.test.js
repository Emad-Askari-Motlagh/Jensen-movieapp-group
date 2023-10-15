import React from "react";
import { render, act, waitFor, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Movie from "pages/Movie"; // Adjust the import path as needed
const movieData = {
  title: "Goodfellas",
  year: 1990,
  rating: "R",
  actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
  genre: "Biography, Crime, Drama",
  synopsis:
    "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
};
// Mock the useMovie hook
jest.mock("hooks/useMovie", () => ({
  __esModule: true,
  default: () => ({
    getMovieByName: async (title) => {
      if (title === "Goodfellas") {
        return movieData;
      } else {
        throw new Error("Movie not found");
      }
    },
  }),
}));

describe("Movie page test", () => {
  it("renders Movie component when params.movie is 'Goodfellas'", async () => {
    const route = "/movies/Goodfellas";

    await act(async () => {
      render(
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path="/movies/:movie" element={<Movie />} />
          </Routes>
        </MemoryRouter>
      );
    });

    // Wait for the component to fetch and render the movie data
    await waitFor(() => {
      expect(screen.getByText("Goodfellas")).toBeInTheDocument();
    });

    expect(screen.getByText("Rating:")).toBeInTheDocument();
    expect(screen.getByText("R")).toBeInTheDocument();
    expect(screen.getByText("Year:")).toBeInTheDocument();
    expect(screen.getByText("1990")).toBeInTheDocument();
    expect(
      screen.getByText(
        "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("Genre: Biography, Crime, Drama")
    ).toBeInTheDocument();
  });
});
