import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, Calendar, Zap, BarChart3, Clock, CheckCircle, Users } from "lucide-react";
import { lazy, Suspense, useState, useEffect } from "react";

// Lazy load ContactForm (imports supabase + canvas-confetti)
const ContactForm = lazy(() => import("./contact/ContactForm"));

const rotatingWords = ["Business", "Boutique", "Projet", "Marque"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];
    
    if (!isDeleting && displayedText === currentWord) {
      // Pause before deleting
      const pause = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(pause);
    }
    
    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      return;
    }

    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentWord.substring(0, displayedText.length - 1)
          : currentWord.substring(0, displayedText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

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
            {/* Urgency Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-4 text-sm bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 text-orange-800 rounded-full animate-fade-in shadow-lg">
              <Clock className="w-4 h-4 mr-2 text-orange-600 animate-pulse" />
              <span className="font-bold">🔥 2 places restantes ce mois-ci</span>
            </div>

            {/* Main Heading - Benefit-focused */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-slide-up">
              Lancez votre{" "}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 will-change-transform">
                {displayedText}<span className="animate-pulse text-purple-600">|</span>
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                en 7 Jours Chrono
              </span>
            </h1>

            {/* Subheading - Benefit + Pain point */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-fade-in">
              Vous perdez des clients chaque jour sans site web professionnel. Nous créons des <strong className="text-purple-700">sites sur-mesure qui convertissent</strong> — design premium, SEO optimisé, livraison express.
            </p>

            {/* Stats - Proof-focused */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-scale-in">
              <div className="group text-center p-3 sm:p-4 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  +300%
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">ROI Moyen</div>
                <div className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">Pour nos clients</div>
              </div>
              <div className="group text-center p-3 sm:p-4 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                  150+
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">Sites Livrés</div>
                <div className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">Tous secteurs</div>
              </div>
              <div className="group text-center p-3 sm:p-4 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-1">
                  4.9★
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">Avis Clients</div>
                <div className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">Satisfaction 98%</div>
              </div>
            </div>

            {/* CTAs - Action-oriented with value */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 mb-6 animate-slide-up">
              <Button 
                asChild
                size="lg" 
                className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <a href="/portfolio">
                  <Rocket className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Découvrir nos réalisations
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </Button>

              <Button 
                onClick={openCalendly} 
                variant="outline" 
                size="lg" 
                className="group w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 glass shadow-xl"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Appel gratuit 15 min
              </Button>
            </div>

            {/* Trust Indicators - Objection killers */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm text-gray-600 animate-fade-in">
              <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-200 flex items-center gap-2 shadow-lg">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-semibold text-green-700">Satisfait ou remboursé</span>
              </div>
              <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-purple-200 flex items-center gap-2 shadow-lg">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-purple-700">Paiement après livraison</span>
              </div>
              <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-blue-200 flex items-center gap-2 shadow-lg">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-blue-700">5M€+ CA généré</span>
              </div>
            </div>
          </div>

          {/* Right - Contact Form (lazy loaded) */}
          <div className="animate-fade-in">
            <Suspense fallback={
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-8 min-h-[520px] sm:min-h-[580px] flex items-center justify-center" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 580px' } as React.CSSProperties}>
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
