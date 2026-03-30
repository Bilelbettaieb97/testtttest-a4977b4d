import { Button } from "@/components/ui/button";
import { ArrowRight, Key, Search } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <div className="text-center rounded-2xl p-6 sm:p-10 bg-primary relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl sm:text-3xl font-bold text-primary-foreground mb-2 sm:mb-3">
          Votre site professionnel dès 39€/mois
        </h3>
        <p className="text-sm sm:text-lg text-primary-foreground/80 mb-5 max-w-xl mx-auto">
          Vous êtes propriétaire de votre site, visible sur Google dès le lancement.
        </p>
        
        <Button 
          asChild
          size="lg" 
          className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 text-base sm:text-lg px-8 py-6 font-semibold shadow-lg"
        >
          <Link to="/offre-mensuelle/devis">
            Lancer mon site
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-xs sm:text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1.5">
            <Key className="w-3.5 h-3.5" /> Propriétaire
          </span>
          <span className="flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5" /> Visible sur Google
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCTA;
