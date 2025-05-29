
import { Target, Zap, BarChart3, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Création de landing pages sur mesure",
      description: "Pages uniques et performantes, adaptées à votre marque et vos objectifs.",
      features: [
        "Design UX/UI optimisé pour l'engagement",
        "Rédaction persuasive centrée utilisateur",
        "Intégration fluide avec vos outils marketing"
      ],
      highlight: "Conversion garantie +25%"
    },
    {
      icon: BarChart3,
      title: "Audit et optimisation",
      description: "Analyse complète de vos pages existantes avec solutions concrètes.",
      features: [
        "Analyse forces et faiblesses",
        "Recommandations d'amélioration",
        "Plan d'action personnalisé"
      ],
      highlight: "Résultats sous 30 jours"
    },
    {
      icon: Zap,
      title: "Tests A/B & analyse",
      description: "Mesurez l'impact réel avec tests rigoureux et suivi détaillé des KPIs.",
      features: [
        "Tests A/B professionnels",
        "Analyse comportement utilisateur",
        "Rapports de performance détaillés"
      ],
      highlight: "ROI mesurable"
    },
    {
      icon: Wrench,
      title: "Maintenance et mises à jour",
      description: "Suivi régulier pour maintenir vos pages performantes et actuelles.",
      features: [
        "Maintenance technique continue",
        "Mises à jour de contenu",
        "Support technique réactif"
      ],
      highlight: "Support 24/7"
    }
  ];

  const scrollToOffers = () => {
    const element = document.querySelector('#offers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nos services qui <span className="text-purple-600">boostent</span> vos conversions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Des solutions complètes pour transformer vos visiteurs en clients fidèles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                  <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-semibold">
                    {service.highlight}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 sm:space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Prêt à multiplier vos conversions ?
          </h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez nos offres personnalisées et commencez à transformer vos visiteurs en clients dès aujourd'hui
          </p>
          <Button 
            onClick={scrollToOffers}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Découvrir nos offres
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
