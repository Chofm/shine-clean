import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold text-foreground">
            Dach- & Gebäudereinigung
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Startseite
            </NavLink>
            <a 
              href="/#leistungen" 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Leistungen
            </a>
            <a 
              href="/#galerie" 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Galerie
            </a>
            <a 
              href="/#kontakt" 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Kontakt
            </a>
            <NavLink 
              to="/impressum" 
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Impressum
            </NavLink>
            <NavLink 
              to="/datenschutz" 
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Datenschutz
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <NavLink 
                to="/" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                activeClassName="text-foreground font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Startseite
              </NavLink>
              <a 
                href="/#leistungen" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Leistungen
              </a>
              <a 
                href="/#galerie" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Galerie
              </a>
              <a 
                href="/#kontakt" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </a>
              <NavLink 
                to="/impressum" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                activeClassName="text-foreground font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Impressum
              </NavLink>
              <NavLink 
                to="/datenschutz" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                activeClassName="text-foreground font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Datenschutz
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
