import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">BEDITTE.</div>
          <p className="footer-tagline">Encuentra tu estilo, encuentra a alguien que lo comparta.</p>
        </div>

        <div className="footer-links">
          <div className="footer-link-group">
            <span className="footer-link-title">NAVEGACIÓN</span>
            <a href="#sobre-beditte" className="footer-link">Sobre Beditte</a>
            <a href="#estilos" className="footer-link">Estilos</a>
            <a href="#descarga" className="footer-link">Descarga</a>
          </div>

          <div className="footer-link-group">
            <span className="footer-link-title">LEGAL</span>
            <a href="#" className="footer-link">Términos de uso</a>
            <a href="#" className="footer-link">Política de privacidad</a>
          </div>

          <div className="footer-link-group">
            <span className="footer-link-title">CONTACTO</span>
            <a href="mailto:beditte.fash@gmail.com" className="footer-link">beditte.fash@gmail.com</a>
            <a href="#" className="footer-link">@beditte</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">© 2025 Beditte. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;