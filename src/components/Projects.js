import React from "react";
import { Link } from "react-router-dom";
import ScrollText from "../components/ScrollText";
import projectsData from "../data/projects.json";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <ScrollText text="PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTS - PROJ" />
        <div className="container-img">
          {projectsData.map((project, index) => (
            <article key={index}>
              <Link to={`/projects/${project.id}`}>
                <img src={project.cover} alt={project.title} />
              </Link>
              <div className="title">{project.title}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
