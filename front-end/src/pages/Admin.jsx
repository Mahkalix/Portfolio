import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "../styles/admin.module.scss";

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    year: "",
    use: "",
    visit: "",
    view: "",
    cover: "",
    tools: [],
  });
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  /* useEffect(() => {
    const isAuthenticated = () => {
      // Replace with actual authentication check logic
      const token = localStorage.getItem("authToken");
      return !!token;
    };

    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]); */

  // Récupérer les projets
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://portfolio-q8zw.onrender.com/api/projects`
        );

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(`Erreur lors du chargement des projets : ${error.message}`);
      }
    };

    fetchProjects();
  }, []);

  const handleEdit = (projectId) => {
    try {
      const project = projects.find((p) => p.id === projectId);
      if (project) {
        setCurrentProject(project);
        setError(null);
      } else {
        setError("Projet introuvable");
      }
    } catch (error) {
      setError(`Erreur lors de la sélection du projet : ${error.message}`);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      const response = await fetch(
        `https://portfolio-q8zw.onrender.com/api/projects${projectId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      alert("Projet supprimé avec succès !");
      setProjects((prev) => prev.filter((p) => p.id !== projectId));
    } catch (error) {
      setError(`Erreur lors de la suppression du projet : ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentProject) return;

    const { title, description, year, use, visit, view, cover, tools } =
      currentProject;

    if (!title || !year || isNaN(year)) {
      setError("Veuillez entrer un titre valide et une année valide.");
      return;
    }

    try {
      const response = await fetch(
        `https://portfolio-q8zw.onrender.com/api/projects${currentProject.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            year: parseInt(year),
            use,
            visit,
            view,
            cover,
            tools,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const updatedProject = await response.json();
      alert("Projet mis à jour avec succès !");
      setProjects((prev) =>
        prev.map((p) => (p.id === currentProject.id ? updatedProject : p))
      );
      setCurrentProject(null);
    } catch (error) {
      setError(`Erreur lors de la mise à jour du projet : ${error.message}`);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const { title, description, year, use, visit, view, cover, tools } =
      newProject;

    if (!title || !year || isNaN(year)) {
      setError("Veuillez entrer un titre valide et une année valide.");
      return;
    }

    try {
      const response = await fetch(
        `https://portfolio-q8zw.onrender.com/api/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            year: parseInt(year),
            use,
            visit,
            view,
            cover,
            tools,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const addedProject = await response.json();
      alert("Projet ajouté avec succès !");
      setProjects((prev) => [...prev, addedProject]);
      setNewProject({
        title: "",
        description: "",
        year: "",
        use: "",
        visit: "",
        view: "",
        cover: "",
        tools: [],
      });
    } catch (error) {
      setError(`Erreur lors de l'ajout du projet : ${error.message}`);
    }
  };

  return (
    <div className={styles.adminContainer}>
      <h1 className={styles.title}>Panneau Admin - Projets</h1>
      {error && <p className={styles.error}>{error}</p>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Année</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.year}</td>
              <td>
                <button onClick={() => handleEdit(project.id)}>Modifier</button>
                <button onClick={() => handleDelete(project.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentProject && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={currentProject.title}
            onChange={(e) =>
              setCurrentProject({ ...currentProject, title: e.target.value })
            }
            placeholder="Titre"
            className={styles.input}
          />
          <textarea
            value={currentProject.description}
            onChange={(e) =>
              setCurrentProject({
                ...currentProject,
                description: e.target.value,
              })
            }
            placeholder="Description"
            className={styles.textarea}
          />
          <input
            type="number"
            value={currentProject.year}
            onChange={(e) =>
              setCurrentProject({ ...currentProject, year: e.target.value })
            }
            placeholder="Année"
            className={styles.input}
          />
          <input
            type="text"
            value={currentProject.use}
            onChange={(e) =>
              setCurrentProject({ ...currentProject, use: e.target.value })
            }
            placeholder="Catégorie"
            className={styles.input}
          />
          <input
            type="text"
            value={currentProject.visit}
            onChange={(e) =>
              setCurrentProject({ ...currentProject, visit: e.target.value })
            }
            placeholder="Lien de visite"
            className={styles.input}
          />
          <input
            type="text"
            value={currentProject.view}
            onChange={(e) =>
              setCurrentProject({ ...currentProject, view: e.target.value })
            }
            placeholder="Lien du code source"
            className={styles.input}
          />
          <input
            type="text"
            value={currentProject.cover}
            onChange={(e) =>
              setCurrentProject({ ...currentProject, cover: e.target.value })
            }
            placeholder="URL de l'image de couverture"
            className={styles.input}
          />
          <textarea
            value={JSON.stringify(currentProject.tools, null, 2)}
            onChange={(e) => {
              try {
                setCurrentProject({
                  ...currentProject,
                  tools: JSON.parse(e.target.value),
                });
              } catch {
                setError("Le format JSON des outils est invalide");
              }
            }}
            placeholder="Outils (format JSON)"
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Mettre à jour
          </button>
        </form>
      )}
      <form onSubmit={handleAddProject} className={styles.form}>
        <h2>Ajouter un nouveau projet</h2>
        <input
          type="text"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
          placeholder="Titre"
          className={styles.input}
        />
        <textarea
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
          placeholder="Description"
          className={styles.textarea}
        />
        <input
          type="number"
          value={newProject.year}
          onChange={(e) =>
            setNewProject({ ...newProject, year: e.target.value })
          }
          placeholder="Année"
          className={styles.input}
        />
        <input
          type="text"
          value={newProject.use}
          onChange={(e) =>
            setNewProject({ ...newProject, use: e.target.value })
          }
          placeholder="Catégorie"
          className={styles.input}
        />
        <input
          type="text"
          value={newProject.visit}
          onChange={(e) =>
            setNewProject({ ...newProject, visit: e.target.value })
          }
          placeholder="Lien de visite"
          className={styles.input}
        />
        <input
          type="text"
          value={newProject.view}
          onChange={(e) =>
            setNewProject({ ...newProject, view: e.target.value })
          }
          placeholder="Lien du code source"
          className={styles.input}
        />
        <input
          type="text"
          value={newProject.cover}
          onChange={(e) =>
            setNewProject({ ...newProject, cover: e.target.value })
          }
          placeholder="URL de l'image de couverture"
          className={styles.input}
        />
        <textarea
          value={JSON.stringify(newProject.tools, null, 2)}
          onChange={(e) => {
            try {
              setNewProject({
                ...newProject,
                tools: JSON.parse(e.target.value),
              });
            } catch {
              setError("Le format JSON des outils est invalide");
            }
          }}
          placeholder="Outils (format JSON)"
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default Admin;
