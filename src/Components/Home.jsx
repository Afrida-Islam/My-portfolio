import React from "react";
import Portfolio from "./Portfolio";
import ModernHero from "./ModernHero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";

const Home = () => {
  return (
    <div>
      <ModernHero />
      <Portfolio />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
