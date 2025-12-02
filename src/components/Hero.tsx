import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Shield, Calendar, Star, Zap } from "lucide-react";
import ContactForm from "./contact/ContactForm";

const Hero = () => {
  const openPriceEstimator = () => {
    window.open("https://estimationdesiteweb.lovable.app/", "_blank");
  };
  const openCalendly = () => {
    window.open("https://calendly.com/convertilab-5bsc/30min", "_blank");
  };

  return (
    <main className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-cyan-200 rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: "0.5s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-4 sm:pt-8 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Information */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200/50 text-purple-800 rounded-full animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default shadow-lg">
              <Rocket className="w-4 h-4 mr-2 text-purple-600" />
              <span className="font-semibold">Agence Web Startup • Agile & Créative</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight animate-slide-up">
              Des Sites Web Modernes
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 animate-gradient-shift">
                qui Font Grandir Votre Business
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed animate-fade-in">
              Nous créons des sites web <strong className="text-purple-700">sur-mesure, rapides et optimisés</strong> pour transformer vos visiteurs en clients.
              <span className="block mt-2 text-slate-500">Une approche startup : agile, design, orientée résultats.</span>
            </p>

            {/* Stats - Startup Style */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-scale-in">
              <div className="group text-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-purple-300">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Sur-Mesure</div>
                <div className="text-[10px] text-slate-400 mt-0.5 hidden sm:block">Design unique pour vous</div>
              </div>
              <div className="group text-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-emerald-300">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                  2-4
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Semaines</div>
                <div className="text-[10px] text-slate-400 mt-0.5 hidden sm:block">Méthode agile</div>
              </div>
              <div className="group text-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-cyan-300">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Support</div>
                <div className="text-[10px] text-slate-400 mt-0.5 hidden sm:block">Réactif & humain</div>
              </div>
            </div>

            {/* CTAs - Startup Style */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 mb-6 animate-slide-up">
              <Button 
                onClick={openPriceEstimator} 
                size="lg" 
                className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 rounded-xl"
              >
                <Zap className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Estimer mon projet
              </Button>

              <Button 
                onClick={openCalendly} 
                variant="outline" 
                size="lg" 
                className="group w-full sm:w-auto border-2 border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg rounded-xl"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Planifier un appel gratuit
              </Button>
            </div>

            {/* Trust Indicators - Startup Style */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm animate-fade-in">
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-purple-100 flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
                <span className="font-semibold text-slate-700">
                  <span className="text-purple-600">150+</span> sites créés
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-emerald-100 flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-emerald-700">Satisfait ou remboursé</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-100 flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                <span className="text-amber-500">★★★★★</span>
                <span className="font-semibold text-amber-700">5/5</span>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="animate-fade-in">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
      </div>
    </main>
  );
};

export default Hero;