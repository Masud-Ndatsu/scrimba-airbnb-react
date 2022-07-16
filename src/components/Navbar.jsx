import React from "react";
import url from "../assets/download.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={url} alt="Logo" />
      </div>
      <div className="nav-link"></div>
    </nav>
  );
};

export default Navbar;
