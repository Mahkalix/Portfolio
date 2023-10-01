import React from "react";
import "../style/nav.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const location = useLocation();
  const theme = useSelector((state) => state.theme.themeColor);

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""} 
             ${theme === "dark" ? "dark" : "light"}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="#About"
            className={`nav-link ${
              location.pathname === "#About" ? "active" : ""
            } 
             ${theme === "dark" ? "dark" : "light"}`}
          >
            {" "}
            About
          </Link>
        </li>
        <li>
          <Link
            to="#Projects"
            className={`nav-link ${
              location.pathname === "#Projects" ? "active" : ""
            } 
             ${theme === "dark" ? "dark" : "light"}`}
          >
            {" "}
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            } 
             ${theme === "dark" ? "dark" : "light"}`}
          >
            {" "}
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
