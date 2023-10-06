import Info from "components/Info";
import useMovie from "hooks/useMovie";
import React, { useEffect, useState } from "react";
import MovieCollection from "components/MovieCollection";
import FirstPageMovie from "components/FirstPageMovie";

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
      <FirstPageMovie
        title="God Father"
        src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg"
      />
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
