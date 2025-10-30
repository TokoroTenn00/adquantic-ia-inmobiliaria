import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Dynamic gradient background with overlay */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-glow/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Animated floating elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Marketing Digital + IA para Inmobiliarias</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ¿Sigues Perdiendo Clientes Mientras tu Competencia Crece con IA?
              <span className="block text-accent mt-2">Deja de Dejarlo para Mañana</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Ayudamos a agencias inmobiliarias pequeñas y medianas en España a escalar con 
              <span className="text-accent font-semibold"> marketing digital impulsado por IA</span>, 
              de forma asequible y personalizada. Sin expertise técnico. Sin costos desorbitados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-glow transition-all hover:scale-105"
                onClick={() => window.open('https://calendly.com/adquantic/30min', '_blank')}
              >
                Agenda tu Reunión Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 transition-all hover:scale-105"
              >
                Auditoría Express - 47€
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">250+</div>
                <div className="text-sm text-white/70">Leads Generados</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">40%</div>
                <div className="text-sm text-white/70">Aumento en Conversión</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-white/70">Agencias Confiando</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl" />
            <img 
              src={heroDashboard} 
              alt="Dashboard de Marketing IA para Inmobiliarias" 
              className="relative rounded-2xl shadow-strong border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
