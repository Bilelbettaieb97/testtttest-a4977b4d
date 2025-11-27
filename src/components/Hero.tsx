import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Award, Calendar } from "lucide-react";

const Hero = () => {
  const openPriceEstimator = () => {
    window.open("https://estimationdesiteweb.lovable.app/", "_blank");
  };

  const openCalendly = () => {
    window.open("https://calendly.com/convertilab-5bsc/30min", "_blank");
  };

  return (
    <main className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background Elements with parallax effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-20 animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-200 rounded-full blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-32 pb-8 sm:pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Badge with glassmorphism */}
          <div className="inline-flex items-center px-4 py-2 mb-6 sm:mb-8 text-sm glass border border-purple-200 text-purple-800 rounded-full animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default shadow-lg">
            <Award className="w-4 h-4 mr-2 text-purple-600" />
            <span className="font-semibold">Agence Web Créative & Sur-Mesure</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight animate-slide-up">
            Sites Web
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-shift">
              Sur-Mesure & Performants
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in">
            <strong className="text-purple-700">Design unique & développement expert</strong> pour créer le site web qui
            vous ressemble.
            <br className="hidden sm:block" />
            Consultation gratuite pour votre projet digital.
          </p>

          {/* Enhanced Stats with glassmorphism */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-12 max-w-3xl mx-auto animate-scale-in">
            <div className="group text-center p-4 sm:p-6 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-sm sm:text-base text-gray-700 font-semibold">Sur-Mesure</div>
            </div>
            <div className="group text-center p-4 sm:p-6 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                2-4
              </div>
              <div className="text-sm sm:text-base text-gray-700 font-semibold">Semaines</div>
            </div>
            <div className="group text-center p-4 sm:p-6 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-sm sm:text-base text-gray-700 font-semibold">Support</div>
            </div>
          </div>

          {/* Enhanced CTAs with glow effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 animate-slide-up">
            <Button
              onClick={openPriceEstimator}
              size="lg"
              className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl animate-glow"
            >
              Estimer le coût en 1 clic
              <Code className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
            </Button>

            <Button
              onClick={openCalendly}
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-110 glass shadow-xl hover:shadow-2xl"
            >
              <Calendar className="mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
              Appel 30 min
            </Button>
          </div>

          {/* Enhanced Trust Indicator */}
          <div className="flex items-center justify-center text-sm sm:text-base text-gray-600 animate-fade-in">
            <div className="glass px-6 py-3 rounded-full border border-purple-200 flex items-center gap-3 shadow-lg hover:scale-105 transition-transform duration-300">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <span className="font-semibold">
                <span className="text-purple-600">+150</span> sites web créés pour des entreprises satisfaites
              </span>
            </div>
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
