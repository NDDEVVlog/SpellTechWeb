import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data';
import { FaArrowLeft } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <div className="pd-container"><h1>Game Not Found</h1></div>;

  // Get the component if it exists
  const Details = product.ContentComponent;

  return (
    <div className="pd-container">
      <div className="pd-hero" style={{ backgroundImage: `url(${product.img})` }}>
        <div className="pd-hero-content">
          <Link to="/products" style={{color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px'}}>
             <FaArrowLeft /> Back to Library
          </Link>
          <span className="pd-genre">{product.genre}</span>
          <h1 className="pd-title">{product.title}</h1>
        </div>
      </div>

      <div className="pd-main">
        <div className="pd-content-col">
          <h3 className="pd-section-title">About This Game</h3>
          
          {/* Render description and dynamic component */}
          <p className="pd-desc">{product.desc}</p>
          {Details ? <Details /> : <p>More details coming soon...</p>}

          <h3 className="pd-section-title" style={{marginTop:'30px'}}>Key Features</h3>
          <div className="pd-features">
            <ul>
              {product.features?.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pd-sidebar-col">
          <div className="pd-stats-card">
            <div className="pd-stat-row">
              <span className="pd-label">Status</span>
              <span className="pd-value" style={{color: '#4caf50'}}>{product.status}</span>
            </div>
            <div className="pd-stat-row">
              <span className="pd-label">Release Date</span>
              <span className="pd-value">{product.releaseDate}</span>
            </div>
            <div className="pd-stat-row">
              <span className="pd-label">Developer</span>
              <span className="pd-value">Spell Tech</span>
            </div>
            <button className="pd-play-btn">PLAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;