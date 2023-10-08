import React, { useEffect, useState } from "react";
import "./Movie.styles.scss";
import { useParams } from "react-router-dom";
import useMovie from "hooks/useMovie";

export default function Movie() {
  const params = useParams();
  const { getMovieByName } = useMovie();
  const [fetchedMOvie, setFetchedMovie] = useState({});
  async function fetchMovie(title) {
    try {
      const fetchedResult = await getMovieByName(title);
      console.log(fetchedResult);
      setFetchedMovie({ ...fetchedResult });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (params.movie) {
      fetchMovie(params.movie);
    }
  }, [params]);

  return (
    <div className="movie-wrapper">
      <div className="info-col">
        <div>
          <span>GENRE: </span>
          <span style={{ color: "red" }}>{fetchedMOvie.genre}</span>
        </div>
        <div>
          <span>TITLE: </span>
          <span style={{ color: "red" }}>{fetchedMOvie.title}</span>
        </div>
      </div>
      <div className="image-col">
        <img src={fetchedMOvie.thumbnail} alt={fetchedMOvie.title} />
      </div>
    </div>
  );
}
