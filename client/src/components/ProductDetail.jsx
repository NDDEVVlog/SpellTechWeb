import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data';
import { FaArrowLeft, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'; // Thêm icon
import './ProductDetail.css';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <div className="pd-container"><h1>Product Not Found</h1></div>;

  const Details = product.ContentComponent;

  // --- LOGIC RENDER NÚT BẤM ---
  const renderActionButton = () => {
    // 1. Lấy text (Mặc định là 'PLAY NOW' nếu không điền custom)
    const btnText = product.customButtonText || "PLAY NOW";
    
    // 2. Lấy link
    const btnLink = product.customLink;

    // 3. Nếu có Link -> Render thẻ <a> (Mở tab mới)
    if (btnLink) {
      return (
        <a 
          href={btnLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pd-play-btn"
        >
          {/* Icon Link + Text */}
          <FaExternalLinkAlt style={{ fontSize: '0.9em' }} /> {btnText}
        </a>
      );
    }

    // 4. Nếu không có Link -> Render nút <button> thường
    return (
      <button className="pd-play-btn">
        <FaPlay style={{ fontSize: '0.8em' }} /> {btnText}
      </button>
    );
  };

  return (
    <div className="pd-container">
      {/* HERO SECTION */}
      <div className="pd-hero" style={{ backgroundImage: `url(${product.img})` }}>
        <div className="pd-hero-content">
          <Link to="/products" className="pd-back-link">
             <FaArrowLeft /> Back to Library
          </Link>
          <span className="pd-genre">{product.genre}</span>
          <h1 className="pd-title">{product.title}</h1>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="pd-main">
        {/* CỘT TRÁI: NỘI DUNG */}
        <div className="pd-content-col">
          <h3 className="pd-section-title">About This Product</h3>
          
          <p className="pd-desc">{product.desc}</p>
          
          {/* Render Component chi tiết nếu có */}
          {Details ? <Details /> : <p style={{color:'#666', fontStyle:'italic'}}>Detailed description coming soon...</p>}

          <h3 className="pd-section-title" style={{marginTop:'40px'}}>Key Features</h3>
          <div className="pd-features">
            <ul>
              {product.features?.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CỘT PHẢI: SIDEBAR & NÚT */}
        <div className="pd-sidebar-col">
          <div className="pd-stats-card">
            <div className="pd-stat-row">
              <span className="pd-label">Status</span>
              {/* Tự động đổi màu status */}
              <span className={`pd-value-status ${product.status === 'Live' ? 'green' : 'orange'}`}>
                {product.status}
              </span>
            </div>
            <div className="pd-stat-row">
              <span className="pd-label">Release Date</span>
              <span className="pd-value">{product.releaseDate}</span>
            </div>
            <div className="pd-stat-row">
              <span className="pd-label">Developer</span>
              <span className="pd-value">Spell Tech</span>
            </div>
            
            <hr style={{borderColor: '#333', margin: '15px 0'}} />

            {/* Gọi hàm render nút ở đây */}
            {renderActionButton()}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;