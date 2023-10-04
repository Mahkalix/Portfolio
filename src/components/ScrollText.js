import React from "react";

const ScrollText = ({ text }) => {
  return (
    <section className="portfolio">
      <div className="container-scroll">
        <div className="scroll-text" data-text={text}>
          {text}
        </div>
      </div>
    </section>
  );
};

export default ScrollText;
