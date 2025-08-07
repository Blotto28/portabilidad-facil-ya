import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface MovistarPlanCardV2Props {
  title: string;
  price: string;
  features: string[];
  ctaLabel: string;
  ctaLink: string;
}

export const MovistarPlanCardV2 = ({ title, price, features, ctaLabel, ctaLink }: MovistarPlanCardV2Props) => {
  const handleWhatsAppClick = () => {
    window.open(ctaLink, '_blank');
  };

  // Extract old price and new price from price string
  const [oldPrice, newPriceInfo] = price.includes('/') ? price.split(' / ') : ['', price];
  
  return (
    <Card className="bg-white shadow-card border-0 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
      <CardHeader className="text-center pb-4">
        <h3 className="text-xl font-bold text-movistar mb-4">
          {title}
        </h3>
        
        {/* Pricing */}
        <div className="space-y-1">
          {oldPrice && (
            <div className="text-strike-red line-through text-lg">{oldPrice}</div>
          )}
          <div className="text-3xl font-bold text-movistar">
            {newPriceInfo || price}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="text-center space-y-4">
        {/* Features */}
        {features.map((feature, index) => (
          <div key={index} className="space-y-2">
            <div className="text-sm font-medium text-gray-700">
              {feature}
            </div>
            
            {/* Social icons for social media features */}
            {feature.includes("WhatsApp") && (
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
                <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">X</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
      
      <CardFooter className="pt-0 pb-6">
        <Button 
          className="w-full bg-green-100 text-green-800 hover:bg-green-200 font-semibold py-3 rounded-xl border-0"
          onClick={handleWhatsAppClick}
        >
          {ctaLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};