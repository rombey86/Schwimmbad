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
        <div className="bg-white rounded-xl shadow-sm p-8">
          
          <div className="prose prose-lg max-w-none">
            <p>
              <strong>Dirk Zilz</strong><br />
              Erkelenzer Str. 12<br />
              41372 Niederkrüchten
            </p>

            <p>
              <strong>Telefon:</strong> 02163/49400<br />
              <strong>E-Mail:</strong> dirk.zilz@gmx.de
            </p>

            <h2>Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV):</h2>
            <p>
              Dirk Zilz<br />
              Erkelenzer Str. 12<br />
              41372 Niederkrüchten
            </p>

            <h2>Das Petitionsteam „Rettet das Freibad Niederkrüchten" besteht aus:</h2>
            <p>
              Maik Faßbender, Niederkrüchten<br />
              Hans-Leo van Gansewinkel, Niederkrüchten<br />
              Markus Heinrichs, Niederkrüchten<br />
              Astrid Symansky-Pape, Niederkrüchten<br />
              Michael Willemse, Niederkrüchten<br />
              Susanne Zilz-Rombey, Niederkrüchten
            </p>

            <h2>Das Team Bürgerbegehren besteht aus:</h2>
            <p>
              Justyna Sieben, Niederkrüchten-Elmpt (Initiatorin)<br />
              Guido Buschhüter, Niederkrüchten (Initiator)<br />
              Dr. med. Björn-Casten Schultheis, Niederkrüchten (Initiator)<br />
              Klaus-Robert Vosdellen, Niederkrüchten (Initiator)<br />
              David Steffens, Niederkrüchten-Gützenrath (Initiator)<br />
              Dirk Zilz, Niederkrüchten<br />
              Maik Faßbender, Niederkrüchten-Dam<br />
              Markus Heinrichs, Niederkrüchten<br />
              Susanne Zilz-Rombey, Niederkrüchten
            </p>

            <h2>Disclaimer – rechtliche Hinweise</h2>

            <h3>§ 1 Warnhinweis zu Inhalten</h3>
            <p>
              Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
            </p>

            <h3>§ 2 Externe Links</h3>
            <p>
              Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
            </p>

            <h3>§ 3 Urheber- und Leistungsschutzrechte</h3>
            <p>
              Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
            </p>
            <p>
              Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
            </p>

            <h3>§ 4 Besondere Nutzungsbedingungen</h3>
            <p>
              Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              <strong>Quelle:</strong> Impressum Muster von JuraForum.de
            </p>
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
