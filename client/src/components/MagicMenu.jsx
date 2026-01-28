// src/components/MagicMenu.jsx
import React from 'react';
import './MagicMenu.css';
import { FaGlobe, FaLightbulb, FaMoon, FaTimes, FaVolumeUp } from 'react-icons/fa';

const MagicMenu = ({ position, onClose, onToggleLang, onToggleTheme, isDark, lang }) => {
  const menuItems = [
    {
      icon: <FaGlobe />,
      label: lang === 'en' ? 'Tiếng Việt' : 'English',
      action: onToggleLang,
      color: '#ff0055' // Hồng
    },
    {
      icon: isDark ? <FaLightbulb /> : <FaMoon />,
      label: isDark ? 'Light Mode' : 'Dark Mode',
      action: onToggleTheme,
      color: '#ffee00' // Vàng
    },
    {
      icon: <FaVolumeUp />,
      label: 'Sound',
      action: () => alert("Magic Sound! ✨"),
      color: '#00ff88' // Xanh lá
    }
  ];

  // Bán kính các nút vệ tinh bung ra
  const radius = 90; 

  return (
    <div 
      className="magic-overlay" 
      onClick={onClose} 
    >
      <div 
        className="magic-menu-container"
        // Style này đặt vị trí container, CSS sẽ dùng translate(-50%, -50%) để căn giữa
        style={{ top: position.y, left: position.x }} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- CÁC VÒNG TRÒN TRANG TRÍ (MỚI) --- */}
        <div className="magic-ring-outer"></div>
        <div className="magic-ring-inner"></div>

        {/* Nút trung tâm */}
        <div className="magic-core" onClick={onClose}>
          <FaTimes />
        </div>

        {/* Render các item */}
        {menuItems.map((item, index) => {
          // Tính góc chia đều 360 độ cho số lượng nút
          const angle = (index * (360 / menuItems.length)) * (Math.PI / 180) - (Math.PI / 2);
          
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const delay = index * 0.1;

          return (
            <div 
              key={index}
              className="magic-item"
              style={{
                // Dùng left và top để định vị thay vì transform
                left: `${x}px`,
                top: `${y}px`, 
                color: item.color,
                animationDelay: `${delay}s`
              }}
              onClick={() => {
                item.action();
                onClose();
              }}
            >
              {item.icon}
              <div className="magic-tooltip">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MagicMenu;