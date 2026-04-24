import React from "react";
import { useTheme } from "./ThemeSwitch";

const Switch = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="switch">
      <input
        className="input"
        onChange={toggleTheme}
        type="checkbox"
        id="switch"
      />
      <label className="label" htmlFor="switch"></label>
    </div>
  );
};

export default Switch;
