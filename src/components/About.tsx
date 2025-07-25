import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Database, PieChart, BarChart3 } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Power BI",
      description: "Criação de dashboards interativos e relatórios avançados"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Análise de Dados",
      description: "Transformação e modelagem de dados para insights valiosos"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Business Intelligence",
      description: "Soluções de BI para tomada de decisões estratégicas"
    },
    {
      icon: <PieChart className="w-8 h-8 text-primary" />,
      title: "Visualização",
      description: "Design de gráficos e métricas que comunicam efetivamente"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sou um analista de dados apaixonado por transformar informações complexas em 
            insights claros e actionáveis. Com expertise em Power BI, ajudo empresas a 
            tomar decisões baseadas em dados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;