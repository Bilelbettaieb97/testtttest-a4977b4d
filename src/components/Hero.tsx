
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award, Calendar } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/bilel-bettaieb-naboo', '_blank');
  };

  return (
    <main className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 mb-4 sm:mb-6 text-xs sm:text-sm bg-purple-100 text-purple-800 rounded-full border border-purple-200">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Spécialiste Landing Pages Haute Conversion
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Landing Pages qui
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Convertissent Vraiment
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>+35% de conversions garanties</strong> avec nos landing pages optimisées UX/UI. 
            Audit gratuit de vos pages actuelles.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="text-center p-2 sm:p-4 bg-white/80 rounded-lg border border-gray-100">
              <div className="text-lg sm:text-2xl font-bold text-purple-600">+35%</div>
              <div className="text-xs sm:text-sm text-gray-600">Conversions</div>
            </div>
            <div className="text-center p-2 sm:p-4 bg-white/80 rounded-lg border border-gray-100">
              <div className="text-lg sm:text-2xl font-bold text-green-600">72h</div>
              <div className="text-xs sm:text-sm text-gray-600">Livraison</div>
            </div>
            <div className="text-center p-2 sm:p-4 bg-white/80 rounded-lg border border-gray-100">
              <div className="text-lg sm:text-2xl font-bold text-blue-600">100%</div>
              <div className="text-xs sm:text-sm text-gray-600">Satisfait</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Audit Gratuit
              <TrendingUp className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            <Button 
              onClick={openCalendly}
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300"
            >
              <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Appel 15 min
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span>Rejoint par 200+ entrepreneurs satisfaits</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
