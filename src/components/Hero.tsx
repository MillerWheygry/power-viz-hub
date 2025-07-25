import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import circuitBoard from "@/assets/circuit-board.jpg";
import codeMonitor from "@/assets/code-monitor.jpg";
import colorfulCode from "@/assets/colorful-code.jpg";
import macbookCode from "@/assets/macbook-code.jpg";

const Hero = () => {
  const images = [heroImage, circuitBoard, codeMonitor, colorfulCode, macbookCode];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Troca a imagem a cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background images with transition */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 opacity-20 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-pulse">
            <span className="animate-slide-in">Analista de</span>{' '}
            <span className="animate-fade-in animation-delay-300">Dados</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transformo dados em insights valiosos através de visualizações inteligentes e dashboards interativos no Power BI
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contato
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown 
            className="w-8 h-8 text-primary cursor-pointer hover:text-accent transition-colors"
            onClick={scrollToProjects}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;