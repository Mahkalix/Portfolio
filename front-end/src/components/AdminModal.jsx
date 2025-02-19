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
                id="use"
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
          </div>

          <div className="admin__form-column">
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
            <div className="modal__form-group">
              <label className="modal__label" htmlFor="view">
                Lien du code source:
              </label>
              <input
                type="text"
                id="view"
                value={currentProject.view}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, view: e.target.value })
                }
                placeholder="Lien du code source"
                className="admin__input"
              />
            </div>

            <div className="modal__form-group">
              <label className="modal__label" htmlFor="tools">
                Outils (format JSON):
              </label>
              <textarea
                id="tools"
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
                      maxHeight: "200px", // Adjusted max height
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
