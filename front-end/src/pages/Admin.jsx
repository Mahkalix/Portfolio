import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { VscClose, VscAdd } from "react-icons/vsc";
import "../styles/layouts/admin.scss";

Modal.setAppElement("#root");

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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

  useEffect(() => {
    if (isEditModalOpen || isAddModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isEditModalOpen, isAddModalOpen]);

  const handleEdit = (projectId) => {
    try {
      const project = projects.find((p) => p.id === projectId);
      if (project) {
        setCurrentProject(project);
        setError(null);
        setIsEditModalOpen(true);
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
      setIsEditModalOpen(false);
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
      setIsAddModalOpen(false);
    } catch (error) {
      setError(`Erreur lors de l'ajout du projet : ${error.message}`);
    }
  };

  return (
    <div className="admin__container">
      <h1 className="admin__title">Panneau Admin - Projets</h1>
      {error && <p className="admin__error">{error}</p>}
      <table className="admin__table">
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
      <button className="admin__add-button" onClick={() => setIsAddModalOpen(true)}>
        <VscAdd size={25} />
      </button>
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contentLabel="Edit Project Modal"
        className="modal__content--admin"
        overlayClassName="modal__overlay--admin"
      >
        <button className="modal__close-button" onClick={() => setIsEditModalOpen(false)}>
          <VscClose size={25} />
        </button>
        {currentProject && (
          <form onSubmit={handleSubmit} className="admin__form">
            <input
              type="text"
              value={currentProject.title}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, title: e.target.value })
              }
              placeholder="Titre"
              className="admin__input"
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
              className="admin__textarea"
            />
            <input
              type="number"
              value={currentProject.year}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, year: e.target.value })
              }
              placeholder="Année"
              className="admin__input"
            />
            <input
              type="text"
              value={currentProject.use}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, use: e.target.value })
              }
              placeholder="Catégorie"
              className="admin__input"
            />
            <input
              type="text"
              value={currentProject.visit}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, visit: e.target.value })
              }
              placeholder="Lien de visite"
              className="admin__input"
            />
            <input
              type="text"
              value={currentProject.view}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, view: e.target.value })
              }
              placeholder="Lien du code source"
              className="admin__input"
            />
            <input
              type="text"
              value={currentProject.cover}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, cover: e.target.value })
              }
              placeholder="URL de l'image de couverture"
              className="admin__input"
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
              className="admin__textarea"
            />
            <button type="submit" className="admin__button">
              Mettre à jour
            </button>
          </form>
        )}
      </Modal>
      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        contentLabel="Add Project Modal"
        className="modal__content--admin"
        overlayClassName="modal__overlay--admin"
      >
        <button className="modal__close-button" onClick={() => setIsAddModalOpen(false)}>
          <VscClose size={25} />
        </button>
        <form onSubmit={handleAddProject} className="admin__form">
          <h2>Ajouter un nouveau projet</h2>
          <input
            type="text"
            value={newProject.title}
            onChange={(e) =>
              setNewProject({ ...newProject, title: e.target.value })
            }
            placeholder="Titre"
            className="admin__input"
          />
          <textarea
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
            placeholder="Description"
            className="admin__textarea"
          />
          <input
            type="number"
            value={newProject.year}
            onChange={(e) =>
              setNewProject({ ...newProject, year: e.target.value })
            }
            placeholder="Année"
            className="admin__input"
          />
          <input
            type="text"
            value={newProject.use}
            onChange={(e) =>
              setNewProject({ ...newProject, use: e.target.value })
            }
            placeholder="Catégorie"
            className="admin__input"
          />
          <input
            type="text"
            value={newProject.visit}
            onChange={(e) =>
              setNewProject({ ...newProject, visit: e.target.value })
            }
            placeholder="Lien de visite"
            className="admin__input"
          />
          <input
            type="text"
            value={newProject.view}
            onChange={(e) =>
              setNewProject({ ...newProject, view: e.target.value })
            }
            placeholder="Lien du code source"
            className="admin__input"
          />
          <input
            type="text"
            value={newProject.cover}
            onChange={(e) =>
              setNewProject({ ...newProject, cover: e.target.value })
            }
            placeholder="URL de l'image de couverture"
            className="admin__input"
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
            className="admin__textarea"
          />
          <button type="submit" className="admin__button">
            Ajouter
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Admin;
