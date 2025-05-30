
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock, CheckCircle, Star, TrendingUp, Zap, ArrowRight, Phone } from "lucide-react";

const TrustSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const guarantees = [
    {
      icon: Shield,
      title: "Garantie Résultat",
      description: "Si votre site n'augmente pas vos conversions de 30% minimum, nous le refaisons gratuitement.",
      color: "text-green-600",
      gradient: "from-green-500 to-emerald-500",
      highlight: "30% ou refait"
    },
    {
      icon: Clock,
      title: "Livraison Express",
      description: "Votre site professionnel livré en 7 jours maximum, ou nous vous offrons 50% de réduction.",
      color: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      highlight: "7 jours max"
    },
    {
      icon: Users,
      title: "Support Premium",
      description: "Accompagnement personnalisé, formations et optimisations inclus pendant 3 mois complets.",
      color: "text-purple-600",
      gradient: "from-purple-500 to-violet-500",
      highlight: "3 mois inclus"
    },
    {
      icon: Award,
      title: "Expertise Certifiée",
      description: "Équipe certifiée Google Partner avec 5+ ans d'expérience en création de sites performants.",
      color: "text-orange-600",
      gradient: "from-orange-500 to-amber-500",
      highlight: "Google Partner"
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      number: "350%",
      label: "Augmentation max",
      subtitle: "E-commerce Nov 2024",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      number: "127",
      label: "Sites créés",
      subtitle: "En 2024",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Satisfaction",
      subtitle: "+100 avis clients",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      number: "98%",
      label: "Recommandent",
      subtitle: "Nos services",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const clientLogos = [
    { name: "TechStart", industry: "SaaS", color: "bg-gradient-to-br from-blue-500 to-purple-600" },
    { name: "EcoGreen", industry: "Énergie", color: "bg-gradient-to-br from-green-500 to-emerald-600" },
    { name: "FinanceUp", industry: "Finance", color: "bg-gradient-to-br from-indigo-500 to-blue-600" },
    { name: "Fashion Co", industry: "E-commerce", color: "bg-gradient-to-br from-pink-500 to-rose-600" },
    { name: "Immo Premium", industry: "Immobilier", color: "bg-gradient-to-br from-orange-500 to-red-600" },
    { name: "Analytics Pro", industry: "Data", color: "bg-gradient-to-br from-violet-500 to-purple-600" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header moderne */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-2 text-sm font-semibold mb-6 border-0">
            <Shield className="w-4 h-4 mr-2" />
            Garanties Solides & Expertise Reconnue
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Pourquoi{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              nous choisir
            </span>{" "}
            pour votre site web ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des <strong className="text-purple-700">garanties uniques</strong> et une expertise prouvée pour votre succès digital
          </p>
        </div>

        {/* Garanties avec CTA intégré */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${guarantee.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <CardContent className="p-6 text-center relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${guarantee.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  {guarantee.highlight}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section forte */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Prêt à transformer votre présence digitale ?
              </h3>
              <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
                Consultation gratuite de 30 minutes pour analyser vos besoins et vous proposer la solution parfaite
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Devis Gratuit Immédiat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Appel Gratuit 30min
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Résultats prouvés */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl mb-16 border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 text-sm font-semibold mb-6 border-0">
                <TrendingUp className="w-4 h-4 mr-2" />
                Résultats Concrets
              </Badge>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nos chiffres{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  parlent d'eux-mêmes
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
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

        {/* Section clients avec social proof */}
        <div className="text-center">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 text-sm font-semibold mb-8 border-0">
            <Users className="w-4 h-4 mr-2" />
            +127 Entreprises Nous Font Confiance
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rejoignez nos clients satisfaits
            </span>
          </h3>
          <p className="text-lg text-gray-600 mb-12">Des TPE aux grandes entreprises, tous secteurs confondus</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {clientLogos.map((client, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className={`w-10 h-10 ${client.color} rounded-xl flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm shadow-md`}>
                    {client.name.charAt(0)}
                  </div>
                  <div className="text-sm font-bold text-gray-800 mb-1">{client.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{client.industry}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CheckCircle className="w-5 h-5 mr-3" />
            <div>
              <div className="text-lg font-bold">98% de clients satisfaits</div>
              <div className="text-sm text-green-100">nous recommandent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
