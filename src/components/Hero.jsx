import React from 'react';
import './Hero.css';
import heroImage from '/paris_night_walk.webp';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Beditte hero" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge"></span>
          
          <h1 className="hero-title">
            <span className="title-line">citas o conexiones.</span>
            <span className="title-line title-soft">en un contexto</span>
            <span className="title-line title-soft">de moda.</span>
          </h1>
          
          <p className="hero-description">
            Descubre perfiles que encajan con tu estética.
          </p>

          <div className="hero-cta">
            <button className="cta-primary">Empieza ahora</button>

            <div className="store-buttons">
              <div className="store-button">
                <span className="store-name">App Store</span>
                <span className="store-status">próximamente</span>
              </div>
              <div className="store-button">
                <span className="store-name">Google Play</span>
                <span className="store-status">próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;