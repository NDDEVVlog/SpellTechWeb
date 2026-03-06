// src/data/privacy/index.js
import { getPrivacyPolicy } from './default';
import cyberOdysseyPolicy from './cyberOdyssey';
import duckKingdomPolicy from './duckKingdom';
import sceneSwitcherPolicy from './sceneSwitcher';

// Map app names to their privacy policies
const privacyPolicies = {
  'cyber-odyssey': cyberOdysseyPolicy,
  'cyberodyssey': cyberOdysseyPolicy,
  'CyberOdyssey': cyberOdysseyPolicy,
  'duck-kingdom': duckKingdomPolicy,
  'duckingdom': duckKingdomPolicy,
  'DuckKingdom': duckKingdomPolicy,
  'scene-switcher': sceneSwitcherPolicy,
  'sceneswitcher': sceneSwitcherPolicy,
  'SceneSwitcherTool_V2': sceneSwitcherPolicy,
  'Scene Switcher Tool V2': sceneSwitcherPolicy,
  // free/lite variant
  'SceneSwitcherTool_V1': sceneSwitcherPolicy,
  'Scene Switcher Tool V1': sceneSwitcherPolicy,
};

export const getPrivacyPolicyData = (appName) => {
  if (!appName) {
    return getPrivacyPolicy('Spell Tech');
  }
  
  return privacyPolicies[appName] || getPrivacyPolicy(appName);
};

export default privacyPolicies;
