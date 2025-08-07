import { HeroSection } from "@/components/HeroSection";
import { PlanCard } from "@/components/PlanCard";
import { SocialIcons } from "@/components/SocialIcons";
import { MovistarPlanCard } from "@/components/MovistarPlanCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Promociones Section */}
      <section id="promociones" className="py-16">
        {/* Bait Section */}
        <div className="bg-bait py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-bait-foreground mb-4">
                🔥 Promociones Bait - Ahorra más con tu portabilidad
              </h2>
              <p className="text-xl text-bait-foreground opacity-90">
                Cada paquete incluye redes sociales activas y llamadas ilimitadas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PlanCard
                title="📦 Paquete Bait 230"
                description="Plan completo con todo incluido"
                price="$230"
                features={[
                  "Llamadas y mensajes ilimitados",
                  "Navegación activa",
                  "Hotspot incluido"
                ]}
                variant="bait"
                socialIcons={<SocialIcons variant="bait" size="sm" />}
              />
              
              <PlanCard
                title="📦 Paquete Bait 200"
                description="Plan esencial con lo necesario"
                price="$200"
                features={[
                  "Internet y llamadas ilimitadas",
                  "Redes sociales incluidas",
                  "Navegación básica"
                ]}
                variant="bait"
                socialIcons={<SocialIcons variant="bait" size="sm" />}
              />
              
              <PlanCard
                title="📦 Paquete Bait 150"
                description="Plan básico ideal para comenzar"
                price="$150"
                features={[
                  "Llamadas ilimitadas",
                  "Internet básico",
                  "Redes sociales principales"
                ]}
                variant="bait"
                socialIcons={<SocialIcons variant="bait" size="sm" />}
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
