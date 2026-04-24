import React from "react";
import Routes from "../src/router/routes";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import { useTheme } from "../src/components/ThemeSwitch.jsx";
import Loader from "../src/components/Loader.jsx";
import "../src/styles/base/_globals.scss";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme === "light" ? "light" : "dark"}`}>
      <Loader />
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
