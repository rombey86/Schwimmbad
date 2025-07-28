'use client';

import { useState, useEffect } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'freibad-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'freibad-cookie-preferences';

export const useCookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Immer erforderlich
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Prüfe ob bereits eine Einwilligung vorliegt
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

    if (!consent) {
      setShowBanner(true);
    } else if (savedPreferences) {
      try {
        setPreferences(JSON.parse(savedPreferences));
      } catch (error) {
        console.error('Fehler beim Laden der Cookie-Einstellungen:', error);
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    
    setPreferences(allAccepted);
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    
    setPreferences(necessaryOnly);
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const savePreferences = (newPreferences: CookiePreferences) => {
    const finalPreferences = {
      ...newPreferences,
      necessary: true, // Notwendige Cookies können nicht deaktiviert werden
    };
    
    setPreferences(finalPreferences);
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(finalPreferences));
    setShowBanner(false);
  };

  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_PREFERENCES_KEY);
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    setShowBanner(true);
  };

  return {
    showBanner,
    preferences,
    acceptAll,
    acceptNecessary,
    savePreferences,
    resetConsent,
    setShowBanner,
  };
};