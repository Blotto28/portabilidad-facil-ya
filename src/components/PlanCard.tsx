import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PlanCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  variant: "bait" | "movistar";
  socialIcons?: React.ReactNode;
}

export const PlanCard = ({ title, description, price, features, variant, socialIcons }: PlanCardProps) => {
  const bgClass = variant === "bait" ? "bg-bait" : "bg-movistar";
  const textClass = variant === "bait" ? "text-bait-foreground" : "text-movistar-foreground";
  
  const handleWhatsAppClick = () => {
    const message = `Hola! Me interesa el ${title} por ${price}. ¿Podrían darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5215512345678?text=${encodedMessage}`, '_blank');
  };

  return (
    <Card className={`${bgClass} ${textClass} shadow-card border-0 hover:scale-105 transition-all duration-300`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className={`${textClass} text-lg opacity-90`}>
          {description}
        </CardDescription>
        <div className="text-3xl font-black mt-2">{price}</div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>{feature}</span>
          </div>
        ))}
        
        {socialIcons && (
          <div className="pt-4">
            <p className="font-semibold mb-2">Redes sociales incluidas:</p>
            {socialIcons}
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          variant="whatsapp" 
          size="lg" 
          className="w-full text-lg"
          onClick={handleWhatsAppClick}
        >
          📱 Contratar en WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};