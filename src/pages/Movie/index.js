import React, { useEffect, useState } from "react";
import "./Movie.styles.scss";
import { useParams } from "react-router-dom";
import useMovie from "hooks/useMovie";
import AddToFavorites from "../../hooks/addToFavorite";

export default function Movie() {
  const params = useParams();
  const { getMovieByName } = useMovie();
  const [fetchedMovie, setFetchedMovie] = useState({});

  async function fetchMovie(title) {
    try {
      const fetchedResult = await getMovieByName(title);
      setFetchedMovie(fetchedResult);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (params.movie) {
      fetchMovie(params.movie);
    }
  }, [params.movie]);

  return (
    <div className="movie-wrapper">
      <div className="info-col">
        <div className="dialog_content_text">
          <div>
            <p>Genre: {fetchedMovie.genre}</p>
          </div>
          <div>
            <h1>{fetchedMovie.title}</h1>
          </div>
          <div>
            <p>{fetchedMovie.synopsis}</p>
          </div>
        </div>
        <div className="dialog_status">
          <div>
            <h2>Rating:</h2>
            <span>{fetchedMovie.rating}</span>
          </div>
          <div>
            <h2>Year:</h2>
            <span>{fetchedMovie.year}</span>
          </div>
          {/* Use the AddToFavorites component */}
          <AddToFavorites movie={fetchedMovie} />
        </div>
      </div>
      <div className="image-col">
        <img src={fetchedMovie.thumbnail} alt={fetchedMovie.title} />
      </div>
    </div>
  );
}
