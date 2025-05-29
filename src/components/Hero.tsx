
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle, Play, Users, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [consultationsThisWeek, setConsultationsThisWeek] = useState(12);
  const [spotsLeft, setSpotsLeft] = useState(3);

  // Animation pour les compteurs
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setConsultationsThisWeek(prev => prev + 1);
        setSpotsLeft(prev => Math.max(1, prev - (Math.random() > 0.5 ? 1 : 0)));
      }
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Urgency Banner */}
      <div className="relative z-20 bg-gradient-to-r from-red-600 to-pink-600 py-2 px-4 text-center animate-pulse">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>🔥 Plus que {spotsLeft} créneaux cette semaine</span>
        </div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-4 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-32 right-4 w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-32 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            {/* Brand with social proof badge */}
            <div className="mb-4 sm:mb-6 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-scale-in">
                ConvertiLab
              </h1>
              <div className="flex justify-center items-center flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <span className="text-gray-300 font-semibold text-xs sm:text-sm">4.9/5 • +100 projets</span>
              </div>
              
              {/* Live activity indicator */}
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                {consultationsThisWeek} consultations cette semaine
              </div>
            </div>

            {/* Main Headline - Plus percutant et mobile-friendly */}
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4 animate-fade-in px-2">
              Multipliez vos ventes par
              <span className="text-purple-400 animate-pulse"> 3.5x</span>
              <br />
              avec des landing pages
              <br />
              <span className="text-pink-400 animate-pulse">optimisées</span>
            </h2>

            {/* Value Proposition - Plus court pour mobile */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4">
              <strong className="text-white">+35% de conversions garanties</strong> ou remboursé. 
              Livraison sous 7 jours.
            </p>

            {/* Trust indicators - Simplifié pour mobile */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6 animate-fade-in px-4">
              <div className="flex items-center text-xs sm:text-sm">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1" />
                <span className="text-gray-300">Garantie résultats</span>
              </div>
              <div className="flex items-center text-xs sm:text-sm">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1" />
                <span className="text-gray-300">Livraison 7 jours</span>
              </div>
            </div>

            {/* CTA Section - Optimisé mobile */}
            <div className="flex flex-col gap-3 justify-center mb-6 sm:mb-8 animate-fade-in px-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 py-4 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse shadow-2xl"
              >
                🚀 AUDIT GRATUIT
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                onClick={scrollToPortfolio}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-purple-400 text-white bg-transparent hover:bg-purple-400/20 px-6 py-3 text-sm sm:text-base transition-all duration-300"
              >
                <Play className="mr-2 w-4 h-4" />
                Voir les résultats
              </Button>
            </div>
            
            {/* Urgency message */}
            <p className="text-yellow-400 font-semibold text-xs sm:text-sm animate-pulse mb-4">
              ⏰ Plus que {spotsLeft} places ce mois
            </p>
          </div>

          {/* Social Proof - Version mobile compacte */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg text-center border border-purple-400/30">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">+350%</div>
              <div className="text-gray-300 font-semibold text-xs sm:text-sm">Record conversions</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg text-center border border-pink-400/30">
              <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">127</div>
              <div className="text-gray-300 font-semibold text-xs sm:text-sm">Projets 2024</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg text-center border border-yellow-400/30">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">2.1M€</div>
              <div className="text-gray-300 font-semibold text-xs sm:text-sm">Revenus générés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
