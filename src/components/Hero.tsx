import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roof-cleaning.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Professionelle Dach- & Gebäudereinigung
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Zuverlässig, gründlich, regional
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            Wir bringen Ihr Objekt wieder zum Strahlen. Dach, Fassade, Pflaster – alles aus einer Hand.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Jetzt kostenlosen Kostenvoranschlag sichern
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
