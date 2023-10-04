import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="#About"
            className={`nav-link ${location.pathname === "#" ? "active" : ""}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="#Projects"
            className={`nav-link ${location.pathname === "#" ? "active" : ""}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="#GetInTouch"
            className={`nav-link ${location.pathname === "#" ? "active" : ""}`}
          >
            Get In Touch
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
