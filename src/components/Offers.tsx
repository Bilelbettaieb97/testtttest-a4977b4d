
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Globe, ArrowRight, Star } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      name: "Site Vitrine",
      subtitle: "Présentation Professionnelle",
      price: "2 500",
      duration: "2-3 semaines",
      popular: false,
      features: [
        "Design responsive moderne",
        "5-8 pages personnalisées",
        "Référencement SEO de base",
        "Formation à la gestion"
      ],
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
    },
    {
      name: "Site E-commerce",
      subtitle: "Boutique en Ligne",
      price: "4 500",
      duration: "4-6 semaines",
      popular: true,
      features: [
        "Catalogue produits illimité",
        "Système de paiement sécurisé",
        "Gestion des commandes",
        "SEO e-commerce optimisé",
        "Formation complète"
      ],
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
    },
    {
      name: "Application Web",
      subtitle: "Solution Sur-Mesure",
      price: "Sur devis",
      duration: "6-12 semaines",
      popular: false,
      features: [
        "Développement personnalisé",
        "Interface utilisateur complexe",
        "Base de données intégrée",
        "Support technique 1 an"
      ],
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Nos <span className="text-purple-600">Forfaits</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Des solutions web adaptées à tous vos besoins
          </p>
          <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold text-sm">
            🎯 Devis personnalisé gratuit
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {offers.map((offer, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                offer.popular ? 'ring-2 ring-purple-400 scale-105' : ''
              }`}
            >
              {offer.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                    ⭐ Populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-3">
                <div className="mb-3 flex justify-center">{offer.icon}</div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{offer.name}</CardTitle>
                <p className="text-sm sm:text-base text-purple-600 font-semibold">{offer.subtitle}</p>
                <div className="my-4">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {offer.price === "Sur devis" ? offer.price : `${offer.price} €`}
                    {offer.price !== "Sur devis" && <span className="text-sm text-gray-600"> HT</span>}
                  </div>
                  <div className="flex items-center justify-center mt-1 text-gray-600">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="text-xs sm:text-sm">{offer.duration}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-4">
                  <ul className="space-y-2">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                    offer.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  size="lg"
                >
                  Choisir ce forfait
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Demander un devis personnalisé
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
