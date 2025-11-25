const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Datenschutzerklärung</h1>

        <div className="space-y-8 text-foreground/80">
          
          {/* 1. Datenschutz auf einen Blick */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung [cite: 14-16].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Datenerfassung auf dieser Website</h3>
            <div className="space-y-4">
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen[cite: 19].
              </p>
              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                Daten handeln, die Sie in ein Kontaktformular eingeben [cite: 21-22].
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
                Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
                des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten [cite: 23-25].
              </p>
              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
                Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden [cite: 27-28].
              </p>
              <p>
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu [cite: 30-37].
              </p>
            </div>
          </section>

          {/* 2. Hosting */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Hosting</h2>
            <p className="mb-4">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            
            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Strato</h3>
            <p className="mb-4">
              Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend „Strato“). Wenn Sie unsere
              Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen [cite: 42-43].
            </p>
            <p className="mb-4">
              Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato:{" "}
              <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                https://www.strato.de/datenschutz/
              </a>[cite: 44].
            </p>
            <p className="mb-4">
              Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
              Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
              Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
              Einwilligung ist jederzeit widerrufbar [cite: 45-49].
            </p>
          </section>

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung [cite: 52-53].
            </p>
            <p className="mb-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
              möglich [cite: 58-59].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="mb-4 pl-4 border-l-4 border-foreground/20">
              <p className="font-semibold">R&L</p>
              <p>Leonardo Reinhardt</p>
              <p>Petersberger Straße 20</p>
              <p>36251 Bad Hersfeld</p>
              <br />
              <p>Telefon: +49 15750738409</p>
              <p>E-Mail: info@RLDachreinigung.de</p>
            </div>
            <p className="mb-4 text-sm text-foreground/70">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
              die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
              entscheidet [cite: 67-70].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
              werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe [cite: 72-74].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
            <p className="mb-4">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
              nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
              personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
              49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
              Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
              auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
              Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
              Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
              zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
              Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
              DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
              Absätzen dieser Datenschutzerklärung informiert [cite: 76-83].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Empfänger von personenbezogenen Daten</h3>
            <p className="mb-4">
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
              ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
              Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
              an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
              haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
              Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
              Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
              gemeinsame Verarbeitung geschlossen [cite: 85-90].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt [cite: 92-93].
            </p>

            {/* WICHTIG: Widerspruchsrecht */}
            <div className="my-6 p-4 border border-foreground/20 bg-foreground/5 rounded-md">
              <h3 className="text-lg font-bold mb-2">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
              <p className="text-sm font-medium uppercase mb-2">
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 Lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung.
              </p>
              <p className="text-sm font-medium uppercase mb-2">
                Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
              </p>
              <p className="text-sm font-medium uppercase">
                Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO) [cite: 95-104].
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe [cite: 106-107].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Recht auf Datenübertragbarkeit</h3>
            <p className="mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
              aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist [cite: 109-110].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Auskunft, Berichtigung und Löschung</h3>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
              Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
              zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden [cite: 112-113].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
              folgenden Fällen [cite: 115-116]:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
              <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
            </ul>
            <p className="mb-4">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
              ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
              juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
              eines Mitgliedstaats verarbeitet werden[cite: 126].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
              Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-
              Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden [cite: 128-130].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Widerspruch gegen Werbe-E-Mails</h3>
            <p className="mb-4">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
              nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
              Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor [cite: 132-133].
            </p>
          </section>

          {/* 4. Datenerfassung auf dieser Website */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter [cite: 136-137].
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
              der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
              effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar [cite: 138-141].
            </p>
            <p className="mb-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
              insbesondere Aufbewahrungsfristen – bleiben unberührt [cite: 142-143].
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="mb-4">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
              bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter [cite: 145-146].
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
              der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
              effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar [cite: 147-152].
            </p>
            <p className="mb-4">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt [cite: 153-154].
            </p>
          </section>

          {/* 5. Soziale Medien */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Soziale Medien</h2>
            
            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Social-Media-Elemente mit Shariff</h3>
            <p className="mb-4">
              Auf dieser Website werden Elemente von sozialen Medien verwendet (z. B. Facebook, X, Instagram,
              Pinterest, XING, LinkedIn, Tumblr). Die Social-Media-Elemente können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen [cite: 157-158].
            </p>
            <p className="mb-4">
              Um den Datenschutz auf dieser Website zu gewährleisten, verwenden wir diese Elemente nur zusammen
              mit der sogenannten „Shariff“-Lösung. Diese Anwendung verhindert, dass die auf dieser Website integrierten
              Social-Media-Elemente Ihre personenbezogenen Daten schon beim ersten Betreten der Seite an den
              jeweiligen Anbieter übertragen [cite: 159-160].
            </p>
            <p className="mb-4">
              Erst wenn Sie das jeweilige Social-Media-Element durch Anklicken der zugehörigen Schaltfläche aktivieren,
              wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Social-Media-Element aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse diese
              Website besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z. B. Facebook)
              eingeloggt sind, kann der jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto zuordnen [cite: 161-163].
            </p>
            <p className="mb-4">
              Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TDDDG dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen [cite: 164-165].
            </p>
            <p className="mb-4">
              Der Einsatz des Dienstes erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz
              bestimmter Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO [cite: 166-167].
            </p>
          </section>

          <div className="pt-8 border-t border-foreground/10 text-sm text-foreground/60">
             Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:underline">https://www.e-recht24.de</a> [cite: 169]
          </div>

        </div>
      </div>
    </div>
  );
};

export default Datenschutz;