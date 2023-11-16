import React from "react";
import githubd from "../assets/svg/githubd.svg";
import githubl from "../assets/svg/githubl.svg";
import linkedind from "../assets/svg/linkedind.svg";
import linkedinl from "../assets/svg/linkedinl.svg";
import { useTheme } from "../components/ThemeSwitch.jsx";

const Footer = () => {
  const githubUrl = "https://github.com/Mahkalix";
  const linkedinUrl = "https://www.linkedin.com/in/maxencebadin-l%C3%A9ger/";
  const { theme } = useTheme();

  return (
    <footer>
      <div className="social-media">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={theme === "light" ? githubd : githubl} alt="Logo" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={theme === "light" ? linkedind : linkedinl} alt="Logo" />
        </a>
      </div>
      <p>Developed by me©2023 – All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
