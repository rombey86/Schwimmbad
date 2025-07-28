'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent';

export default function CookieBanner() {
  const { showBanner, preferences, acceptAll, acceptNecessary, savePreferences } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(preferences);

  if (!showBanner) return null;

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'necessary') return; // Notwendige Cookies können nicht deaktiviert werden
    
    setTempPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleSavePreferences = () => {
    savePreferences(tempPreferences);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {!showDetails ? (
          // Einfacher Banner
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Wir verwenden Cookies
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                    Notwendige Cookies sind für die Grundfunktionen der Website erforderlich. 
                    Weitere Informationen finden Sie in unserer{' '}
                    <Link href="/datenschutz" className="text-blue-600 hover:underline">
                      Datenschutzerklärung
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200 text-sm"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200 text-sm"
              >
                Nur notwendige
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200 text-sm"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          // Detaillierte Einstellungen
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Cookie-Einstellungen
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Schließen"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 mb-6">
              {/* Notwendige Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Notwendige Cookies
                    </h4>
                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Erforderlich
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. 
                    Sie speichern keine persönlichen Daten und werden nur für die Dauer Ihres Besuchs gesetzt.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Analyse-Cookies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                    indem sie Informationen anonym sammeln und melden. Dies hilft uns, die Website zu verbessern.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('analytics', !tempPreferences.analytics)}
                    className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                      tempPreferences.analytics ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform duration-200 ${
                      tempPreferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Marketing-Cookies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen. 
                    Sie können auch verwendet werden, um die Anzahl der Anzeigen zu begrenzen und die Effektivität von Werbekampagnen zu messen.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('marketing', !tempPreferences.marketing)}
                    className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                      tempPreferences.marketing ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform duration-200 ${
                      tempPreferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={acceptNecessary}
                className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
              >
                Nur notwendige
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-medium transition-colors duration-200"
              >
                Alle akzeptieren
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Weitere Informationen zu Cookies und Datenschutz finden Sie in unserer{' '}
                <Link href="/datenschutz" className="text-blue-600 hover:underline">
                  Datenschutzerklärung
                </Link>{' '}
                und unserem{' '}
                <Link href="/impressum" className="text-blue-600 hover:underline">
                  Impressum
                </Link>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}