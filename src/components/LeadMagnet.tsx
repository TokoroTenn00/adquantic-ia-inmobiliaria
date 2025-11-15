import { Button } from "@/components/ui/button";
import { Gift, CheckCircle2, Sparkles } from "lucide-react";
const LeadMagnet = () => {
  return <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/30 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/50">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold">Oferta Especial de Lanzamiento</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-12 h-12 text-accent" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Auditoría Express + 3 Ebooks de Regalo
            </h2>
          </div>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Descubre exactamente qué está frenando el crecimiento de tu agencia y obtén 
            <span className="text-accent font-bold"> 3 acciones inmediatas</span> para solucionarlo.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-strong">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Incluye:
                </h3>
                <ul className="space-y-2 ml-8">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Análisis completo de tu página web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>3 acciones inmediatas para mejorar conversiones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Estrategias accionables específicas para tu zona</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Gift className="w-6 h-6 text-accent" />
                  Bonos (Valor: 147€):
                </h3>
                <ul className="space-y-2 ml-8">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Ebook: "10 errores que hacen que una inmobiliaria pierda clientes"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Ebook: "De inmobiliaria tradicional a marca local líder"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Ebook: "Guía práctica para generar contactos"</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-8 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl font-bold text-accent">47€</span>
                <span className="text-white/70 line-through text-xl">194€</span>
                <span className="bg-accent/30 px-3 py-1 rounded-full text-sm font-semibold">Ahorra 147€</span>
              </div>
              
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-12 py-6 shadow-glow transition-all hover:scale-105" onClick={() => window.open('https://buy.stripe.com/5kQ9AT2DzapEeRXgve2ZO00', '_blank')}>Solicitar Auditoría Express</Button>
              
              <p className="text-sm text-white/70">
                ✓ Entrega en 48-72 horas • ✓ Sin compromiso • ✓ Garantía de satisfacción
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LeadMagnet;