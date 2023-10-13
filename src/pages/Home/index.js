import Info from "components/Info";
import useMovie from "hooks/useMovie";
import React, { useEffect, useRef, useState } from "react";
import MovieCollection from "components/MovieCollection";
import FirstPageMovie from "components/FirstPageMovie";
import Loading from "components/Loading";
import ModalComponent from "components/Modal";
import { FcAcceptDatabase } from "react-icons/fc";
import useFavorites from "hooks/useFavorites";

const movieSample = {
  title: "Your favorite movie destination to watch top movies",
  year: 1972,
  rating: "R",
  actors: ["Marlon Brando", "Al Pacino", "James Caan"],
  genre: "Crime, Drama",
  synopsis:
    "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
  thumbnail: "dataset-cover.webp",
};

export default function Home() {
  const { allMoviesLoading, groupByGenres } = useMovie();
  const [fetchMoviesError, setFetchMoviesError] = useState("");
  const [movies, setMovies] = useState({});
  const [randomMovie, setRandomMovie] = useState(movieSample);
  const { isAdded, setIsAdded } = useFavorites();

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
      <div style={{ position: "relative" }}>
        <ModalComponent isOpen={isAdded} onClose={setIsAdded}>
          <h2>Saved!</h2>
          <div>
            <FcAcceptDatabase size={38} />
          </div>
        </ModalComponent>
      </div>

      <FirstPageMovie title={randomMovie?.title} src={randomMovie?.thumbnail} />
      <div>
        <div className="modalRef">
          {Object.entries(movies).map((collection) => {
            return (
              <MovieCollection
                key={collection[0]}
                movies={collection[1]}
                collectionName={collection[0]}
                allMoviesLoading={allMoviesLoading}
              />
            );
          })}

          {allMoviesLoading && <Loading />}
          {fetchMoviesError && <Info type="error">{fetchMoviesError}</Info>}
        </div>
      </div>
    </div>
  );
}
