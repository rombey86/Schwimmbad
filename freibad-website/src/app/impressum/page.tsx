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
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Rettet das Freibad Niederkrüchten</strong><br />
              Erkelenzer Straße 12<br />
              41372 Niederkrüchten<br />
              Deutschland
            </p>

            <h2>Vertreten durch</h2>
            <p>
              <strong>Dirk Zilz</strong>
            </p>

            <h2>Kontakt</h2>
            <p>
              <strong>Telefon:</strong> +49 2163 49400<br />
              <strong>E-Mail:</strong> dirk.zilz@gmx.de<br />
              <strong>Website:</strong> https://www.rettet-das-freibad-niederkruechten.de/
            </p>


            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Dirk Zilz<br />
              Erklenenzer Straße 12<br />
              41372 Niederkrüchten
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
              an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
              Links umgehend entfernen.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

            <h2>Bildnachweise</h2>
            <p>
              Die auf dieser Website verwendeten Bilder stammen aus eigenen Aufnahmen des Freibads oder sind 
              lizenzfrei. Sollten dennoch Urheberrechte verletzt worden sein, bitten wir um entsprechende 
              Mitteilung, damit wir die entsprechenden Bilder entfernen können.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Stand:</strong> Januar 2024
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