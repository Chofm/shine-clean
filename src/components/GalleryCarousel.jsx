"use client"; // Wichtig für Next.js, damit Animationen funktionieren

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function GalleryCarousel({ imagePaths }) {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {imagePaths.map((path, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 h-full">
                <Card className="h-full overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 aspect-[4/3] relative group">
                    <img
                      src={path}
                      alt={`Projekt ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Optionales Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Projektansicht
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}