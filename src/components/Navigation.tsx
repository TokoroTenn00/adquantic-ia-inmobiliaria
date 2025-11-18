import logo from "@/assets/adquantic-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a 
            href="https://www.adquantic.es" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src={logo} 
              alt="AdQuantic - Marketing Digital + IA para Inmobiliarias" 
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
