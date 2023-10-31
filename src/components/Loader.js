import React, { useState, useEffect } from "react";
import { useTheme } from "../components/ThemeSwitch";

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
    </div>
  );
};

export default Loader;
