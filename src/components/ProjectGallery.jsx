import React from "react";
import { ImageIcon } from "lucide-react"; // Star brauchen wir hier nicht zwingend
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 1. Bilder laden (Vite Methode)
const imagesImport = import.meta.glob('@/assets/projekte/*.{png,jpg,jpeg,webp}', { 
  eager: true, 
  query: '?url',
  import: 'default'
});

// Das Array mit den Bildpfaden erstellen
const projectImages = Object.values(imagesImport);

const ProjectGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        
        {/* Header Bereich */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImageIcon className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unsere Projekte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Einblick in unsere aktuellsten Arbeiten.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-7xl mx-auto px-12">
          
          {projectImages.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projectImages.map((imgSrc, index) => (
                  <CarouselItem 
                    key={index} 
                    // Responsive Aufteilung: 1 Bild (Mobile) / 2 (Tablet) / 3 (Desktop)
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="border-0 shadow-md h-full">
                        {/* FIX: aspect-video erzwingt 16:9 Format.
                           Das löst dein Problem mit dem weißen Kasten bei Hochkant-Bildern.
                        */}
                        <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden relative rounded-lg bg-muted">
                          
                          <img
                            src={imgSrc}
                            alt={`Projekt ${index + 1}`}
                            // FIX: object-cover schneidet das Bild passend zu
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          
                          {/* Overlay (optional) */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white font-bold">Projektansicht</p>
                          </div>

                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Pfeile schön positioniert */}
              <CarouselPrevious className="absolute -left-12 h-12 w-12 border-2 hidden md:flex" />
              <CarouselNext className="absolute -right-12 h-12 w-12 border-2 hidden md:flex" />
              
            </Carousel>
          ) : (
            <div className="text-center p-10 border border-dashed rounded-lg">
              <p className="text-muted-foreground">
                Keine Bilder gefunden in <code>src/assets/projekte</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;