import React from "react";
import "./App.css";
import Home from "./Home";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Hero />
      <Contacts />
      <Projects />
      {/* Eventually we want to use routing / client side routing */}
    </div>
  );
}

export default App;
