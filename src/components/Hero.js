import React from "react";
import Spiderman from "../assets/images/spiderman.png";

const Hero = () => {
  return (
    <>
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
            I'm a front-end developer
            <br />
            based in Grenoble, France.
          </div>
        </div>
        <img src={Spiderman} alt="img-spiderman" className="spiderman" />
      </section>
    </>
  );
};

export default Hero;
