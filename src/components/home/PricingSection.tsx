import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Une offre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              accessible
            </span>
          </h2>

          <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
            <p className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Site internet professionnel
            </p>
            <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
              à partir de 300€
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <Gift className="w-5 h-5 text-accent" />
              <span className="font-medium">+ accompagnement offert pendant 6 mois</span>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-lg px-8 py-6 font-semibold shadow-xl hover:scale-105 transition-all"
            >
              <Link to="/contact">
                Je veux mon site
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
