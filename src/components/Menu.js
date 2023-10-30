import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu(); // Fermer le menu après le défilement
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <section className="menu-hamburger">
      <Hamburger toggled={menuOpen} toggle={toggleMenu} />

      <ul id="menu-body" className={`menu ${menuOpen ? "open" : "close"}`}>
        <li className="menu-item">
          <Link
            to="/"
            onClick={closeMenu}
            className={`${location.pathname === "/" ? "active" : ""}`}
          >
            <div className="invisible"> HOME</div>

            <span className="Mask Top">
              <span>Home</span>
            </span>
            <span className="Mask">
              <span>Home</span>
            </span>
          </Link>
        </li>

        <li className="menu-item">
          <a
            href="#about"
            onClick={() => scrollToSection("#about")}
            className={`${location.pathname === "#about" ? "active" : ""}`}
          >
            <div className="invisible"> ABOUT</div>

            <span className="Mask Top">
              <span>ABOUT</span>
            </span>
            <span className="Mask">
              <span>ABOUT</span>
            </span>
          </a>
        </li>

        <li className="menu-item">
          <a
            href="#projects"
            onClick={() => scrollToSection("#projects")}
            className={`${location.pathname === "#projects" ? "active" : ""} `}
          >
            <div className="invisible"> PROJECTS</div>

            <span className="Mask Top">
              <span>PROJECTS</span>
            </span>
            <span className="Mask">
              <span>PROJECTS</span>
            </span>
          </a>
        </li>
        <li className="menu-item">
          <a
            href="/contact"
            onClick={() => scrollToSection("/contact")}
            className={`${location.pathname === "/contact" ? "active" : ""}`}
          >
            <div className="invisible"> Contact</div>

            <span className="Mask Top">
              <span>Contact</span>
            </span>
            <span className="Mask">
              <span>Contact</span>
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
