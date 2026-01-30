// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { FaDiscord, FaGlobe, FaBars, FaTimes } from 'react-icons/fa'; // Added FaBars, FaTimes
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import logoImg from '/logo1.svg';

const Navbar = ({ lang, setLang, t }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'vi' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* --- DESKTOP LEFT --- */}
      <div className="nav-left desktop-only">
        <ul className="nav-links">
          <li><Link to="/#home">{t.home}</Link></li>
          <li><Link to="/products">{t.products}</Link></li>
          <li><Link to="/#team">{t.team}</Link></li>
          <li><Link to="/blog">{t.blog}</Link></li>
        </ul>
      </div>

      {/* --- LOGO (CENTER on Desktop, LEFT on Mobile) --- */}
      <div className="nav-center">
        <Link to="/" onClick={closeMobileMenu}>
            <img src={logoImg} alt="SpellTech Logo" className="nav-logo-img" />
        </Link>
      </div>

      {/* --- DESKTOP RIGHT --- */}
      <div className="nav-right desktop-only">
        <div className="social-icons">
          <a href="#"><FaDiscord /></a>
        </div>
        
        <div className="language-selector" onClick={toggleLanguage}>
          <FaGlobe className="globe-icon" />
          <span>{lang === 'en' ? 'English' : 'Tiếng Việt'}</span> 
          <MdKeyboardArrowDown />
        </div>
      </div>

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/#home" onClick={closeMobileMenu}>{t.home}</Link></li>
          <li><Link to="/products" onClick={closeMobileMenu}>{t.products}</Link></li>
          <li><Link to="/#team" onClick={closeMobileMenu}>{t.team}</Link></li>
          <li><Link to="/blog" onClick={closeMobileMenu}>{t.blog}</Link></li>
        </ul>

        <div className="mobile-actions">
           <div className="mobile-lang" onClick={toggleLanguage}>
              <FaGlobe /> {lang === 'en' ? 'English' : 'Tiếng Việt'}
           </div>
           <div className="mobile-socials">
              <a href="#"><FaDiscord /> Join Discord</a>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;