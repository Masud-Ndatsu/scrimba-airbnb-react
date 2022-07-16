import React from "react";
import url from "../assets/download.png";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="photo-grid">
        <img src={url} alt="" />
      </div>
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
