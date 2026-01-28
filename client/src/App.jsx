// src/App.jsx

import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaEnvelope, FaDiscord } from 'react-icons/fa';

// Components
import Navbar from './components/Navbar';
import MagicMenu from './components/MagicMenu';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';
import BlogPage from './components/BlogPage';
import BlogDetail from './components/BlogDetail';

import './App.css';

function App() {
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(true);

  // Magic Menu State
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });
  const timerRef = useRef(null);

  // 3D Card Logic (Move here to pass to Home)
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12; 
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.setProperty('--rX', `${rotateX}deg`);
    card.style.setProperty('--rY', `${rotateY}deg`);
    card.style.setProperty('--bgX', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bgY', `${(y / rect.height) * 100}%`);
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rX', `0deg`);
    card.style.setProperty('--rY', `0deg`);
    card.style.setProperty('--bgX', `50%`);
    card.style.setProperty('--bgY', `50%`);
  };

  // Translations
  const translations = {
    en: {
        navbar: { home: "HOME", game: "GAMES", team: "TEAM", blog: "BLOG" },
        hero: { slogan: "WE ARE SPELL TECH", subtext: "We summon bugs and fix them with magic.", scroll: "SCROLL TO START" },
        contact: { title: "PARTNER WITH US", desc: "Let's build the future together.", bizTitle: "BUSINESS", copyright: "Spell Tech. Made in Vietnam." },
        team: { title: "THE SQUAD", sub: "Select your champion." },
        games: { title: "OUR CREATIONS", sub: "Worlds we have crafted." },
        blog: { title: "QUEST LOG", sub: "Development updates." }
    },
    vi: {
        navbar: { home: "TRANG CHỦ", game: "SẢN PHẨM", team: "ĐỘI NGŨ", blog: "TIN TỨC" },
        hero: { slogan: "CHÚNG TÔI LÀ SPELL TECH", subtext: "Triệu hồi bug và sửa chúng bằng ma thuật.", scroll: "CUỘN XUỐNG" },
        contact: { title: "HỢP TÁC", desc: "Cùng nhau xây dựng tương lai.", bizTitle: "LIÊN HỆ", copyright: "Spell Tech. Sản xuất tại Việt Nam." },
        team: { title: "BIỆT ĐỘI", sub: "Chọn vị tướng của bạn." },
        games: { title: "SẢN PHẨM", sub: "Những thế giới chúng tôi đã tạo ra." },
        blog: { title: "NHẬT KÝ", sub: "Cập nhật phát triển." }
    }
  };
  const t = translations[lang];

  // Team Data
  const teamMembers = [
    { id: 1, name: "NDDEVGAME", role: "FOUNDER", img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop", lore: "Code is creation." },
    { id: 2, name: "SORA", role: "ARTIST", img: "https://images.unsplash.com/photo-1709429862860-630eb66fcf5e?q=80&w=735&auto=format&fit=crop", lore: "Colors of magic." },
    { id: 3, name: "BRO Q", role: "MODELER", img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop", lore: "Sculpting reality." },
    { id: 4, name: "BILL", role: "BACKEND", img: "https://images.unsplash.com/photo-1609761884183-5b8121294194?q=80&w=764&auto=format&fit=crop", lore: "Keeper of data." },
  ];

  useEffect(() => {
    if (!isDark) document.body.classList.add('light-mode');
    else document.body.classList.remove('light-mode');
  }, [isDark]);

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      const x = e.clientX;
      const y = e.clientY;
      timerRef.current = setTimeout(() => {
        setMenuPos({ x, y });
        setMenuVisible(true);
      }, 300); 
    }
  };
  const handleMouseUp = () => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
  };

  return (
    <Router>
      <div 
        className="app-wrapper"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onContextMenu={(e) => e.preventDefault()} 
      >
        <Navbar lang={lang} setLang={setLang} t={t.navbar} />
        
        {menuVisible && (
          <MagicMenu 
            position={menuPos} 
            onClose={() => setMenuVisible(false)}
            onToggleLang={() => setLang(lang === 'en' ? 'vi' : 'en')}
            onToggleTheme={() => setIsDark(!isDark)}
            isDark={isDark}
            lang={lang}
          />
        )}

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <Home 
                t={t} 
                teamMembers={teamMembers} 
                handleCardMouseMove={handleCardMouseMove}
                handleCardMouseLeave={handleCardMouseLeave}
              />
            } />
            
            {/* ROUTES DANH SÁCH */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/blog" element={<BlogPage />} />

            {/* ROUTES CHI TIẾT */}
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>

          {/* Footer luôn hiển thị */}
          <section className="contact-section" id="contact">
            <div className="contact-card-wide">
              <h3>{t.contact.bizTitle}</h3>
              <p>{t.contact.desc}</p>
              <a href="mailto:contact@spelltech.vn" className="contact-link">
                <FaEnvelope /> contact@spelltech.vn
              </a>
              <a href="https://discord.gg/spelltech" className="contact-link">
                <FaDiscord /> Discord Community
              </a>
            </div>
            <div className="footer-copyright">
              © 2025 {t.contact.copyright}
            </div>
          </section>
        </main>
      </div>
    </Router>
  )
}

export default App;