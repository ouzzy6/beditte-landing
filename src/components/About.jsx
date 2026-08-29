import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="sobre-beditte">
      <div className="about-content">
        <span className="section-label">SOBRE BEDITTE</span>
        <h2 className="section-title">MODA + CONEXIONES</h2>
        <p className="about-description">
          Beditte nace de la idea de que el estilo personal es una forma de expresión.<br />
          No solo conectamos personas, conectamos estéticas.
        </p>

        <div className="stats">
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Estilos únicos</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Editorial</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Conexiones</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;