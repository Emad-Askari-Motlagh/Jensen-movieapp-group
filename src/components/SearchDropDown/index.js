import React, { useState, useEffect } from "react";
import "./Dropdown.styles.scss";
import Slider from "./slider";

export default function SearchDropdown({ movie }) {
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const openSlider = () => {
    setIsSliderVisible(true);
  };

  const closeSlider = () => {
    setIsSliderVisible(false);
  };

  useEffect(() => {
    if (isSliderVisible) {
      document.body.classList.add("body-hidden");
    } else {
      document.body.classList.remove("body-hidden");
    }

    return () => {
      document.body.classList.remove("body-hidden");
    };
  }, [isSliderVisible]);

  return (
    <div className="search-dropdown">
      <img src={movie?.thumbnail} alt={movie?.title} onClick={openSlider} />
      <span className="search-dropdown__title">{movie?.title}</span>

      {isSliderVisible && <Slider movie={movie} onClose={closeSlider} />}
    </div>
  );
}
