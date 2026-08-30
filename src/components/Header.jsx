import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Cómo funciona', href: '#como' },
    { label: 'Estilos', href: '#estilos' },
    { label: 'Descarga', href: '#descarga' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <a href="#" className="logo">beditte.</a>

        <div className="header-center">WITH LOTS OF LOVE</div>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;