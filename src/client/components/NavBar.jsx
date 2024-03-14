import React from "react";
import "../style/NavBar.css";
import resumePDF from "../img/resume.pdf";

const NavBar = () => {
  const handleContactButtonClick = () => {
    window.location.href =
      "mailto:joesmodernlife@gmail.com?subject=Contact&body=Write your message here";
  };
  const handleResumeButtonClick = () => {
    window.open(resumePDF, "_blank");
  };
  const handleProjectsButtonClick = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="navbar">
      <div className="logo">JP</div>
      <nav>
        <button className="btn" onClick={handleResumeButtonClick}>
          Resume
        </button>
        <button className="nav-btn" onClick={handleProjectsButtonClick}>
          PROJECTS
        </button>{" "}
        <button className="btn" onClick={handleContactButtonClick}>
          CONTACT
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
