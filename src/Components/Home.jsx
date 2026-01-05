import React from "react";
import Portfolio from "./Portfolio";
import ModernHero from "./ModernHero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <ModernHero />
      <Portfolio />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
