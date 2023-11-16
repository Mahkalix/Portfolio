import React from "react";
import { Link, useLocation } from "react-router-dom";

const Error = () => {
  const location = useLocation();

  return (
    <section className="error">
      <div className="error-content">
        <p className="error-number">404</p>
        <p className="error-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link
        to="/"
        className={`error-link ${location.pathname === "/" ? "active" : ""} 
        `}
      >
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
};

export default Error;
