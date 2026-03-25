import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center overflow-hidden min-h-[70vh]">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
            On crée votre site internet qui vous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              ramène des clients
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Pas juste un beau site. Un site pensé pour{" "}
            <strong className="text-foreground">convertir vos visiteurs en clients</strong>{" "}
            dès les premiers jours.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-lg px-10 py-6 font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">
                Obtenir mon site
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-accent" />
              Maquette offerte – sans engagement
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
