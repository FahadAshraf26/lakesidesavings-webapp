import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Lakeside Savings store interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Family-Owned Since 2014</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground mb-6 animate-fade-up delay-100">
            Quality Products
            <br />
            <span className="text-accent">for Your Home</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl animate-fade-up delay-200">
            Discover our selection of electronics, hardware, houseware, toys, confectionery, and seasonal items at unbeatable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300">
            <Button variant="gold" size="xl" asChild>
              <Link to="/location">
                <MapPin className="w-5 h-5" />
                Visit Our Store
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#categories">Browse Categories</a>
            </Button>
          </div>

          {/* Store Info Cards */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground text-sm">331 Main St, Port Dover, ON</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground text-sm">Mon-Sat: 9-6 | Sun: 10-5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-primary-foreground/60 text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
