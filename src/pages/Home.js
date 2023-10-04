import Loading from "components";
import Info from "components/Info";
import useMovie from "hooks/useMovie";
import React, { useEffect, useState } from "react";

export default function Home() {
  const { fetchMoviesFromDb, allMoviesLoading } = useMovie();
  const [fetchMoviesError, setFetchMoviesError] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetchMoviesFromDb();
        setMovies([...res]);
      } catch (error) {
        setFetchMoviesError("Unexpected error");
      }
    }
    fetchMovies();
  }, []);
  useEffect(() => {
    console.log("eee", fetchMoviesError);
  }, [fetchMoviesError]);

  return (
    <div>
      <h1>Movies</h1>
      <div>
        <div>
          <ul>
            {allMoviesLoading && <Loading></Loading>}
            {movies?.length > 0 &&
              movies.map((res) => {
                return <li>{res?.title}</li>;
              })}
          </ul>
        </div>
        {fetchMoviesError && <Info type="error">{fetchMoviesError}</Info>}
      </div>
    </div>
  );
}
