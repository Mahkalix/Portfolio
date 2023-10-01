import React from "react";
import { useSelector } from "react-redux";

function ThemeSwitch({ children }) {
  const themeColor = useSelector((state) => state.theme.themeColor);

  return <div className={`theme-Switch ${themeColor}`}>{children}</div>;
}

export default ThemeSwitch;
