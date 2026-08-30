import React from 'react';
import './Hero.css';
import heroImage from '/paris_night_walk_1.jpg'; // ← Sustituye por tu foto

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroImage} alt="Beditte hero" className="hero-bg-image" />
      </div>

      <div className="hero-left">
        <div className="hero-eyebrow">citas con intención estética</div>
        <h1 className="hero-h1">
          conexiones<br />
          <em>en un contexto de moda.</em>
        </h1>
        <p className="hero-sub">
          En beditte el estilo personal no es un detalle — es el punto de partida. Encuentra personas que comparten tu visión de la moda.
        </p>
        <div className="hero-actions">
          <a href="#descarga" className="btn-primary">empieza ahora</a>
          <a href="#como" className="btn-ghost">
            <svg viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            saber más
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-phone-placeholder">
          <span className="phone-icon">📱</span>
          captura de app
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        scroll
      </div>
    </section>
  );
};

export default Hero;