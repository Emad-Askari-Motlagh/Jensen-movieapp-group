import React, { useState } from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineQuiz } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <MdOutlineQuiz size={44} />
      </div>

      <div className="nav--row">
        <nav>
          <ul>
            <li className="nav--hidden--mobile">
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/auth/register" className="login-nav-link">
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
