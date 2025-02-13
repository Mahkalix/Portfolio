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
            onClick={handleAdminClick}
          >
            <div className="animation-container">
              <VscAccount size={20} />
            </div>
          </div>
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
