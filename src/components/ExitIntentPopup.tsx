import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Gift, Zap, ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Detect mobile - skip popup entirely on mobile for performance
    const mobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(mobile);
    if (mobile) return;

    // Check if popup was dismissed in the last 24 hours
    const dismissedAt = localStorage.getItem('exitPopupDismissedAt');
    if (dismissedAt) {
      const dismissedTime = parseInt(dismissedAt, 10);
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (now - dismissedTime < twentyFourHours) {
        setHasShown(true);
        return;
      }
    }

    // Timer: Show popup after 15 seconds to avoid impacting LCP
    const timeoutTimer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 15000);

    // Exit intent: Show popup when mouse leaves viewport at top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timeoutTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('exitPopupDismissedAt', Date.now().toString());
  };

  const goToOffer = () => {
    setIsOpen(false);
    navigate('/offre-speciale');
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-md border-0 p-0 overflow-hidden mx-2">
        <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white p-4 sm:p-6">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Fermer la popup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center py-2 sm:py-4">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 animate-pulse">
              <Gift className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
            </div>

            <DialogHeader>
              <DialogTitle className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                Offre Exceptionnelle ! 🎁
              </DialogTitle>
              <DialogDescription className="text-purple-100 text-sm sm:text-lg">
                Réservée aux 10 premiers clients
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-background max-h-[60vh] overflow-y-auto">
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              PLACES LIMITÉES
            </div>
            
            <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
              Site Web Professionnel
            </h3>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
              <div className="text-xs sm:text-sm text-muted-foreground line-through mb-1">Valeur : 990€</div>
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                300€ seulement
              </div>
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                Pour les 10 premières personnes
              </div>
            </div>

            <div className="text-left text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-0.5 sm:space-y-1">
              <p>✅ Site vitrine 1-3 pages responsive</p>
              <p>✅ Design moderne et professionnel</p>
              <p>✅ Optimisé SEO & mobile</p>
              <p>✅ Livraison en 7 jours</p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Button
                onClick={goToOffer}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 sm:py-6 text-sm sm:text-lg font-semibold shadow-xl"
                size="lg"
              >
                Je réserve ma place
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 py-3 sm:py-4 text-sm sm:text-base"
                size="lg"
              >
                En savoir plus
              </Button>
            </div>

            <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">
              ⏰ Offre valable jusqu'à épuisement des places
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
