import { HeroSection } from "@/components/HeroSection";
import { PlanCard } from "@/components/PlanCard";
import { SocialIcons } from "@/components/SocialIcons";
import { MovistarPlanCard } from "@/components/MovistarPlanCard";
import { BaitPlanCard } from "@/components/BaitPlanCard";

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
                Paquetes que te dan más
              </h2>
            </div>
            
            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <BaitPlanCard
                price="$50"
                planName="Bait 50"
                description="Disfruta 7 días con 3 GB"
                duration="7 días"
                dataAmount="3 GB"
              />
              
              <BaitPlanCard
                price="$100"
                planName="Portabilidad 100"
                description="Disfruta 30 días con 9 GB"
                duration="30 días"
                dataAmount="9 GB"
              />
              
              <BaitPlanCard
                price="$200"
                planName="Bait 200"
                description="Disfruta 30 días con 15 GB"
                duration="30 días"
                dataAmount="15 GB"
              />
              
              <BaitPlanCard
                price="$230"
                planName="Bait 230"
                description="Internet Ilimitado"
                duration="30 días"
                dataAmount="Ilimitado"
              />
            </div>
          </div>
        </div>
        
        {/* Movistar Section */}
        <div className="bg-movistar py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-movistar-foreground mb-4">
                💙 Promociones Movistar - La mejor cobertura
              </h2>
              <p className="text-xl text-movistar-foreground opacity-90">
                Planes con la mejor red y cobertura nacional. Redes sociales sin límite.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <MovistarPlanCard
                planName="Plan Pro Ilimitado"
                dataAmount=""
                isUnlimited={true}
                oldPrice="$579"
                newPrice="$290"
                colorScheme="purple"
                hasAppsIlimitadas={true}
              />
              
              <MovistarPlanCard
                planName="Plan Pro 35"
                dataAmount="35 GB"
                oldPrice="$449"
                newPrice="$225"
                colorScheme="blue-dark"
              />
              
              <MovistarPlanCard
                planName="Plan Pro 25" 
                dataAmount="25 GB"
                oldPrice="$349"
                newPrice="$175"
                colorScheme="blue-light"
              />
              
              <MovistarPlanCard
                planName="Plan Pro 18"
                dataAmount="18 GB" 
                oldPrice="$299"
                newPrice="$150"
                colorScheme="pink"
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
