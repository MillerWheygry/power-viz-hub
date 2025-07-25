import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
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