import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          I am a professional web developer creating amazing websites
        </p>
        <button className="hero-button">View My Work</button>
      </div>
    </div>
  );
};

export default Hero;
