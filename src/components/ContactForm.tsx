import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NavLink } from "./NavLink";

const ContactForm: React.FC = () => {
  // Einfacher Status aus Query-Param, falls send.php mit ?success=1 / ?error=1 zurückkommt
  let status: "idle" | "success" | "error" = "idle";
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "1") status = "success";
    if (params.get("error") === "1") status = "error";
  }

  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-lg text-muted-foreground">
              Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an
            </p>
          </div>

          {status === "success" && (
            <div className="mb-8 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
            </div>
          )}

          {status === "error" && (
            <div className="mb-8 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
              Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut
              oder kontaktieren Sie uns telefonisch.
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* Klassisches POST-Formular an send.php */}
              <form action="/send.php" method="POST" className="space-y-6" noValidate>
                {/* Honeypot-Feld gegen Bots */}
                <div className="hidden">
                  <Label htmlFor="company">Firma</Label>
                  <Input
                    id="company"
                    name="honeypot"
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="mt-1"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefonnummer *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-1"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Adresse *</Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    className="mt-1"
                    autoComplete="street-address"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Welche Leistung benötigen Sie? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1"
                    placeholder="Beschreiben Sie kurz, welche Reinigungsleistung Sie benötigen..."
                  />
                </div>

                <div className="flex items-start gap-2">
                  {/* Normale Checkbox, kein fancy JS nötig */}
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border border-input text-primary"
                  />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                    Ich habe die{" "}
                    <NavLink to="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </NavLink>{" "}
                    zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur
                    Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Anfrage senden
                </Button>
              </form>
            </div>

            {/* Rechte Seite: Kontaktinfos */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Kontaktinformationen
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Telefon</p>
                      <p className="text-muted-foreground">+49 15750738409</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">E-Mail</p>
                      <p className="text-muted-foreground">info@RLdachreinigung.de</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Adresse</p>
                      <p className="text-muted-foreground">Petersberger Straße 20</p>
                      <p className="text-muted-foreground">36251 Bad Hersfeld</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Öffnungszeiten</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Montag - Freitag</span>
                    <span className="font-semibold">07:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span className="font-semibold">08:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag</span>
                    <span className="font-semibold">Geschlossen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
