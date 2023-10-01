import React from "react";
import "../style/header.css";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import "../style/App.css";

const Switch = () => {
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className="switch">
      <input onChange={handleThemeToggle} type="checkbox" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
};

export default Switch;
