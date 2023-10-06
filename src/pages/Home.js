import Info from "components/Info";
import useMovie from "hooks/useMovie";
import React, { useEffect, useState } from "react";
import MovieCollection from "components/MovieCollection";
import FirstPageMovie from "components/FirstPageMovie";

const movieSample = {
  title: "The Godfather",
  year: 1972,
  rating: "R",
  actors: ["Marlon Brando", "Al Pacino", "James Caan"],
  genre: "Crime, Drama",
  synopsis:
    "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
};

export default function Home() {
  const { fetchMoviesFromDb, allMoviesLoading, groupByGenres } = useMovie();
  const [fetchMoviesError, setFetchMoviesError] = useState("");
  const [movies, setMovies] = useState({});
  const [randomMovie, setRandomMovie] = useState(movieSample);
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
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
      <FirstPageMovie title={randomMovie?.title} src={randomMovie?.thumbnail} />
      <div>
        <div>
          {Object.entries(movies).map((collection) => {
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
