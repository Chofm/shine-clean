import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RLDachreinigung</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Ihr professioneller Partner für saubere Dächer und Fassaden in der Region Bad Hersfeld.
            </p>
           
          </div>

          <div>
            <h4 className="font-bold mb-4">Schnelllinks</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="/#leistungen" className="hover:text-secondary-foreground transition-colors">Leistungen</a></li>
              <li><a href="/#warum-wir" className="hover:text-secondary-foreground transition-colors">Über uns</a></li>
              <li><a href="/#kontakt" className="hover:text-secondary-foreground transition-colors">Kontakt</a></li>
              <li><NavLink to="/impressum" className="hover:text-secondary-foreground transition-colors">Impressum</NavLink></li>
              <li><NavLink to="/datenschutz" className="hover:text-secondary-foreground transition-colors">Datenschutz</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+4915750738409" className="hover:text-secondary-foreground transition-colors">+49 (0) 15750738409</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@dachreinigung.de" className="hover:text-secondary-foreground transition-colors">info@RLDachreinigung.de</a>
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
          <p>&copy; {new Date().getFullYear()} RLDachreinigung. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
