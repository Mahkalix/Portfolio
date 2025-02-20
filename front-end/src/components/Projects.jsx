import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollText from "../components/ScrollText";
import AnimatedButton from "./AnimatedButton";

const Projects = () => {
  const [projects, setProjects] = useState([]); // État pour les projets
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour les erreurs
  const [hoveredProject, setHoveredProject] = useState(null);

  // Fonction pour récupérer les projets depuis l'API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://portfolio-q8zw.onrender.com/api/projects`
        );
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des projets");
        }
        const text = await response.text(); // Lire la réponse en tant que texte d'abord
        console.log(text); // Afficher la réponse dans la console
        const data = JSON.parse(text); // Parser la réponse JSON si le texte est valide JSON
        setProjects(data);
      } catch (err) {
        setError(err.message);
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

  if (loading) {
    return <p className="loading">Chargement...</p>;
  }

  if (error) {
    return <p className="loading">Erreur : {error}</p>;
  }

  // Diviser les projets en groupes de 2
  const projectGroups = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectGroups.push(projects.slice(i, i + 2));
  }

  return (
    <>
      <section id="projects">
        <ScrollText text="PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTS - PROJ" />

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
              </article>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
