import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo">
          <img src="/logo.png" alt="BVR Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; document.getElementById('logo-text').style.display = 'block'; }} />
          <span id="logo-text" style={{display: 'none'}}>BVR<span>.</span></span>
        </a>
        <nav className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#contact">{t.nav.contact}</a>
          <button className="btn btn-outline" style={{padding: '0.4rem 1rem', fontSize: '0.8rem', marginLeft: '1rem'}} onClick={toggleLanguage}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
