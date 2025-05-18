import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import WebDevelopment from './components/WebDevelopment';
import DataScience from './components/DataScience';
import GraphicDesigning from './components/GraphicDesigning';
import Intro from './components/Intro';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Participations from './components/Participations';

function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/graphicdesigning" element={<GraphicDesigning />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/participations" element={<Participations />} />
      </Routes>
    </Router>
  );
}

export default App;
