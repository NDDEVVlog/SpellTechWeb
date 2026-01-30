// src/components/Home.jsx
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { productsData, blogsData } from '../data'; // Import data để show preview
import logoImg from '/logo1.svg';

const Home = ({ t, scroll, handleCardMouseMove, handleCardMouseLeave, teamMembers }) => {
  const scrollRef = useRef(null);

  // Logic scroll cho carousel
  const scrollCarousel = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const amount = 300;
      current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="overlay"></div>
        <div className="hero-container">
          <img src={logoImg} alt="Logo" className="hero-logo" />
          <h1 className="hero-slogan">{t.hero.slogan}</h1>
          <p className="hero-subtext">{t.hero.subtext}</p>
        </div>
        <div className="scroll-indicator">
          <span>{t.hero.scroll}</span>
          <div className="arrow-down"></div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="products-section section-wrapper" id="game">
        <h2 className="section-title">{t.games.title}</h2>
        <div className="separator"></div>
        <div className="products-grid">
            {/* Lấy 3 sản phẩm đầu tiên từ data.js */}
            {productsData.slice(0, 3).map(p => (
                <div key={p.id} className="product-card">
                    <img src={p.img} alt={p.title} className="product-thumb" />
                    <div className="product-content">
                        <span className="product-genre">{p.genre}</span>
                        <h3 className="product-title">{p.title}</h3>
                        <p className="product-desc">{p.desc}</p>
                        {/* Dùng Link để chuyển trang */}
                        <Link to={`/products/${p.slug}`} className="btn-main">View Details</Link>
                    </div>
                </div>
            ))}
        </div>
        <div style={{textAlign: 'center', marginTop: '40px'}}>
           <Link to="/products" className="btn-main">View All Games</Link>
        </div>
      </section>

      {/* TEAM (REALTIME 3D) */}
      <section className="team-section section-wrapper" id="team">
        <h2 className="section-title">{t.team.title}</h2>
        <div className="separator"></div>
        <p className="section-desc">{t.team.sub}</p>
        
        <div className="carousel-wrapper">
          <button className="carousel-btn left" onClick={() => scrollCarousel('left')}><FaChevronLeft /></button>

          <div className="champions-carousel" ref={scrollRef}>
            {teamMembers.map((member) => (
              <div 
                className="lol-card" 
                key={member.id}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="lol-img-wrapper">
                  <img src={member.img} alt={member.name} className="lol-img" />
                </div>
                <div className="lol-info">
                  <div className="lol-role">{member.role}</div>
                  <h3 className="lol-name">{member.name}</h3>
                  <p className="lol-desc">{member.lore}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn right" onClick={() => scrollCarousel('right')}><FaChevronRight /></button>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="blog-section section-wrapper" id="blog">
        <h2 className="section-title">{t.blog.title}</h2>
        <div className="separator"></div>
        <div className="blog-grid">
            {blogsData.slice(0, 3).map(b => (
                <div key={b.id} className="blog-item">
                    <span className="blog-date">{b.date}</span>
                    {/* Link tới chi tiết bài viết */}
                    <Link to={`/blog/${b.slug}`} className="blog-title">{b.title}</Link>
                    <p className="blog-excerpt">{b.excerpt}</p>
                </div>
            ))}
        </div>
        <div style={{textAlign: 'center', marginTop: '40px'}}>
           <Link to="/blog" className="btn-main">Read More Stories</Link>
        </div>
      </section>
    </>
  );
};

export default Home;