import React from 'react';

const CyberOdyssey = () => {
  return (
    <div className="pd-custom-content">
      <h3>Storyline</h3>
      <p>
        In the year 2099, Neo-Tokyo has fallen. You are Unit 734, a rogue AI 
        waking up in a scrapyard with no memory, but a burning desire for revenge.
      </p>

      {/* Ví dụ chèn ảnh minh hoạ gameplay */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }}>
        <img src="https://images.unsplash.com/photo-1535378437323-9555f3e7f6aa?auto=format&fit=crop&w=500" alt="Combat" style={{width: '100%', borderRadius: '8px'}} />
        <img src="https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&w=500" alt="City" style={{width: '100%', borderRadius: '8px'}} />
      </div>

      <h3>System Mechanics</h3>
      <ul style={{ color: '#ccc', lineHeight: '1.8' }}>
        <li><strong>Hack & Slash:</strong> Combine katana strikes with cyber-hacks.</li>
        <li><strong>Neural Network:</strong> Upgrade your AI brain to learn new skills.</li>
        <li><strong>Open World:</strong> No loading screens across the entire city.</li>
      </ul>

      <div style={{ background: '#1a1a1a', padding: '20px', marginTop: '30px', borderLeft: '3px solid #c8aa6e' }}>
        <h4>System Requirements</h4>
        <p style={{ fontSize: '14px', color: '#888' }}>GTX 3060 or higher required for Ray Tracing features.</p>
      </div>
    </div>
  );
};

export default CyberOdyssey;