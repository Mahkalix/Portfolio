import React from "react";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default Home;
