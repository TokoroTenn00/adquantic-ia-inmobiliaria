import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import LeadMagnet from "@/components/LeadMagnet";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Footer from "@/components/Footer";
import VoiceflowChat from "@/components/VoiceflowChat";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problems />
      <Solution />
      <LeadMagnet />
      <Pricing />
      <About />
      <Testimonials />
      <FAQ />
      <CalendlyEmbed />
      <Footer />
      <VoiceflowChat />
    </main>
  );
};

export default Index;
