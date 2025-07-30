import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Freibad-Website - Informationen zum Umgang mit personenbezogenen Daten',
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-gray-600">
              Informationen zum Umgang mit Ihren personenbezogenen Daten
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none">
          
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            <strong>Dirk Zilz</strong><br />
            Erkelenzer Straße  12<br />
            41372 Niederkrüchten<br />
            E-Mail: dirk.zilz@gmx.de<br />
            Telefon: +49 2163 49400
          </p>

          <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
          
          <h3>2.1 Beim Besuch der Website</h3>
          <p>
            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser 
            automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden 
            temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun 
            erfasst und bis zur automatisierten Löschung gespeichert:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
          </ul>

          <h3>2.2 Newsletter</h3>
          <p>
            Sofern Sie nach Art. 6 Abs. 1 lit. a DSGVO ausdrücklich eingewilligt haben, verwenden wir 
            Ihre E-Mail-Adresse dafür, Ihnen regelmäßig unseren Newsletter zu übersenden. Für den Empfang 
            des Newsletters ist die Angabe einer E-Mail-Adresse ausreichend.
          </p>

          <h3>2.3 Kontaktformular und E-Mail-Kontakt</h3>
          <p>
            Falls Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen 
            angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung 
            und Beantwortung Ihrer Anfrage erforderlich - ohne deren Bereitstellung können wir Ihre Anfrage 
            nicht oder allenfalls eingeschränkt beantworten.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser 
            bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden.
          </p>

          <h3>3.1 Notwendige Cookies</h3>
          <p>
            Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. 
            Sie werden normalerweise nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer 
            Dienstanforderung entsprechen.
          </p>

          <h3>3.2 Analyse-Cookies</h3>
          <p>
            Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung 
            unserer Website messen und verbessern können. Sie helfen uns zu wissen, welche Seiten am beliebtesten 
            und welche am wenigsten beliebt sind.
          </p>

          <h3>3.3 Marketing-Cookies</h3>
          <p>
            Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können von 
            diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante 
            Anzeigen auf anderen Websites zu zeigen.
          </p>

          <h2>4. Rechtsgrundlage für die Datenverarbeitung</h2>
          <p>
            Art. 6 Abs. 1 lit. a DSGVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, 
            bei denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung 
            personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, 
            erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung 
            von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht 
            die Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO.
          </p>

          <h2>5. Ihre Rechte</h2>
          <p>Sie haben folgende Rechte:</p>
          <ul>
            <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
            <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
            <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
            <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
            <li><strong>Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</strong> (Art. 7 Abs. 3 DSGVO)</li>
            <li><strong>Beschwerderecht bei der Aufsichtsbehörde</strong> (Art. 77 DSGVO)</li>
          </ul>

          <h2>6. Dauer der Speicherung</h2>
          <p>
            Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr 
            erforderlich sind. Für die personenbezogenen Daten aus der Eingabemaske des Kontaktformulars und 
            diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Konversation 
            mit dem Nutzer beendet ist.
          </p>

          <h2>7. Widerspruchs- und Beseitigungsmöglichkeit</h2>
          <p>
            Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der personenbezogenen 
            Daten zu widerrufen. Nimmt der Nutzer per E-Mail Kontakt mit uns auf, so kann er der Speicherung 
            seiner personenbezogenen Daten jederzeit widersprechen.
          </p>

          <h2>8. SSL-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, 
            wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. 
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &apos;http://&apos; 
            auf &apos;https://&apos; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>

          <h2>9. Änderungen der Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
            Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, 
            z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>

          <h2>10. Kontakt</h2>
          <p>
            Fragen zu dieser Datenschutzerklärung richten Sie bitte an:
          </p>
          <p>
            <strong>E-Mail:</strong> datenschutz@freibad-schwimmbad.de<br />
            <strong>Telefon:</strong> +49 123 456789
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Stand:</strong> Januar 2024
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