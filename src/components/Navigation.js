import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection("#about")}
              className={`nav-link ${
                location.pathname === "#about" ? "active" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection("#projects")}
              className={`nav-link ${
                location.pathname === "#projects" ? "active" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection("#Contact")}
              className={`nav-link ${
                location.pathname === "#Contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
