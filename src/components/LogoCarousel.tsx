
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import logos
import fmohLogo from "@/assets/logos/fmoh.png";
import sonLogo from "@/assets/logos/son.png";
import petadLogo from "@/assets/logos/petad.png";
import nhiaLogo from "@/assets/logos/nhia.png";
import nnpcLogo from "@/assets/logos/nnpc.png";

const logos = [
  { src: fmohLogo, alt: "FMOH" },
  { src: sonLogo, alt: "SON" },
  { src: petadLogo, alt: "PETAD" },
  { src: nhiaLogo, alt: "NHIA" },
  { src: nnpcLogo, alt: "NNPC" },
];

const LogoCarousel = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-muted-foreground">
          Trusted by Leading Organizations
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-4 bg-white rounded-lg shadow-md h-32 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-20 object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LogoCarousel;
