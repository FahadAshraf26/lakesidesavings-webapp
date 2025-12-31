import { Link, useLocation, useNavigate } from "react-router-dom";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // All categories matching the Categories component
  const categories = [
    "Electronics",
    "Health & Beauty",
    "Hardware",
    "Houseware",
    "Kitchen & Cleaning",
    "Stationary & Craft",
    "Toys",
    "Confectionery",
    "Party Supplies",
    "Seasonal",
  ];

  // Handle scroll to section with offset for fixed header
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle section navigation (similar to Header)
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (isHomePage) {
      // If already on home page, scroll to section
      scrollToSection(sectionId);
    } else {
      // If not on home page, navigate to home with hash, which will trigger scroll in Index component
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl">
                  L
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-card">
                  Lakeside
                </span>
                <span className="text-xs tracking-wider uppercase text-card/60">
                  Savings
                </span>
              </div>
            </div>
            <p className="text-card/70 text-sm leading-relaxed mb-6">
              Your neighborhood destination for quality products at unbeatable
              prices. Family-owned and proudly serving Port Dover since 2014.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/17obWYqyyU/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5 text-card" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-card mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-card/70 hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href={isHomePage ? "#categories" : "/#categories"}
                  onClick={(e) => handleSectionClick(e, "categories")}
                  className="text-card/70 hover:text-primary transition-colors text-sm"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href={isHomePage ? "#about" : "/#about"}
                  onClick={(e) => handleSectionClick(e, "about")}
                  className="text-card/70 hover:text-primary transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  to="/location"
                  className="text-card/70 hover:text-primary transition-colors text-sm"
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg text-card mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href={isHomePage ? "#categories" : "/#categories"}
                    onClick={(e) => handleSectionClick(e, "categories")}
                    className="text-card/70 hover:text-primary transition-colors text-sm"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-card mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-card/70 text-sm">
                  331 Main St, Port Dover, ON N0A 1N0
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:519-583-9335"
                  className="text-card/70 hover:text-primary transition-colors text-sm"
                >
                  519-583-9335
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-card/70 text-sm">
                  <p>Mon-Sat: 9 AM - 6 PM</p>
                  <p>Sun: 10 AM - 5 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-card/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/50 text-sm">
              © {currentYear} Lakeside Savings. All rights reserved.
            </p>
            <p className="text-card/50 text-sm">
              Serving Port Dover with pride since 2014
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
