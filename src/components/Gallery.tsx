import beforeRoof from "@/assets/before-roof-1.jpg";
import afterRoof from "@/assets/after-roof-1.jpg";
import beforePaving from "@/assets/before-paving-1.jpg";
import afterPaving from "@/assets/after-paving-1.jpg";
import beforeFacade from "@/assets/before-facade-1.jpg";
import afterFacade from "@/assets/after-facade-1.jpg";

const Gallery = () => {
  const images = [
    { before: beforeRoof, after: afterRoof, label: "Dachreinigung" },
    { before: beforePaving, after: afterPaving, label: "Pflasterreinigung" },
    { before: beforeFacade, after: afterFacade, label: "Fassadenreinigung" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Echte Ergebnisse unserer Arbeit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von der Qualität unserer Reinigungsleistungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((item, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                {item.label}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-md text-sm font-semibold z-10">
                    Vorher
                  </div>
                  <img 
                    src={item.before} 
                    alt={`Vorher ${item.label}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold z-10">
                    Nachher
                  </div>
                  <img 
                    src={item.after} 
                    alt={`Nachher ${item.label}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
