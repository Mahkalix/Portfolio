import React from "react";
import ScrollText from "../components/ScrollText";
import arrow from "../assets/svg/arrow.svg";

const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <h1 className="title">
            Maxence <br />
            Badin-Léger
          </h1>
          <div className="subtitle">
            <div className="container-reverse">
              <div className="item-one">Portfolio</div>
              <div className="item-two">Portfolio</div>
            </div>
            <div className="description">
              Hello 👋 <br />
              I'm a front-end developer / web integrator's student <br />
              based in Grenoble, France.
            </div>
          </div>
        </section>

        {/* <ScrollText text="WELCOME TO PORTFOLIO - WELCOME TO PORTFOLIO - WELCOME TO PORTFOLIO - WELCOME TO PORTFOLIO - WELCOME TO PORTFOLIO - " />
        <section className="portfolio"></section> */}

        <ScrollText text="ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT -" />
        <section className="about">
          <h1>
            GOOD TO SEE YOU ! <br /> LET ME TELL YOU A BIT MORE ABOUT ME
          </h1>
          <div className="scroll">
            Scroll to explore <img src={arrow} alt="arrow" />
          </div>
        </section>

        <ScrollText text="PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTs - PROJECTS - PROJ" />
        <section className="projects"></section>
      </main>
    </>
  );
};

export default Home;
