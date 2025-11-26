import { Shield, Lock, Award, Clock, ThumbsUp, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Paiement Sécurisé",
      description: "Vos données protégées",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Garantie Satisfait",
      description: "ou remboursé 30j",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "SSL & RGPD",
      description: "Conformité totale",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Réponse < 2h",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: ThumbsUp,
      title: "98% Satisfaits",
      description: "+150 clients heureux",
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: CheckCircle2,
      title: "100% Sur-Mesure",
      description: "Unique pour vous",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi nous faire <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">confiance</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Votre tranquillité d'esprit est notre priorité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-14 h-14 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <badge.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{badge.title}</h4>
                    <p className="text-sm text-gray-600">{badge.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
