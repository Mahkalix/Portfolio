import React from "react";
import { useTheme } from "./ThemeSwitch.js";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="#About"
            className={`nav-link ${location.pathname === "#" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="#Projects"
            className={`nav-link ${location.pathname === "#" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            } ${theme === "light" ? "light" : "dark"}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
