import { Heart, MapPin, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              Sobre AD Quantic
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Expertos en <span className="text-accent">Marketing Digital e IA</span> para Inmobiliarias
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AD Quantic nace de la pasión por ayudar a agencias inmobiliarias a prosperar en la era digital. 
              Entendemos los desafíos únicos del sector inmobiliario porque nos especializamos exclusivamente en él.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro fundador, con formación continua en marketing digital e inteligencia artificial, 
              decidió enfocarse en un nicho específico: <span className="text-accent font-semibold">agencias inmobiliarias pequeñas y medianas en España</span> que 
              merecen las mismas herramientas tecnológicas que las grandes empresas, pero adaptadas a su presupuesto y realidad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-soft border border-border space-y-3 hover:shadow-medium transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Enfoque Especializado</h3>
              <p className="text-muted-foreground text-sm">
                100% dedicados al sector inmobiliario. Conocemos tu mercado por dentro.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-soft border border-border space-y-3 hover:shadow-medium transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Presencia Local</h3>
              <p className="text-muted-foreground text-sm">
                Conexiones en Murcia y toda España para un servicio cercano y personalizado.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-soft border border-border space-y-3 hover:shadow-medium transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Formación Continua</h3>
              <p className="text-muted-foreground text-sm">
                Siempre actualizados en las últimas tendencias de marketing digital e IA.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-soft border border-border space-y-3 hover:shadow-medium transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Pasión por Resultados</h3>
              <p className="text-muted-foreground text-sm">
                Tu éxito es nuestro éxito. Trabajamos con disciplina y compromiso total.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
