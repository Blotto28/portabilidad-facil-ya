import { HeroSection } from "@/components/HeroSection";
import { PlanCard } from "@/components/PlanCard";
import { SocialIcons } from "@/components/SocialIcons";
import { MovistarPlanCard } from "@/components/MovistarPlanCard";
import { BaitPlanCard } from "@/components/BaitPlanCard";
import { MovistarPlanCardV2 } from "@/components/MovistarPlanCardV2";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Promociones Section */}
      <section id="promociones" className="py-16">
        {/* Bait Section */}
        <div className="bg-bait py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Promociones BAIT
              </h2>
            </div>
            
            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <BaitPlanCard
                title="Paquete Bait 50"
                price="$50"
                features={[
                  "Internet y redes sociales",
                  "WhatsApp, Facebook, Messenger, Instagram, Snapchat, X"
                ]}
                ctaLabel="Contrata en WhatsApp"
                ctaLink="https://wa.me/521000000000"
              />
              
              <BaitPlanCard
                title="Paquete Bait 100"
                price="$100"
                features={[
                  "Más GB para navegar",
                  "WhatsApp, Facebook, Messenger, Instagram, Snapchat, X"
                ]}
                ctaLabel="Contrata en WhatsApp"
                ctaLink="https://wa.me/521000000000"
              />
              
              <BaitPlanCard
                title="Paquete Bait 200"
                price="$200"
                features={[
                  "Alta velocidad",
                  "WhatsApp, Facebook, Messenger, Instagram, Snapchat, X"
                ]}
                ctaLabel="Contrata en WhatsApp"
                ctaLink="https://wa.me/521000000000"
              />
              
              <BaitPlanCard
                title="Paquete Bait 230"
                price="$230"
                features={[
                  "Velocidad máxima + hotspot",
                  "WhatsApp, Facebook, Messenger, Instagram, Snapchat, X"
                ]}
                ctaLabel="Contrata en WhatsApp"
                ctaLink="https://wa.me/521000000000"
              />
            </div>
          </div>
        </div>
        
        {/* Movistar Section */}
        <div className="bg-movistar py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Promociones MOVISTAR
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <MovistarPlanCardV2
                title="Plan Pro 18"
                price="$299 / $150 x2 meses"
                features={[
                  "18GB navegación",
                  "Hotspot incluido",
                  "Llamadas y SMS ilimitados",
                  "WhatsApp, Facebook, Messenger, Instagram, Snapchat, X"
                ]}
                ctaLabel="Contrata en WhatsApp"
                ctaLink="https://wa.me/521000000000"
              />
              
              <MovistarPlanCardV2
                title="Plan Pro 25"
                price="$349 / $175 x2 meses"
                features={[
                  "25GB navegación",
                  "Hotspot incluido", 
                  "Llamadas y SMS ilimitados",
                  "WhatsApp, Facebook, Messenger, Instagram, Snapchat, X"
                ]}
                ctaLabel="Contrata en WhatsApp"
                ctaLink="https://wa.me/521000000000"
              />
              
              <MovistarPlanCardV2
                title="Plan Pro 35"
                price="$449 / $225 x2 meses"
                features={[
                  "35GB navegación",
                  "Hotspot incluido",
                  "Llamadas y SMS ilimitados",
                  "WhatsApp, Facebook, Messenger, Instagram, Snapchat, X"
                ]}
                ctaLabel="Contrata en WhatsApp"
                ctaLink="https://wa.me/521000000000"
              />
              
              <MovistarPlanCardV2
                title="Plan Pro Ilimitado"
                price="$579 / $290 x2 meses"
                features={[
                  "Internet ilimitado (FUP)",
                  "Hotspot",
                  "Apps ilimitadas",
                  "WhatsApp, Facebook, Messenger, Instagram, Snapchat, X"
                ]}
                ctaLabel="Contrata en WhatsApp"
                ctaLink="https://wa.me/521000000000"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para cambiar tu plan?</h3>
          <p className="text-lg mb-6">
            Contacta con nosotros por WhatsApp y te ayudamos con tu portabilidad hoy mismo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SocialIcons variant="bait" size="lg" />
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75">
              © 2024 OfertasTelefonicas.com - Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
