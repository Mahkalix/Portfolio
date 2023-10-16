import React from "react";
import ScrollText from "../components/ScrollText";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Hero from "../components/Hero.js";

const Home = () => {
  return (
    <>
      <main>
        <Hero />

        {/* <ScrollText text="WELCOME TO PORTFOLIO - WELCOME TO PORTFOLIO - WELCOME TO PORTFOLIO - WELCOME TO PORTFOLIO - WELCOME TO PORTFOLIO - " />
        <section className="portfolio"></section> */}
        <ScrollText text="ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT -" />

        <About />

        <ScrollText text="PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTS - PROJ" />
        <Projects />
      </main>
    </>
  );
};

export default Home;
