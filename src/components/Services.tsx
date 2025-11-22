import { Home, Building2, Grid3x3, Sun, Droplets, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Dachreinigung",
    description: "Professionelle Reinigung und Pflege Ihres Daches für langanhaltenden Schutz."
  },
  {
    icon: Building2,
    title: "Fassadenreinigung",
    description: "Schonende und gründliche Reinigung für alle Fassadenarten."
  },
  {
    icon: Grid3x3,
    title: "Pflasterreinigung",
    description: "Ihre Außenflächen erstrahlen wieder in neuem Glanz."
  },
  {
    icon: Sun,
    title: "Solaranlagen-Reinigung",
    description: "Optimale Leistung durch regelmäßige, fachgerechte Reinigung."
  },
  {
    icon: Droplets,
    title: "Dachrinnenreinigung",
    description: "Freie Abläufe für perfekten Regenwasserabfluss."
  },
  {
    icon: Sparkles,
    title: "Graffitientfernung",
    description: "Schnelle und rückstandslose Entfernung unerwünschter Graffiti."
  }
];

const Services = () => {
  return (
    <section id="leistungen" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten Ihnen ein komplettes Spektrum an professionellen Reinigungsdienstleistungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
