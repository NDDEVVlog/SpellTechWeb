// components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { FaTwitter, FaYoutube, FaLinkedin, FaInstagram, FaDiscord, FaGlobe } from 'react-icons/fa';
import { MdKeyboardArrowDown } from "react-icons/md";

// Nhận props từ App.jsx: 
// lang: ngôn ngữ hiện tại ('en' hoặc 'vi')
// setLang: hàm để đổi ngôn ngữ
// t: dữ liệu dịch của Navbar
const Navbar = ({ lang, setLang, t }) => {
  
  // Hàm chuyển đổi ngôn ngữ
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'vi' : 'en');
  };

  return (
    <nav className="navbar">
      {/* KHỐI 1: LINKS */}
      <div className="nav-left">
        <ul className="nav-links">
          <li><a href="#home">{t.home}</a></li>
          <li><a href="#game">{t.game}</a></li>
          <li><a href="#careers">{t.careers}</a></li>
          <li><a href="#team">{t.team}</a></li>
          <li><a href="#store">{t.store}</a></li>
          <li><a href="#blog">{t.blog}</a></li>
        </ul>
      </div>

      {/* KHỐI 2: LOGO */}
      <div className="nav-center">
        <img src="/logo1.svg" alt="SpellTech Logo" className="nav-logo-img" />
      </div>

      {/* KHỐI 3: ICONS & LANGUAGE */}
      <div className="nav-right">
        <div className="social-icons">
          {/* <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a> */}
          <a href="#"><FaDiscord /></a>
        </div>
        
        {/* Nút bấm đổi ngôn ngữ */}
        <div className="language-selector" onClick={toggleLanguage}>
          <FaGlobe className="globe-icon" />
          {/* Hiển thị tên ngôn ngữ đang chọn */}
          <span>{lang === 'en' ? 'English' : 'Tiếng Việt'}</span> 
          <MdKeyboardArrowDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;