import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "./NavLink";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Datenschutz",
        description: "Bitte akzeptieren Sie die Datenschutzerklärung",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns in Kürze bei Ihnen.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
      privacy: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefonnummer *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Adresse *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Welche Leistung benötigen Sie? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1"
                    placeholder="Beschreiben Sie kurz, welche Reinigungsleistung Sie benötigen..."
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, privacy: checked as boolean })
                    }
                  />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                    Ich habe die <NavLink to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</NavLink> zur 
                    Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für 
                    Rückfragen dauerhaft gespeichert werden.
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
                      <p className="text-muted-foreground">+49 (0) 211 1234567</p>
                      <p className="text-muted-foreground">+49 (0) 176 98765432</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">E-Mail</p>
                      <p className="text-muted-foreground">info@dachreinigung.de</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Adresse</p>
                      <p className="text-muted-foreground">Musterstraße 123</p>
                      <p className="text-muted-foreground">40210 Düsseldorf</p>
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
