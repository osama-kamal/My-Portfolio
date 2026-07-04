import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectDetails from "./Pages/ProjectDetails";
import ContactMe from "./Components/ContactMe/ContactMe";
import Projects from "./Components/Projects/Projects";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout with Header */}
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}