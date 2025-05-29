
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Target, TrendingUp, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
      title: "Landing Pages",
      description: "Pages optimisées pour convertir vos visiteurs en clients",
      features: ["Design responsive", "Copywriting persuasif", "Tests A/B"]
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Audit Conversion",
      description: "Analyse complète de vos pages actuelles",
      features: ["Analyse UX/UI", "Recommandations", "Plan d'action"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
      title: "Optimisation",
      description: "Amélioration continue de vos performances",
      features: ["Suivi KPI", "Tests multivariés", "Support 3 mois"]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <header className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Nos <span className="text-purple-600">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Solutions complètes pour maximiser vos conversions
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {services.map((service, index) => (
            <article key={index}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardHeader className="text-center pb-3">
                  <div className="mb-2 flex justify-center">{service.icon}</div>
                  <CardTitle className="text-lg sm:text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-3 text-sm sm:text-base">{service.description}</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
