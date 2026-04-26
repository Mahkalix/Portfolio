import React, { useEffect } from "react";
import Spiderman from "../assets/images/miles.png";
import styles from "../styles/hero.module.scss";

const Hero = () => {
  useEffect(() => {
    const spidermanElement = document.querySelector(".spiderman");
    const spidermanMovingDuration = 3000;

    spidermanElement.addEventListener("mouseover", () => {
      spidermanElement.style.animation =
        "spidermanmoving 3s ease-in-out forwards";
      setTimeout(() => {
        spidermanElement.style.animation = "spiderman 5s ease-in-out forwards";
      }, spidermanMovingDuration);
    });
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Maxence <br />
          Badin-Léger
        </h1>

        <div className={styles.subtitle}>
          <div className={styles.containerReverse}>
            <div className={styles.itemOne}>Portfolio</div>
            <div className={styles.itemTwo}>Portfolio</div>
          </div>
          <div className={styles.description}>
            Hello 👋🏼 <br />
            I'm a student developer
            <br />
            based in Grenoble, France.
          </div>
        </div>
        <img
          src={Spiderman}
          alt="Miles Morales Spider-Man character illustration"
          className="spiderman"
          aria-label="Spiderman animation - interactive on hover"
        />
      </section>
    </>
  );
};

export default Hero;
