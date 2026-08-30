import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import StylesSection from './components/StylesSection';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const header = document.querySelector('.header');
    const handleScroll = () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <StylesSection />

        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;