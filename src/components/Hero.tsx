
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
    <main className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 sm:mb-8 text-sm bg-purple-100 text-purple-800 rounded-full border border-purple-200 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            Spécialiste Landing Pages Haute Conversion
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight animate-slide-up">
            Landing Pages qui
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-shift">
              Convertissent Vraiment
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in">
            <strong className="text-purple-700">+35% de conversions garanties</strong> avec nos landing pages optimisées UX/UI. 
            <br className="hidden sm:block" />
            Audit gratuit de vos pages actuelles.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-12 max-w-3xl mx-auto animate-scale-in">
            <div className="text-center p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">+35%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Conversions</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">72h</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Livraison</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Satisfait</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 animate-slide-up">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Audit Gratuit
              <TrendingUp className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            
            <Button 
              onClick={openCalendly}
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Appel 15 min
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center text-sm sm:text-base text-gray-500 animate-fade-in">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            <span className="font-medium">Rejoint par 200+ entrepreneurs satisfaits</span>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
