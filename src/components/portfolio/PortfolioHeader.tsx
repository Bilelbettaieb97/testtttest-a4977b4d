
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const PortfolioHeader = () => {
  return (
    <div className="text-center mb-8">
      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        <Award className="w-4 h-4 mr-2" />
        Résultats Clients
      </Badge>
      
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Résultats</span>
      </h2>
      
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
        Comment nos stratégies marketing digital transforment le business de nos clients
      </p>

      <div className="flex justify-center items-center gap-8 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">150+</div>
          <div className="text-sm text-gray-600">Clients accompagnés</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">+300%</div>
          <div className="text-sm text-gray-600">ROI moyen</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">98%</div>
          <div className="text-sm text-gray-600">Satisfaits</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
