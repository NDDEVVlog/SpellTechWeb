// src/components/privacy/AppSelector.jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './AppSelector.css';

const AppSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentApp = searchParams.get('app') || 'spell-tech';

  const apps = [
    { id: 'spell-tech', name: 'Spell Tech', label: 'Main Studio' },

    { id: 'exorsalt', name: 'Exorsalt', label: 'App' },
  ];

  const handleAppSelect = (appId) => {
    if (appId === 'spell-tech') {
      setSearchParams({});
    } else {
      setSearchParams({ app: appId });
    }
  };

  return (
    <div className="app-selector">
      <div className="selector-header">
        <h3>Select Application</h3>
      </div>
      <div className="apps-grid">
        {apps.map((app) => (
          <button
            key={app.id}
            className={`app-button ${currentApp === app.id ? 'active' : ''}`}
            onClick={() => handleAppSelect(app.id)}
          >
            <div className="app-name">{app.name}</div>
            <div className="app-label">{app.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AppSelector;
