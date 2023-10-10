import React, { useRef, useState } from "react";
import "./MoveCollection.styles.scss";
import { BiCategory } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import MovieCard from "components/MovieCard";
import { v4 as uuidv4 } from "uuid";

export default function MovieCollection({ movies, collectionName }) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [currentTransform, setCurrentTransform] = useState(0);

  const scroll = (direction) => {
    if (direction === "left") {
      setCurrentTransform((prevTransform) => Math.min(prevTransform + 100, 0));
    } else {
      // gjorde så man inte scrollar förbi sista
      const maxTransform = -100 * (movies.length - 1);
      setCurrentTransform((prevTransform) =>
        Math.max(prevTransform - 100, maxTransform)
      );
    }
  };

  const handleItemClick = (endPoint) => {
    navigate(`/movies/${endPoint}`);
  };

  // så inte samma film läggs till mer än 1 gång
  const uniqueMovies = movies.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.title === movie.title)
  );

  return (
    <div className="category-slider">
      <div>
        <div className="category-slider__name">
          <span>
            <BiCategory color="orange" size={33} />
          </span>

          <span>
            <h3>{collectionName}</h3>
          </span>
        </div>

        <div style={{ position: "relative" }}>
          <div className="slider-btn-left" onClick={() => scroll("left")}>
            &#10094;
          </div>
          <ul
            className="slider-content"
            ref={sliderRef}
            style={{ transform: `translateX(${currentTransform}vw)` }}
            aria-label={`Movies in ${collectionName}`}
            role="list"
          >
            {uniqueMovies.map((movie) => (
              <MovieCard
                key={uuidv4()} // Unikt id till varje child
                movie={movie}
                onClick={() => handleItemClick(movie.title)}
              />
            ))}
          </ul>
          <div className="slider-btn-right" onClick={() => scroll("right")}>
            &#10095;
          </div>
        </div>
      </div>
    </div>
  );
}
