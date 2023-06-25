import React from "react";
import "./Hero.css";
import HeroImg from "./img/hero.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <h1 className="hero-text">Welcome to my landing page!</h1>
      <img src={HeroImg} alt="Hero Image" />
    </div>
  );
}

export default Hero;
