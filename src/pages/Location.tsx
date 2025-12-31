import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Clock, Navigation, Car, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when page loads or hash changes
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#' character
      const scrollToSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100; // Offset for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          return true;
        }
        return false;
      };

      // Try immediately, then retry with small delay if element not found
      const timeoutId = setTimeout(() => {
        if (!scrollToSection()) {
          // Retry once more if element still not found
          setTimeout(scrollToSection, 100);
        }
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [location.hash]);
  const getCurrentDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date().getDay()];
  };

  const isNewYearsDay = (dayName: string) => {
    const today = new Date();
    const month = today.getMonth(); // 0-indexed (0 = January)
    const date = today.getDate();
    const isJan1 = month === 0 && date === 1; // January 1st
    return isJan1 && dayName === getCurrentDay();
  };

  const currentDay = getCurrentDay();

  const storeHours = [
    { day: "Monday", hours: isNewYearsDay("Monday") ? "Closed Holiday" : "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: isNewYearsDay("Tuesday") ? "Closed Holiday" : "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: isNewYearsDay("Wednesday") ? "Closed Holiday" : "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: isNewYearsDay("Thursday") ? "Closed Holiday" : "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: isNewYearsDay("Friday") ? "Closed Holiday" : "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: isNewYearsDay("Saturday") ? "Closed Holiday" : "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: isNewYearsDay("Sunday") ? "Closed Holiday" : "10:00 AM - 5:00 PM" },
  ];

  return (
    <>
      <Helmet>
        <title>Visit Our Store | Lakeside Savings - Port Dover, ON</title>
        <meta
          name="description"
          content="Visit Lakeside Savings at 331 Main St, Port Dover, ON. Open Mon-Sat 9AM-6PM, Sun 10AM-5PM. Get directions and contact info."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
                Find Us
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-6">
                Visit Our <span className="text-accent">Store</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl">
                Located in the heart of Port Dover on Main Street. Come discover great deals on quality products for your home.
              </p>
            </div>
          </div>
        </section>

        {/* Map & Info Section */}
        <section id="location-info" className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Map */}
              <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2927.5834392815986!2d-80.20387232346907!3d42.78763027116143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c7a7c3c0c5555%3A0x1234567890abcdef!2s331%20Main%20St%2C%20Port%20Dover%2C%20ON%20N0A%201N0%2C%20Canada!5e0!3m2!1sen!2sca!4v1703123456789!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lakeside Savings location map"
                />
              </div>

              {/* Info Cards */}
              <div className="lg:col-span-2 space-y-6">
                {/* Address Card */}
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Address</h3>
                      <p className="text-muted-foreground mb-4">
                        331 Main St<br />
                        Port Dover, ON N0A 1N0<br />
                        Canada
                      </p>
                      <Button variant="hero" size="lg" className="group" asChild>
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=331+Main+St+Port+Dover+ON+N0A+1N0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Phone</h3>
                      <a
                        href="tel:519-583-9335"
                        className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        519-583-9335
                      </a>
                      <p className="text-muted-foreground text-sm mt-2">
                        Give us a call for product inquiries
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground">Store Hours</h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {storeHours.map((item) => {
                      const isClosed = item.hours.toLowerCase().includes("closed");
                      return (
                        <div
                          key={item.day}
                          className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                            item.day === currentDay
                              ? "bg-primary/10 text-primary font-semibold"
                              : isClosed
                              ? "bg-destructive/10 text-destructive"
                              : "text-muted-foreground"
                          }`}
                        >
                          <span>{item.day}</span>
                          <span>{item.hours}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Exterior Section */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
                  Welcome
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                  Come Visit <span className="text-primary">Our Store</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Step inside and discover our wide selection of quality products. Our friendly staff is always ready to help you find exactly what you're looking for at unbeatable prices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Located right on Main Street in the heart of Port Dover, we're easy to find and always happy to see you!
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/store-exterior.jpg"
                    alt="Lakeside Savings store exterior on Main Street, Port Dover"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directions Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
                How to Find Us
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
                Getting <span className="text-primary">Here</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-sm text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">By Car</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We're located on Main Street in downtown Port Dover. Free street parking is available nearby. Look for us between the local shops!
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-sm text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">Landmarks</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Located in the heart of Port Dover's shopping district. Easy to spot with our friendly storefront and colorful window displays.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-sm text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">Questions?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Call us at 519-583-9335 if you need help finding us or have any questions about our products. We're always happy to help!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-6">
              We Can't Wait to <span className="text-accent">See You!</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Stop by and discover quality products at unbeatable prices. Our friendly staff is ready to help you find exactly what you need.
            </p>
            <Button variant="gold" size="xl" asChild>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=331+Main+St+Port+Dover+ON+N0A+1N0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-5 h-5" />
                Get Directions Now
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Location;
