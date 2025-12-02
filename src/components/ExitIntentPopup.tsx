import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Gift, Zap, ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem('exitPopupShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Timer: Show popup after 5 seconds
    const timeoutTimer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    }, 5000);

    // Exit intent: Show popup when mouse leaves viewport at top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timeoutTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-0 p-0 overflow-hidden">
        <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-pulse">
              <Gift className="w-10 h-10 text-white" />
            </div>

            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-white mb-2">
                Offre Exceptionnelle ! 🎁
              </DialogTitle>
              <DialogDescription className="text-purple-100 text-lg">
                Réservée aux 10 premiers clients
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="p-6 bg-background">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Zap className="w-4 h-4" />
              PLACES LIMITÉES
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Site Web Professionnel
            </h3>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-4 mb-4">
              <div className="text-sm text-muted-foreground line-through mb-1">Valeur : 990€</div>
              <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                300€ seulement
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                Pour les 10 premières personnes uniquement
              </div>
            </div>

            <div className="text-left text-sm text-muted-foreground mb-6 space-y-1">
              <p>✅ Site vitrine 1-3 pages responsive</p>
              <p>✅ Design moderne et professionnel</p>
              <p>✅ Optimisé SEO & mobile</p>
              <p>✅ Livraison en 7 jours</p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={goToOffer}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold shadow-xl"
                size="lg"
              >
                Je réserve ma place
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950"
                size="lg"
              >
                En savoir plus
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              ⏰ Offre valable jusqu'à épuisement des places
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
