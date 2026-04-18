import React from 'react';
import Banner from './components/Banner';
import Narrative from './components/Narrative';
import DesignProcess from './components/DesignProcess';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SkillsGrid from './components/SkillsGrid';
import Footer from './components/Footer';
import data from './data/data.json';

function App() {
  return (
    <div className="bg-bg-light text-text-dark font-['Inter',_sans-serif]">
      <Banner />
      <main>
        <Narrative />
        <DesignProcess />
        <Projects />
        <Experience />
        <SkillsGrid />
      </main>
      <Footer footer={data.footer} />
    </div>
  );
}

export default App;
