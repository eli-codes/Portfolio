import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Projects from "./Projects";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h2>Home</h2>
      <Hero />
      {/* Home contents / links to other pages */}
    </div>
  );
}

export default Home;
