import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('promoBannerClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-primary via-purple-600 to-primary text-primary-foreground py-2 sm:py-2.5 px-3 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      
      <div className="container mx-auto flex items-center justify-between relative z-10 gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-sm sm:text-base">🔑</span>
          <span className="font-semibold text-xs sm:text-sm leading-tight truncate">
            Votre site internet professionnel pour seulement <span className="font-extrabold">39 €/mois</span>
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <Button asChild variant="secondary" size="sm" className="bg-background text-foreground hover:bg-background/90 font-semibold text-[10px] sm:text-xs px-2 sm:px-3 py-1 h-auto">
            <Link to="/offre-mensuelle">
              Découvrir
              <ArrowRight className="ml-1 w-3 h-3" />
            </Link>
          </Button>
          <button onClick={handleClose} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-0.5" aria-label="Fermer">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;