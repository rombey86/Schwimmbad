import { Metadata } from 'next';
import Link from 'next/link';
import { freibadFacts, getAllCategories, getCategoryLabel, getCategoryColor, getFreibadFactsByCategory } from '@/data/freibad-facts';

export const metadata: Metadata = {
  title: 'Fakten & Zahlen',
  description: 'Alle wichtigen Daten und Statistiken zu unserem Freibad - von der Technik bis zu den Besucherzahlen',
};

export default function FaktenZahlenPage() {
  const categories = getAllCategories();

  const formatValue = (value: string | number, unit?: string) => {
    if (typeof value === 'number') {
      return value.toLocaleString('de-DE') + (unit ? ` ${unit}` : '');
    }
    return value + (unit ? ` ${unit}` : '');
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        icon: 'bg-blue-100'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        icon: 'bg-green-100'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        icon: 'bg-purple-100'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        icon: 'bg-orange-100'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
              Startseite
            </Link>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link href="/unser-freibad" className="hover:text-blue-600 transition-colors duration-200">
              Unser Freibad
            </Link>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900">Fakten & Zahlen</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fakten & Zahlen
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Alle wichtigen Daten und Statistiken zu unserem Freibad - 
              von der Technik bis zu den Besucherzahlen.
            </p>
          </div>
        </div>
      </div>

      {/* Übersicht Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Freibad in Zahlen
            </h2>
            <p className="text-xl text-gray-600">
              Die wichtigsten Kennzahlen auf einen Blick
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-200">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1972</div>
              <div className="text-blue-800 font-medium">Eröffnung</div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">2.500m²</div>
              <div className="text-green-800 font-medium">Wasserfläche</div>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center border border-purple-200">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">15.000</div>
              <div className="text-purple-800 font-medium">Besucher/Jahr</div>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6 text-center border border-orange-200">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">2,86 Mio €</div>
              <div className="text-orange-800 font-medium">Fördermittel</div>
            </div>
          </div>

          {/* Detaillierte Kategorien */}
          <div className="space-y-12">
            {categories.map((category) => {
              const categoryFacts = getFreibadFactsByCategory(category);
              const categoryLabel = getCategoryLabel(category);
              const color = getCategoryColor(category);
              const colorClasses = getColorClasses(color);

              return (
                <div key={category} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`${colorClasses.bg} ${colorClasses.border} border-b px-8 py-6`}>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${colorClasses.icon} rounded-full flex items-center justify-center mr-4`}>
                        {category === 'general' && (
                          <svg className={`w-6 h-6 ${colorClasses.text}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                        {category === 'technical' && (
                          <svg className={`w-6 h-6 ${colorClasses.text}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                        )}
                        {category === 'visitor' && (
                          <svg className={`w-6 h-6 ${colorClasses.text}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                          </svg>
                        )}
                        {category === 'financial' && (
                          <svg className={`w-6 h-6 ${colorClasses.text}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <h3 className={`text-2xl font-bold ${colorClasses.text}`}>
                        {categoryLabel}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryFacts.map((fact, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                              {fact.label}
                            </h4>
                          </div>
                          <div className={`text-2xl font-bold ${colorClasses.text} mb-2`}>
                            {formatValue(fact.value, fact.unit)}
                          </div>
                          {fact.description && (
                            <p className="text-sm text-gray-600">
                              {fact.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modernisierung Übersicht */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernisierungsprojekt
            </h2>
            <p className="text-xl text-gray-600">
              Investitionen für die Zukunft unseres Freibads
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Finanzierung */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Finanzierung</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium text-gray-900">Fördermittel</span>
                    <span className="text-xl font-bold text-green-600">2,86 Mio €</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-medium text-gray-900">Eigenanteil Gemeinde</span>
                    <span className="text-xl font-bold text-blue-600">400.000 €</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border border-gray-300">
                    <span className="font-bold text-gray-900">Gesamtinvestition</span>
                    <span className="text-xl font-bold text-gray-900">3,26 Mio €</span>
                  </div>
                </div>
              </div>

              {/* Maßnahmen */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Geplante Maßnahmen</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Sanierung der Schwimmbecken</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Neue energieeffiziente Filteranlage</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Barrierefreier Ausbau</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Modernisierung der Umkleiden</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Neugestaltung der Außenanlagen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Mehr über unser Freibad erfahren
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/unser-freibad/chronik"
              className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Chronik</h3>
                <p className="text-sm text-gray-600">Die Geschichte unseres Freibads</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/unser-freibad/galerie"
              className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Galerie</h3>
                <p className="text-sm text-gray-600">Bilder aus verschiedenen Epochen</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}