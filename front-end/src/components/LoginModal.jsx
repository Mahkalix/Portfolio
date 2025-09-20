import React, { useState } from "react";
import Modal from "react-modal";
import { VscClose, VscEye, VscEyeClosed } from "react-icons/vsc";

Modal.setAppElement("#root");

// Configuration de l'URL API avec fallback
const API_URL =
  process.env.REACT_APP_API_URL || "https://portfolio-q8zw.onrender.com";

console.log("API_URL utilisée:", API_URL);

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  console.log("Modal isOpen:", isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Mode de test temporaire
    if (username === "admin" && password === "mmiteachers") {
      console.log("🎯 Mode test activé - connexion admin réussie");
      localStorage.setItem("token", "test-token-admin-" + Date.now());
      window.location.href = "/admin";
      return;
    }

    try {
      console.log("🚀 Tentative de connexion via API:", API_URL);
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      console.log("📡 Réponse serveur:", response.status, response.statusText);
      const data = await response.json();
      console.log("📋 Données reçues:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "/admin";
      } else {
        setError(data.error || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error("Login error details:", error);
      setError(`Connection error: ${error.message}. Server: ${API_URL}`);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      className="modal__content"
      overlayClassName="modal__overlay"
    >
      <button className="modal__close-button" onClick={onClose}>
        <VscClose size={25} />
      </button>
      <div className="modal__container">
        <h2 className="modal__title">Admin</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__form-group">
            <label className="modal__label" htmlFor="username">
              Username:
            </label>
            <input
              className="modal__input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="modal__form-group">
            <label className="modal__label" htmlFor="password">
              Password:
            </label>
            <div className="modal__password-container">
              <input
                className="modal__input"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="modal__password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: "10px" }}
              >
                {showPassword ? (
                  <VscEye size={20} />
                ) : (
                  <VscEyeClosed size={20} />
                )}
              </button>
            </div>
          </div>
          {error && <div className="modal__error-message">{error}</div>}
          <button className="modal__submit" type="submit">
            Login
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
