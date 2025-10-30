import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Directora",
    company: "Inmobiliaria Costa del Sol",
    location: "Málaga",
    content: "En solo 2 meses aumentamos nuestros leads en un 40%. El chatbot con IA nos ahorra horas de responder las mismas preguntas. Ahora nos enfocamos en cerrar ventas, no en tareas repetitivas.",
    rating: 5
  },
  {
    name: "Carlos Martínez",
    role: "Fundador",
    company: "Propiedades Martínez",
    location: "Murcia",
    content: "Como agencia pequeña, pensábamos que el marketing digital era muy caro para nosotros. AD Quantic nos demostró lo contrario. Soluciones asequibles con resultados medibles desde el primer mes.",
    rating: 5
  },
  {
    name: "Laura Sánchez",
    role: "Gerente Comercial",
    company: "Inmobiliaria Valencia Centro",
    location: "Valencia",
    content: "El servicio personalizado y la exclusividad de zona nos dan tranquilidad. No competimos con otros clientes de la misma agencia. Las llamadas estratégicas mensuales son oro puro para optimizar campañas.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Lo Que Dicen Nuestros Clientes
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Resultados Reales de Agencias Reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo otras agencias inmobiliarias están transformando su negocio con AD Quantic.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft border border-border hover:shadow-medium transition-all hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
                <div className="text-xs text-accent font-medium mt-1">
                  📍 {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
