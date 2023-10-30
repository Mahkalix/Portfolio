import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Menu = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
          <NavHashLink
            to="/"
            onClick={closeMenu}
            className={location.pathname === "/" ? "active" : ""}
          >
            <div className="invisible"> HOME</div>

            <span className="Mask Top">
              <span>Home</span>
            </span>
            <span className="Mask">
              <span>Home</span>
            </span>
          </NavHashLink>
        </li>

        <li className="menu-item">
          <NavHashLink
            to="/#about"
            onClick={closeMenu}
            className={location.pathname === "/#about" ? "active" : ""}
          >
            <div className="invisible"> ABOUT</div>

            <span className="Mask Top">
              <span>ABOUT</span>
            </span>
            <span className="Mask">
              <span>ABOUT</span>
            </span>
          </NavHashLink>
        </li>

        <li className="menu-item">
          <NavHashLink
            to="/#projects"
            onClick={closeMenu}
            className={location.pathname === "/#projects" ? "active" : ""}
          >
            <div className="invisible"> PROJECTS</div>

            <span className="Mask Top">
              <span>PROJECTS</span>
            </span>
            <span className="Mask">
              <span>PROJECTS</span>
            </span>
          </NavHashLink>
        </li>
        <li className="menu-item">
          <NavHashLink
            to="/contact"
            onClick={closeMenu}
            className={location.pathname === "/contact" ? "active" : ""}
          >
            <div className="invisible"> Contact</div>

            <span className="Mask Top">
              <span>Contact</span>
            </span>
            <span className="Mask">
              <span>Contact</span>
            </span>
          </NavHashLink>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
