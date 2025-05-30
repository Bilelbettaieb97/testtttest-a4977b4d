
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock, TrendingUp, Star, Zap, ArrowRight, Phone } from "lucide-react";

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
      description: "30% d'augmentation minimum ou refait gratuitement.",
      highlight: "30% ou refait"
    },
    {
      icon: Clock,
      title: "Livraison Express",
      description: "Site livré en 7 jours max ou 50% de réduction.",
      highlight: "7 jours max"
    },
    {
      icon: Users,
      title: "Support Premium",
      description: "Accompagnement pendant 3 mois complets.",
      highlight: "3 mois inclus"
    },
    {
      icon: Award,
      title: "Expertise Certifiée",
      description: "Équipe Google Partner avec 5+ ans d'expérience.",
      highlight: "Google Partner"
    }
  ];

  const achievements = [
    { icon: TrendingUp, number: "350%", label: "Augmentation max", gradient: "from-green-500 to-emerald-600" },
    { icon: Users, number: "127", label: "Sites créés", gradient: "from-blue-500 to-cyan-600" },
    { icon: Star, number: "4.9/5", label: "Satisfaction", gradient: "from-yellow-500 to-orange-600" },
    { icon: Zap, number: "98%", label: "Recommandent", gradient: "from-purple-500 to-pink-600" }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-2 text-sm font-semibold mb-6 border-0">
            <Shield className="w-4 h-4 mr-2" />
            Garanties & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Pourquoi{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              nous choisir
            </span> ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des <strong className="text-purple-700">garanties uniques</strong> et une expertise prouvée
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white/90">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <guarantee.icon className="w-6 h-6 text-white" />
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  {guarantee.highlight}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">
                Prêt à transformer votre présence digitale ?
              </h3>
              <p className="text-lg text-purple-100 mb-4 max-w-xl mx-auto">
                Consultation gratuite pour analyser vos besoins
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-50 px-6 py-3 text-lg font-semibold"
                >
                  Devis Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Appel Gratuit
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 text-sm font-semibold mb-4 border-0">
              <TrendingUp className="w-4 h-4 mr-2" />
              Résultats Concrets
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Nos chiffres{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                parlent d'eux-mêmes
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                  {achievement.number}
                </div>
                <div className="font-semibold text-gray-900 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
