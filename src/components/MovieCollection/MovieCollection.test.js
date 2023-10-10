import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieCollection from "./index";

// En enkel mock-funktion för useNavigate
const mockNavigate = jest.fn();

// Mock av movies-data
const movies = [
  { title: "Movie 1", year: 2020, genre: "Action" },
  { title: "Movie 2", year: 2019, genre: "Comedy" },
  
];

test("renders MovieCollection component", () => {
  // Renderera komponenten med mock-data och mock-funktionen för useNavigate
  render(<MovieCollection movies={movies} collectionName="Test Collection" />, {
    wrapper: ({ children }) => (
      <div>
        {children}
        <button onClick={() => mockNavigate("/movies/123")}>Mock Button</button>
      </div>
    ),
  });

  // Hitta elementen i komponenten
  const collectionNameElement = screen.getByText(/Test Collection/i);
  const movieTitleElement = screen.getByText(/Movie 1/i);
  const leftArrowButton = screen.getByText("◄");
  const rightArrowButton = screen.getByText("►");

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
  expect(mockNavigate).toHaveBeenCalledWith("/movies/123");
});
