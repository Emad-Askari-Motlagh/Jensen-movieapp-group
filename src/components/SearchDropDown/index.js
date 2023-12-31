import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dropdown.styles.scss";

const SearchDropdown = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // handleClick till movie info
    const movieUrl = `/movies/${movie.title}`;
    navigate(movieUrl);
  };

  return (
    <div className="search-dropdown" onClick={handleClick}>
      <img src={movie?.thumbnail} alt={movie?.title} />
      <span className="search-dropdown__title">{movie?.title}</span>
    </div>
  );
};

export default SearchDropdown;
