import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'RESPONDE AL TEST',
    description: 'Elige tus estilos favoritos y define tu estética.',
  },
  {
    number: '02',
    title: 'DESCUBRE PERFILES',
    description: 'Conoce personas que comparten tu visión de la moda.',
  },
  {
    number: '03',
    title: 'CONECTA Y CHATEA',
    description: 'Si hay match, empieza a hablar y a compartir estilo.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="descarga">
      <div className="how-content">
        <span className="section-label">CÓMO FUNCIONA</span>
        <h2 className="section-title">TRES PASOS SENCILLOS</h2>

        <div className="steps">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;