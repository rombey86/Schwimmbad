import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben der Freibad-Website',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Impressum
            </h1>
            <p className="text-xl text-gray-600">
              Rechtliche Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">

          <div className="p-8 space-y-8">
            {/* Kontakt */}
            <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-lg font-bold text-gray-900 mb-4">Impressum</div>
              <div className="text-gray-800 space-y-2">
                <div className="font-semibold text-gray-900">Dirk Zilz</div>
                <div>Erkelenzer Str. 12</div>
                <div>41372 Niederkrüchten</div>
              </div>

              <div className="mt-4 text-gray-800 space-y-1">
                <div><span className="font-semibold">Telefon:</span> 02163/49400</div>
                <div><span className="font-semibold">E-Mail:</span> dirk.zilz@gmx.de</div>
              </div>
            </section>

            {/* Verantwortlich */}
            <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV):</h2>
              <div className="text-gray-800 space-y-1 ml-4">
                <div className="font-semibold">Dirk Zilz</div>
                <div>Erkelenzer Str. 12</div>
                <div>41372 Niederkrüchten</div>
              </div>
            </section>

            {/* Petitionsteam */}
            <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Das Petitionsteam „Rettet das Freibad Niederkrüchten" besteht aus:</h2>
              <div className="text-gray-800 space-y-2 ml-4">
                <div>• Maik Faßbender, Niederkrüchten</div>
                <div>• Hans-Leo van Gansewinkel, Niederkrüchten</div>
                <div>• Markus Heinrichs, Niederkrüchten</div>
                <div>• Astrid Symansky-Pape, Niederkrüchten</div>
                <div>• Michael Willemse, Niederkrüchten</div>
                <div>• Susanne Zilz-Rombey, Niederkrüchten</div>
              </div>
            </section>

            {/* Bürgerbegehren Team */}
            <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Das Team Bürgerbegehren besteht aus:</h2>
              <div className="text-gray-800 space-y-2 ml-4">
                <div>• Justyna Sieben, Niederkrüchten-Elmpt <span className="text-sm text-gray-600">(Initiatorin)</span></div>
                <div>• Guido Buschhüter, Niederkrüchten <span className="text-sm text-gray-600">(Initiator)</span></div>
                <div>• Dr. med. Björn-Casten Schultheis, Niederkrüchten <span className="text-sm text-gray-600">(Initiator)</span></div>
                <div>• Klaus-Robert Vosdellen, Niederkrüchten <span className="text-sm text-gray-600">(Initiator)</span></div>
                <div>• David Steffens, Niederkrüchten-Gützenrath <span className="text-sm text-gray-600">(Initiator)</span></div>
                <div>• Dirk Zilz, Niederkrüchten</div>
                <div>• Maik Faßbender, Niederkrüchten-Dam</div>
                <div>• Markus Heinrichs, Niederkrüchten</div>
                <div>• Susanne Zilz-Rombey, Niederkrüchten</div>
              </div>
            </section>

            {/* Rechtliche Hinweise */}
            <section className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Disclaimer – rechtliche Hinweise</h2>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 1 Warnhinweis zu Inhalten</h3>
                  <p className="text-gray-800 leading-relaxed ml-4">
                    Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 2 Externe Links</h3>
                  <p className="text-gray-800 leading-relaxed ml-4">
                    Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 3 Urheber- und Leistungsschutzrechte</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>
                      Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
                    </p>
                    <p>
                      Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 4 Besondere Nutzungsbedingungen</h3>
                  <p className="text-gray-800 leading-relaxed ml-4">
                    Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
                  </p>
                </div>
              </div>
            </section>

            {/* Quelle */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Quelle:</span> Impressum Muster von JuraForum.de
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
