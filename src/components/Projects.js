import React from "react";
import argentbank from "../assets/images/argentbank.png";
import { Link } from "react-router-dom";
import ScrollText from "../components/ScrollText";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <ScrollText text="PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTS - PROJ" />
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
