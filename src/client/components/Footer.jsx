import React from "react";
import "../style/Footer.css";

const Footer = () => {
  const handleContactButtonClick = () => {
    window.location.href =
      "mailto:joesmodernlife@gmail.com?subject=Contact&body=Write your message here";
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Need a LAS VEGAS WEB DEVELOPER?</h3>
        <button className="btn" onClick={handleContactButtonClick}>
          Get In Touch
        </button>{" "}
      </div>
      <div className="footer-links">
        <a href="https://github.com/joecphilavanh" target="_blank">
          GITHUB
        </a>
        <a href="https://linkedin.com/in/joe-philavanh" target="_blank">
          LINKEDIN
        </a>
      </div>
    </footer>
  );
};

export default Footer;
