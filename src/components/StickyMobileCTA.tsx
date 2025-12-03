
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
      if (scrollPosition > windowHeight * 0.3 && !isHidden) {
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
    <div className="hidden">
      {/* Hidden - disabled on mobile */}
    </div>
  );
};

export default StickyMobileCTA;
