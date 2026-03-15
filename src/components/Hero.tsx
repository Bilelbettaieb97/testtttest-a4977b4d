import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, Calendar, Star, Zap, BarChart3 } from "lucide-react";
import { lazy, Suspense } from "react";

// Lazy load ContactForm (imports supabase + canvas-confetti)
const ContactForm = lazy(() => import("./contact/ContactForm"));

const Hero = () => {
  const openPriceEstimator = () => {
    window.open("https://estimationdesiteweb.lovable.app/", "_blank");
  };
  const openCalendly = () => {
    window.open("https://calendly.com/convertilab-5bsc/30min", "_blank");
  };

  return (
    <main className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: "0.5s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-4 sm:pt-8 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Information */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm glass border border-purple-200 text-purple-800 rounded-full animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default shadow-lg">
              <Rocket className="w-4 h-4 mr-2 text-purple-600" />
              <span className="font-semibold">Agence de création de site web • Paris</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-slide-up">
              Création de Sites Web
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Performants & Sur-Mesure
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-fade-in">
              Sites vitrines, e-commerce et applications web — nous concevons des <strong className="text-purple-700">solutions digitales sur-mesure</strong> qui convertissent vos visiteurs en clients.
              <span className="block mt-2 text-gray-600">Design professionnel, référencement optimisé, responsive mobile.</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-scale-in">
              <div className="group text-center p-3 sm:p-4 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  +300%
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">ROI Moyen</div>
                <div className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">Sur nos campagnes</div>
              </div>
              <div className="group text-center p-3 sm:p-4 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                  150+
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">Clients</div>
                <div className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">Tous secteurs</div>
              </div>
              <div className="group text-center p-3 sm:p-4 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">Support</div>
                <div className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">Réactif & humain</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 mb-6 animate-slide-up">
              <Button 
                onClick={openPriceEstimator} 
                size="lg" 
                className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Zap className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Audit gratuit
              </Button>

              <Button 
                onClick={openCalendly} 
                variant="outline" 
                size="lg" 
                className="group w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 glass shadow-xl"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Planifier un appel gratuit
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm text-gray-600 animate-fade-in">
              <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-purple-200 flex items-center gap-2 shadow-lg">
                <BarChart3 className="w-4 h-4 text-purple-600" />
                <span className="font-semibold">
                  <span className="text-purple-600">5M€+</span> de CA généré
                </span>
              </div>
              <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-200 flex items-center gap-2 shadow-lg">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-semibold text-green-700">Satisfait ou remboursé</span>
              </div>
              <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-blue-200 flex items-center gap-2 shadow-lg">
                <span className="text-yellow-500">★★★★★</span>
                <span className="font-semibold text-blue-700">5/5</span>
              </div>
            </div>
          </div>

          {/* Right - Contact Form (lazy loaded) */}
          <div className="animate-fade-in">
            <Suspense fallback={
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-8 min-h-[400px] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <ContactForm />
            </Suspense>
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
