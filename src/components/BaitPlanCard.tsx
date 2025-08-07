import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

interface BaitPlanCardProps {
  title: string;
  price: string;
  features: string[];
  ctaLabel: string;
  ctaLink: string;
}

export const BaitPlanCard = ({ title, price, features, ctaLabel, ctaLink }: BaitPlanCardProps) => {
  const handleWhatsAppClick = () => {
    window.open(ctaLink, '_blank');
  };

  return (
    <Card className="bg-white border-2 border-black rounded-2xl shadow-none hover:scale-105 transition-all duration-300">
      <CardHeader className="text-center pb-4">
        {/* Price */}
        <div className="text-4xl font-bold text-black mb-2">
          {price}
        </div>
        
        {/* Plan title */}
        <div className="text-lg font-semibold text-black mb-4">
          {title}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 text-center">
        {/* Features */}
        {features.map((feature, index) => (
          <div key={index} className="space-y-2">
            <div className="text-sm font-medium text-black">
              {feature}
            </div>
            
            {/* Social icons for social media features */}
            {feature.includes("WhatsApp") && (
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">X</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button 
          className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-semibold py-3 rounded-xl"
          onClick={handleWhatsAppClick}
        >
          {ctaLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};