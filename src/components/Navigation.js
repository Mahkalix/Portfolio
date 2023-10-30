import React from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const Navigation = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            <div className="animation-container">
              <AnimatedButton text="Home" />
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => scrollToSection("#about")}
            className={`nav-link ${location.hash === "#about" ? "active" : ""}`}
          >
            <div className="animation-container">
              <AnimatedButton text="About" />
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => scrollToSection("#projects")}
            className={`nav-link ${
              location.hash === "#projects" ? "active" : ""
            }`}
          >
            <div className="animation-container">
              <AnimatedButton text="Projects" />
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => scrollToSection("/contact")}
            className={`nav-link ${
              location.hash === "/contact" ? "active" : ""
            }`}
          >
            <div className="animation-container">
              <AnimatedButton text="Contact" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
