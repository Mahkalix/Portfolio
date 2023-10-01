import React from "react";
import "../style/header.css";
import Logol from "../assets/svg/logol.svg";
import Logod from "../assets/svg/logod.svg";
import Nav from "./nav";
import Switch from "./Switch";
import { useSelector } from "react-redux";

const Header = () => {
  const theme = useSelector((state) => state.theme.themeColor);
  return (
    <header>
      <div className="logo">
        <img
          src={theme === "dark" ? Logod : Logol}
          alt="Logo"
          className={theme}
        />
      </div>
      <Nav />
      <Switch />
    </header>
  );
};

export default Header;
