import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}

export default App;
