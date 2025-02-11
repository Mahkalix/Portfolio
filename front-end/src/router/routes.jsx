import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Error from "../pages/Error.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import Admin from "../pages/Admin.jsx";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
