import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Info } from "lucide-react";

interface MovistarPlanCardProps {
  planName: string;
  dataAmount: string;
  isUnlimited?: boolean;
  oldPrice: string;
  newPrice: string;
  colorScheme: "purple" | "blue-dark" | "blue-light" | "pink";
  hasAppsIlimitadas?: boolean;
}

const colorConfig = {
  purple: {
    headerText: "text-movistar-purple",
    dataBox: "bg-movistar-purple-dark",
    priceText: "text-movistar-purple",
    divider: "border-movistar-purple",
  },
  "blue-dark": {
    headerText: "text-movistar-blue-dark", 
    dataBox: "bg-movistar-blue-dark",
    priceText: "text-movistar-blue-dark",
    divider: "border-movistar-blue-dark",
  },
  "blue-light": {
    headerText: "text-movistar-blue-light",
    dataBox: "bg-movistar-blue-light", 
    priceText: "text-movistar-blue-light",
    divider: "border-movistar-blue-light",
  },
  pink: {
    headerText: "text-movistar-pink",
    dataBox: "bg-movistar-pink-dark",
    priceText: "text-movistar-pink", 
    divider: "border-movistar-pink",
  },
};

export const MovistarPlanCard = ({ 
  planName, 
  dataAmount, 
  isUnlimited = false,
  oldPrice, 
  newPrice, 
  colorScheme,
  hasAppsIlimitadas = false 
}: MovistarPlanCardProps) => {
  const colors = colorConfig[colorScheme];
  
  const handleWhatsAppClick = () => {
    const message = `Hola! Me interesa el ${planName} por ${newPrice}. ¿Podrían darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5215512345678?text=${encodedMessage}`, '_blank');
  };

  return (
    <Card className="bg-white shadow-card border-0 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
      <CardHeader className="text-center pb-4">
        <h3 className={`text-xl font-bold ${colors.headerText}`}>
          {planName}
        </h3>
        
        {/* Data amount box */}
        <div className={`${colors.dataBox} rounded-2xl mx-4 py-6 my-4`}>
          <div className="text-white text-center">
            <div className="text-3xl font-bold">
              {isUnlimited ? "GB ilimitados" : dataAmount}
            </div>
            {!isUnlimited && (
              <div className="text-sm opacity-90 mt-1">Para navegar</div>
            )}
          </div>
        </div>
        
        {/* Policy text */}
        <div className="flex items-center justify-center gap-1 text-success-text text-sm">
          <Info size={16} className="bg-success-text text-white rounded-full p-0.5" />
          <span>Política de Uso Justo</span>
        </div>
      </CardHeader>
      
      <CardContent className="text-center space-y-4">
        {/* Pricing */}
        <div className="space-y-1">
          <div className="text-strike-red line-through text-lg">{oldPrice}</div>
          <div className={`text-4xl font-bold ${colors.priceText}`}>{newPrice}</div>
          <div className="text-gray-600 text-sm">x2 meses</div>
        </div>
        
        {/* Benefits */}
        <div className="space-y-2">
          <div className={`${colors.priceText} font-semibold`}>Con Hotspot</div>
          {hasAppsIlimitadas && (
            <div className={`${colors.priceText} font-semibold`}>Apps Ilimitadas</div>
          )}
        </div>
        
        {/* Divider */}
        <hr className={`border-t-2 ${colors.divider} mx-4`} />
        
        {/* Social media icons */}
        <div className="space-y-2">
          <div className="flex justify-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">W</span>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">i</span>
            </div>
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
          </div>
          <div className="text-sm font-semibold text-gray-700">Ilimitadas</div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-6">
        <Button 
          className="w-full bg-green-100 text-green-800 hover:bg-green-200 font-semibold py-3 rounded-xl border-0"
          onClick={handleWhatsAppClick}
        >
          Contrata en WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};