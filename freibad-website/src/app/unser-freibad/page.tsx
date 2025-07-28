import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unser Freibad',
  description: 'Entdecken Sie die Geschichte, Fakten und die besondere Kultur unseres Freibads',
};

export default function UnserFreibadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unser Freibad
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Mehr als nur ein Schwimmbad - ein Ort der Gemeinschaft, 
              Erholung und lebendigen Freibadkultur seit über 50 Jahren.
            </p>
          </div>
        </div>
      </div>

      {/* Übersicht */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entdecken Sie unser Freibad
            </h2>
            <p className="text-xl text-gray-600">
              Tauchen Sie ein in die Geschichte, Fakten und die besondere Atmosphäre unseres Freibads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Galerie */}
            <Link
              href="/unser-freibad/galerie"
              className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Galerie</h3>
              <p className="text-blue-100 mb-4">
                Bilder aus verschiedenen Epochen unseres Freibads - von der Bauphase 
                bis zu den schönsten Sommermomenten.
              </p>
              <div className="flex items-center text-blue-200 group-hover:text-white transition-colors duration-300">
                <span className="font-medium">Zur Galerie</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Chronik */}
            <Link
              href="/unser-freibad/chronik"
              className="group bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Chronik</h3>
              <p className="text-green-100 mb-4">
                Die wichtigsten Meilensteine in der Geschichte unseres Freibads - 
                von der Gründung bis heute.
              </p>
              <div className="flex items-center text-green-200 group-hover:text-white transition-colors duration-300">
                <span className="font-medium">Zur Chronik</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Presse */}
            <Link
              href="/unser-freibad/presse"
              className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Presse</h3>
              <p className="text-purple-100 mb-4">
                Presseartikel und Medienberichte über unser Freibad und 
                das Rettungsprojekt.
              </p>
              <div className="flex items-center text-purple-200 group-hover:text-white transition-colors duration-300">
                <span className="font-medium">Zur Presse</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Fakten & Zahlen */}
            <Link
              href="/unser-freibad/fakten-zahlen"
              className="group bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Fakten & Zahlen</h3>
              <p className="text-orange-100 mb-4">
                Alle wichtigen Daten und Statistiken zu unserem Freibad - 
                von der Technik bis zu den Besucherzahlen.
              </p>
              <div className="flex items-center text-orange-200 group-hover:text-white transition-colors duration-300">
                <span className="font-medium">Zu den Fakten</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Freibadkultur */}
            <Link
              href="/unser-freibad/freibadkultur"
              className="group bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-8 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Freibadkultur</h3>
              <p className="text-red-100 mb-4">
                Was macht die besondere Atmosphäre unseres Freibads aus? 
                Entdecken Sie die gelebte Freibadkultur.
              </p>
              <div className="flex items-center text-red-200 group-hover:text-white transition-colors duration-300">
                <span className="font-medium">Zur Freibadkultur</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Aktuelles */}
            <Link
              href="/blog"
              className="group bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl p-8 text-white hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Aktuelles</h3>
              <p className="text-gray-100 mb-4">
                Die neuesten Entwicklungen und Nachrichten rund um 
                unser Freibad-Rettungsprojekt.
              </p>
              <div className="flex items-center text-gray-200 group-hover:text-white transition-colors duration-300">
                <span className="font-medium">Zu den News</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Freibad in Zahlen
            </h2>
            <p className="text-xl text-gray-600">
              Die wichtigsten Fakten auf einen Blick
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1972</div>
              <div className="text-gray-600 font-medium">Eröffnung</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">2.500m²</div>
              <div className="text-gray-600 font-medium">Wasserfläche</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">15.000</div>
              <div className="text-gray-600 font-medium">Besucher/Jahr</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">5m</div>
              <div className="text-gray-600 font-medium">Sprungturm</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Werden Sie Teil unserer Geschichte
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Helfen Sie uns dabei, die nächsten Kapitel der Freibad-Geschichte zu schreiben 
            und unser Freibad für zukünftige Generationen zu erhalten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/petition"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Petition unterschreiben
            </Link>
            <Link
              href="/unterstuetzen"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Jetzt unterstützen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}