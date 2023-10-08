import React, { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
import Search from "components/Search";
import useMovie from "hooks/useMovie";
import { BiSearchAlt2 } from "react-icons/bi";
import SearchDropdown from "components/SearchDropDown";

const Header = () => {
  const { searchMoviesByName, filteredMovies } = useMovie();
  const [searchVisible, setIsSearchVisible] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  async function onSearch(e) {
    const value = e.target.value;
    setSearchWord(value);
    if (searchWord) {
      await searchMoviesByName(value);
    }
  }

  return (
    <header className="header">
      <div className="logo">
        <SiThemoviedatabase color="orange" className="logo__image" size={44} />
        <span style={{ marginLeft: "9px" }}>IMDB</span>
      </div>

      <div className="nav--row">
        <nav>
          <ul>
            <li>
              <NavLink style={{ color: "#fff" }} to="/">
                Home
              </NavLink>
            </li>

            <li>
              <BiSearchAlt2
                size={22}
                className="search-icon"
                onClick={() => setIsSearchVisible(!searchVisible)}
              />
              <div style={{ position: "relative" }}>
                {searchVisible && (
                  <div className="search" style={{ width: "400px" }}>
                    <Search
                      label="Search movie"
                      onSearch={onSearch}
                      placeholder="Search movie"
                    />
                    <div className="dropdown">
                      {filteredMovies?.length > 0 &&
                        searchWord &&
                        searchVisible &&
                        filteredMovies?.map((movie, i) => {
                          return <SearchDropdown movie={movie} key={i} />;
                        })}
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
