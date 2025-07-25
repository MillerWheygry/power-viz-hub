import { BarChart3 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BarChart3 className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-secondary-foreground">DataPortfolio</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © 2024 Analista de Dados. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Desenvolvido com React + TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;