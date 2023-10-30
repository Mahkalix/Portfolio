import React from "react";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Hero from "../components/Hero.js";

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
