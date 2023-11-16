import React, { useState } from "react";
import Modal from "react-modal";
import { useTheme } from "../components/ThemeSwitch.jsx";

Modal.setAppElement("#root");

const Contact = () => {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [ShowModalError, setShowModalError] = useState(false);
  const [formData, setFormData] = useState({
    object: "",
    name: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    if (
      formData.object === "" ||
      formData.name === "" ||
      formData.email === "" ||
      formData.comments === ""
    ) {
      console.log("ok");
      setShowModalError(true);
      return;
    }

    const form = event.target;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const formDataToSend = new FormData(form);
    formDataToSend.append("access_key", "3f4ae6e4-3319-4a49-8fd5-d54c59761938");
    const object = Object.fromEntries(formDataToSend);

    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      object: "",
      name: "",
      email: "",
      comments: "",
    });
  };

  return (
    <section className="contact">
      <h1>Get in touch</h1>

      <form onSubmit={handleSubmit} className="form" noValidate>
        <div>
          <label
            className={`labels ${theme === "light" ? "light" : "dark"}`}
            htmlFor="object"
          >
            Object
          </label>
          <input
            className={`other ${theme === "light" ? "light" : "dark"}`}
            type="text"
            name="object"
            value={formData.object}
            onChange={handleChange}
            required
          />
        </div>
        {formData.object === "" && ShowModalError && (
          <span className="field-empty">Champ non rempli</span>
        )}

        <div>
          <label
            className={`labels ${theme === "light" ? "light" : "dark"}`}
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`other ${theme === "light" ? "light" : "dark"}`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {formData.name === "" && ShowModalError && (
          <span className="field-empty">Champ non rempli</span>
        )}

        <div>
          <label
            className={`labels ${theme === "light" ? "light" : "dark"}`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`other ${theme === "light" ? "light" : "dark"}`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {formData.email === "" && ShowModalError && (
          <span className="field-empty">Champ non rempli</span>
        )}
        <div>
          <label
            className={`labels ${theme === "light" ? "light" : "dark"}`}
            htmlFor="comments"
          >
            Message
          </label>
          <textarea
            className={`other ${theme === "light" ? "light" : "dark"}`}
            name="comments"
            rows="8"
            cols="35"
            value={formData.comments}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {formData.comments === "" && ShowModalError && (
          <span className="field-empty">Champ non rempli</span>
        )}

        <input
          className={`other ${theme === "light" ? "light" : "dark"}`}
          type="submit"
          name="submit"
          value="Send"
        />

        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Message sent !"
          className={`modal ${theme === "light" ? "dark" : "light"}`}
          overlayClassName="overlay"
        >
          <h2 className="modal-title">Your message has been sent !</h2>
          <p>
            Thank you for reaching out. I'll respond to you as soon as possible.
          </p>
          <button
            onClick={closeModal}
            className={`modal-close-button ${
              theme === "light" ? "dark" : "light"
            }`}
          >
            Close
          </button>
        </Modal>
      </form>
    </section>
  );
};

export default Contact;
