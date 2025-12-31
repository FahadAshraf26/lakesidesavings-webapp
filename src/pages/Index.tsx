import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import SaleBanner from "@/components/sections/SaleBanner";
import Features from "@/components/sections/Features";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
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

  return (
    <>
      <Helmet>
        <title>Lakeside Savings | Quality Products for Your Home - Port Dover, ON</title>
        <meta
          name="description"
          content="Discover quality electronics, hardware, houseware, toys, and seasonal items at Lakeside Savings. Family-owned store in Port Dover since 2014. Visit us today!"
        />
        <meta
          name="keywords"
          content="Lakeside Savings, Port Dover store, discount store, electronics, hardware, houseware, toys, confectionery, seasonal items, family business"
        />
        <link rel="canonical" href="https://lakesidesavings.ca/" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Categories />
          <SaleBanner />
          <Features />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
