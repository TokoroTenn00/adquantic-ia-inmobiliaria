import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">AD Quantic</h3>
            <p className="text-white/80 leading-relaxed">
              Marketing Digital e IA para Agencias Inmobiliarias en España. 
              Tu socio estratégico para generar leads y automatizar procesos.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-white/80 hover:text-accent transition-colors">
                  Nuestros Servicios
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-accent transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/80 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/privacidad" className="text-white/80 hover:text-accent transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Servicios</h4>
            <ul className="space-y-2 text-white/80">
              <li>• Lead Generation con IA</li>
              <li>• Automatización de Procesos</li>
              <li>• Marketing Digital</li>
              <li>• Chatbots Avanzados</li>
              <li>• SEO Local</li>
              <li>• Gestión de Redes Sociales</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contacto@adquantic.com" 
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                contacto@adquantic.com
              </a>
              <a 
                href="tel:+34600000000" 
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                +34 600 000 000
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5" />
                Murcia, España
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://www.linkedin.com/company/adquantic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Síguenos en LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AD Quantic. Todos los derechos reservados.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white shadow-glow"
              onClick={() => window.open('https://calendly.com/adquantic/30min', '_blank')}
            >
              Agenda tu Reunión Gratuita
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
