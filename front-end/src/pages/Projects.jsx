import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScrollText from "../components/ScrollText.jsx";

const ProjectDetails = () => {
  const { id } = useParams(); // L'ID est en fait le slug
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `https://portfolio-q8zw.onrender.com/api/projects/${id}`
        );
        if (!response.ok) throw new Error("Projet introuvable");

        const data = await response.json();

        if (typeof data.tools === "string") {
          data.tools = JSON.parse(data.tools);
        }

        setProject(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  console.log(error);

  if (!project) {
    return <p className="loading2">Chargement...</p>;
  }

  return (
    <>
      <div className="projects">
        <div className="container-projects-description">
          <div className="title">{project.title}</div>
          <div className="description">{project.description}</div>
          <div className="infos">
            <div className="year">
              <p>YEAR</p> <br />
              {project.year}
            </div>
            <div className="use">
              <p>USE</p> <br />
              {project.use}
            </div>
            <div className="use">
              <p>CATEGORY</p> <br />
              {project.category}
            </div>
          </div>
          <ul className="project-tools">
            {project.tools &&
              Object.entries(project.tools).map(([name, icon], index) => (
                <li key={index}>
                  <img src={icon} alt={name} />
                </li>
              ))}
          </ul>
        </div>
        <div className="container-projects-img">
          <img src={project.cover} alt={project.title} />
        </div>
      </div>
      <ScrollText text="PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW -" />
      <div className="preview">
        <div className="visit">
          <a
            href={project.visit}
            target="_blank"
            rel="noreferrer"
            className="view-visit"
          >
            Visit site
          </a>
        </div>
        {project.category.toLowerCase() !== "design" && (
          <div className="view">
            <a
              href={project.view}
              target="_blank"
              rel="noreferrer"
              className="view-code"
            >
              View code
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectDetails;
