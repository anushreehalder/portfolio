import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <Header name={data.name} />
      <Hero name={data.name} title={data.title} />
      <About about={data.about} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Contact contact={data.contact} />
      <Footer contact={data.contact} />
    </div>
  );
}

export default App;
