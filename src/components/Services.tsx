import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Store, Rocket, ArrowRight, CheckCircle, Star, Zap, Clock } from "lucide-react";
const Services = () => {
  const offers = [{
    icon: <Rocket className="w-8 h-8 text-white" />,
    title: "Landing Page",
    price: "490€",
    delay: "5 jours",
    description: "Page unique optimisée pour la conversion",
    features: ["1 page optimisée conversion", "Design responsive", "Formulaire de contact", "Hébergement 1 an inclus", "Support 1 mois"],
    gradient: "from-purple-500 to-pink-500",
    popular: false,
    target: "Parfait pour lancement rapide"
  }, {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: "Site Vitrine",
    price: "990€",
    delay: "10 jours",
    description: "Site complet pour présenter votre activité",
    features: ["Jusqu'à 5 pages", "Design 100% personnalisé", "Responsive tous appareils", "Optimisation SEO de base", "Formulaire + Google Maps", "Support 3 mois inclus"],
    gradient: "from-blue-500 to-cyan-500",
    popular: true,
    target: "Choix n°1 des PME"
  }, {
    icon: <Store className="w-8 h-8 text-white" />,
    title: "Site E-commerce",
    price: "2490€",
    delay: "21 jours",
    description: "Boutique en ligne complète et sécurisée",
    features: ["Jusqu'à 50 produits", "Paiement sécurisé intégré", "Gestion des stocks", "Design personnalisé", "Formation admin incluse", "Support 6 mois inclus"],
    gradient: "from-green-500 to-emerald-500",
    popular: false,
    target: "Solution e-commerce clé en main"
  }];
  const advantages = [{
    icon: <Star className="w-5 h-5 text-yellow-500" />,
    text: "Consultation gratuite et devis sous 24h"
  }, {
    icon: <Zap className="w-5 h-5 text-blue-500" />,
    text: "Livraison express garantie"
  }, {
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    text: "Support inclus pendant 3 mois complets"
  }];
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="services" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header optimisé conversion */}
        <header className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-2 text-sm font-semibold mb-6 border-0">
            <Star className="w-4 h-4 mr-2" />
            Offres Packagées
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tarifs <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Transparents</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Prix fixes, délais garantis, sans surprises
          </p>
          
          {/* Avantages en avant */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
            {advantages.map((advantage, index) => <div key={index} className="flex items-center gap-2">
                {advantage.icon}
                <span className="font-medium text-gray-700">{advantage.text}</span>
              </div>)}
          </div>
        </header>

        {/* Offres Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => <article key={index} className="relative">
              {offer.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 text-xs font-bold shadow-lg">
                    ⭐ LE PLUS POPULAIRE
                  </Badge>
                </div>}
              <Card className={`border-2 ${offer.popular ? 'border-yellow-400 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full relative overflow-hidden group`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-5`}></div>
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${offer.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    {offer.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{offer.title}</CardTitle>
                  <div className="text-sm text-gray-600 mb-4">{offer.target}</div>
                  
                  {/* Prix et délai */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-gray-100 mb-4">
                    <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{offer.price}</div>
                    <div className="text-sm text-gray-500 mb-2">Prix fixe, sans surprise</div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-purple-600">
                      <Clock className="w-4 h-4" />
                      Livré en {offer.delay}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-center mb-6 text-sm">{offer.description}</p>
                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>)}
                  </ul>
                  <Button onClick={scrollToContact} className={`w-full bg-gradient-to-r ${offer.gradient} text-white hover:opacity-90 py-6 text-base font-semibold`}>
                    Choisir cette offre
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </article>)}
        </div>

        {/* CTA Section simplifiée */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Besoin d'un projet sur-mesure ?
            </h3>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Demandez votre devis personnalisé gratuit
            </p>
            
            <Button onClick={scrollToContact} size="lg" className="bg-white text-purple-600 hover:bg-gray-50 px-10 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              Obtenir un devis
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;