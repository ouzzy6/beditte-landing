import React from 'react';
import './StylesSection.css';

const stylesData = [
  {
    id: 'streetwear',
    name: 'Streetwear',
    fullName: 'Streetwear',
    color: '#c0394d',
    textColor: '#fff',
    desc: 'Urbano, sin filtros. Hip-hop, skate, cultura de calle.',
    image: '/streetwear1.jpg',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    fullName: 'Minimal Urbano',
    color: '#4b7fc4',
    textColor: '#fff',
    desc: 'Elegancia silenciosa. Líneas limpias, paleta neutra.',
    image: '/minimal2.jpg',
  },
  {
    id: 'techwear',
    name: 'Techwear',
    fullName: 'Techwear',
    color: '#9b7fe0',
    textColor: '#fff',
    desc: 'Funcional, ropa táctica. Utility meets urban.',
    image: '/techwear1.jpg',
  },
  {
    id: 'retro',
    name: 'Retro',
    fullName: 'Retro / Vintage',
    color: '#b8c732',
    textColor: '#000',
    desc: 'Décadas pasadas con toques contemporáneos.',
    image: '/retro1.jpg',
  },
  {
    id: 'boho',
    name: 'Boho',
    fullName: 'Boho Urbano',
    color: '#22c55e',
    textColor: '#000',
    desc: 'Bohemio, accesorios étnicos y urbanos',
    image: '/boho1.jpg',
  },
  {
    id: 'y2k',
    name: 'Y2K',
    fullName: 'Y2K',
    color: '#e87ca0',
    textColor: '#fff',
    desc: 'Los 2000 de vuelta.',
    image: '/y2k1.jpg',
  },
];

const StylesSection = () => {
  return (
    <section className="estilos" id="estilos">
      <div className="section-header">
        <div className="section-header-left">
          <div className="eyebrow">estilos</div>
          <h2>
            encuentra<br />
            <em>tu estética.</em>
          </h2>
        </div>
        <div className="section-header-right">
          Seis tribus visuales. Cada una con su identidad, su paleta, su forma de ver la moda. ¿Con cuál te identificas?
        </div>
      </div>

      <div className="estilos-grid">
        {stylesData.map((style, index) => (
          <div
            key={style.id}
            className={`estilo-card ${style.id} reveal ${index === 1 || index === 4 ? 'reveal-delay-1' : ''} ${index === 2 || index === 5 ? 'reveal-delay-2' : ''}`}
          >
            <div
              className="estilo-card-bg"
              style={{
                backgroundImage: `url(${style.image})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="estilo-card-overlay"></div>
            <div
              className="estilo-card-accent"
              style={{ background: style.color }}
            ></div>
            <div className="estilo-card-info">
              <span
                className="estilo-pill"
                style={{
                  background: style.color,
                  color: style.textColor,
                }}
              >
                {style.name}
              </span>
              <span className="estilo-name">{style.fullName}</span>
              <div className="estilo-desc">{style.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StylesSection;