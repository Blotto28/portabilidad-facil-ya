import { MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";

interface SocialIconsProps {
  variant?: "bait" | "movistar";
  size?: "sm" | "md" | "lg";
}

export const SocialIcons = ({ variant = "bait", size = "md" }: SocialIconsProps) => {
  const iconSize = size === "sm" ? 20 : size === "md" ? 24 : 32;
  const iconClass = variant === "bait" ? "text-bait-foreground" : "text-movistar-foreground";

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <div className="flex items-center gap-1">
        <MessageCircle size={iconSize} className={iconClass} />
        <span className="text-sm">WhatsApp</span>
      </div>
      <div className="flex items-center gap-1">
        <MessageCircle size={iconSize} className={iconClass} />
        <span className="text-sm">Messenger</span>
      </div>
      <div className="flex items-center gap-1">
        <Facebook size={iconSize} className={iconClass} />
        <span className="text-sm">Facebook</span>
      </div>
      <div className="flex items-center gap-1">
        <Instagram size={iconSize} className={iconClass} />
        <span className="text-sm">Instagram</span>
      </div>
      <div className="flex items-center gap-1">
        <div className={`w-${iconSize/4} h-${iconSize/4} rounded-full bg-gradient-to-r from-yellow-400 to-orange-500`}></div>
        <span className="text-sm">Snapchat</span>
      </div>
      <div className="flex items-center gap-1">
        <Twitter size={iconSize} className={iconClass} />
        <span className="text-sm">X</span>
      </div>
    </div>
  );
};