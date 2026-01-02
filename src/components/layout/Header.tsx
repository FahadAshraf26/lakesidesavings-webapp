import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section with offset for fixed header
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle navigation to sections
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
    setIsMobileMenuOpen(false);
  };

  type NavLink =
    | { name: string; href: string; type: "route" }
    | { name: string; href: string; type: "section"; sectionId: string };

  // Handle home navigation - scroll to top if already on home page
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/", type: "route" },
    {
      name: "Categories",
      href: "#categories",
      type: "section",
      sectionId: "categories",
    },
    { name: "About", href: "#about", type: "section", sectionId: "about" },
    { name: "Location", href: "/location", type: "route" },
  ];

  // Determine if header should be transparent (only on home page at top)
  const isTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent py-5"
          : "bg-card/95 backdrop-blur-lg shadow-md py-3"
      }`}
    >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-primary-foreground font-serif text-xl">
                  L
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-xl font-bold transition-colors duration-300 ${
                    isTransparent
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  Lakeside
                </span>
                <span
                  className={`text-xs tracking-wider uppercase transition-colors duration-300 ${
                    isTransparent
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  Savings
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = link.href === location.pathname;

                if (link.type === "section") {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSectionClick(e, link.sectionId)}
                      className={`relative font-medium transition-colors duration-300 hover:text-primary cursor-pointer ${
                        isTransparent
                          ? "text-primary-foreground"
                          : "text-foreground"
                      } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
                    >
                      {link.name}
                    </a>
                  );
                } else if (link.name === "Home") {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={handleHomeClick}
                      className={`relative font-medium transition-colors duration-300 hover:text-primary ${
                        isTransparent
                          ? "text-primary-foreground"
                          : "text-foreground"
                      } ${
                        isActive ? "text-primary" : ""
                      } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                        isActive ? "after:w-full" : "after:w-0"
                      } hover:after:w-full`}
                    >
                      {link.name}
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`relative font-medium transition-colors duration-300 hover:text-primary ${
                        isTransparent
                          ? "text-primary-foreground"
                          : "text-foreground"
                      } ${
                        isActive ? "text-primary" : ""
                      } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                        isActive ? "after:w-full" : "after:w-0"
                      } hover:after:w-full`}
                    >
                      {link.name}
                    </Link>
                  );
                }
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:519-583-9335"
                className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                  isTransparent
                    ? "text-primary-foreground/80 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>519-583-9335</span>
              </a>
              <Button
                variant={isTransparent ? "heroOutline" : "hero"}
                size="lg"
                asChild
              >
                <Link to="/location#location-info">
                  <MapPin className="w-4 h-4" />
                  Visit Store
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isTransparent ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col gap-2 pb-4">
              {navLinks.map((link) => {
                if (link.type === "section") {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSectionClick(e, link.sectionId)}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                        isTransparent
                          ? "text-primary-foreground hover:bg-primary-foreground/10"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                } else if (link.name === "Home") {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={handleHomeClick}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        isTransparent
                          ? "text-primary-foreground hover:bg-primary-foreground/10"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        isTransparent
                          ? "text-primary-foreground hover:bg-primary-foreground/10"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                }
              })}
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <Link to="/location#location-info" onClick={() => setIsMobileMenuOpen(false)}>
                  <MapPin className="w-4 h-4" />
                  Visit Store
                </Link>
              </Button>
            </nav>
          </div>
        </div>
    </header>
  );
};

export default Header;
