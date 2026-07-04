import React from "react";
import Hero from "../Components/Hero/Hero";
import AboutMe from "../Components/AboutMe/AboutMe";
import Projects from "../Components/Projects/Projects";
import MySkills from "../Components/MySkills/MySkills";
import ContactMe from "../Components/ContactMe/ContactMe";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <MySkills />
      <ContactMe />
    </>
  );
}
