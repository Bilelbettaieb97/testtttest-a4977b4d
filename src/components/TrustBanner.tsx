import { Shield, Award, Clock, Users, Star, CheckCircle } from "lucide-react";

const TrustBanner = () => {
  const trustItems = [
    { icon: Shield, text: "Paiement 100% Sécurisé" },
    { icon: Award, text: "+150 Sites Créés" },
    { icon: Clock, text: "Livraison 2-4 Semaines" },
    { icon: Users, text: "Support 24/7" },
    { icon: Star, text: "Satisfaction Garantie" },
    { icon: CheckCircle, text: "Devis Gratuit" },
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...trustItems, ...trustItems];

  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 py-3 overflow-hidden">
      <div className="flex animate-marquee">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-8 whitespace-nowrap text-white"
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">{item.text}</span>
              <span className="mx-4 text-white/50">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBanner;
