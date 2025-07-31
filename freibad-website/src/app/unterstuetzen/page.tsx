import { Metadata } from 'next';
import Link from 'next/link';
import { contactInfo } from '@/data/config';

export const metadata: Metadata = {
  title: 'Unterstützen',
  description: 'Unterstützen Sie unser Freibad-Projekt durch Spenden, ehrenamtliche Mitarbeit oder Newsletter-Anmeldung',
};

export default function UnterstuetzenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unterstützen Sie unser Freibad
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Das Bürgerbegehren kostet viel Zeit, Arbeit und Geld.
              Ihre finanzielle Unterstützung hilft bei Anwaltskosten und weiteren Verfahren.
            </p>
          </div>
        </div>
      </div>

      {/* Unterstützungsmöglichkeiten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wie Sie helfen können
            </h2>
            <p className="text-xl text-gray-600">
              Es gibt viele Wege, unser Projekt zu unterstützen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Spenden */}
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spenden</h3>
              <p className="text-gray-700 mb-6">
                Mit Ihrer Spende unterstützen Sie direkt die Modernisierung und den Erhalt 
                unseres Freibads. Jeder Betrag hilft!
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 px-4 bg-white rounded-lg">
                  <span className="font-medium">25 €</span>
                  <span className="text-sm text-gray-600">Unterstützer</span>
                </div>
                <div className="flex justify-between items-center py-2 px-4 bg-white rounded-lg">
                  <span className="font-medium">50 €</span>
                  <span className="text-sm text-gray-600">Förderer</span>
                </div>
                <div className="flex justify-between items-center py-2 px-4 bg-white rounded-lg">
                  <span className="font-medium">100 €</span>
                  <span className="text-sm text-gray-600">Sponsor</span>
                </div>
              </div>
            </div>

            {/* Ehrenamt */}
            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ehrenamtliche Mitarbeit</h3>
              <p className="text-gray-700 mb-6">
                Bringen Sie Ihre Fähigkeiten und Zeit ein. Ob bei Veranstaltungen, 
                Öffentlichkeitsarbeit oder handwerklichen Arbeiten.
              </p>
              <div className="space-y-3">
                <div className="flex items-center py-2 px-4 bg-white rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Veranstaltungshelfer</span>
                </div>
                <div className="flex items-center py-2 px-4 bg-white rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Öffentlichkeitsarbeit</span>
                </div>
                <div className="flex items-center py-2 px-4 bg-white rounded-lg">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Handwerkliche Hilfe</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Newsletter</h3>
              <p className="text-gray-700 mb-6">
                Bleiben Sie auf dem Laufenden über alle Entwicklungen und 
                Meilensteine unseres Freibad-Projekts.
              </p>
              <div className="space-y-3">
                <div className="flex items-center py-2 px-4 bg-white rounded-lg">
                  <svg className="w-5 h-5 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Monatliche Updates</span>
                </div>
                <div className="flex items-center py-2 px-4 bg-white rounded-lg">
                  <svg className="w-5 h-5 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Exklusive Einblicke</span>
                </div>
                <div className="flex items-center py-2 px-4 bg-white rounded-lg">
                  <svg className="w-5 h-5 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Veranstaltungshinweise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bürgerbegehren Status */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Aktuelle Situation der Bürgerbegehren
              </h2>
              <p className="text-xl text-gray-600">
                Warum wir Ihre finanzielle Unterstützung benötigen
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Liebe Freibadunterstützer,</h3>
                <p className="text-yellow-700 mb-4">
                  Das erste Bürgerbegehren zum Erhalt unseres Freibades soll laut Verwaltung vom Rat basierend auf
                  „Gutachten&quot; einer Anwaltskanzlei aus Köln für unzulässig erklärt werden. Die absichernden
                  Bürgerbegehren 2 und 3 starten ab sofort mit der Unterschriftensammlung.
                </p>
                <p className="text-yellow-700">
                  Wir arbeiten intensiv daran, zumindest eines dieser Bürgerbegehren zum Erfolg zu führen. Das ist
                  mit viel Zeit und Arbeit, aber auch mit erheblichem finanziellem Aufwand verbunden.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Bereits investiert</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">7.000+ €</div>
                  <p className="text-red-700 text-sm">
                    Für das frühere erste Bürgerbegehren „Start Freibadsanierung&quot; wurden über 7000 € in
                    Informationsmaterial, Unterschriftenlisten und Anwaltskosten investiert.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Erwartete Kosten</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">mehrere 1000 €</div>
                  <p className="text-orange-700 text-sm">
                    Wir rechnen derzeit mit weiteren Kosten in Höhe von mehreren tausend Euro hauptsächlich
                    für weitere juristische Begleitung durch unseren Fachanwalt bei den nun insgesamt drei Bürgerbegehren.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Kostenaufschlüsselung</h3>
                <ul className="text-blue-700 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Werbungs- und Umsetzungskosten
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Juristische Begleitung des Verfahrens
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Klage vor dem Verwaltungsgericht Düsseldorf
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Verwendung von Überschüssen</h3>
                <p className="text-green-700">
                  Mögliche Überschüsse nach Abschluss des Bürgerbegehrens verbleiben komplett beim
                  „Förderverein Niederkrüchtener Bäder e.V.&quot;. So kann diese Unterstützung, wenn einer der
                  Bürgerentscheide es verlangt, direkt in das Freibad investiert werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spenden-Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Spenden für das Bürgerbegehren
              </h2>
              <p className="text-xl text-gray-600">
                Ihre Spende unterstützt die juristische Begleitung und weitere Kosten des Bürgerbegehrens
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bankverbindung */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Bankverbindung
                </h3>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-gray-700">Empfänger:</span>
                    <span className="font-medium text-right text-black">{contactInfo.bankDetails.recipient}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-gray-700">Stichwort:</span>
                    <span className="font-medium text-black">&quot;{contactInfo.bankDetails.subject}&quot;</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-gray-700">IBAN:</span>
                    <span className="font-mono text-sm text-black">{contactInfo.bankDetails.iban}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-gray-700">BIC:</span>
                    <span className="font-mono text-sm text-black">{contactInfo.bankDetails.bic} {contactInfo.bankDetails.bank}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm text-blue-800 font-medium">Steuerlich absetzbar</p>
                      <p className="text-sm text-blue-700">
                        Bis 200 EUR reicht der Kontoauszug. Ab 200 EUR erhalten Sie bis Ende Januar
                        eine Spendenquittung. Bitte Adresse im Verwendungszweck angeben.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR-Code */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  SEPA-QR-Code für mobile Spende
                </h3>
                <div className="bg-gray-100 rounded-lg p-8 mb-4 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white rounded-lg shadow-inner flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F8421b3ac5f9145bcb19836cc73bc59c8%2Ffd6ec44290db46be87a8616753ccf1ca?format=webp&width=800"
                      alt="SEPA QR-Code für Spenden"
                      className="w-44 h-44 object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Scannen Sie den SEPA-Code mit Ihrer Banking-App und geben Sie den gewünschten Betrag ein
                </p>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-center">
                    <p className="text-sm font-medium text-green-800 mb-1">Bereits eingegangene Spenden:</p>
                    <p className="text-2xl font-bold text-green-600">7.410,26 €</p>
                    <p className="text-xs text-green-600">Stand: 06.03.2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Anmeldung */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Newsletter abonnieren
            </h2>
            <p className="text-xl text-gray-600">
              Bleiben Sie über alle Entwicklungen informiert
            </p>
          </div>

          <form className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Vorname
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ihr Vorname"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachname
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ihr Nachname"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail-Adresse *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ihre.email@beispiel.de"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  Ich stimme zu, dass meine Daten zur Newsletter-Versendung gespeichert werden. 
                  Die Einwilligung kann jederzeit widerrufen werden. *
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Newsletter abonnieren
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Pflichtfelder. Weitere Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-blue-600 hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </form>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Haben Sie Fragen?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Wir helfen Ihnen gerne weiter und beantworten alle Ihre Fragen 
            rund um unser Freibad-Projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              E-Mail schreiben
            </a>
            {contactInfo.phone && (
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Anrufen
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
