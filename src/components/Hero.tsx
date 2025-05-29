
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle, Play } from "lucide-react";

const Hero = () => {
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
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-32 left-4 sm:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-ping opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            {/* Brand */}
            <div className="mb-6 sm:mb-8 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-scale-in">
                ConvertiLab
              </h1>
              <div className="flex justify-center items-center flex-wrap gap-1 mb-4 sm:mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <span className="ml-2 text-gray-300 font-semibold text-sm sm:text-base">+100 projets réussis</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in px-2">
              Des landing pages qui transforment
              <span className="text-purple-400 animate-pulse"> vos visiteurs</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>en <span className="text-pink-400 animate-pulse">clients</span>
            </h2>

            {/* Value Proposition */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4">
              Chez ConvertiLab, nous créons des landing pages sur mesure, pensées pour 
              capter l'attention, convaincre et maximiser vos conversions.
            </p>

            {/* Trust indicators - Mobile optimized */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8 animate-fade-in px-4">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm sm:text-base">Consultation gratuite</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm sm:text-base">Résultats garantis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm sm:text-base">Sans engagement</span>
              </div>
            </div>

            {/* CTA Section - Mobile first */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 animate-fade-in px-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse"
              >
                Consultation gratuite (Offerte)
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                onClick={scrollToPortfolio}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-purple-400 text-white bg-transparent hover:bg-purple-400/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 w-4 h-4" />
                Voir nos réalisations
              </Button>
            </div>
          </div>

          {/* Social Proof - Enhanced and mobile responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
            <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2 animate-pulse">+35%</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">Augmentation moyenne</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">des conversions</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">En moyenne sur 3 mois</div>
            </div>
            <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center">
              <div className="text-3xl sm:text-4xl font-bold text-pink-400 mb-2 animate-pulse">100+</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">Projets réalisés</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">avec succès</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Depuis 2019</div>
            </div>
            <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2 animate-pulse">5+</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">Années d'expertise</div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base">Marketing digital</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Certifiés Google Ads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
