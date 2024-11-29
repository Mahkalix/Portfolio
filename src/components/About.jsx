import React from "react";
import me from "../assets/images/me.jpg";
import ScrollText from "../components/ScrollText";
import styles from "../styles/about.module.scss";

const About = () => {
  return (
    <>
      <section id="about" className={styles.about}>
        <ScrollText text="ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT -" />

        <div className={styles.aboutHeader}>
          <h1>
            GOOD TO SEE YOU ! <br />
            LET ME TELL YOU A BIT MORE ABOUT ME :
          </h1>
        </div>
        <div className={styles.text}>
          <div className={styles.floating}>
            <img className={styles.normal} src={me} alt="" />
          </div>

          <div className={styles.introduction}>
            <h2>Who am I ?</h2>

            <p>
              <span className={styles.number}>01/</span> I'm Max, a 23-year-old
              web wizard from the cozy town of Saint Martin d'Uriage near
              Grenoble. I have a knack for turning wild web ideas into reality
              through a blend of code and design, and right now, I’m on the
              lookout for my next adventure. <br />
            </p>

            <p>
              <span className={styles.number}>02/</span> My web journey kicked
              off with the essentials HTML, CSS, and JavaScript during a
              nine-month course that truly ignited my passion. Along the way, I
              dove into React and became hooked on building dynamic web
              experiences. I didn’t stop there, though! I’ve also ventured into
              the design world because, let’s be honest, that’s where all the
              cool visuals happen.
              <br />
            </p>
            <p>
              <span className={styles.number}>03/</span> Currently, I’m studying
              for my BUT métiers du multimédia et de l’internet at IUT 1
              Grenoble, where I’m deepening my skills in backend development
              with PHP and Laravel. Additionally, I’m exploring Java and Android
              Studio, and soon, I’ll be getting hands-on with Next.js and Docker
              as part of my training. Every new tool I learn opens up exciting
              possibilities, and I’m always eager to apply them to real-world
              projects. <br />
            </p>
            <p>
              <span className={styles.number}>04/</span> Although I’ve already
              earned a BTEC higher national diploma (the French equivalent of
              bac +2), I believe that learning is a never-ending journey
              especially in the fast-moving world of web development. If you
              think I’d be a good fit for your team, or just want to chat about
              the latest tech trends, feel free to reach out!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
