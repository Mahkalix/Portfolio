import React, { useState, useEffect } from "react";

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Fetch projects from the server
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const handleEdit = (project) => {
    setSelectedProject(project);
  };

  const handleSave = () => {
    fetch(`/api/projects/${selectedProject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedProject),
    }).then(() => {
      setSelectedProject(null);
      // Refresh the projects list
      fetch("/api/projects")
        .then((response) => response.json())
        .then((data) => setProjects(data));
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProject({ ...selectedProject, [name]: value });
  };

  return (
    <div className="admin-container">
      <h2>Admin - Manage Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <button onClick={() => handleEdit(project)}>Edit</button>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="edit-form">
          <h3>Edit Project</h3>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={selectedProject.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={selectedProject.description}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
