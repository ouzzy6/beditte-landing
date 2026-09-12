import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">beditte.</div>
      <div className="footer-right">
        <span className="footer-copy">© 2026 beditte. — encuentra y conecta con estilo</span>
        <a 
          href="/privacy.html" 
          className="footer-privacy-link"
        >
          Política de Privacidad
        </a>
      </div>
    </footer>
  );
};

export default Footer;