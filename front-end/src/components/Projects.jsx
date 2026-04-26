import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollText from "../components/ScrollText";
import AnimatedButton from "./AnimatedButton";
import localProjects from "../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]); // État pour les projets
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour les erreurs
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState("All"); // État pour le filtre

  // Fonction pour récupérer les projets depuis l'API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const API_URL =
          process.env.REACT_APP_API_URL ||
          "https://portfolio-l0hm.onrender.com";
        const response = await fetch(`${API_URL}/api/projects`);

        if (!response.ok) {
          throw new Error(
            `Impossible de charger les projets (HTTP ${response.status}).`,
          );
        }

        const text = await response.text();
        let data;

        try {
          data = JSON.parse(text);
        } catch {
          // If the API returns HTML (doctype page) or any non-JSON body, show a clean user message.
          throw new Error(
            "Le serveur a repondu avec un format invalide (attendu: JSON).",
          );
        }

        setProjects(data);
        setError(null);
      } catch (err) {
        console.error(err);

        // Graceful fallback to bundled local data if the API is unreachable.
        setProjects(localProjects);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Gestion du survol de l'image
  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  if (loading) {
    return (
      <div className="loader-container-home">
        <div className="loader-home"></div>
      </div>
    );
  }

  const projectGroups = [];
  for (let i = 0; i < filteredProjects.length; i += 2) {
    projectGroups.push(filteredProjects.slice(i, i + 2));
  }

  return (
    <>
      <section id="projects">
        <ScrollText text="PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTS - PROJ" />

        {error && <p className="loading">Erreur : {error}</p>}

        <div className="projects__filter">
          <button
            className="projects__filter-button"
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className="projects__filter-button"
            onClick={() => setFilter("Web")}
          >
            Web
          </button>
          <button
            className="projects__filter-button"
            onClick={() => setFilter("Design")}
          >
            Design
          </button>
        </div>

        {projectGroups.map((group, groupIndex) => (
          <div className="container-card" key={groupIndex}>
            {group.map((project, index) => (
              <article key={index}>
                <Link
                  to={`/projects/${project.id}`}
                  aria-label={`View ${project.title} project details`}
                >
                  <img
                    src={project.cover}
                    alt={`${project.title} project preview screenshot`}
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
                <div className="infos">
                  <div className="category">{project.category}</div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
