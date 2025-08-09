import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gotham-black/90 backdrop-blur-md shadow-gotham"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl font-montserrat font-bold text-batman-gold cursor-pointer hover:text-batman-gold-light transition-colors"
            onClick={() => scrollToSection("home")}
          >
            AS
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Portfolio", "CV", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-batman-gold transition-colors duration-300 font-inter font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <Button 
            variant="batman" 
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;