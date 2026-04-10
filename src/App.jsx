import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
