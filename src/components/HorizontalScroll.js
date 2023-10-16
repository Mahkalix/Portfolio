import React from "react";
import arrow from "../assets/svg/arrow.svg";

const HorizontalScroll = () => {
  return (
    <div className="horizontal-scroll-container">
      <div className="about-container">
        <section className="about">
          <h1>
            GOOD TO SEE YOU ! <br /> LET ME TELL YOU A BIT MORE ABOUT ME
          </h1>
          <div className="scroll">
            Scroll to explore <img src={arrow} alt="arrow" />
          </div>
        </section>
        <section className="about">
          <h1>
            GOOD TO SEE YOU ! <br /> LET ME TELL YOU A BIT MORE ABOUT ME
          </h1>
          <div className="scroll">
            Scroll to explore <img src={arrow} alt="arrow" />
          </div>
        </section>
        <section className="about">
          <h1>
            GOOD TO SEE YOU ! <br /> LET ME TELL YOU A BIT MORE ABOUT ME
          </h1>
          <div className="scroll">
            Scroll to explore <img src={arrow} alt="arrow" />
          </div>
        </section>
        <section className="about">
          <h1>
            GOOD TO SEE YOU ! <br /> LET ME TELL YOU A BIT MORE ABOUT ME
          </h1>
          <div className="scroll">
            Scroll to explore <img src={arrow} alt="arrow" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;
