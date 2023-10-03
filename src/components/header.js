import React from "react";
import Logol from "../assets/svg/logol.svg";
import Logod from "../assets/svg/logod.svg";
import Nav from "./nav";
import Switch from "./Switch";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/menu.js";
import { useTheme } from "./ThemeSwitch.js";

const Header = () => {
  const { theme } = useTheme();
  const location = useLocation();
  return (
    <header>
      <div className="logo">
        <Link to="/" className={location.pathname === "/" ? "" : ""}>
          <img src={theme === "light" ? Logod : Logol} alt="Logo" />
        </Link>
      </div>

      <Menu />
      <Nav />
      <Switch />
    </header>
  );
};

export default Header;
