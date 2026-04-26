import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";
import { NavHashLink } from "react-router-hash-link";
import { VscAccount } from "react-icons/vsc";
import LoginModal from "./LoginModal";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleAdminClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin");
    } else {
      setLoginModalOpen(true);
    }
  };

  return (
    <nav aria-label="Main navigation">
      <ul className="menu" role="menubar">
        <li role="none">
          <NavHashLink
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
            aria-current={location.pathname === "/" ? "page" : undefined}
            role="menuitem"
          >
            <div className="animation-container">
              <AnimatedButton text="Home" />
            </div>
          </NavHashLink>
        </li>
        <li role="none">
          <NavHashLink
            to="/#about"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className={`nav-link ${
              location.pathname === "/#about" ? "active" : ""
            }`}
            role="menuitem"
          >
            <div className="animation-container">
              <AnimatedButton text="About" />
            </div>
          </NavHashLink>
        </li>
        <li role="none">
          <NavHashLink
            to="/#projects"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className={`nav-link ${
              location.pathname === "/#projects" ? "active" : ""
            }`}
            role="menuitem"
          >
            <div className="animation-container">
              <AnimatedButton text="Projects" />
            </div>
          </NavHashLink>
        </li>
        <li role="none">
          <NavHashLink
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            role="menuitem"
            aria-current={location.pathname === "/contact" ? "page" : undefined}
          >
            <div className="animation-container">
              <AnimatedButton text="Contact" />
            </div>
          </NavHashLink>
        </li>

        <li role="none">
          <button
            className={`nav-link nav-link__admin ${
              location.pathname === "/admin" ? "active" : ""
            }`}
            onClick={handleAdminClick}
            role="menuitem"
            aria-label="Admin login"
            aria-current={location.pathname === "/admin" ? "page" : undefined}
            type="button"
          >
            <div className="animation-container">
              <VscAccount size={20} />
            </div>
          </button>
        </li>
      </ul>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </nav>
  );
};

export default Navigation;
