import React, { useEffect, useState } from "react";
import "./Movie.styles.scss";
import { useNavigate, useParams } from "react-router-dom";
import useMovie from "hooks/useMovie";
import AddToFavorites from "components/AddToFavorite";
import Button from "components/Button";
import { FaBackspace } from "react-icons/fa";

export default function Movie() {
  const params = useParams();
  const { getMovieByName } = useMovie();
  const [fetchedMovie, setFetchedMovie] = useState({});
  const navigate = useNavigate();
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
      <div>
        <Button
          onClick={() => navigate("/")}
          title="Back"
          logo={<FaBackspace />}
        />
      </div>

      <div className="info-col">
        <MovieInfo fetchedMovie={fetchedMovie} />

        <MovieStatus fetchedMovie={fetchedMovie} />
      </div>
      <div className="image-col">
        <img src={fetchedMovie.thumbnail} alt={fetchedMovie.title} />
      </div>
    </div>
  );
}

const MovieInfo = ({ fetchedMovie }) => {
  return (
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
  );
};
const MovieStatus = ({ fetchedMovie }) => {
  return (
    <div className="dialog_status">
      <div>
        <h3>Rating:</h3>
        <span>{fetchedMovie.rating}</span>
      </div>
      <div>
        <h3>Year:</h3>
        <span>{fetchedMovie.year}</span>
      </div>
      {/* Use the AddToFavorites component */}
      <AddToFavorites movie={fetchedMovie} />
    </div>
  );
};
