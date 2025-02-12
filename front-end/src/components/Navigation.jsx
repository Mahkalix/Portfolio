import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";
import { NavHashLink } from "react-router-hash-link";
import { VscAccount } from "react-icons/vsc";
import LoginModal from "./LoginModal";


const Navigation = () => {
  const location = useLocation();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const toggleLoginModal = () => setLoginModalOpen((prev) => !prev);

  const isAdmin = () => {
    return false;
  };

  return (
    <nav>
      <ul className="menu">
        <li>
          <NavHashLink
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            <div className="animation-container">
              <AnimatedButton text="Home" />
            </div>
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="/#about"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className={`nav-link ${
              location.pathname === "/#about" ? "active" : ""
            }`}
          >
            <div className="animation-container">
              <AnimatedButton text="About" />
            </div>
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="/#projects"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className={`nav-link ${
              location.pathname === "/#projects" ? "active" : ""
            }`}
          >
            <div className="animation-container">
              <AnimatedButton text="Projects" />
            </div>
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <div className="animation-container">
              <AnimatedButton text="Contact" />
            </div>
          </NavHashLink>
        </li>

        <li>
          <div
            className={`nav-link ${
              location.pathname === "/admin" ? "active" : ""
            }`}
            onClick={toggleLoginModal}
          >
            <div className="animation-container">
              <VscAccount size={20} />
            </div>
          </div>
        </li>

        {isAdmin() && (
          <li>
            <NavHashLink
              to="/admin"
              className={`nav-link ${
                location.pathname === "/admin" ? "active" : ""
              }`}
            >
              <div className="animation-container">
                <AnimatedButton text="Admin" />
              </div>
            </NavHashLink>
          </li>
        )}
      </ul>
      <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} />
    </nav>
  );
};

export default Navigation;
