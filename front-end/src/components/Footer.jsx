import React from "react";
import githubd from "../assets/svg/githubd.svg";
import githubl from "../assets/svg/githubl.svg";
import linkedind from "../assets/svg/linkedind.svg";
import linkedinl from "../assets/svg/linkedinl.svg";
import { useTheme } from "../components/ThemeSwitch.jsx";
import behancel from "../assets/svg/behancel.svg";
import behanced from "../assets/svg/behanced.svg";

const Footer = () => {
  const githubUrl = "https://github.com/Mahkalix";
  const linkedinUrl = "https://www.linkedin.com/in/maxencebadin-l%C3%A9ger/";
  const behanceUrl = "https://www.behance.net/maxencebadin-leger";
  const { theme } = useTheme();

  return (
    <footer role="contentinfo">
      <div className="social-media">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Maxence's GitHub profile"
        >
          <img src={theme === "light" ? githubd : githubl} alt="GitHub logo" />
        </a>
        <a
          href={behanceUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Maxence's Behance portfolio"
        >
          <img
            src={theme === "light" ? behanced : behancel}
            alt="Behance logo"
          />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Maxence's LinkedIn profile"
        >
          <img
            src={theme === "light" ? linkedind : linkedinl}
            alt="LinkedIn logo"
          />
        </a>
      </div>
      <p>Developed by me©2023 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
