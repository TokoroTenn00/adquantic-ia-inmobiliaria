import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Pack Básico",
    price: "250€",
    period: "",
    description: "Ideal para empezar a generar leads digitales",
    features: [
      "Landing page para comprador/vendedor",
      "1 campaña Meta Ads (presupuesto a tu elección)",
      "Home Staging de 2 viviendas",
      "Auditoría completa de web",
      "Optimización de redes sociales (bio, diseño, enlaces)",
      "Calendario optimizado de publicaciones de 30 días para IG y LinkedIn",
    ],
    cta: "Más información",
    popular: false
  },
  {
    name: "Pack Intermedio",
    price: "700€",
    period: "/mes",
    description: "Para agencias que buscan crecimiento sostenido",
    features: [
      "Todo lo del Pack Básico",
      "Gestión completa de redes (8 posts + 1 reel + 2 stories + 2 blogs)",
      "2 landing pages optimizadas con copy persuasivo",
      "2 campañas Meta Ads (compradores + vendedores)",
      "Home Staging de 4 viviendas",
      "Optimización SEO de nuevas propiedades",
      "Soporte prioritario por WhatsApp",
      "Exclusividad de zona",
      "Llamada estratégica mensual (30 min)"
    ],
    cta: "Más información",
    popular: true
  },
  {
    name: "Pack Premium",
    price: "Consultar",
    period: "",
    description: "Solución completa para dominar tu mercado local",
    features: [
      "Todo lo del Pack Intermedio",
      "Chatbot con IA 24/7 conectado a tu base de datos",
      "Rebranding de logo profesional",
      "Optimización SEO local completa",
      "Creación y gestión de marca",
      "4 Blog mensuales",
      "Automatización avanzada de procesos",
      "CRM Avanzado con pipelines personalizados",
      "Estrategia de posicionamiento local",
      "Email marketing automatizado",
      "Gestión de reputación y reseñas Google"
    ],
    cta: "Más información",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Elige el Plan que se Ajuste a tu Agencia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones escalables diseñadas para agencias inmobiliarias pequeñas y medianas. 
            Sin contratos largos. Sin sorpresas. Solo resultados.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 border-2 transition-all hover:shadow-strong h-full ${
                plan.popular 
                  ? 'border-accent shadow-medium scale-105 lg:scale-110' 
                  : 'border-border shadow-soft hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-glow">
                  <Star className="w-4 h-4 fill-current" />
                  Más Popular
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-accent">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="bg-accent/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full py-6 text-lg font-semibold transition-all hover:scale-105 mt-6 ${
                    plan.popular
                      ? 'gradient-accent text-white shadow-glow'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                  onClick={() => window.open('https://calendly.com/adquantic/30min', '_blank')}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No estás seguro de qué plan elegir?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent/10"
            onClick={() => window.open('https://calendly.com/adquantic/30min', '_blank')}
          >
            Hablemos de tu Caso Específico
          </Button>
        </div>

        {/* Roadmap Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Cómo Trabajamos Contigo?
            </h3>
            <p className="text-muted-foreground">
              Un proceso claro y sin sorpresas, diseñado para obtener resultados desde el primer día
            </p>
          </div>

          <div className="relative">
            {/* Vertical Progress Bar */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" />
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-accent via-accent to-accent/20 -translate-x-1/2 hidden md:block" 
                 style={{ height: '100%' }} />

            {/* Steps */}
            <div className="space-y-12 md:space-y-16">
              {[
                {
                  number: "1",
                  title: "Primera reunión",
                  description: "Descubrimos tus necesidades y problemas."
                },
                {
                  number: "2",
                  title: "Análisis personalizado",
                  description: "Estudiamos tu caso y buscamos soluciones específicas."
                },
                {
                  number: "3",
                  title: "Propuesta a medida",
                  description: "Estudiado tu caso, apuntamos solo a lo que realmente te afecta."
                },
                {
                  number: "4",
                  title: "Implementación",
                  description: "Realizamos todo el trabajo de forma remota, nosotros nos encargamos de todo."
                },
                {
                  number: "5",
                  title: "Seguimiento",
                  description: "Llamada estratégica mensual para medir retorno y revisiones."
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-medium inline-block w-full md:max-w-md">
                      <h4 className="font-bold text-foreground mb-2 text-lg">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="bg-accent w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-glow border-4 border-background">
                      {step.number}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
