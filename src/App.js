import React from 'react';
import Banner from './components/Banner';
import Narrative from './components/Narrative';
import DesignProcess from './components/DesignProcess';
import CallToAction from './components/CallToAction';
import SelectedWork from './components/SelectedWork';
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
        <CallToAction />
        <SelectedWork />
        <Experience />
        <SkillsGrid />
      </main>
      <Footer footer={data.footer} />
    </div>
  );
}

export default App;
