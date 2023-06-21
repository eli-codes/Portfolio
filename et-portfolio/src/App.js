import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    <Router>
      <Navigation />
      <Switch>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="about-me" component={AboutMe} />
          <Route path="contacts" component={Contacts} />
          <Route path="projects" component={Projects} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
