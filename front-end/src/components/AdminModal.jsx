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
                Catégorie:
              </label>
              <input
                type="text"
                id="use"
                value={currentProject.use}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, use: e.target.value })
                }
                placeholder="Catégorie"
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
              <label className="modal__label" htmlFor="cover">
                URL de l'image de couverture:
              </label>
              <input
                type="text"
                id="cover"
                value={currentProject.cover}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    cover: e.target.value,
                  })
                }
                placeholder="URL de l'image de couverture"
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
          </div>
          {error && <div className="admin__error">{error}</div>}
          <button type="submit" className="admin__button">
            Mettre à jour
          </button>
        </form>
      )}
    </Modal>
  );
};

export default AdminModal;
