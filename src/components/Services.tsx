
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, FileText, BarChart3, Settings, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: "Création de landing pages sur mesure",
      description: "Nous concevons des pages uniques et performantes, adaptées à votre marque et vos objectifs. Notre approche combine un design moderne et ergonomique, un message percutant et une technologie fiable.",
      features: [
        "Design UX/UI optimisé pour l'engagement",
        "Rédaction persuasive, centrée sur l'expérience utilisateur",
        "Intégration fluide avec vos outils marketing (CRM, emailings, analytics)"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-pink-600" />,
      title: "Audit et optimisation de landing pages existantes",
      description: "Vous avez déjà une landing page, mais elle ne convertit pas ? Nous analysons ses forces et faiblesses pour vous proposer des solutions concrètes et rapides d'amélioration.",
      features: [
        "Analyse complète des performances",
        "Identification des points de friction",
        "Recommandations d'optimisation prioritaires"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Tests A/B & analyse de performance",
      description: "Mesurez l'impact réel de vos landing pages grâce à des tests A/B rigoureux et un suivi détaillé des KPIs (taux de conversion, temps passé, comportement utilisateur).",
      features: [
        "Tests A/B scientifiques",
        "Analyse comportementale approfondie",
        "Reporting détaillé et actionnable"
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-green-600" />,
      title: "Maintenance et mises à jour",
      description: "Nous assurons un suivi régulier pour que vos landing pages restent performantes et adaptées à vos évolutions commerciales.",
      features: [
        "Suivi continu des performances",
        "Mises à jour techniques régulières",
        "Optimisations basées sur les données"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète pour maximiser vos conversions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl text-gray-900 mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Découvrir nos tarifs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
