// Projects.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollText from "../components/ScrollText";
import projectsData from "../data/projects.json";
import AnimatedButton from "./AnimatedButton";

const Projects = () => {
  const middleIndex = Math.floor(projectsData.length / 2);
  const firstHalf = projectsData.slice(0, middleIndex);
  const secondHalf = projectsData.slice(middleIndex);

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <>
      <section id="projects">
        <ScrollText text="PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTS - PROJ" />
        <div className="container-card">
          {firstHalf.map((project, index) => (
            <article key={index}>
              <Link to={`/projects/${project.id}`}>
                <img
                  src={project.cover}
                  alt={project.title}
                  onMouseEnter={() => handleMouseEnter(project)}
                  onMouseLeave={handleMouseLeave}
                />
              </Link>
              <div className="title">
                <div className="number-style">{project.number}</div>
                <AnimatedButton
                  text={project.title}
                  isImageHovered={hoveredProject === project}
                />
              </div>
            </article>
          ))}
        </div>
        <div className="container-card">
          {secondHalf.map((project, index) => (
            <article key={index}>
              <Link to={`/projects/${project.id}`}>
                <img
                  src={project.cover}
                  alt={project.title}
                  onMouseEnter={() => handleMouseEnter(project)}
                  onMouseLeave={handleMouseLeave}
                />
              </Link>
              <div className="title">
                <span className="number-style">{project.number}</span>
                <AnimatedButton
                  text={project.title}
                  isImageHovered={hoveredProject === project}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
