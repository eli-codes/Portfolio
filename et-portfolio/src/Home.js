import React from "react";
import Hero from "./Hero";
import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";

function Home() {
  return (
    <div className="home">
      <h2>Home</h2>
      <Hero />
      <About />
      <Contacts />
      <Projects />
      {/* Home contents / links to other pages */}
    </div>
  );
}

export default Home;
