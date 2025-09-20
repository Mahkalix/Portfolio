import React from "react";
import me from "../assets/images/me2.jpeg";
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
              <span className={styles.number}>01/</span> I'm Max, a 24-year-old
              web wizard from the cozy town of Saint-Martin-d'Uriage near
              Grenoble. I love turning ambitious web ideas into reality through
              a blend of clean code and creative design. Right now, I’m always
              seeking new opportunities to learn, grow, and collaborate.
            </p>

            <p>
              <span className={styles.number}>02/</span> My journey began at
              OpenClassrooms with the <strong>Web Integrator Program</strong>,
              where I learned the fundamentals of HTML, CSS, and JavaScript.
              That’s also when I discovered React and developed a real passion
              for building dynamic digital experiences. At the same time, I
              started exploring design, which soon became one of my favorite
              creative outlets.
            </p>

            <p>
              <span className={styles.number}>03/</span> I then pursued a
              <strong>
                {" "}
                BUT Métiers du Multimédia et de l’Internet at IUT1 Grenoble
              </strong>
              . During this program, I gained experience with backend
              development using PHP and Laravel, explored Java and Android
              Studio, and experimented with Next.js and Docker. By the end, I
              had built a solid full-stack foundation and validated my
              coursework.
            </p>

            <p>
              <span className={styles.number}>04/</span> Today, I’m studying for
              a
              <strong>
                {" "}
                Master’s in Full Stack Development at MyDigitalSchool
              </strong>
              . I’m expanding my expertise in both frontend and backend, diving
              deeper into modern frameworks, cloud solutions, and scalable
              architectures. Outside of school, I spend a lot of time on{" "}
              <strong>design</strong> and I’m actively building my{" "}
              <strong>portfolio</strong> to showcase my projects. Learning, for
              me, is a continuous journey especially in the fast-moving world of
              web development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
