import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bürgerentscheid',
  description: 'Ergebnisse und Informationen zum Bürgerentscheid über die Rettung unseres Freibads',
};

export default function BuergerentscheidPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bürgerentscheid erfolgreich!
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Mit 63,7% Ja-Stimmen haben die Bürgerinnen und Bürger ein klares Signal 
              für die Rettung unseres Freibads gesetzt.
            </p>
          </div>
        </div>
      </div>

      {/* Ergebnisse */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Die Ergebnisse im Detail
            </h2>
            <p className="text-xl text-gray-600">
              Abstimmung vom 15. März 2024
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-green-50 rounded-xl p-8 text-center border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">63,7%</div>
              <div className="text-green-800 font-medium mb-1">Ja-Stimmen</div>
              <div className="text-sm text-green-600">4.892 Stimmen</div>
            </div>

            <div className="bg-red-50 rounded-xl p-8 text-center border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">36,3%</div>
              <div className="text-red-800 font-medium mb-1">Nein-Stimmen</div>
              <div className="text-sm text-red-600">2.786 Stimmen</div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">72,3%</div>
              <div className="text-blue-800 font-medium mb-1">Wahlbeteiligung</div>
              <div className="text-sm text-blue-600">Außergewöhnlich hoch</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
              <div className="text-4xl font-bold text-gray-600 mb-2">7.678</div>
              <div className="text-gray-800 font-medium mb-1">Gültige Stimmen</div>
              <div className="text-sm text-gray-600">0,8% ungültig</div>
            </div>
          </div>

          {/* Visualisierung */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Abstimmungsergebnis
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="flex rounded-lg overflow-hidden h-16 mb-4">
                <div className="bg-green-500 flex items-center justify-center text-white font-semibold" style={{width: '63.7%'}}>
                  63,7% JA
                </div>
                <div className="bg-red-500 flex items-center justify-center text-white font-semibold" style={{width: '36.3%'}}>
                  36,3% NEIN
                </div>
              </div>
              <div className="text-center text-gray-600">
                <p className="mb-2">
                  <strong>Frage:</strong> "Sind Sie dafür, dass die Gemeinde das Freibad saniert und modernisiert?"
                </p>
                <p className="text-sm">
                  Wahlberechtigt: 10.625 Personen | Abgegebene Stimmen: 7.740 | Wahlbeteiligung: 72,3%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bedeutung des Ergebnisses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Was bedeutet dieses Ergebnis?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Klares Mandat</h3>
                    <p className="text-gray-600">
                      Die Bürgerinnen und Bürger haben der Gemeinde einen klaren Auftrag erteilt, 
                      das Freibad zu sanieren und zu modernisieren.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Finanzierung gesichert</h3>
                    <p className="text-gray-600">
                      Mit dem positiven Votum können nun die beantragten Fördermittel 
                      in Höhe von 2,86 Millionen Euro abgerufen werden.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Planungssicherheit</h3>
                    <p className="text-gray-600">
                      Die Modernisierungsarbeiten können nun konkret geplant und 
                      zeitnah umgesetzt werden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nächste Schritte</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Detailplanung</div>
                    <div className="text-sm text-gray-600">Architekten und Ingenieure erstellen Baupläne</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Fördermittel abrufen</div>
                    <div className="text-sm text-gray-600">Beantragung der bewilligten 2,86 Mio. Euro</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Ausschreibungen</div>
                    <div className="text-sm text-gray-600">Vergabe der Bauarbeiten an Fachfirmen</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    4
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Baustart</div>
                    <div className="text-sm text-gray-600">Beginn der Modernisierungsarbeiten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vielen Dank für Ihre Unterstützung!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Gemeinsam haben wir Geschichte geschrieben. Jetzt geht es an die Umsetzung!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/unser-freibad/chronik"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Zur Chronik
            </Link>
            <Link
              href="/unterstuetzen"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Weiter unterstützen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}