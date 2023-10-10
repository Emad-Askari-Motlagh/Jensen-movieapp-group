import React, { useRef, useState } from "react";
import "./MoveCollection.styles.scss";
import { BiCategory } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import MovieCard from "components/MovieCard";
import SearchDropdown from "components/SearchDropDown/index";

export default function MovieCollection({ movies, collectionName }) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [currentTransform, setCurrentTransform] = useState(0);

  const scroll = (direction) => {
    if (direction === "left") {
      setCurrentTransform((prevTransform) => Math.min(prevTransform + 100, 0));
    } else {
      const maxTransform = -100 * (movies.length - 1);
      setCurrentTransform((prevTransform) =>
        Math.max(prevTransform - 100, maxTransform)
      );
    }
  };

  // Handle navigation when an item is clicked
  const handleItemClick = (endPoint) => {
    navigate(`/movies/${endPoint}`);
  };

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
            {movies.map((movie) => (
              <li
                key={movie.id}
                className="movie-card-item"
                onClick={() => handleItemClick(movie.title)}
              >
                <SearchDropdown movie={movie} />
              </li>
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
