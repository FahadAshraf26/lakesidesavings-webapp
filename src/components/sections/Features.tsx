import { Package, RefreshCw, Heart, Star } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Wide Selection",
    description: "Electronics, health & beauty, hardware, toys, confectionery, and so much more under one roof.",
  },
  {
    icon: RefreshCw,
    title: "New Stock Weekly",
    description: "Fresh arrivals and seasonal items added regularly. There's always something new to discover.",
  },
  {
    icon: Heart,
    title: "Local Family Business",
    description: "Proudly serving the Port Dover community since 2014 with care and dedication.",
  },
  {
    icon: Star,
    title: "Unbeatable Prices",
    description: "Quality products at discount prices. Great value for your everyday needs.",
  },
];

const Features = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            The <span className="text-primary">Lakeside</span> Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            More than just a store — we're your neighborhood destination for quality and value
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover-lift text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
