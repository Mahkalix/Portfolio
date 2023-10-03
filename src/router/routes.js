import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Error from "../pages/Error.js";
import Contact from "../pages/Contact.js";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default routes;
