
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const PortfolioHeader = () => {
  return (
    <div className="text-center mb-8">
      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        <Award className="w-4 h-4 mr-2" />
        Portfolio Clients
      </Badge>
      
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Réalisations</span>
      </h2>
      
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
        Comment nous transformons les entreprises avec des sites performants
      </p>

      <div className="flex justify-center items-center gap-8 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">150+</div>
          <div className="text-sm text-gray-600">Sites créés</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">+280%</div>
          <div className="text-sm text-gray-600">CA moyen</div>
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
