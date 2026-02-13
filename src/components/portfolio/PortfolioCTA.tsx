
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <div className="text-center bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Prêt à booster votre croissance digitale ?
        </h3>
        <p className="text-lg text-gray-600 mb-4 max-w-xl mx-auto">
          Obtenez un audit gratuit de votre stratégie marketing digital
        </p>
        
        <Button 
          asChild
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <Link to="/contact">
            Demander un audit gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
        
        <div className="text-sm text-gray-500 font-medium mt-3">
          ✅ Audit gratuit • ✅ Plan d'action personnalisé • ✅ Sans engagement
        </div>
      </div>
    </div>
  );
};

export default PortfolioCTA;
