import React from "react";
import "./Dropdown.styles.scss";

export default function SearchDropdown({ movie }) {
  return (
    <div className="search-dropdown">
      <img src={movie?.thumbnail} alt={movie?.title}></img>
      <span className="search-dropdown__title">{movie?.title}</span>
    </div>
  );
}
