import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Prêt à lancer votre site ?
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-lg max-w-xl mx-auto">
          Recevez votre maquette gratuite en 24h
        </p>
        <Button
          asChild
          size="lg"
          className="bg-background text-foreground hover:bg-background/90 text-lg px-10 py-6 font-semibold shadow-xl hover:scale-105 transition-all"
        >
          <Link to="/contact">
            Je veux mon site
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
