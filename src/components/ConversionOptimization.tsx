
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, TrendingUp, Users, Clock, Star } from "lucide-react";

const ConversionOptimization = () => {
  const optimizations = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Vitesse Optimisée",
      description: "Sites ultra-rapides pour réduire l'abandon",
      benefit: "Temps de chargement < 2s"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "UX Conversion",
      description: "Interface pensée pour convertir vos visiteurs",
      benefit: "Taux conversion optimisé"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Sécurité SSL",
      description: "Certificats inclus pour rassurer vos clients",
      benefit: "Confiance maximale"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: "Analytics Intégrés",
      description: "Suivi des performances et optimisations",
      benefit: "ROI mesurable"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-white text-purple-600 mb-4">
            Optimisations Incluses
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Sites Web Haute Performance
          </h3>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto">
            Chaque site est optimisé pour maximiser vos conversions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {optimizations.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-purple-100 text-sm mb-3">{item.description}</p>
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
