
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
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <Clock className="w-4 h-4" />
          <span>🔥 Plus que {spotsLeft} créneaux disponibles cette semaine</span>
          <Clock className="w-4 h-4" />
        </div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-32 left-4 sm:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-ping opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            {/* Brand with social proof badge */}
            <div className="mb-6 sm:mb-8 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-scale-in">
                ConvertiLab
              </h1>
              <div className="flex justify-center items-center flex-wrap gap-2 mb-4 sm:mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <span className="text-gray-300 font-semibold text-sm sm:text-base">4.9/5 • +100 projets réussis</span>
              </div>
              
              {/* Live activity indicator */}
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                {consultationsThisWeek} consultations réservées cette semaine
              </div>
            </div>

            {/* Main Headline - Plus percutant */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in px-2">
              Multipliez vos ventes par
              <span className="text-purple-400 animate-pulse"> 3.5x</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>avec des landing pages
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span><span className="text-pink-400 animate-pulse">scientifiquement optimisées</span>
            </h2>

            {/* Value Proposition - Plus spécifique */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4">
              <strong className="text-white">Garantie 35% d'augmentation minimum</strong> ou nous retravaillons gratuitement. 
              Des landing pages qui convertissent, basées sur 5 ans de données et +100 projets réussis.
            </p>

            {/* Trust indicators - Renforcés */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8 animate-fade-in px-4">
              <div className="flex items-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm sm:text-base">Garantie résultats ou remboursé</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm sm:text-base">Certifié Google Partner</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm sm:text-base">Livraison sous 7 jours</span>
              </div>
            </div>

            {/* CTA Section - Optimisé */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 animate-fade-in px-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse shadow-2xl"
              >
                🚀 AUDIT GRATUIT DE VOS CONVERSIONS
                <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
              <Button 
                onClick={scrollToPortfolio}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-purple-400 text-white bg-transparent hover:bg-purple-400/20 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 w-4 h-4" />
                Voir les résultats clients
              </Button>
            </div>
            
            {/* Urgency message */}
            <p className="text-yellow-400 font-semibold text-sm sm:text-base animate-pulse mb-4">
              ⏰ Audit gratuit limité à 20 entreprises par mois • Plus que {spotsLeft} places
            </p>
          </div>

          {/* Social Proof - Amélioré */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
            <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center border border-purple-400/30">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">+350%</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">Record d'augmentation</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">des conversions</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Client e-commerce - Nov 2024</div>
            </div>
            <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center border border-pink-400/30">
              <div className="text-3xl sm:text-4xl font-bold text-pink-400 mb-2">127</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">Projets réalisés</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">en 2024</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Taux de satisfaction 98%</div>
            </div>
            <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center sm:col-span-2 lg:col-span-1 border border-yellow-400/30">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">2.1M€</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">Revenus générés</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">pour nos clients</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">En 2024 uniquement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
