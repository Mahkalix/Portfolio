import React from "react";
import Modal from "react-modal";
import { VscClose } from "react-icons/vsc";

const AdminModal = ({
  isOpen,
  onClose,
  currentProject,
  handleSubmit,
  setCurrentProject,
  error,
  setError,
}) => {
  // Liste prédéfinie des outils disponibles
  const availableTools = {
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    SASS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    Photoshop:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
    "Vue.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    Angular:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    Vite: "https://vitejs.dev/logo.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Prisma: "https://www.prisma.io/images/favicon-32x32.png",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    Vercel:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/32x32.png",
    Swagger:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png",
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentProject({ ...currentProject, cover: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Fonction pour normaliser les outils (convertir string JSON en objet si nécessaire)
  const normalizeTools = (tools) => {
    if (!tools) return {};
    if (typeof tools === "string") {
      try {
        return JSON.parse(tools);
      } catch {
        return {};
      }
    }
    return tools;
  };

  // Fonction pour gérer la sélection/désélection des outils
  const handleToolToggle = (toolName) => {
    const currentTools = normalizeTools(currentProject.tools);
    const newTools = { ...currentTools };

    if (newTools[toolName]) {
      // Si l'outil est déjà sélectionné, le retirer
      delete newTools[toolName];
    } else {
      // Sinon, l'ajouter
      newTools[toolName] = availableTools[toolName];
    }

    setCurrentProject({
      ...currentProject,
      tools: newTools,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Project Modal"
      className="modal__content modal__content--admin"
      overlayClassName="modal__overlay modal__overlay--admin"
    >
      <button className="modal__close-button" onClick={onClose}>
        <VscClose size={25} />
      </button>
      {currentProject && (
        <form onSubmit={handleSubmit} className="admin__form">
          <div className="admin__form-column">
            <div className="modal__form-group">
              <label className="modal__label" htmlFor="title">
                Titre:
              </label>
              <input
                type="text"
                id="title"
                value={currentProject.title}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    title: e.target.value,
                  })
                }
                placeholder="Titre"
                className="modal__input"
              />
            </div>
            <div className="modal__form-group">
              <label className="modal__label" htmlFor="description">
                Description:
              </label>
              <textarea
                id="description"
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
            </div>
            <div className="modal__form-group">
              <label className="modal__label" htmlFor="year">
                Année:
              </label>
              <input
                type="number"
                id="year"
                value={currentProject.year}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, year: e.target.value })
                }
                placeholder="Année"
                className="modal__input"
              />
            </div>
            <div className="modal__form-group">
              <label className="modal__label" htmlFor="use">
                Use:
              </label>
              <input
                type="text"
                id="use"
                value={currentProject.use}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, use: e.target.value })
                }
                placeholder="Use"
                className="admin__input"
              />
            </div>
            <div className="modal__form-group">
              <label className="modal__label" htmlFor="category">
                Category:
              </label>
              <input
                type="text"
                id="Category"
                value={currentProject.category}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    category: e.target.value,
                  })
                }
                placeholder="Category"
                className="admin__input"
              />
            </div>
            <div className="modal__form-group">
              <label className="modal__label" htmlFor="visit">
                Lien de visite:
              </label>
              <input
                type="text"
                id="visit"
                value={currentProject.visit}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    visit: e.target.value,
                  })
                }
                placeholder="Lien de visite"
                className="admin__input"
              />
            </div>
            {currentProject.category?.toLowerCase() === "web" && (
              <div className="modal__form-group">
                <label className="modal__label" htmlFor="view">
                  Lien du code source:
                </label>
                <input
                  type="text"
                  id="view"
                  value={currentProject.view}
                  onChange={(e) =>
                    setCurrentProject({
                      ...currentProject,
                      view: e.target.value,
                    })
                  }
                  placeholder="Lien du code source"
                  className="admin__input"
                />
              </div>
            )}
          </div>

          <div className="admin__form-column">
            <div className="modal__form-group">
              <label className="modal__label">
                Sélectionner les outils utilisés :
              </label>
              <div className="tools-selection">
                {Object.keys(availableTools).map((toolName) => {
                  const normalizedTools = normalizeTools(currentProject.tools);
                  const isSelected =
                    normalizedTools && normalizedTools[toolName];
                  return (
                    <div
                      key={toolName}
                      className={`tool-item ${isSelected ? "selected" : ""}`}
                      onClick={() => handleToolToggle(toolName)}
                    >
                      <img
                        src={availableTools[toolName]}
                        alt={toolName}
                        className="tool-icon"
                      />
                      <span className="tool-name">{toolName}</span>
                      {isSelected && <span className="checkmark">✓</span>}
                    </div>
                  );
                })}
              </div>

              {/* Affichage des outils sélectionnés */}
              {(() => {
                const normalizedTools = normalizeTools(currentProject.tools);
                return (
                  normalizedTools &&
                  Object.keys(normalizedTools).length > 0 && (
                    <div className="selected-tools-preview selected-tools-list">
                      {Object.keys(normalizedTools).map((toolName) => (
                        <span key={toolName} className="selected-tool-tag">
                          <img
                            src={availableTools[toolName]}
                            alt={toolName}
                            className="tool-icon-small"
                          />
                          {toolName}
                        </span>
                      ))}
                    </div>
                  )
                );
              })()}
            </div>

            {/* Sélection d'image */}
            <div className="modal__form-group">
              <label className="modal__label" htmlFor="cover">
                Sélectionner une image :
              </label>
              <input
                type="file"
                id="cover"
                accept="image/*"
                onChange={handleFileChange}
                className="admin__input"
              />
              {currentProject.cover && (
                <div className="modal__image-preview">
                  <img
                    src={currentProject.cover}
                    alt="Aperçu"
                    className="admin__image-preview"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      height: "auto",
                      marginTop: "10px",
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="modal__form-group">
            {error && <div className="modal__error-message">{error}</div>}
            <button type="submit" className="admin__button">
              Mettre à jour
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default AdminModal;
