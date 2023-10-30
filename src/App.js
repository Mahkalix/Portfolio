import React from "react";
import Routes from "../src/router/routes";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { useTheme } from "../src/components/ThemeSwitch";
import Loader from "../src/components/Loader.js";

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
