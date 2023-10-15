import React, { useEffect } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import PrimaryLayout from "./components/Layout";
import Home from "./pages/Home";
import Movie from "pages/Movie";
import FavoriteMovies from "./pages/FavoriteMovies";
import Error404 from "components/Error404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movie" element={<Movie />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
