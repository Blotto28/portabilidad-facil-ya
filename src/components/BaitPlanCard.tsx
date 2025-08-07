import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Share2 } from "lucide-react";

interface BaitPlanCardProps {
  price: string;
  planName: string;
  description: string;
  duration: string;
  dataAmount: string;
}

export const BaitPlanCard = ({ price, planName, description, duration, dataAmount }: BaitPlanCardProps) => {
  return (
    <Card className="bg-white border-2 border-black rounded-2xl shadow-none hover:scale-105 transition-all duration-300">
      <CardHeader className="text-center pb-4">
        {/* Price */}
        <div className="text-4xl font-bold text-black mb-2">
          {price}
        </div>
        
        {/* Plan name */}
        <div className="text-lg font-semibold text-black mb-3">
          {planName}
        </div>
        
        {/* Description */}
        <div className="text-sm text-black mb-4">
          {description}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 text-center">
        {/* Social media navigation */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-black">
            Navegación en Redes Sociales
          </div>
          
          {/* Social icons */}
          <div className="flex justify-center gap-2 flex-wrap">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">W</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">i</span>
            </div>
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">X</span>
            </div>
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
          </div>
        </div>
        
        {/* Calls and messages */}
        <div className="text-sm text-black font-medium">
          Incluye Llamadas y mensajes
        </div>
        
        {/* Flags */}
        <div className="flex justify-center gap-2">
          <span className="text-xl">🇲🇽</span>
          <span className="text-xl">🇺🇸</span>
          <span className="text-xl">🇨🇦</span>
        </div>
        
        {/* Share internet */}
        <div className="flex items-center justify-center gap-2 text-black">
          <Share2 size={20} />
          <span className="text-sm">Comparte Internet</span>
        </div>
      </CardContent>
    </Card>
  );
};