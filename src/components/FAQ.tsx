import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué pasa si no tengo experiencia técnica en marketing digital o IA?",
    answer: "Ese es precisamente nuestro valor. Nos encargamos de toda la parte técnica por ti. Desde la configuración inicial hasta la optimización continua, todo está en nuestras manos. Tú solo te enfocas en atender a los leads que generamos y cerrar ventas."
  },
  {
    question: "¿Cómo ayuda la IA específicamente al sector inmobiliario?",
    answer: "La IA automatiza tareas repetitivas como responder consultas frecuentes (chatbots), calificar leads según su intención de compra/venta, optimizar campañas publicitarias en tiempo real, generar tours virtuales mejorados, y analizar datos para predecir qué propiedades se venderán más rápido. Todo esto libera tiempo para que te enfoques en lo que importa: vender."
  },
  {
    question: "¿Cuánto tiempo tarda en verse resultados?",
    answer: "Los primeros leads cualificados empiezan a llegar en las primeras 2-4 semanas tras el lanzamiento de campañas. El crecimiento sostenido y la optimización de procesos se consolidan entre el mes 2 y 3. La mayoría de nuestros clientes reportan un aumento del 40% en leads cualificados en los primeros 3 meses."
  },
  {
    question: "¿Qué incluye la 'exclusividad de zona' en el Pack Intermedio y Premium?",
    answer: "Significa que no trabajaremos con otra agencia inmobiliaria competidora directa en tu misma zona geográfica. Esto te protege de que otras agencias locales aprovechen las mismas estrategias que implementamos contigo, dándote una ventaja competitiva clara en tu mercado."
  },
  {
    question: "¿Necesito un presupuesto grande para publicidad además del plan mensual?",
    answer: "No necesariamente. En el Pack Básico e Intermedio, tú eliges el presupuesto publicitario (desde 100€/mes en adelante). Nosotros optimizamos cada euro para maximizar leads. Con 300-500€/mes de publicidad más nuestro servicio, las agencias pequeñas ven resultados sólidos. El presupuesto se adapta a tu capacidad."
  },
  {
    question: "¿Qué pasa si quiero cancelar? ¿Hay contratos largos?",
    answer: "No hay contratos de permanencia forzosa. Trabajamos mes a mes porque confiamos en que nuestros resultados te convencerán de seguir. Si en algún momento decides cancelar, puedes hacerlo sin penalización (solo avisando con 30 días de antelación)."
  },
  {
    question: "¿Cómo funciona la Auditoría Express por 39€?",
    answer: "Es una evaluación rápida pero profunda de tu presencia digital actual (web, redes, campañas). Te entregamos un reporte con 3 acciones inmediatas para mejorar tus resultados, más 3 ebooks de estrategias avanzadas (valorados en 147€). Es ideal para empezar a conocernos sin compromiso y ver mejoras rápidas."
  },
  {
    question: "¿Ofrecen servicios a agencias fuera de España?",
    answer: "Actualmente nos especializamos en el mercado español (especialmente Murcia, Valencia, Málaga y alrededores) porque conocemos bien el ecosistema local, la competencia y las regulaciones. Esto nos permite ofrecer estrategias más personalizadas y efectivas. Si tienes una agencia fuera de España, contáctanos para evaluar tu caso específico."
  },
  {
    question: "¿Qué es el Home Staging y cómo puede ayudarme a vender más rápido?",
    answer: "El Home Staging es la técnica de preparar y presentar una propiedad de forma estratégica para hacerla más atractiva a compradores potenciales. Incluye desde pequeñas mejoras estéticas hasta el uso de IA para generar tours virtuales mejorados y visualizaciones 3D. Nuestros servicios integran Home Staging digital potenciado por IA, permitiendo mostrar el potencial de una propiedad sin inversión física costosa. Propiedades con Home Staging se venden hasta un 73% más rápido y a mejor precio."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Resolvemos Tus Dudas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aquí están las respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft hover:shadow-medium transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
