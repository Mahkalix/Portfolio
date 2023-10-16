import React from "react";
import argentbank from "../assets/images/argentbank.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <article>
          <Link className="container-img" to="/error">
            <img src={argentbank} alt="argentbank" />
          </Link>
          <div className="title">KASA</div>
        </article>
        <article>
          <Link className="container-img" to="/error">
            <img src={argentbank} alt="argentbank" />
          </Link>
          <div className="title">ARGENT BANK </div>
        </article>
        <article>
          <Link className="container-img" to="/error">
            <img src={argentbank} alt="argentbank" />
          </Link>
          <div className="title">DIMENSION </div>
        </article>
        <article></article>
      </section>
    </>
  );
};

export default Projects;
