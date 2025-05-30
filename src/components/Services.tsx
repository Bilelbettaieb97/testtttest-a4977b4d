
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Smartphone, ArrowRight, CheckCircle, Star, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "Design Web Créatif",
      description: "Interface unique et moderne qui reflète parfaitement votre identité de marque",
      features: ["Design 100% personnalisé", "UX/UI optimisée conversion", "Identité visuelle cohérente"],
      highlight: "Design Unique",
      gradient: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Développement Expert",
      description: "Sites web performants développés avec les dernières technologies pour garantir vitesse et sécurité",
      features: ["Code propre et optimisé", "Sécurité renforcée SSL", "Performance garantie < 2s"],
      highlight: "Le Plus Populaire",
      gradient: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      title: "Responsive Premium",
      description: "Adaptation parfaite sur tous les appareils pour une expérience utilisateur optimale",
      features: ["Mobile-first design", "Tablette optimisé", "Compatible tous navigateurs"],
      highlight: "Multi-Device",
      gradient: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  const advantages = [
    {
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      text: "Consultation gratuite et devis sous 24h"
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      text: "Livraison express en 7 jours maximum"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Support inclus pendant 3 mois complets"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header optimisé conversion */}
        <header className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-2 text-sm font-semibold mb-6 border-0">
            <Code className="w-4 h-4 mr-2" />
            Services Premium Inclus
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Nos <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services Expert</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            De la conception au développement, nous créons votre site web parfait avec un accompagnement personnalisé
          </p>
          
          {/* Avantages en avant */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-2">
                {advantage.icon}
                <span className="font-medium text-gray-700">{advantage.text}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Services Grid avec focus conversion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <article key={index} className="relative">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 text-xs font-bold shadow-lg">
                    ⭐ LE PLUS POPULAIRE
                  </Badge>
                </div>
              )}
              <Card className={`border-2 ${service.popular ? 'border-yellow-400 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full relative overflow-hidden group`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                    {service.highlight}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-3 mb-4">
                      <div className="text-yellow-800 font-bold text-sm">Choix n°1 de nos clients</div>
                      <div className="text-yellow-700 text-xs">Le service le plus demandé</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* CTA Section puissante */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-4xl font-bold mb-4">
              Prêt à créer votre site web professionnel ?
            </h3>
            <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Obtenez votre devis personnalisé gratuit en moins de 24h et découvrez comment nous pouvons transformer votre présence digitale
            </p>
            
            {/* Pricing teaser */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="text-3xl sm:text-4xl font-bold mb-2">À partir de 990€</div>
              <div className="text-purple-100 text-lg">Site vitrine professionnel complet</div>
              <div className="text-sm text-purple-200 mt-2">✅ Design + Développement + 3 mois support inclus</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-50 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Obtenir Mon Devis Gratuit
                <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
              
              <div className="text-sm text-purple-200 font-medium">
                ⚡ Réponse sous 24h • 🎯 Sans engagement • 💬 Consultation gratuite
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
