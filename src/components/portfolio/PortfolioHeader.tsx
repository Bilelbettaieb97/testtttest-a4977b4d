import { Badge } from "@/components/ui/badge";
import { Award, Star, Users, TrendingUp } from "lucide-react";

const PortfolioHeader = () => {
  return (
    <div className="text-center mb-8">
      <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border-0">
        <Award className="w-4 h-4 mr-2" />
        Résultats Clients
      </Badge>
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
        Plus de 50 projets <span className="text-primary">réalisés</span>
      </h2>
      
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
        Sites vitrines, e-commerces, landing pages — découvrez nos réalisations dans différents secteurs.
      </p>

      {/* Metrics bar */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div className="text-3xl font-black text-foreground">+50</div>
          <div className="text-sm text-muted-foreground">Clients accompagnés</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-black text-foreground">+280%</div>
          <div className="text-sm text-muted-foreground">Croissance moyenne</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-3xl font-black text-foreground">4.9/5</div>
          <div className="text-sm text-muted-foreground">Satisfaction client</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
