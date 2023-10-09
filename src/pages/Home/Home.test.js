import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";

test("renders Home component", () => {
  render(<Home />);
  const titleElement = screen.getByText(/Your favorite movie destination to watch top movies/i);
  const randomMovieElement = screen.getByText(/Random Movie Title/i);
  const loadingElement = screen.getByText(/Loading/i);

  expect(titleElement).toBeInTheDocument();
  expect(randomMovieElement).toBeInTheDocument();
  expect(loadingElement).toBeInTheDocument();
});
