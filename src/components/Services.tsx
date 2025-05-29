
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, FileText, BarChart3, Settings, ArrowRight, Sparkles } from "lucide-react";

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
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileText className="w-12 h-12 text-pink-600" />,
      title: "Audit et optimisation de landing pages existantes",
      description: "Vous avez déjà une landing page, mais elle ne convertit pas ? Nous analysons ses forces et faiblesses pour vous proposer des solutions concrètes et rapides d'amélioration.",
      features: [
        "Analyse complète des performances",
        "Identification des points de friction",
        "Recommandations d'optimisation prioritaires"
      ],
      gradient: "from-pink-500 to-orange-500"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Tests A/B & analyse de performance",
      description: "Mesurez l'impact réel de vos landing pages grâce à des tests A/B rigoureux et un suivi détaillé des KPIs (taux de conversion, temps passé, comportement utilisateur).",
      features: [
        "Tests A/B scientifiques",
        "Analyse comportementale approfondie",
        "Reporting détaillé et actionnable"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Settings className="w-12 h-12 text-green-600" />,
      title: "Maintenance et mises à jour",
      description: "Nous assurons un suivi régulier pour que vos landing pages restent performantes et adaptées à vos évolutions commerciales.",
      features: [
        "Suivi continu des performances",
        "Mises à jour techniques régulières",
        "Optimisations basées sur les données"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Une expertise complète pour maximiser vos conversions
          </p>
          <div className="flex justify-center">
            <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-semibold">
              🚀 Des résultats mesurables dès le premier mois
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden relative"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${featureIndex * 100}ms`}}>
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-1 mr-3 flex-shrink-0 group-hover:text-pink-600 transition-colors duration-300" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-purple-200 text-purple-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 transform group-hover:scale-105"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Prêt à multiplier vos conversions ?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Découvrez nos tarifs transparents et choisissez le pack qui correspond à vos besoins
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
