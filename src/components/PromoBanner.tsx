import { useState, useEffect } from 'react';
import { X, Flame, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('promoBannerClosed', 'true');
  };

  const handleRedirect = () => {
    window.location.href = '/offre-speciale';
  };

  if (!isVisible) return null;

  return (
    <div 
      className="hidden sm:block w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white py-2 sm:py-3 px-3 sm:px-4 relative overflow-hidden" 
      style={{ marginTop: '64px' }}
    >
      {/* Animation de fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      <div className="container mx-auto flex items-center justify-between relative z-10 gap-2">
        {/* Main content */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse flex-shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 min-w-0">
            <span className="font-bold text-xs sm:text-sm leading-tight">
              <span className="text-yellow-300">🔥 Offre Limitée</span>
              <span className="hidden sm:inline"> : 10 projets à tarif préférentiel</span>
              <span className="sm:hidden"> — 10 places</span>
            </span>
            <div className="hidden sm:flex items-center gap-2 text-xs sm:text-sm flex-shrink-0">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="bg-white/20 px-2 py-0.5 rounded text-white font-medium">
                {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <Button 
            onClick={handleRedirect} 
            variant="secondary"
            size="sm" 
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-[10px] sm:text-xs px-2 sm:px-3 py-1 h-auto transition-all duration-300 transform hover:scale-105"
          >
            Réserver ma place
          </Button>
          <button 
            onClick={handleClose} 
            className="text-white/80 hover:text-white transition-colors p-0.5 sm:p-1" 
            aria-label="Fermer la bannière"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;