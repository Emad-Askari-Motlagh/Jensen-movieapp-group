import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";

const Header = () => {
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
              <NavLink to="/auth/register" className="login-nav-link">
                TOP 10
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
