import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Projects from "./Projects";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/projects" component={Projects} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
