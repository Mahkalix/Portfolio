import React, { useState, useEffect, useRef, useCallback } from "react";

const AnimatedButton = ({ text, isImageHovered }) => {
  const [originalText, setOriginalText] = useState(text);
  const [buttonText, setButtonText] = useState(originalText);
  const animationDuration = 1000;
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  const getRandomLetter = useCallback(() => {
    return originalText.charAt(Math.floor(Math.random() * originalText.length));
  }, [originalText]);

  const scrambleText = useCallback(() => {
    let scrambledText = "";
    for (let i = 0; i < originalText.length; i++) {
      if (Math.random() < 0.5) {
        scrambledText += originalText[i];
      } else {
        scrambledText += getRandomLetter();
      }
    }
    return scrambledText;
  }, [getRandomLetter, originalText]);

  const myTimer = useCallback(() => {
    const elapsedTime = Date.now() - startTimeRef.current;
    if (elapsedTime >= animationDuration) {
      clearInterval(intervalRef.current);

      setButtonText(originalText);
    } else {
      setButtonText(scrambleText(originalText));
    }
  }, [originalText, scrambleText]);

  const handleMouseEnter = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(myTimer, 100);
  }, [myTimer]);

  const handleMouseLeave = useCallback(() => {
    clearInterval(intervalRef.current);

    setButtonText(originalText);
  }, [originalText]);

  useEffect(() => {
    setOriginalText(text);
    setButtonText(text);
  }, [text]);

  useEffect(() => {
    if (isImageHovered) {
      handleMouseEnter();
    } else {
      handleMouseLeave();
    }
  }, [isImageHovered, handleMouseEnter, handleMouseLeave]);

  return (
    <div
      className="btn"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonText}
    </div>
  );
};

export default AnimatedButton;
