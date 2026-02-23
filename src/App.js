import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import data from './data/data.json';

function App() {
  return (
    <div className="bg-bg-light text-text-dark font-['Inter',_sans-serif]">
      <Header name={data.name} title={data.title} />
      <main>
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Contact contact={data.contact} />
      </main>
      <Footer footer={data.footer} />
    </div>
  );
}

export default App;
