const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Impressum</h1>
        
        <div className="space-y-6 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Angaben gemäß § 5 TMG</h2>
            <p className="mb-2">Dach- & Gebäudereinigung GmbH</p>
            <p className="mb-2">Musterstraße 123</p>
            <p className="mb-2">40210 Düsseldorf</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Vertreten durch</h2>
            <p>Geschäftsführer: Max Mustermann</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Kontakt</h2>
            <p className="mb-2">Telefon: +49 (0) 211 1234567</p>
            <p className="mb-2">E-Mail: info@dachreinigung.de</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Registereintrag</h2>
            <p className="mb-2">Eintragung im Handelsregister</p>
            <p className="mb-2">Registergericht: Amtsgericht Düsseldorf</p>
            <p className="mb-2">Registernummer: HRB 12345</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p>DE123456789</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="mb-2">Max Mustermann</p>
            <p className="mb-2">Musterstraße 123</p>
            <p>40210 Düsseldorf</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Haftungsausschluss</h2>
            
            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Haftung für Inhalte</h3>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
