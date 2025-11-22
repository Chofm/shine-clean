import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dach- & Gebäudereinigung</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Ihr professioneller Partner für saubere Dächer und Fassaden in der Region.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Schnelllinks</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Leistungen</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Über uns</a></li>
              <li><a href="#kontakt" className="hover:text-secondary-foreground transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Datenschutz</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+49 (0) 211 1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@dachreinigung.de</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="font-semibold mb-1">Öffnungszeiten</p>
              <p className="text-sm text-secondary-foreground/80">Mo-Fr: 07:00 - 18:00</p>
              <p className="text-sm text-secondary-foreground/80">Sa: 08:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Dach- & Gebäudereinigung. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
