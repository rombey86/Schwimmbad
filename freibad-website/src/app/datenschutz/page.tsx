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
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">

          <div className="p-8 space-y-8">
            {/* Allgemeine Hinweise */}
            <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Allgemeine Hinweise</h2>
              <p className="text-gray-800 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </section>

            {/* Datenerfassung */}
            <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Datenerfassung auf unserer Website</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p className="text-gray-800 leading-relaxed ml-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Wie erfassen wir Ihre Daten?</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                    <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Wofür nutzen wir Ihre Daten?</h3>
                  <p className="text-gray-800 leading-relaxed ml-4">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                  <p className="text-gray-800 leading-relaxed ml-4">
                    Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                </div>
              </div>
            </section>

            {/* Analyse-Tools */}
            <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Analyse-Tools und Tools von Drittanbietern</h2>
              <div className="text-gray-800 leading-relaxed space-y-3">
                <p>
                  Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung.
                </p>
                <p>
                  Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.
                </p>
              </div>
            </section>

            {/* Allgemeine Hinweise und Pflichtinformationen */}
            <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Allgemeine Hinweise und Pflichtinformationen</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Datenschutz</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                    <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
                    <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <div className="bg-white p-4 rounded border">
                      <div className="font-semibold">Dirk Zilz</div>
                      <div className="mt-2">E-Mail: info@rettet-das-freibad-niederkruechten.de</div>
                    </div>
                    <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
                  <p className="text-gray-800 leading-relaxed ml-4">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Auskunft, Sperrung, Löschung</h3>
                  <p className="text-gray-800 leading-relaxed ml-4">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                </div>
              </div>
            </section>

            {/* Datenerfassung auf unserer Website */}
            <section className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Datenerfassung auf unserer Website</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>
                    <p>Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>
                    <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
                    <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Browsertyp und Browserversion</li>
                      <li>verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                    <p>Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontaktformular</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                    <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
                    <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Soziale Medien */}
            <section className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Soziale Medien</h2>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Facebook-Plugins (Like & Share-Button)</h3>
                <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                  <p>Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California 94025, USA, integriert. Die Facebook-Plugins erkennen Sie an dem Facebook-Logo oder dem „Like-Button" („Gefällt mir") auf unserer Seite. Eine Übersicht über die Facebook-Plugins finden Sie hier: https://developers.facebook.com/docs/plugins/.</p>
                  <p>Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook „Like-Button" anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter: https://de-de.facebook.com/policy.php.</p>
                  <p>Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.</p>
                </div>
              </div>
            </section>

            {/* Newsletter */}
            <section className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Newsletter</h2>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Newsletterdaten</h3>
                <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                  <p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.</p>
                  <p>Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den „Austragen"-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
                  <p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden (z.B. E-Mail-Adressen für den Mitgliederbereich) bleiben hiervon unberührt.</p>
                </div>
              </div>
            </section>

            {/* Plugins und Tools */}
            <section className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Plugins und Tools</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">YouTube</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.</p>
                    <p>Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.</p>
                    <p>Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.</p>
                    <p>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p>
                    <p>Weitere Informationen zum Umgang von Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: https://www.google.de/intl/de/policies/privacy</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Analytics</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Wenn der Verantwortlicher für die Datenverarbeitung auf dieser Website außerhalb des Europäischen Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google Analytics Datenverarbeitung durch Google LLC. Google LLC und Google Ireland Limited werden nachfolgend „Google" genannt.</p>
                    <p>Google Analytics verwendet sog. „Cookies", Textdateien, die auf dem Computer des Seitenbesuchers gespeichert werden und die eine Analyse der Benutzung der Website durch den Seitenbesucher ermöglichen. Die durch das Cookie erzeugten Informationen über die Benutzung dieser Website durch den Seitenbesucher (einschließlich der gekürzten IP-Adresse) werden in der Regel an einen Server von Google übertragen und dort gespeichert.</p>
                    <p>Google Analytics wird ausschließlich mit der Erweiterung „_anonymizeIp()" auf dieser Website verwendet. Diese Erweiterung stellt eine Anonymisierung der IP-Adresse durch Kürzung sicher und schließt eine direkte Personenbeziehbarkeit aus. Durch die Erweiterung wird die IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.</p>
                    <p>Google LLC. ist nach dem sog. Privacy Shield zertifiziert und gewährleistet auf dieser Basis ein angemessenes Datenschutzniveau. Die gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 50 Monaten automatisch gelöscht.</p>
                    <p>Die Erfassung durch Google Analytics kann verhindert werden, indem der Seitenbesucher die Cookie-Einstellungen für diese Website anpasst. Weitere Informationen zur Datennutzung durch Google finden sich in der Datenschutzerklärung von Google (https://policies.google.com/privacy).</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">reCAPTCHA</h3>
                  <div className="text-gray-800 leading-relaxed ml-4 space-y-3">
                    <p>Zum Schutz Ihrer Anfragen per Internetformular verwenden wir den Dienst reCAPTCHA des Unternehmens Google Inc. (Google). Die Abfrage dient der Unterscheidung, ob die Eingabe durch einen Menschen oder missbräuchlich durch automatisierte, maschinelle Verarbeitung erfolgt. Die Abfrage schließt den Versand der IP-Adresse und ggf. weiterer von Google für den Dienst reCAPTCHA benötigter Daten an Google ein.</p>
                    <p>Zu diesem Zweck wird Ihre Eingabe an Google übermittelt und dort weiter verwendet. Ihre IP-Adresse wird von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.</p>
                    <p>Für diese Daten gelten die abweichenden Datenschutzbestimmungen des Unternehmens Google. Weitere Informationen zu den Datenschutzrichtlinien von Google finden Sie unter: https://policies.google.com/privacy?hl=de</p>
                  </div>
                </div>
              </div>
            </section>
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
