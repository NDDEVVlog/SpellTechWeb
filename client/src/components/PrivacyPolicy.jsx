// src/components/PrivacyPolicy.jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPrivacyPolicyData } from '../data/privacy';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ lang }) => {
  const [searchParams] = useSearchParams();
  const appName = searchParams.get('app') || 'Spell Tech';
  
  // Get privacy policy data for the app
  const policyData = getPrivacyPolicyData(appName);
  const currentContent = policyData[lang] || policyData['en'];

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h1>{currentContent.title}</h1>
        <p className="app-name">{appName}</p>
        <p className="last-updated">{currentContent.lastUpdated}</p>
      </div>

      <div className="privacy-policy-content">
        {currentContent.sections.map((section, index) => (
          <div key={index} className="policy-section">
            <h2>{section.heading}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="privacy-policy-footer">
        <p>© 2025 Spell Tech. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
