
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock, CheckCircle, Star, TrendingUp, Zap } from "lucide-react";

const TrustSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantie 35% ou remboursé",
      description: "Si vos conversions n'augmentent pas de 35% minimum en 3 mois, nous vous remboursons intégralement.",
      color: "text-green-600",
      bg: "bg-green-50",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Livraison en 7 jours max",
      description: "Votre landing page optimisée livrée en une semaine maximum, ou elle est gratuite.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Support 3 mois inclus",
      description: "Accompagnement, optimisations et ajustements inclus pendant 3 mois sans frais supplémentaires.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Award,
      title: "Certifié Google Partner",
      description: "Expertise reconnue par Google avec certification officielle en optimisation des conversions.",
      color: "text-orange-600",
      bg: "bg-orange-50",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      number: "350%",
      label: "Record d'amélioration",
      subtitle: "Client e-commerce Nov 2024",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      number: "127",
      label: "Clients accompagnés",
      subtitle: "En 2024 uniquement",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Note moyenne",
      subtitle: "Sur +100 avis clients",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      number: "98%",
      label: "Taux de satisfaction",
      subtitle: "Clients recommandent",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const clientLogos = [
    { name: "TechStart", industry: "SaaS", color: "bg-gradient-to-br from-blue-500 to-purple-600" },
    { name: "EcoGreen", industry: "Énergie", color: "bg-gradient-to-br from-green-500 to-emerald-600" },
    { name: "FinanceUp", industry: "Finance", color: "bg-gradient-to-br from-indigo-500 to-blue-600" },
    { name: "Fashion Trends", industry: "E-commerce", color: "bg-gradient-to-br from-pink-500 to-rose-600" },
    { name: "Immobilier Premium", industry: "Immobilier", color: "bg-gradient-to-br from-orange-500 to-red-600" },
    { name: "Analytics Pro", industry: "SaaS", color: "bg-gradient-to-br from-violet-500 to-purple-600" }
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Garanties et Confiance
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pourquoi nous faire{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              confiance
            </span>{" "}
            ?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Des garanties solides et une expertise reconnue pour votre tranquillité d'esprit
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${guarantee.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${guarantee.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <guarantee.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-16 shadow-2xl mb-20 border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Résultats Prouvés
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nos résultats parlent{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  d'eux-mêmes
                </span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Des chiffres concrets qui démontrent notre expertise en optimisation des conversions
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{achievement.label}</div>
                  <div className="text-sm text-gray-500">{achievement.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Trust */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Users className="w-4 h-4 mr-2" />
            Références Clients
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ils nous font confiance
            </span>
          </h3>
          <p className="text-lg text-gray-600 mb-12">Des entreprises de toutes tailles qui ont transformé leurs résultats</p>
          
          {/* Enhanced client logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {clientLogos.map((client, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className={`w-12 h-12 ${client.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg`}>
                    {client.name.charAt(0)}
                  </div>
                  <div className="text-base font-bold text-gray-800 mb-1">{client.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{client.industry}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced final trust element */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CheckCircle className="w-6 h-6 mr-3" />
            <div>
              <div className="text-lg font-bold">+127 entreprises nous font confiance</div>
              <div className="text-sm text-green-100">depuis 2019</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
