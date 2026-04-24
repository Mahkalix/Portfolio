import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScrollText from "../components/ScrollText.jsx";
import localProjects from "../data/projects.json";

// Configuration de l'URL API
const API_URL =
  process.env.REACT_APP_API_URL || "https://portfolio-l0hm.onrender.com";

const ProjectDetails = () => {
  const { id } = useParams(); // L'ID est en fait le slug
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${API_URL}/api/projects/${id}`);
        if (!response.ok) {
          throw new Error(
            `Impossible de charger le projet (HTTP ${response.status}).`,
          );
        }

        const text = await response.text();
        let data;

        try {
          data = JSON.parse(text);
        } catch {
          throw new Error(
            "Le serveur a repondu avec un format invalide (attendu: JSON).",
          );
        }

        if (typeof data.tools === "string") {
          try {
            data.tools = JSON.parse(data.tools);
          } catch {
            data.tools = {};
          }
        }

        setProject(data);
        setError(null);
      } catch (err) {
        const fallbackProject = localProjects.find((item) => item.id === id);

        if (fallbackProject) {
          setProject(fallbackProject);
          setError(null);
        } else {
          setError(
            "Le projet est indisponible pour le moment. Merci de reessayer plus tard.",
          );
        }
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  console.log(error);

  if (error && !project) {
    return <p className="loading">Erreur : {error}</p>;
  }

  if (!project) {
    return (
      <div className="loader-container">
        <div className="loader2"></div>
      </div>
    );
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
