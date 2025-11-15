import { Target, Zap, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
const solutions = [{
  icon: Target,
  title: "Lead Generation Inteligente",
  description: "Campañas de Meta Ads optimizadas con IA que atraen compradores y vendedores cualificados a tus landing pages personalizadas."
}, {
  icon: Zap,
  title: "Automatización con IA",
  description: "Chatbots avanzados, CRM automatizado y procesos optimizados para que tu equipo se enfoque en cerrar ventas, no en tareas repetitivas."
}, {
  icon: TrendingUp,
  title: "Marketing Digital Personalizado",
  description: "Gestión de redes sociales, SEO local, email marketing y home staging digital adaptados a tu zona y propiedades específicas."
}, {
  icon: Shield,
  title: "Soporte y Exclusividad Local",
  description: "Atención prioritaria por WhatsApp, llamadas estratégicas mensuales y exclusividad de zona para que no compitas con otros clientes nuestros."
}];
const Solution = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            La Solución AD Quantic
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Marketing Digital e IA <span className="text-accent">Simplificado</span> para Tu Inmobiliaria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No necesitas ser experto en tecnología. Nosotros nos encargamos de todo, desde la estrategia hasta la implementación, 
            con soluciones asequibles que demuestran resultados medibles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {solutions.map((solution, index) => <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:bg-accent/5 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent shadow-glow mx-auto">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>)}
        </div>
        
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white shadow-strong">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Resultados Comprobados para Agencias como la Tuya
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Nuestros clientes experimentan un <span className="text-accent font-bold">aumento promedio del 40%</span> en leads cualificados 
            en los primeros 3 meses, con procesos automatizados que ahorran hasta <span className="text-accent font-bold">15 horas semanales</span>.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-glow transition-all hover:scale-105" onClick={() => window.open('https://calendly.com/adquantic/30min', '_blank')}>Así lo hacemos</Button>
        </div>
      </div>
    </section>;
};
export default Solution;