import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Award, Calendar } from "lucide-react";
import ContactForm from "./contact/ContactForm";
import TrustBanner from "./TrustBanner";
const Hero = () => {
  const openPriceEstimator = () => {
    window.open("https://estimationdesiteweb.lovable.app/", "_blank");
  };
  const openCalendly = () => {
    window.open("https://calendly.com/convertilab-5bsc/30min", "_blank");
  };
  return <main className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30 animate-float" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-20 animate-float" style={{
      animationDelay: "0.5s"
    }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-4 sm:pt-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Information */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm glass border border-purple-200 text-purple-800 rounded-full animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default shadow-lg">
              <Award className="w-4 h-4 mr-2 text-purple-600" />
              <span className="font-semibold">Agence Web Créative & Sur-Mesure</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-slide-up">
              Sites Web
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-shift">
                Sur-Mesure & Performants
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed font-medium animate-fade-in">
              <strong className="text-purple-700">Design unique & développement expert</strong> pour créer le site web qui
              vous ressemble. Consultation gratuite pour votre projet digital.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-scale-in">
              <div className="group text-center p-3 sm:p-4 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">Sur-Mesure</div>
              </div>
              <div className="group text-center p-3 sm:p-4 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                  2-4
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">Semaines</div>
              </div>
              <div className="group text-center p-3 sm:p-4 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">Support</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 mb-6 animate-slide-up">
              <Button onClick={openPriceEstimator} size="lg" className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Estimer le coût de votre site         
                <Code className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>

              <Button onClick={openCalendly} variant="outline" size="lg" className="group w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 glass shadow-xl">
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Appel 30 min
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center lg:justify-start text-sm text-gray-600 animate-fade-in">
              <div className="glass px-4 py-2 rounded-full border border-purple-200 flex items-center gap-2 shadow-lg">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="font-semibold">
                  <span className="text-purple-600">+150</span> sites créés
                </span>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="animate-fade-in">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <TrustBanner />
    </main>;
};
export default Hero;