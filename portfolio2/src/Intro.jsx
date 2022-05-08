import React from 'react'
import './Intro.css'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div clasName="i-name">
          <span className="i-child-1">Hey! I Am </span>
          <span className="i-child-2">Urszula Paruch </span>
          <span className="i-child-3">Front-end Developer based in Poland</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/natkaulaP/portfolio2">
            {" "}
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/urszula-paruch-450b26219/">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/paruchurszula/">
            <InstagramIcon />
          </a>
          <a href="mailto:u.paruch32@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="i-right"></div>
    </div>
  );
}

export default Intro