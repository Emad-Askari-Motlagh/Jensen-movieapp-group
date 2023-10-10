import React, { useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import PrimaryLayout from "./components/Layout";
import Home from "./pages/Home";
import Movie from "pages/Movie";
import FavoriteMovies from "./pages/FavoriteMovies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movie" element={<Movie />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
