import React, { useState } from "react";
import './Program.css';

const Footer = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <footer style={{ backgroundColor: "#141414", display: "flex" }}>
      <img
        src="logo.png"
        alt="Buggify logo"
        style={{ marginLeft: "10rem" }}
      />
      <ul style={{ marginLeft: "15rem", listStyleType: "none" }}>
        <li>
          <h3>Business</h3>
          <ul style={{ display: showAbout ? "block" : "none" }}>
            <li>Services</li>
            <li>Pricing</li>
            <li>Case Studies</li>
          </ul>
        </li>
        <li>
          <h3>Researcher</h3>
          <ul style={{ display: showAbout ? "block" : "none" }}>
            <li>Methods</li>
            <li>Findings</li>
            <li>Publications</li>
          </ul>
        </li>
        <li>
          <h3>Academy</h3>
          <ul style={{display: showAbout ? "block" : "none" }}>
            <li>Courses</li>
            <li>Instructors</li>
            <li>Enrollment</li>
          </ul>
        </li>
        <li>
          <h3>About</h3>
          <ul style={{ display: showAbout ? "block" : "none" }}>
            <li>Company</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
          <button onClick={() => setShowAbout(!showAbout)}>
            {showAbout ? "Close" : "Open"}
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
