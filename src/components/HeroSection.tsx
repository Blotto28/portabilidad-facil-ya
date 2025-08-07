import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToPromotions = () => {
    const element = document.getElementById('promociones');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-hero min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          📱 ¡Elige tu nueva línea con promociones exclusivas!
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          Cámbiate hoy a <span className="font-bold">Bait</span> o <span className="font-bold">Movistar</span> y aprovecha planes irresistibles.
          <br />
          Datos, hotspot y redes ilimitadas. ¡Elige y contrata ya por WhatsApp!
        </p>
        
        <Button 
          variant="hero" 
          size="lg"
          className="text-xl px-8 py-4 h-auto"
          onClick={scrollToPromotions}
        >
          Ver Promociones
        </Button>
      </div>
    </section>
  );
};