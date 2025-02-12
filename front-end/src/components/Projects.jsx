import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollText from "../components/ScrollText";
import AnimatedButton from "./AnimatedButton";

const Projects = () => {
  const [projects, setProjects] = useState([]); // État pour les projets
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour les erreurs
  const [hoveredProject, setHoveredProject] = useState(null);

  const middleIndex = Math.floor(projects.length / 2);
  const firstHalf = projects.slice(0, middleIndex);
  const secondHalf = projects.slice(middleIndex);

  // Fonction pour récupérer les projets depuis l'API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://portfolio-q8zw.onrender.com/api/projects"
        );
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des projets");
        }
        const data = await response.json();
        setProjects(data); // Mettre à jour l'état avec les projets récupérés
      } catch (err) {
        setError(err.message); // En cas d'erreur, mettre à jour l'état d'erreur
      } finally {
        setLoading(false); // Une fois le chargement terminé, changer l'état
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
    return <p>Chargement...</p>; // Afficher un message de chargement
  }

  if (error) {
    return <p>Erreur : {error}</p>; // Afficher un message d'erreur si nécessaire
  }

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
