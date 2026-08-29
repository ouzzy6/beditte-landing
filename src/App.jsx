import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import StylesSection from './components/StylesSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />  {/* Este es full-width por sí mismo */}
        <div className="section-container">
          <About />
          <StylesSection />
          <HowItWorks />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;