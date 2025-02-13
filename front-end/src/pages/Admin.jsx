import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import AdminModal from "../components/AdminModal";
import ScrollText from "../components/ScrollText";

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
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/error");
    }
  }, [navigate]);

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
        setTimeout(() => setError(null), 5000);
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

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleEdit = (projectId) => {
    try {
      const project = projects.find((p) => p.id === projectId);
      if (project) {
        setCurrentProject(project);
        setError(null);
        setIsEditModalOpen(true);
      } else {
        setError("Projet introuvable");
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      setError(`Erreur lors de la sélection du projet : ${error.message}`);
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      const response = await fetch(
        `https://portfolio-q8zw.onrender.com/api/projects/${projectId}`,
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
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentProject) return;

    const { title, description, year, use, visit, view, cover, tools } =
      currentProject;

    if (!title || !year || isNaN(year)) {
      setError("Veuillez entrer un titre valide et une année valide.");
      setTimeout(() => setError(null), 5000);
      return;
    }

    try {
      const response = await fetch(
        `https://portfolio-q8zw.onrender.com/api/projects/${currentProject.id}`,
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
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const { title, description, year, use, visit, view, cover, tools } =
      newProject;

    if (!title || !year || isNaN(year)) {
      setError("Veuillez entrer un titre valide et une année valide.");
      setTimeout(() => setError(null), 5000);
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
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="admin__container">
        <div className="admin__header">
          <button
            className="admin__add-button"
            onClick={() => setIsAddModalOpen(true)}
          >
            <VscAdd size={25} />
          </button>
          <button className="admin__logout-button" onClick={handleLogout}>
            Déconnecter
          </button>
        </div>

        <table className="admin__table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.title}</td>
                <td>{project.year}</td>
                <td>
                  <div className="admin__actions">
                    <button onClick={() => handleEdit(project.id)}>
                      Modifier
                    </button>
                    <button onClick={() => handleDelete(project.id)}>
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <AdminModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          currentProject={currentProject}
          handleSubmit={handleSubmit}
          setCurrentProject={setCurrentProject}
          error={error}
          setError={setError}
        />
        <AdminModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          currentProject={newProject}
          handleSubmit={handleAddProject}
          setCurrentProject={setNewProject}
          error={error}
          setError={setError}
        />
        {error && <p className="modal__error-message">{error}</p>}
      </div>
      <ScrollText text="- ADMIN - ADMIN - ADMIN - ADMIN - ADMIN - ADMIN - ADMIN - ADMIN - ADMIN - ADMIN -" />
    </>
  );
};

export default Admin;
