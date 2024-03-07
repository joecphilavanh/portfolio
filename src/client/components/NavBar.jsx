import React from "react";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo">JP</div>
      <nav>
        <button className="nav-btn">ABOUT</button>
        <button className="nav-btn">PROJECTS</button>
        <button className="nav-btn">CONTACTS</button>
      </nav>
    </header>
  );
};

export default NavBar;
