
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Clock } from "lucide-react";

const TrustSection = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default TrustSection;
