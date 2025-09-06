import React, { useState, useEffect } from "react";

import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import TimeCard from "./components/TimeCard.jsx";
import SpotifyCard from "./components/SpotifyCard.jsx";
import Art from "./components/ArtShowcase.jsx";
import Skills from "./components/Skills.jsx";

export default function App() {
  const [theme, setTheme] = useState("light"); // default to light mode

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "10px 20px",
          cursor: "pointer",
          zIndex: 1000,
          borderRadius: 8,
          border: "none",
          backgroundColor: theme === "light" ? "#111" : "#eee",
          color: theme === "light" ? "#eee" : "#111",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div className="cards-container">
        <div className="card hero">
          <Hero />
        </div>

        <div className="card about">
          <About />
        </div>
        <div className="card skills">
          <Skills />
        </div>
        <div className="card projects">
          <Projects />
        </div>

        <div className="card contact">
          <Contact />
        </div>

        <div className="card art">
          <Art />
        </div>
    
        <div className="card spotify">
          <SpotifyCard />
        </div>

        <div className="card time">
          <TimeCard />
        </div>
      </div>
    </>
  );
}
