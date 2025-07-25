import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Power BI", level: 95 },
    { name: "DAX", level: 90 },
    { name: "Power Query", level: 88 },
    { name: "SQL", level: 85 },
    { name: "Excel Avançado", level: 92 },
    { name: "Python", level: 75 },
  ];

  const businessSkills = [
    { name: "Análise de Dados", level: 95 },
    { name: "Business Intelligence", level: 90 },
    { name: "Storytelling com Dados", level: 88 },
    { name: "Modelagem de Dados", level: 85 },
    { name: "KPIs e Métricas", level: 90 },
    { name: "Visualização de Dados", level: 92 },
  ];

  const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; level: number }[] }) => (
    <Card className="bg-card border-border shadow-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6 text-card-foreground text-center">
          {title}
        </h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-card-foreground">
                  {skill.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Habilidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Competências técnicas e analíticas desenvolvidas ao longo da minha carreira em análise de dados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SkillCategory title="Habilidades Técnicas" skills={technicalSkills} />
          <SkillCategory title="Habilidades Analíticas" skills={businessSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;