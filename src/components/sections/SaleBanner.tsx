import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Percent, MapPin } from "lucide-react";

interface PromotionalSlide {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  discount: string;
  image: string;
  imageAlt: string;
}

const promotionalSlides: PromotionalSlide[] = [
  {
    id: "new-year",
    badge: "New Arrivals",
    title: "Happy New Year",
    highlight: "Port Dover",
    description:
      "Ring in the new year with our festive collection! Party supplies, decorations, and celebration essentials are now available in store.",
    discount: "New",
    image: "/images/new-year.jpeg",
    imageAlt: "New Year party supplies and decorations",
  },
  {
    id: "christmas",
    badge: "Clearance Sale",
    title: "Christmas Clearance",
    highlight: "50% Off Everything",
    description:
      "Stock up for next year! All Christmas decorations, ornaments, lights, and seasonal essentials are now 50% off while supplies last.",
    discount: "50%",
    image: "/images/seasonal.png",
    imageAlt: "Christmas decorations on sale",
  },
];

const SaleBanner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Update current slide index and setup autoplay
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Autoplay: scroll to next slide every 5 seconds
    const autoplayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // If we're at the end, loop back to the beginning
        api.scrollTo(0);
      }
    }, 5000); // 5 seconds

    return () => {
      api.off("select", handleSelect);
      clearInterval(autoplayInterval);
    };
  }, [api]);

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {promotionalSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
                  {/* Image */}
                  <div className="relative order-2 md:order-1">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="w-full h-auto object-cover"
                      />
                      {/* Discount Badge */}
                      <div className="absolute top-6 right-6 w-24 h-24 bg-accent rounded-full flex flex-col items-center justify-center shadow-lg animate-float">
                        <span className="text-2xl font-bold text-accent-foreground">
                          {slide.discount}
                        </span>
                        {slide.discount !== "New" && (
                          <span className="text-xs font-semibold text-accent-foreground uppercase">
                            Off
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="order-1 md:order-2 text-center md:text-left px-4 md:px-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                      {slide.badge === "Clearance Sale" && (
                        <Percent className="w-4 h-4 text-accent" />
                      )}
                      <span className="text-sm font-medium text-primary-foreground">
                        {slide.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-primary-foreground mb-4">
                      {slide.title}
                      <br />
                      <span className="text-accent">{slide.highlight}</span>
                    </h2>

                    <p className="text-base sm:text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto md:mx-0">
                      {slide.description}
                    </p>

                    <Button variant="gold" size="xl" className="group" asChild>
                      <Link to="/location#location-info">
                        <MapPin className="w-5 h-5" />
                        Visit Store
                      </Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - positioned inside container */}
          <CarouselPrevious className="hidden lg:flex left-4 text-primary-foreground bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20" />
          <CarouselNext className="hidden lg:flex right-4 text-primary-foreground bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20" />

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {promotionalSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-accent"
                    : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SaleBanner;
