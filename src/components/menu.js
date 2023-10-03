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
        } menu`}
      >
        <li className="menu-item">
          <Link
            to="/"
            onClick={closeMenu}
            className={`${location.pathname === "/" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <div className="invisible"> HOME</div>

            <span class="Mask Top">
              <span>Home</span>
            </span>
            <span class="Mask">
              <span>Home</span>
            </span>
          </Link>
        </li>

        <li className="menu-item">
          <Link
            to="*"
            onClick={closeMenu}
            className={`${location.pathname === "*" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <div className="invisible"> ABOUT</div>

            <span class="Mask Top">
              <span>ABOUT</span>
            </span>
            <span class="Mask">
              <span>ABOUT</span>
            </span>
          </Link>
        </li>

        <li className="menu-item">
          <Link
            to="*"
            onClick={closeMenu}
            className={`${location.pathname === "*" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <div className="invisible"> PROJECTS</div>

            <span class="Mask Top">
              <span>PROJECTS</span>
            </span>
            <span class="Mask">
              <span>PROJECTS</span>
            </span>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`${location.pathname === "/contact" ? "active" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <div className="invisible"> CONTACT</div>

            <span class="Mask Top">
              <span>CONTACT</span>
            </span>
            <span class="Mask">
              <span>CONTACT</span>
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
