import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import powerbiProject from "@/assets/powerbi-project.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Dashboard de Vendas Executivo",
      description: "Dashboard completo com análise de vendas, performance de vendedores e tendências mensais. Inclui KPIs principais e drill-down por região.",
      image: powerbiProject,
      technologies: ["Power BI", "DAX", "Power Query"],
      liveUrl: "#",
      category: "Vendas"
    },
    {
      id: 2,
      title: "Análise de Customer Journey",
      description: "Visualização do percurso do cliente desde o primeiro contato até a conversão, identificando pontos de melhoria no funil de vendas.",
      image: powerbiProject,
      technologies: ["Power BI", "SQL", "Excel"],
      liveUrl: "#",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Dashboard Financeiro",
      description: "Controle financeiro completo com DRE, fluxo de caixa, análise de custos e projeções. Atualização automática via APIs.",
      image: powerbiProject,
      technologies: ["Power BI", "Python", "APIs"],
      liveUrl: "#",
      category: "Finanças"
    },
    {
      id: 4,
      title: "Análise de RH e Pessoas",
      description: "Métricas de recursos humanos incluindo turnover, satisfação, performance e análise de competências da equipe.",
      image: powerbiProject,
      technologies: ["Power BI", "DAX", "Azure"],
      liveUrl: "#",
      category: "RH"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meus Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore alguns dos dashboards e análises que desenvolvi para diferentes áreas de negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Visualizar
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Acessar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;