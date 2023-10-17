import React from "react";
import { useTheme } from "../components/ThemeSwitch";
import ScrollText from "../components/ScrollText";

const About = () => {
  const { theme } = useTheme();

  return (
    <>
      <section id="about">
        <ScrollText text="ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT -" />
        <div className="about-header">
          <h1 className={theme === "light" ? "dark" : " light"}>
            GOOD TO SEE YOU ! <br />
            LET ME TELL YOU A BIT MORE ABOUT ME :
          </h1>
        </div>

        <div className="introduction">
          <h2>Who am I ?</h2>
          <p>
            <span className="number">01/</span> I'm Max, a 22-year-old web
            wizard from the cozy town of Saint Martin D'Uriage near Grenoble.
            I've got a knack for turning wild web ideas into reality through a
            blend of code and design. <br />
          </p>
          <p>
            <span className="number">02/</span> My web adventure started with
            the basics - HTML, CSS, and JavaScript during a nine-month course
            that set me on this path. Along the way, I got a taste of React and
            found myself hooked on creating dynamic web experiences. But hey, I
            didn't stop there. I also decided to dive into the design world
            because, let's be honest, it's where all the cool visuals happen.{" "}
            <br />
          </p>
          <p>
            <span className="number">03/</span> When it comes to my personality,
            I'm all about creative thinking, self-driven learning, and being a
            problem-solving ninja. If you have a digital challenge, I'm the one.{" "}
            <br />
          </p>
          <p>
            <span className="number">04/</span> I wrapped up my formal education
            with a BTEC Higher National Diploma (the French equivalent of Bac
            +2), but the learning never stops in this ever-evolving digital
            realm. So, if you're up for some web adventures or just want to chat
            about the latest web trends, hit me up!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
