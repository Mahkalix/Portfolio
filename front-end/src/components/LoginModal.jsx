import React, { useState } from "react";
import Modal from "react-modal";
import { VscClose } from "react-icons/vsc";
import styles from "../styles/loginModal.module.scss";

Modal.setAppElement("#root"); // Ensure accessibility

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const API_URL = process.env.API_URL || "http://localhost:4000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    console.log("Username:", username);
    console.log("Password:", password);

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      console.log("Response data:", data);

      if (response.ok) {
        window.location.href = "/admin";
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      style={{
        overlay: {
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          backdropFilter: "blur(5px)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "400px",
          maxHeight: "90%",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          opacity: 1,
          transition: "opacity 0.3s ease-in-out",
        },
      }}
    >
      <button className={styles.closeButton} onClick={onClose}>
        <VscClose size={20} />
      </button>
      <div className={styles.loginContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className={styles.errorMessage}>{error}</div>}
          <button className={styles.submit} type="submit">
            Login
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
