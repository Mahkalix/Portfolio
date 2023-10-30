import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Error from "../pages/Error.js";
import Projects from "../pages/Projects.js";
import Contact from "../pages/Contact.js";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
