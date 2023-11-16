import React, { useState, useEffect } from "react";
import { useTheme } from "../components/ThemeSwitch.jsx";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const delay = 2500;
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div className={`loader ${isLoading ? "" : "loaded"} ${theme}`}>
      <div className="progress"></div>
      <div className="stripe"></div>
      <div className="stripe"></div>
      <div className="stripe"></div>
      <div className="stripe"></div>
    </div>
  );
};

export default Loader;
