import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <div className="text-center rounded-2xl p-8 sm:p-10 bg-primary relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
          Envie des mêmes résultats pour votre business ?
        </h3>
        <p className="text-lg text-primary-foreground/80 mb-6 max-w-xl mx-auto">
          Recevez un audit gratuit et un plan d'action personnalisé sous 24h.
        </p>
        
        <Button 
          asChild
          size="lg" 
          className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 font-semibold shadow-lg"
        >
          <Link to="/contact">
            Demander mon audit gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4" /> Audit 100% gratuit
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> Réponse sous 24h
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Sans engagement
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCTA;
