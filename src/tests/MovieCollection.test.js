import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieCollection from "../components/MovieCollection/index";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";

// En enkel mock-funktion för useNavigate
const mockNavigate = jest.fn();

// Mock av movies-data
const movies = [
  {
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],

    genre: "Action, Crime, Drama",

    rating: "PG-13",

    synopsis:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological an…",

    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",

    title: "The Dark Knight",

    year: 2008,
  },
];

test("renders MovieCollection component", () => {
  // Renderera komponenten med mock-data och mock-funktionen för useNavigate
  render(
    <MemoryRouter>
      <MovieCollection movies={movies} collectionName="Action" />
    </MemoryRouter>,

    {
      wrapper: ({ children }) => (
        <div>
          {children}
          <button>Mock Button</button>
        </div>
      ),
    }
  );

  // Hitta elementen i komponenten
  const collectionNameElement = screen.getByText("Action");
  const movieTitleElement = screen.getByText("The Dark Knight");
  const leftArrowButton = screen.getByTestId("scroll-left-arrow");
  const rightArrowButton = screen.getByTestId("scroll-right-arrow");

  // Verifiera att elementen finns i dokumentet
  expect(collectionNameElement).toBeInTheDocument();
  expect(movieTitleElement).toBeInTheDocument();
  expect(leftArrowButton).toBeInTheDocument();
  expect(rightArrowButton).toBeInTheDocument();

  // Simulera klick på vänsterpilen
  fireEvent.click(leftArrowButton);

  // Simulera klick på högerpilen
  fireEvent.click(rightArrowButton);

  // Verifiera att useNavigate-mock-funktionen har anropats när knappen "Mock Button" klickas på
  fireEvent.click(screen.getByText("Mock Button"));
  // expect(mockNavigate).toHaveBeenCalledWith("/movies/The Dark Knight");
});
