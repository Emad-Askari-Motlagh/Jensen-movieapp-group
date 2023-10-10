import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
import Search from "components/Search";
import useMovie from "hooks/useMovie";
import { BiSearchAlt2 } from "react-icons/bi";
import SearchDropdown from "components/SearchDropDown";
import { AiOutlineStar } from "react-icons/ai";
const Header = () => {
  const { searchMoviesByName, filteredMovies } = useMovie();
  const [searchVisible, setIsSearchVisible] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const inputRef = useRef(null);

  const handleBlur = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        searchVisible &&
        !e.target.closest(".search") &&
        !e.target.closest(".search-icon-container")
      ) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [searchVisible]);

  async function onSearch(e) {
    const value = e.target.value;
    setSearchWord(value);
    if (value) {
      await searchMoviesByName(value);
    }
  }

  return (
    <header className="header">
      <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="logo">
          <span className="logo__image">
            <SiThemoviedatabase size={44} />
          </span>
          <span className="logo__label">JensenFlix</span>
        </div>
      </NavLink>

      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>

          <li>
            <Link to="/favorites" className="link">
              <AiOutlineStar color="yellow" size={22} />
            </Link>
          </li>

          <li className="search-icon-container">
            <BiSearchAlt2
              size={22}
              className="search-icon"
              onClick={() => {
                setIsSearchVisible(!searchVisible);
                handleBlur();
              }}
            />
            {searchVisible && (
              <div className="search" style={{ width: "400px" }}>
                <Search
                  label="Search movie"
                  onSearch={onSearch}
                  placeholder="Search movie"
                  inputRef={inputRef}
                />
                <div className="dropdown">
                  {filteredMovies?.length > 0 &&
                    searchWord &&
                    filteredMovies?.map((movie, i) => {
                      return <SearchDropdown movie={movie} key={i} />;
                    })}
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
