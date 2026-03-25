import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Maquette 100% gratuite",
  "Site livré en 48h",
  "Design premium",
  "Optimisé pour convertir",
  "À partir de 300€",
];

const OfferSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Une offre simple,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              sans risque
            </span>
          </h2>

          <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-lg mb-8">
            <ul className="space-y-4 text-left max-w-sm mx-auto">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground text-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-lg px-8 py-6 font-semibold shadow-xl hover:scale-105 transition-all"
          >
            <Link to="/contact">
              Voir ma maquette gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
