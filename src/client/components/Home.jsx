import React from "react";
import "../style/home.css";
import profilePic from "../img/profile.jpg";
import puckerUp from "../img/puckerup.png";
import zayuh from "../img/zayuh.jpeg";
import github from "../img/github.png";
import website from "../img/website.png";
import resumePDF from "../img/resume.pdf";

const Home = () => {
  const handleResumeButtonClick = () => {
    window.open(resumePDF, "_blank");
  };
  const handleContactButtonClick = () => {
    window.location.href =
      "mailto:joesmodernlife@gmail.com?subject=Contact&body=Write your message here";
  };
  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p>Hi, My name is</p>
            <h1>Joe Philavanh</h1>
            <h2>Web Developer in Las Vegas</h2>
            <button className="btn" onClick={handleContactButtonClick}>
              Get in Touch
            </button>
            <button className="btn" onClick={handleResumeButtonClick}>
              Resume
            </button>
          </div>
          <img src={profilePic} alt="Joe Philavanh" className="profile-img" />
        </div>
      </section>

      <section className="about-section">
        <h3>ABOUT</h3>
        <p>
          Hey there! I'm Joe Philavanh. Embarking on a career change into the
          tech world, I've transitioned from the structured life of a
          Non-Commissioned Officer in the Army to the boundless creativity of
          full-stack development. Living in Henderson, NV, I'm bringing the
          discipline and resilience from my military days to my new passion for
          coding.
        </p>
        <p>
          My tech journey kicked off at Fullstack Academy, where I dived into
          Node.js, React/Redux, and PostgreSQL. While I'm new to the field with
          no professional tech experience yet, I've already tackled projects
          like PuckerUp, showcasing my potential to blend technical skill with
          innovative thinking.
        </p>
        <p>
          I'm at the starting line of my tech career, hungry for a company
          willing to take a chance on someone who's as dedicated, hardworking,
          and determined as they come. My military background has taught me the
          value of teamwork, adaptability, and overcoming challenges—qualities
          I'm eager to apply in the tech industry.
        </p>
        <p>
          If you're looking for a fresh perspective and relentless drive in your
          team, let's chat. I'm ready to prove that my transition into tech is
          your next great investment. Let's connect and embark on this exciting
          journey together.
        </p>
      </section>
      <div id="projects-section">
        <h3>RECENT PROJECTS</h3>
        <div className="project-card dark">
          <div className="project-description">
            <h4>Pucker Up</h4>
            <p>
              January 2024 - Embark on a journey of connection with PuckerUp,
              the cutting-edge dating platform designed to revolutionize the way
              people meet online. As a key contributor to the front-end
              development team, I played a pivotal role in creating an intuitive
              and engaging user experience. PuckerUp stands out with its sleek
              design and innovative features like instant liking, real-time
              chatting, and robust user connectivity.
            </p>
            <p>
              DEVELOPMENT TOOLS: Prisma, REACT, CSS, Node.js, Express, Vite.js,
              PostgreSQL,JSON Web Tokens, and BCrypt
            </p>
            <div className="button-container">
              <a
                href="https://puckerup.netlify.app"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={website} alt="Website" className="website-icon" />
              </a>
              <a
                href="https://github.com/joecphilavanh/Dating-Site"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>

          <img src={puckerUp} alt="dating site" className="project-img" />
        </div>

        <div className="project-card light">
          <div className="project-description">
            <h4>Zayuhs Portfolio</h4>
            <p>
              Project description. Dive into Zayuh's Portfolio, a visual
              adventure in the making! I'm bringing the creative flair as a
              front-end developer to craft an immersive user experience. Explore
              captivating snapshots through Zayuh's lens, featuring sleek design
              and cool features. While it's still a work in progress, our site
              is gearing up to showcase some serious photographic magic!
            </p>
            <p>
              DEVELOPMENT TOOLS: Prisma, REACT, CSS, Node.js, Express, Vite.js,
            </p>
            <div className="button-container">
              <a
                href="https://zayuh.netlify.app/"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={website}
                  alt="View Project"
                  className="website-icon"
                />
              </a>
              <a
                href="https://github.com/joecphilavanh/zayuh-portfolio"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
          <div className="project-img-container">
            <img src={zayuh} alt="portfolio" className="project-img zayuh" />
          </div>
        </div>

        {/* 
      <div className="project-card dark">
        <div className="project-description">
          <h4>Project Name Three</h4>
          <p>
            Project description. A cutting-edge application that leverages cloud
            services to offer scalable solutions to enterprise-level problems.
          </p>
          <p>DEVELOPMENT TOOLS: AWS, Docker, GraphQL</p>
          <button className="btn">View Project</button>
        </div>
        <img src="path-to-your-project-image.jpg" alt="Project Three" />
      </div>

      <div className="project-card light">
        <div className="project-description">
          <h4>Project Name Four</h4>
          <p>
            Project description. A forward-thinking project that integrates the
            latest web technologies to deliveran unparalleled online experience.
          </p>
          <p>DEVELOPMENT TOOLS: TypeScript, Angular, Firebase</p>
          <button className="btn">View Project</button>
        </div>
        <img src="path-to-your-project-image.jpg" alt="Project Four" />
      </div> */}
      </div>
    </div>
  );
};

export default Home;
