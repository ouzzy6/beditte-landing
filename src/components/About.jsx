import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-left">
        <div className="eyebrow">sobre beditte</div>
        <h2>
          moda <em>+<br />conexión.</em>
        </h2>
        <p>
          Beditte nace de la idea de que el estilo personal es una forma de expresión única. No solo conectamos personas — conectamos estéticas, tribus, visiones del mundo a través de la ropa.
        </p>
      </div>
      <div className="sobre-right">
        <div className="stat">
          <div className="stat-num">6</div>
          <div className="stat-label">estilos únicos</div>
        </div>
        <div className="stat">
          <div className="stat-num">100%</div>
          <div className="stat-label">conexiones reales</div>
        </div>
        <div className="stat">
          <div className="stat-num">0</div>
          <div className="stat-label">algoritmos opacos</div>
        </div>
        <div className="stat">
          <div className="stat-num">∞</div>
          <div className="stat-label">posibilidades</div>
        </div>
      </div>
    </section>
  );
};

export default About;