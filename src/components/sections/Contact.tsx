import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map / Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2927.5834392815986!2d-80.20387232346907!3d42.78763027116143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c7a3d6f2a3c27%3A0x6e3b7c1a8b9c4d2f!2s331%20Main%20St%2C%20Port%20Dover%2C%20ON%20N0A%201N0!5e0!3m2!1sen!2sca!4v1703123456789!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lakeside Savings location"
            />
          </div>

          {/* Contact Info */}
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              Come See Our <span className="text-primary">Store</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg">
              Located in the heart of Port Dover, we're easy to find and always happy to help you discover great deals.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">331 Main St, Port Dover, ON N0A 1N0</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a href="tel:519-583-9335" className="text-muted-foreground hover:text-primary transition-colors">
                    519-583-9335
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground">Mon-Sat: 9 AM - 6 PM</p>
                  <p className="text-muted-foreground">Sun: 10 AM - 5 PM</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="xl" className="group" asChild>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=331+Main+St+Port+Dover+ON+N0A+1N0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
