import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";

interface CaseStudyCTAProps {
  results: string;
}

const CaseStudyCTA = ({ results }: CaseStudyCTAProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card 
          ref={ref}
          className={`p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/10 to-background border-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              L'Impact Final
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              {results}
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-12 rounded-2xl text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à transformer votre business ?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Obtenez des résultats similaires pour votre projet
            </p>
            <Button
              size="lg"
              onClick={goToContact}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg"
            >
              Démarrer mon projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudyCTA;
