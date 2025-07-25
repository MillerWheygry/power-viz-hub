import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contato@analista.com",
      link: "mailto:contato@analista.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      value: "(11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "São Paulo, SP",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "#"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Vamos Conversar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interessado em desenvolver soluções de Business Intelligence para sua empresa? 
            Entre em contato comigo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Informações de Contato
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-4">
                    <a 
                      href={info.link}
                      className="flex items-center space-x-4 text-card-foreground hover:text-primary transition-colors"
                    >
                      <div className="text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Envie uma Mensagem
              </h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Seu nome"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Seu email"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                </div>
                
                <Input 
                  placeholder="Assunto"
                  className="bg-input border-border text-foreground"
                />
                
                <Textarea 
                  placeholder="Sua mensagem..."
                  rows={6}
                  className="bg-input border-border text-foreground"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;