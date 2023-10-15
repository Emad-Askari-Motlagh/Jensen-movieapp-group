import React, { useEffect, useState } from "react";
import "./Movie.styles.scss";
import { useNavigate, useParams } from "react-router-dom";
import useMovie from "hooks/useMovie";
import AddToFavorites from "components/AddToFavorite";
import Button from "components/Button";
import { FaBackspace } from "react-icons/fa";
import Info from "components/Info";

const Movie = () => {
  const params = useParams();
  const { getMovieByName } = useMovie();
  const [fetchedMovie, setFetchedMovie] = useState({});
  const [movieError, setMovieError] = useState("");
  const navigate = useNavigate();

  async function fetchMovie(title) {
    try {
      const fetchedResult = await getMovieByName(title);
      setFetchedMovie(fetchedResult);
      setMovieError("");
    } catch (error) {
      setMovieError("Movie didn't exist");
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
      {movieError && (
        <Info type="error" label="error">
          {movieError}
        </Info>
      )}
      <div className="info-col">
        <MovieInfo fetchedMovie={fetchedMovie} />

        <MovieStatus fetchedMovie={fetchedMovie} />
      </div>
      <div className="image-col">
        <img src={fetchedMovie?.thumbnail} alt={fetchedMovie?.title} />
      </div>
    </div>
  );
};

export const MovieInfo = ({ fetchedMovie }) => {
  return (
    <div className="dialog_content_text">
      <div>
        <p>Genre: {fetchedMovie?.genre}</p>
      </div>
      <div>
        <h1>{fetchedMovie?.title}</h1>
      </div>
      <div>
        <p>{fetchedMovie?.synopsis}</p>
      </div>
    </div>
  );
};
export const MovieStatus = ({ fetchedMovie }) => {
  return (
    <div className="dialog_status">
      <div>
        <h3>Rating:</h3>
        <span>{fetchedMovie?.rating}</span>
      </div>
      <div>
        <h3>Year:</h3>
        <span>{fetchedMovie?.year}</span>
      </div>
      {/* Use the AddToFavorites component */}
      <AddToFavorites movie={fetchedMovie} />
    </div>
  );
};
export default Movie;
