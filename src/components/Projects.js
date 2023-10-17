import React from "react";
import { Link } from "react-router-dom";
import ScrollText from "../components/ScrollText";
import projectsData from "../data/projects.json";

const Projects = () => {
  const middleIndex = Math.floor(projectsData.length / 2);

  // Séparez le tableau en deux parties, avant et après le milieu
  const firstHalf = projectsData.slice(0, middleIndex);
  const secondHalf = projectsData.slice(middleIndex);

  return (
    <>
      <section id="projects">
        <ScrollText text="PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTS - PROJ" />
        <div className="container-card">
          {firstHalf.map((project, index) => (
            <article key={index}>
              <Link to={`/projects/${project.id}`}>
                <img src={project.cover} alt={project.title} />
              </Link>
              <div className="title">
                <span className="number-style">{project.number}</span>
                {project.title}
              </div>
            </article>
          ))}
        </div>
        <div className="container-card">
          {secondHalf.map((project, index) => (
            <article key={index}>
              <Link to={`/projects/${project.id}`}>
                <img src={project.cover} alt={project.title} />
              </Link>
              <div className="title">
                <span className="number-style">{project.number}</span>
                {project.title}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
