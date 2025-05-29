
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 50% of viewport height
      if (scrollPosition > windowHeight * 0.5 && !isHidden) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hideSticky = () => {
    setIsHidden(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl md:hidden">
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-3">
          <div className="text-white font-bold text-sm">🚀 Audit gratuit</div>
          <div className="text-white/90 text-xs">Multipliez vos conversions</div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={scrollToContact}
            size="sm"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-4 py-2 text-sm"
          >
            <Phone className="w-4 h-4 mr-1" />
            Réserver
          </Button>
          <button
            onClick={hideSticky}
            className="text-white/70 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
