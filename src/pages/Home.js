import React from "react";
import Me from "../assets/images/me.png";

const Home = () => {
  return (
    <>
      <main>
        <section className="content">
          <h1 className="titre">
            Maxence <br />
            Badin-Léger
          </h1>
          <div className="portfolio">
            <div className="one">Portfolio</div>
            <div className="two">Portfolio</div>
          </div>
          <div className="description">
            Hello 👋 <br />
            I'm a front-end developer / web integrator's student <br />
            based in Grenoble, France.
          </div>
        </section>
        <aside className="image">
          <img src={Me} alt="Maxence Badin-Léger" />
        </aside>
      </main>
    </>
  );
};

export default Home;
