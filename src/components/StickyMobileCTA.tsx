import { Button } from "@/components/ui/button";
import { Zap, X } from "lucide-react";
import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollPosition > windowHeight * 0.4 && !isHidden) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 animate-slide-up">
      <div className="flex items-center gap-2">
        <Button 
          onClick={scrollToContact}
          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 text-sm shadow-lg"
        >
          <Zap className="mr-2 w-4 h-4" />
          Devis gratuit en 2 min
        </Button>
        <button 
          onClick={() => { setIsHidden(true); setIsVisible(false); }} 
          className="p-2 text-gray-400 hover:text-gray-600"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <p className="text-[10px] text-gray-500 text-center mt-1">
        ✅ Gratuit • ✅ Sans engagement • ✅ Réponse sous 24h
      </p>
    </div>
  );
};

export default StickyMobileCTA;
