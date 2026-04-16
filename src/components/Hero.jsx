import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero section">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <div className="freelance-badge">
            <span className="dotting"></span>
            {t.hero.freelanceBadge}
          </div>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <h1 className="hero-title">{t.hero.title}<span className="accent">.</span></h1>
          <h2 className="hero-role">{t.hero.role}</h2>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">{t.hero.btnPrimary}</a>
            <a href="#contact" className="btn btn-outline">{t.hero.btnOutline}</a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-download">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              {t.hero.downloadCV}
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in delay-2">
          <div className="glass-panel profile-placeholder">
            <div className="avatar-circle">
              <img src="/logo.png" alt="BVR-DEV" style={{ width: '55%', height: 'auto', zIndex: 1 }} onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <div className="floating-badge badge-1">{t.hero.badge1}</div>
            <div className="floating-badge badge-2">{t.hero.badge2}</div>
            <div className="floating-badge badge-3">{t.hero.badge3}</div>
            <div className="floating-badge badge-4">{t.hero.badge4}</div>
            <div className="floating-badge badge-5">{t.hero.badge5}</div>
            <div className="floating-badge badge-6">{t.hero.badge6}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
