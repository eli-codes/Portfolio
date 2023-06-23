import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link tp="/">Home</Link>
        </li>
        <li>
          <Link to="about-me">About Me</Link>
        </li>
        <li>
          <Link to="contacts">Contacts</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
