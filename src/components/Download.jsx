import React from 'react';
import './Download.css';

const Download = () => {
  return (
    <section className="descarga" id="descarga">
      <div className="descarga-inner">
        <div className="eyebrow">disponible próximamente</div>
        <h2>
          tu estilo,<br />
          <em>tu match.</em>
        </h2>
        <p>
          Beditte llega pronto a iOS y Android. Estate atento a nuestro instagram @bedittepunto.
        </p>

        <div className="store-btns">
          <a href="#" className="store-btn">
            <span className="store-btn-name">App Store</span>
            <span className="store-btn-sub">próximamente</span>
          </a>
          <a href="#" className="store-btn">
            <span className="store-btn-name">Google Play</span>
            <span className="store-btn-sub">próximamente</span>
          </a>
        </div>

        <div className="tribe-chips">
          <span className="tribe-chip tc-street">Streetwear</span>
          <span className="tribe-chip tc-minimal">Minimal</span>
          <span className="tribe-chip tc-tech">Techwear</span>
          <span className="tribe-chip tc-retro">Retro</span>
          <span className="tribe-chip tc-boho">Boho</span>
          <span className="tribe-chip tc-y2k">Y2K</span>
        </div>
      </div>
    </section>
  );
};

export default Download;