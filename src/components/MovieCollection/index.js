import React, { useRef, useState } from "react";
import "./MoveCollection.styles.scss";

export default function MovieCollection({ movies, collectionName }) {
  const sliderRef = useRef(null);
  const [currentTransform, setCurrentTransform] = useState(0);
  const scroll = (direction) => {
    if (direction === "left") {
      setCurrentTransform((prevTransform) => Math.min(prevTransform + 100, 0));
    } else {
      // We limit the transform to ensure we don't scroll past the end
      const maxTransform = -100 * (movies.length - 1);
      setCurrentTransform((prevTransform) =>
        Math.max(prevTransform - 100, maxTransform)
      );
    }
  };
  return (
    <div className="category-slider">
      <div>
        <h3>{collectionName}</h3>
        <div className="slider-btn-left" onClick={() => scroll("left")}>
          &#10094;
        </div>
        <ul
          className="slider-content"
          ref={sliderRef}
          style={{ transform: `translateX(${currentTransform}vw)` }}>
          {movies.map((movie, index) => (
            <li className="movie" key={index} style={{ width: "100vw" }}>
              <img
                className="movie__image"
                src={movie.thumbnail}
                alt={movie.title}
              />
            </li>
          ))}
        </ul>
        <div className="slider-btn-right" onClick={() => scroll("right")}>
          &#10095;
        </div>
      </div>
    </div>
  );
}
