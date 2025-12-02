import { useState, useEffect } from 'react';
import { X, Sparkles, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  // Calculer le temps restant jusqu'à la fin de l'offre (exemple: 7 jours)
  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // 7 jours à partir d'aujourd'hui

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
    // Sauvegarder dans localStorage pour ne pas réafficher pendant cette session
    localStorage.setItem('promoBannerClosed', 'true');
  };
  const handleRedirect = () => {
    window.location.href = '/offre-speciale';
  };
  if (!isVisible) return null;
  return <div className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white py-4 px-4 relative overflow-hidden" style={{
    marginTop: '64px'
  }}>
      {/* Animation de fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3 flex-1">
          <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span className="font-bold text-sm sm:text-base">🔥 OFFRE EXCLUSIVE : Site web professionnel à 300€ pour les 10 premiers clients !</span>
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <Clock className="w-4 h-4" />
              <span className="bg-white/20 px-2 py-1 rounded text-white font-medium">
                {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button onClick={handleRedirect} variant="secondary" size="sm" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 transition-all duration-300 transform hover:scale-105">
            J'en profite !
          </Button>
          <button onClick={handleClose} className="text-white/80 hover:text-white transition-colors p-1" aria-label="Fermer la bannière">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>;
};
export default PromoBanner;