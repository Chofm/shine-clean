import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Michael Schmidt",
    location: "Düsseldorf",
    rating: 5,
    text: "Hervorragende Arbeit! Unser Dach sieht aus wie neu. Sehr professionell und pünktlich.",
    date: "vor 2 Wochen"
  },
  {
    name: "Sandra Müller",
    location: "Köln",
    rating: 5,
    text: "Faire Preise und saubere Ausführung. Die Fassade unseres Hauses erstrahlt wieder. Absolut empfehlenswert!",
    date: "vor 1 Monat"
  },
  {
    name: "Thomas Weber",
    location: "Essen",
    rating: 5,
    text: "Schnelle Terminvereinbarung und gründliche Reinigung unserer Einfahrt. Top Service!",
    date: "vor 3 Wochen"
  },
  {
    name: "Julia Hoffmann",
    location: "Dortmund",
    rating: 5,
    text: "Sehr zufrieden mit der Dachrinnenreinigung. Freundliches Team und faire Festpreise.",
    date: "vor 2 Monaten"
  },
  {
    name: "Klaus Becker",
    location: "Düsseldorf",
    rating: 5,
    text: "Professionelle Solaranlagenreinigung. Die Leistung ist merklich gestiegen. Danke!",
    date: "vor 1 Monat"
  },
  {
    name: "Anna Fischer",
    location: "Bonn",
    rating: 5,
    text: "Rundum zufrieden! Pünktlich, sauber und zu einem fairen Preis. Gerne wieder.",
    date: "vor 3 Wochen"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9/5</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-muted-foreground">
            Über 100+ zufriedene Kunden vertrauen auf unsere Leistungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-muted-foreground">{review.location}</p>
                  </div>
                  <p className="text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
