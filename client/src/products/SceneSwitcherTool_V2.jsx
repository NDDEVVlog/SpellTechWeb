

import React from 'react';
import { 
  FaUnity, FaWindows, FaApple, FaTools, 
  FaSearch, FaLayerGroup, FaTags, FaGamepad 
} from 'react-icons/fa';

const SceneSwitcherTool_V2 = () => {
  return (
    <div className="pd-custom-content">
      {/* 1. INTRO: Sang trọng, ngắn gọn */}
      <div style={styles.introBox}>
        <p style={{margin: 0, fontStyle: 'italic', color: '#e0e0e0'}}>
          "Streamline your Unity workflow. Organize, switch, and load scenes instantly—designed for professionals."
        </p>
      </div>

      {/* 2. SPECS: Gọn gàng */}
      <div style={styles.specsContainer}>
        <div style={styles.specItem}>
          <FaUnity style={{ color: '#c8aa6e' }} /> <span>2022.3 LTS+</span>
          <FaUnity style={{ color: '#c8aa6e' }} /> <span>6000.3 LTS+</span>
        </div>
        <div style={styles.specDivider}></div>
        <div style={styles.specItem}>
          <FaWindows style={{ color: '#00f2ff' }} /> <FaApple /> <span>Win / Mac</span>
        </div>
      </div>

      {/* 3. FEATURES LIST */}
      <h3 style={styles.heading}><FaTools /> Core Features</h3>
      <ul className="tech-list">
        <li><strong>Smart Bookmarking:</strong> Drag & drop scenes. Persistence guaranteed.</li>
        <li><strong>Quick Search:</strong> Filter scene names in real-time (ms latency).</li>
        <li><strong>Toolbar Widget:</strong> Instant access next to Play Mode controls.</li>
        <li><strong>Additive Workflow:</strong> Load Additive & Ping scene in Project view.</li>
      </ul>

      {/* 5. MODULES: Grid responsive (tự xuống dòng khi màn hình nhỏ) */}
      <div style={styles.gridContainer}>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}><FaTags /> Tag Manager</h4>
          <p style={styles.cardText}>
            Categorize scenes by groups. Set <strong>Tag Colors</strong> for visual clarity.
          </p>
        </div>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}><FaLayerGroup /> Combo Plugin</h4>
          <p style={styles.cardText}>
            Create a list of scenes (Env + UI + Logic) and load them all at once.
          </p>
        </div>
      </div>

      {/* 6. TOOLBAR HIGHLIGHT */}
      <div style={styles.highlightBox}>
        <h4 style={{ margin: '0 0 5px 0', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaGamepad /> Toolbar Access
        </h4>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#aaa' }}>
          Enable the discreet widget next to Play button for 1-click scene switching.
        </p>
      </div>
    </div>
  );
};

// Styles nội bộ gọn gàng
const styles = {
  introBox: {
    borderLeft: '3px solid #c8aa6e',
    paddingLeft: '15px',
    marginBottom: '25px',
    background: 'linear-gradient(90deg, rgba(200,170,110,0.1) 0%, transparent 100%)',
    padding: '15px',
    borderRadius: '0 4px 4px 0'
  },
  specsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    background: '#111',
    padding: '10px 15px',
    borderRadius: '6px',
    border: '1px solid #333',
    marginBottom: '30px',
    flexWrap: 'wrap' // Cho phép xuống dòng nếu quá chật
  },
  specItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#ccc',
    fontSize: '0.85rem',
    fontWeight: '600',
    fontFamily: 'monospace'
  },
  specDivider: {
    width: '1px',
    height: '15px',
    background: '#444'
  },
  heading: {
    color: '#fff',
    fontSize: '1.3rem',
    marginTop: '30px',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  gridContainer: {
    display: 'grid',
    // Responsive: Tối thiểu 250px, nếu không đủ chỗ thì xuống dòng
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
    gap: '15px',
    marginTop: '30px'
  },
  card: {
    background: '#151515',
    border: '1px solid #2a2a2a',
    borderRadius: '6px',
    padding: '20px',
  },
  cardTitle: {
    margin: '0 0 10px 0',
    color: '#c8aa6e',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  cardText: {
    fontSize: '0.9rem',
    color: '#999',
    lineHeight: '1.5',
    margin: 0
  },
  highlightBox: {
    marginTop: '30px',
    background: '#0f1820', // Xanh đen rất tối
    border: '1px solid #1a3c4d',
    borderLeft: '4px solid #00f2ff',
    padding: '15px',
    borderRadius: '4px'
  }
};

export default SceneSwitcherTool_V2;