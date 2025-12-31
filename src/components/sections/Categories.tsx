import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    image: "/images/electronics.png",
    href: "/shop?category=Electronics",
  },
  {
    name: "Health & Beauty",
    image: "/images/health-beauty.png",
    href: "/shop?category=Health%20%26%20Beauty",
  },
  {
    name: "Hardware",
    image: "/images/hardware.png",
    href: "/shop?category=Hardware",
  },
  {
    name: "Houseware",
    image: "/images/houseware.png",
    href: "/shop?category=Houseware",
  },
  {
    name: "Kitchen & Cleaning",
    image: "/images/kitchen-cleaning.png",
    href: "/shop?category=Kitchen%2FCleaning%20Supplies",
  },
  {
    name: "Stationary & Craft",
    image: "/images/stationary-craft.png",
    href: "/shop?category=Stationary%2FCraft",
  },
  {
    name: "Toys",
    image: "/images/toys.png",
    href: "/shop?category=Toys",
  },
  {
    name: "Confectionery",
    image: "/images/confectionery.png",
    href: "/shop?category=Confectionery",
  },
  {
    name: "Party Supplies",
    image: "/images/party-supplies.png",
    href: "/shop?category=Party%20Supplies",
  },
  {
    name: "Seasonal",
    image: "/images/seasonal.png",
    href: "/shop?category=Seasonal",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Shop by Category
          </span> */}
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            Browse Our <span className="text-primary">Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide selection of quality products organized for your
            convenience
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div className="group relative rounded-2xl overflow-hidden bg-card shadow-sm hover-lift border border-border/50">
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-card font-semibold">
                    {category.name}
                  </h3>
                  {/* <ArrowRight className="w-5 h-5 text-card opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
