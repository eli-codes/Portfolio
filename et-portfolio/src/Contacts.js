import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="Contacts">
      <h2>Contact Information</h2>
      <p>
        <strong>Email: </strong>etutor511@gmail.com
      </p>
      <p>
        <strong>Phone Number:</strong> 1(209)496-6428
      </p>
      <p>
        <strong>Address:</strong> 2528 Vneman Ave, Modesto, CA, 95356
      </p>
      <p>
        <strong>Feel free to reach out to me on social media</strong>
      </p>
      <div className="social-media">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/elizabeth-tutor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <i className="fab fa-linkedin"></i>
            <li>
              <a
                href="https://twitter.com/Eli_R_Tutor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <i className="fab fa-twitter"></i>
              <li>
                <a
                  href="https://github.com/eli-codes"
                  target="_blank rel="
                  noopener
                  noreferrer
                >
                  Git Hub
                </a>
                <i className="fab fa-github"></i>
              </li>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
