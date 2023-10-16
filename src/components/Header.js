import React from "react";
import Logol from "../assets/svg/logol.svg";
import Logod from "../assets/svg/logod.svg";
import Nav from "../components/Navigation";
import Switch from "../components/Switch";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import { useTheme } from "../components/ThemeSwitch";

const Header = () => {
  const { theme } = useTheme();
  const location = useLocation();
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/" className={location.pathname === "/" ? "" : ""}>
            <img src={theme === "light" ? Logod : Logol} alt="Logo" />
          </Link>
        </div>

        <Menu />
        <div className="selectArea">
          <Switch />
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
