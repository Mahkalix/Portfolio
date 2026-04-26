import React from "react";
import { useTheme } from "./ThemeSwitch";

const Switch = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="switch" role="group" aria-label="Theme switcher">
      <input
        className="input"
        onChange={toggleTheme}
        type="checkbox"
        id="switch"
        aria-label="Toggle between light and dark theme"
      />
      <label className="label" htmlFor="switch" aria-hidden="true">
        Theme switcher
      </label>
    </div>
  );
};

export default Switch;
