import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Gift, Zap, ArrowRight } from "lucide-react";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is leaving viewport at the top
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Add delay to avoid triggering too early
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const openPriceEstimator = () => {
    window.open('https://preview--estimezlecoutdevotresiteweb-13.lovable.app/', '_blank');
    setIsOpen(false);
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
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-pulse">
              <Gift className="w-10 h-10 text-white" />
            </div>

            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-white mb-2">
                Attendez ! 🎁
              </DialogTitle>
              <DialogDescription className="text-purple-100 text-lg">
                Ne partez pas sans votre offre exclusive
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="p-6 bg-white">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Zap className="w-4 h-4" />
              OFFRE LIMITÉE
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              -15% sur votre premier projet
            </h3>
            <p className="text-gray-600 mb-6">
              + Consultation gratuite de 30 minutes pour discuter de votre projet
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4 mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">990€ → 840€</div>
              <div className="text-sm text-gray-600">
                ✅ Site vitrine complet • ✅ Design sur-mesure • ✅ 3 mois support
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={openPriceEstimator}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold shadow-xl"
                size="lg"
              >
                J'en profite maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                size="lg"
              >
                Demander un devis gratuit
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              ⏰ Plus que 3 places disponibles ce mois-ci
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
