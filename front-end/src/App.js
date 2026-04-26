import React from "react";
import Routes from "../src/router/routes";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import { useTheme } from "../src/components/ThemeSwitch.jsx";
import "../src/styles/base/_globals.scss";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme === "light" ? "light" : "dark"}`}>
      <div className="skip-links">
        <nav className="skip-nav" aria-label="Liens rapides">
          <span className="skip-nav-label">Aller vers :</span>
          <ul className="skip-nav-list">
            <li><a href="#main-content" className="skip-link-item">Contenu</a></li>
            <li><a href="/" className="skip-link-item">Accueil</a></li>
            <li><a href="#about" className="skip-link-item">À propos</a></li>
            <li><a href="#projects" className="skip-link-item">Projets</a></li>
            <li><a href="/contact" className="skip-link-item">Contact</a></li>
          </ul>
        </nav>
      </div>
      <Header />
      <main id="main-content" role="main">
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
