import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="como" id="como">
      <div className="como-header">
        <div className="eyebrow">cómo funciona</div>
        <h2>
          tres pasos,<br />
          <em>una conexión.</em>
        </h2>
      </div>

      <div className="pasos">
        <div className="paso reveal">
          <div className="paso-num">01</div>
          <div className="paso-icon">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>
          <h3>elige tus fotos</h3>
          <p>
            Selecciona fotos que representen tu estilo y fotos que te gusten en otras personas. Nada de formularios — solo imágenes que hablan por ti.
          </p>
          <div className="paso-accent"></div>
        </div>

        <div className="paso reveal reveal-delay-1">
          <div className="paso-num">02</div>
          <div className="paso-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l3 3 5-5" />
            </svg>
          </div>
          <h3>descubre perfiles</h3>
          <p>
            Beditte te muestra personas cuya estética encaja con la tuya. Cada perfil lleva sus etiquetas de estilo — sabes con quién conectas antes de hacer swipe.
          </p>
          <div className="paso-accent"></div>
        </div>

        <div className="paso reveal reveal-delay-2">
          <div className="paso-num">03</div>
          <div className="paso-icon">
            <svg viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3>conecta y chatea</h3>
          <p>
            Cuando hay match, empieza la conversación. Comparte referencias, visiones, y todo lo que hace único tu estilo.
          </p>
          <div className="paso-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;