import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/gotham-hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gotham-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-montserrat font-black text-foreground mb-6 leading-tight">
          ARPAN 
          <span className="text-batman-gold block animate-glow-pulse">SAMANTA</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-inter font-medium text-muted-foreground mb-4">
          Data Scientist & ML Engineer
        </p>
        
        <p className="text-lg font-inter text-batman-gold mb-8 max-w-2xl mx-auto">
          Turning Data Into Actionable Insights
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection("portfolio")}
          >
            View My Work
          </Button>
          <Button 
            variant="batman" 
            size="xl"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown 
          className="w-8 h-8 text-batman-gold cursor-pointer hover:text-batman-gold-light transition-colors"
          onClick={() => scrollToSection("about")}
        />
      </div>
    </section>
  );
};

export default Hero;