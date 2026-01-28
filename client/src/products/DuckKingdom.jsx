import React from 'react';

const DuckKingdom = () => {
  return (
    <div className="pd-custom-content">
      <h3>Build Your Empire</h3>
      <p>
        Start with a small pond and expand into a global superpower. 
        Manage breadcrumbs, clean water, and feather production.
      </p>

      <h3>Duck Classes</h3>
      <div style={{ display: 'flex', gap: '20px', margin: '30px 0', flexWrap: 'wrap' }}>
        <div style={{ background: '#222', padding: '15px', borderRadius: '8px', flex: 1 }}>
          <h4 style={{ color: '#ffcc00' }}>The Worker</h4>
          <p style={{ fontSize: '13px' }}>Gathers bread efficiently.</p>
        </div>
        <div style={{ background: '#222', padding: '15px', borderRadius: '8px', flex: 1 }}>
          <h4 style={{ color: '#ff5555' }}>The Warrior</h4>
          <p style={{ fontSize: '13px' }}>Defends against Geese.</p>
        </div>
        <div style={{ background: '#222', padding: '15px', borderRadius: '8px', flex: 1 }}>
          <h4 style={{ color: '#55aaff' }}>The Scholar</h4>
          <p style={{ fontSize: '13px' }}>Researches new tech.</p>
        </div>
      </div>
    </div>
  );
};

export default DuckKingdom;