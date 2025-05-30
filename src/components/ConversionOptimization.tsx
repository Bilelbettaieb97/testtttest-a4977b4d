
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, TrendingUp, Users } from "lucide-react";

const ConversionOptimization = () => {
  const optimizations = [
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: "Vitesse Optimisée",
      description: "Sites ultra-rapides",
      benefit: "< 2s de chargement"
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      title: "UX Conversion",
      description: "Interface pensée pour convertir",
      benefit: "Taux optimisé"
    },
    {
      icon: <Shield className="w-5 h-5 text-green-500" />,
      title: "Sécurité SSL",
      description: "Certificats inclus",
      benefit: "Confiance max"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
      title: "Analytics",
      description: "Suivi des performances",
      benefit: "ROI mesurable"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <Badge className="bg-white text-purple-600 mb-4">
            Optimisations Incluses
          </Badge>
          <h3 className="text-2xl font-bold text-white mb-3">
            Sites Web Haute Performance
          </h3>
          <p className="text-purple-100 max-w-xl mx-auto">
            Optimisé pour maximiser vos conversions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {optimizations.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-purple-100 text-sm mb-2">{item.description}</p>
                <div className="text-yellow-300 font-semibold text-sm">{item.benefit}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversionOptimization;
