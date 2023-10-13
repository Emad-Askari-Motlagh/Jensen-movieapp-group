import { render, screen } from "@testing-library/react";
import App from "./App";
import { FavoriteProvider } from "hooks/useFavorites";
import { MovieProvider } from "hooks/useMovie";
import { BrowserRouter } from "react-router-dom";
import React from "react";

test("renders learn react link", async () => {
  await render(
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
