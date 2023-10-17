import React, { useState, useEffect } from "react";

const AnimatedButton = ({ text }) => {
  const [originalText, setOriginalText] = useState(text);
  const [buttonText, setButtonText] = useState(originalText);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationDuration = 1000;
  let interval;
  let startTime;

  const scrambleText = (text) => {
    let scrambledText = "";

    for (let i = 0; i < text.length; i++) {
      if (Math.random() < 0.5) {
        scrambledText += text[i];
      } else {
        scrambledText += getRandomLetter();
      }
    }

    return scrambledText;
  };

  const getRandomLetter = () => {
    return originalText.charAt(Math.floor(Math.random() * originalText.length));
  };

  const myTimer = () => {
    const elapsedTime = Date.now() - startTime;

    if (elapsedTime >= animationDuration) {
      clearInterval(interval);
      setIsAnimating(false);
      setButtonText(originalText);
    } else {
      setButtonText(scrambleText(originalText));
    }
  };

  const handleMouseEnter = () => {
    if (interval) {
      clearInterval(interval);
    }
    setIsAnimating(true);
    startTime = Date.now();
    interval = setInterval(myTimer, 100);
  };

  const handleMouseLeave = () => {
    clearInterval(interval);
    setIsAnimating(false);
    setButtonText(originalText);
  };

  useEffect(() => {
    setOriginalText(text); // Utilisez la valeur de la prop 'text'
    setButtonText(text);
  }, [text]);

  return (
    <div
      className={`btn text-code-hover-feel ${
        isAnimating ? "animation-start" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonText}
    </div>
  );
};

export default AnimatedButton;
