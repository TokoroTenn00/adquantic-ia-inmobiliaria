import { AlertCircle, TrendingDown, Clock, DollarSign, CheckCircle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Leads Insuficientes y Poco Cualificados",
    description: "Tu inversión en publicidad no genera suficientes clientes potenciales de calidad. Los portales inmobiliarios genéricos no te diferencian de la competencia.",
    solution: "Implementamos estrategias de marketing digital y IA personalizadas que atraen clientes cualificados específicamente para tu agencia, diferenciándote de la competencia."
  },
  {
    icon: Clock,
    title: "Procesos Manuales que Consumen Tiempo",
    description: "Dedicas horas a responder las mismas preguntas, programar visitas y gestionar propiedades. El tiempo que podrías usar para cerrar ventas se va en tareas repetitivas.",
    solution: "Automatizamos tus procesos con chatbots inteligentes y sistemas de gestión que responden preguntas, programan visitas y gestionan propiedades por ti las 24/7."
  },
  {
    icon: DollarSign,
    title: "Costos Altos Sin Resultados Claros",
    description: "Las herramientas digitales y agencias tradicionales son caras y complejas. Necesitas soluciones que se adapten a tu presupuesto y demuestren ROI real.",
    solution: "Ofrecemos soluciones escalables adaptadas a tu presupuesto con métricas claras y reportes de ROI desde la primera semana de implementación."
  },
  {
    icon: AlertCircle,
    title: "Falta de Expertise Digital y Técnica",
    description: "El marketing digital y la IA parecen demasiado complejos. No tienes tiempo ni recursos para convertirte en experto mientras diriges tu agencia.",
    solution: "Nos encargamos de toda la implementación técnica y te acompañamos paso a paso. No necesitas conocimientos previos, nosotros lo hacemos por ti."
  }
];

const Problems = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ¿Te Sientes Estancado en el Mercado Digital?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabemos que las agencias inmobiliarias pequeñas enfrentan desafíos únicos en un mercado cada vez más competitivo y digitalizado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative bg-card p-8 rounded-xl shadow-soft border border-border hover:shadow-medium transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="flex items-start gap-4 relative z-10">
                <div className="bg-destructive/10 group-hover:bg-accent/10 p-3 rounded-lg flex-shrink-0 transition-colors duration-300">
                  <problem.icon className="w-6 h-6 text-destructive group-hover:hidden transition-all duration-300" />
                  <CheckCircle className="w-6 h-6 text-accent hidden group-hover:block transition-all duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:hidden">
                    {problem.description}
                  </p>
                  <p className="text-accent font-medium leading-relaxed hidden group-hover:block">
                    {problem.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-foreground font-medium">
            No estás solo. <span className="text-accent">Hay una solución mejor.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;
