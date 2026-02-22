// src/components/privacy/PrivacyPolicyRouter.jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import AppSelector from './AppSelector';
import DefaultPrivacyPolicy from './Default/PrivacyPolicy';
import CyberOdysseyPrivacyPolicy from './CyberOdyssey/PrivacyPolicy';
import DuckKingdomPrivacyPolicy from './DuckKingdom/PrivacyPolicy';
import SceneSwitcherPrivacyPolicy from './SceneSwitcher/PrivacyPolicy';
import ExorsaltPrivacyPolicy from './Exorsalt/PrivacyPolicy';

const PrivacyPolicyRouter = ({ lang }) => {
  const [searchParams] = useSearchParams();
  const appName = (searchParams.get('app') || '').toLowerCase();

  // Map app names to their privacy policy components
  const appPolicies = {
    'cyber-odyssey': <CyberOdysseyPrivacyPolicy lang={lang} />,
    'cyberodyssey': <CyberOdysseyPrivacyPolicy lang={lang} />,
    'duck-kingdom': <DuckKingdomPrivacyPolicy lang={lang} />,
    'duckkingdom': <DuckKingdomPrivacyPolicy lang={lang} />,
    'scene-switcher': <SceneSwitcherPrivacyPolicy lang={lang} />,
    'sceneswitcher': <SceneSwitcherPrivacyPolicy lang={lang} />,
    'exorsalt': <ExorsaltPrivacyPolicy lang={lang} />,
  };

  return (
    <div className="privacy-policy-router">
      <AppSelector />
      {appPolicies[appName] || <DefaultPrivacyPolicy lang={lang} appName={searchParams.get('app') || 'Spell Tech'} />}
    </div>
  );
};

export default PrivacyPolicyRouter;
