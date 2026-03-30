import { Badge } from "@/components/ui/badge";
import { Award, Star, Users, TrendingUp } from "lucide-react";

const PortfolioHeader = () => {
  return (
    <div className="text-center mb-6 sm:mb-8">
      <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border-0">
        <Award className="w-4 h-4 mr-2" />
        Résultats Clients
      </Badge>
      
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
        Des Résultats <span className="text-primary">Concrets et Mesurables</span>
      </h2>
      
      <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
        Découvrez comment nos stratégies ont transformé le business de nos clients.
      </p>

      {/* Metrics bar — desktop only */}
      <div className="hidden sm:flex justify-center gap-10 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-0.5">
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div className="text-2xl font-black text-foreground">+50</div>
          <div className="text-xs text-muted-foreground">Clients</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-0.5">
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-black text-foreground">+280%</div>
          <div className="text-xs text-muted-foreground">CA moyen</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-0.5">
            <Star className="w-4 h-4 text-yellow-500" />
          </div>
          <div className="text-2xl font-black text-foreground">4.9/5</div>
          <div className="text-xs text-muted-foreground">Satisfaction</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
