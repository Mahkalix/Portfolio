import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeSwitch.js";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const { theme } = useTheme();
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

      <ul
        id="menu-body"
        className={`${menuOpen ? "open" : "close"} ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <li>
          <Link
            to="/"
            onClick={closeMenu}
            className={`${location.pathname === "/" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="*"
            onClick={closeMenu}
            className={`${location.pathname === "*" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            Qui suis-je ?
          </Link>
        </li>
        <li>
          <Link
            to="*"
            onClick={closeMenu}
            className={`${location.pathname === "*" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            Infos et Tarifs
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`${location.pathname === "/contact" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
