import Info from "components/Info";
import useMovie from "hooks/useMovie";
import React, { useEffect, useState } from "react";
import MovieCollection from "components/MovieCollection";

export default function Home() {
  const { fetchMoviesFromDb, allMoviesLoading, groupByGenres } = useMovie();
  const [fetchMoviesError, setFetchMoviesError] = useState("");
  const [movies, setMovies] = useState({});

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await groupByGenres();
        setMovies({ ...res });
      } catch (error) {
        console.log(error);
        setFetchMoviesError("Unexpected error");
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div>
        <div>
          {Object.entries(movies).map((collection) => {
            console.log(collection);
            return (
              <MovieCollection
                movies={collection[1]}
                collectionName={collection[0]}
                allMoviesLoading={allMoviesLoading}
              />
            );
          })}

          {fetchMoviesError && <Info type="error">{fetchMoviesError}</Info>}
        </div>
      </div>
    </div>
  );
}
