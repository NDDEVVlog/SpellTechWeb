import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { productsData } from '../data';   // Import centralized data
import './ProductsPage.css';
import { FaGamepad, FaArrowLeft, FaSearch } from 'react-icons/fa';

const ProductsPage = () => {
  const [filter, setFilter] = useState('All');

  // Generate unique categories dynamically from data
  const categories = ['All', ...new Set(productsData.map(p => p.genre.split(' / ')[0]))];

  const filteredProducts = filter === 'All' 
    ? productsData 
    : productsData.filter(p => p.genre.includes(filter));

  return (
    // Changed class name to match ProductsPage.css (.pp-container)
    <div className="pp-container"> 
      
      {/* HEADER */}
      <div className="pp-header">
        {/* Use Link instead of button with onBack */}
        <Link to="/" className="pp-back-btn" style={{textDecoration:'none', display:'inline-flex'}}>
          <FaArrowLeft /> <span style={{marginLeft:'8px'}}>Back to Home</span>
        </Link>
        <h1 className="pp-title">Game Library</h1>
        <p className="pp-subtitle">Explore the worlds we have crafted with passion and code.</p>
      </div>

      {/* FILTER BAR */}
      <div className="pp-controls">
        <div className="pp-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`pp-cat-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="pp-search">
          <FaSearch />
          <input type="text" placeholder="Search games..." />
        </div>
      </div>

      {/* GRID */}
      <div className="pp-grid">
        {filteredProducts.map(item => (
          // Wrap card in Link
          <Link to={`/products/${item.slug}`} key={item.id} style={{textDecoration:'none'}}>
            <div className="pp-card">
              <div className="pp-card-image-wrapper">
                <img src={item.img} alt={item.title} className="pp-card-img" />
                <span className={`pp-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                  {item.status}
                </span>
              </div>
              <div className="pp-card-content">
                <div className="pp-meta">
                  <span className="pp-genre"><FaGamepad /> {item.genre}</span>
                </div>
                <h3 className="pp-card-title">{item.title}</h3>
                <p className="pp-card-desc">{item.desc}</p>
                {/* Changed button to span so it doesn't conflict with parent Link */}
                <span className="pp-play-btn">View Details</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;