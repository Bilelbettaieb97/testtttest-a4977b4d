
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock, CheckCircle, Star, TrendingUp, Zap } from "lucide-react";

const TrustSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantie 35% ou remboursé",
      description: "Si vos conversions n'augmentent pas de 35% minimum en 3 mois, nous vous remboursons intégralement.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Clock,
      title: "Livraison en 7 jours max",
      description: "Votre landing page optimisée livrée en une semaine maximum, ou elle est gratuite.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Support 3 mois inclus",
      description: "Accompagnement, optimisations et ajustements inclus pendant 3 mois sans frais supplémentaires.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Award,
      title: "Certifié Google Partner",
      description: "Expertise reconnue par Google avec certification officielle en optimisation des conversions.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      number: "350%",
      label: "Record d'amélioration",
      subtitle: "Client e-commerce Nov 2024"
    },
    {
      icon: Users,
      number: "127",
      label: "Clients accompagnés",
      subtitle: "En 2024 uniquement"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Note moyenne",
      subtitle: "Sur +100 avis clients"
    },
    {
      icon: Zap,
      number: "98%",
      label: "Taux de satisfaction",
      subtitle: "Clients recommandent"
    }
  ];

  const clientLogos = [
    { name: "TechStart", industry: "SaaS" },
    { name: "EcoGreen", industry: "Énergie" },
    { name: "FinanceUp", industry: "Finance" },
    { name: "Fashion Trends", industry: "E-commerce" },
    { name: "Immobilier Premium", industry: "Immobilier" },
    { name: "Analytics Pro", industry: "SaaS" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Pourquoi nous faire <span className="text-purple-600">confiance</span> ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Des garanties solides et une expertise reconnue pour votre tranquillité d'esprit
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${guarantee.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <guarantee.icon className={`w-8 h-8 ${guarantee.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Nos résultats parlent d'eux-mêmes
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">{achievement.number}</div>
                <div className="font-semibold text-gray-900 mb-1">{achievement.label}</div>
                <div className="text-xs text-gray-500">{achievement.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Trust */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">
            Ils nous font confiance
          </h3>
          
          {/* Simulated client logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-lg font-bold text-gray-700 mb-1">{client.name}</div>
                <div className="text-sm text-gray-500">{client.industry}</div>
              </div>
            ))}
          </div>

          {/* Final trust element */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold">
            <CheckCircle className="w-5 h-5 mr-2" />
            +127 entreprises nous font confiance depuis 2019
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
