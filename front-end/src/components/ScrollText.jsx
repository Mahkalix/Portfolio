import React from "react";

const ScrollText = ({ text }) => {
  return (
    <section className="scroll">
      <div className="container-scroll">
        <div className="scroll-text" data-text={text}>
          {text}
        </div>
      </div>
    </section>
  );
};

export default ScrollText;
