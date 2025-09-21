import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollText from "../components/ScrollText";
import AnimatedButton from "./AnimatedButton";

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
          throw new Error("Erreur lors du chargement des projets");
        }
        const text = await response.text(); // Lire la réponse en tant que texte d'abord
        console.log(text); // Afficher la réponse dans la console
        const data = JSON.parse(text); // Parser la réponse JSON si le texte est valide JSON
        setProjects(data);
      } catch (err) {
        console.error(err);
        try {
          const localResponse = await fetch("/projects.json");
          const localData = await localResponse.json();
          setProjects(localData);
        } catch (localErr) {
          setError(localErr.message);
        }
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
    return <p className="loading">Chargement...</p>;
  }

  if (error) {
    return <p className="loading">Erreur : {error}</p>;
  }

  const projectGroups = [];
  for (let i = 0; i < filteredProjects.length; i += 2) {
    projectGroups.push(filteredProjects.slice(i, i + 2));
  }

  return (
    <>
      <section id="projects">
        <ScrollText text="PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTS - PROJ" />

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
