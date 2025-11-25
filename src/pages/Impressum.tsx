const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Impressum</h1>
        
        <div className="space-y-8 text-foreground/80">
          
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Angaben gemäß § 5 TMG</h2>
            <p className="mb-1">Leonardo Reinhardt</p>
            <p className="mb-1">R&L</p>
            <p className="mb-1">Petersberger Straße 20</p>
            <p>36251 Bad Hersfeld [cite: 12-14]</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Kontakt</h2>
            <p className="mb-2">Telefon: +4915750738409</p>
            <p>E-Mail: info@RLDachreinigung.de [cite: 16-17]</p>
          </section>

   
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen[cite: 21].
            </p>
          </section>

          <div className="pt-8 border-t border-foreground/10 text-sm text-foreground/60">
             Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:underline">https://www.e-recht24.de</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Impressum;