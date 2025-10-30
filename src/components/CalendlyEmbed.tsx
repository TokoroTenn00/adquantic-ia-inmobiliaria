import { useEffect } from "react";

const CalendlyEmbed = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-background" id="contacto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Agenda tu <span className="text-accent">Reunión Exploratoria Gratuita</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hablemos de tus objetivos y cómo AD Quantic puede ayudarte a alcanzarlos. 
            Sin compromiso. Sin presión. Solo una conversación honesta sobre el futuro de tu agencia.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-strong border border-border overflow-hidden">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/adquantic/30min?background_color=1C2A3C&text_color=f5ffff&primary_color=21B4A6" 
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendlyEmbed;
