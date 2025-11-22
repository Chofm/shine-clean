import { Award, Wrench, BadgeEuro, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Über 10 Jahre Erfahrung",
    description: "Langjährige Expertise in der professionellen Gebäudereinigung"
  },
  {
    icon: Wrench,
    title: "Professionelle Geräte",
    description: "Modernste Reinigungstechnik und hochwertige Reinigungsmittel"
  },
  {
    icon: BadgeEuro,
    title: "Festpreisangebot",
    description: "Transparente Preise ohne versteckte Kosten"
  },
  {
    icon: Clock,
    title: "Schnelle Termine",
    description: "Flexible Terminplanung nach Ihren Wünschen"
  }
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Warum wir?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Ihr zuverlässiger Partner für professionelle Reinigungsleistungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
