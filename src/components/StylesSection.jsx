import React from 'react';
import './StylesSection.css';

const stylesData = [
  { name: 'Streetwear', color: '#A32C2C' },
  { name: 'Minimal', color: '#2C6EA3' },
  { name: 'Techwear', color: '#5C2CA3' },
  { name: 'Vintage', color: '#A3A32C' },
  { name: 'Boho', color: '#2CA35C' },
  { name: 'Y2K', color: '#A32C9C' },
];

const StylesSection = () => {
  return (
    <section className="styles-section" id="estilos">
      <div className="styles-content">
        <span className="section-label">ESTILOS</span>
        <h2 className="section-title">ENCUENTRA TU ESTÉTICA</h2>

        <div className="styles-grid">
          {stylesData.map((style) => (
            <div key={style.name} className="style-card">
              <div
                className="style-gradient"
                style={{ background: style.color, opacity: 0.10 }}
              ></div>
              <span className="style-name">{style.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesSection;