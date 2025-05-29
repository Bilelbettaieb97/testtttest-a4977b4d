
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Target, ArrowRight, Star } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      name: "Pack Starter",
      subtitle: "Landing Page Produit",
      price: "1 800",
      duration: "10 à 14 jours",
      popular: false,
      target: "Petites entreprises, startups, e-commerces souhaitant lancer un produit avec une page efficace.",
      features: [
        "Analyse rapide de votre cible et objectifs",
        "Design personnalisé et responsive",
        "Rédaction du contenu optimisé pour la conversion",
        "Intégration du formulaire ou bouton d'achat",
        "Mise en ligne et test fonctionnel",
        "2 cycles de modifications inclus"
      ],
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      name: "Pack Lead Generation",
      subtitle: "Landing Page Formulaire",
      price: "3 500",
      duration: "3 à 4 semaines",
      popular: true,
      target: "Entreprises B2B, agences, services souhaitant générer des leads qualifiés.",
      features: [
        "Workshop stratégique pour définir la proposition de valeur",
        "Design UX/UI adapté à la cible",
        "Rédaction persuasive orientée capture de leads",
        "Intégration formulaire avec connecteur CRM ou emailing",
        "Mise en place d'éléments de réassurance (RGPD, témoignages)",
        "Tests A/B de deux versions",
        "Suivi et rapport de performance 1 mois après lancement"
      ],
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      name: "Pack Lead Magnet",
      subtitle: "Landing Page + Suivi",
      price: "5 000",
      duration: "4 à 6 semaines",
      popular: false,
      target: "Marketeurs, formateurs, auteurs proposant un contenu gratuit pour nourrir une base prospects.",
      features: [
        "Création et optimisation de la landing page dédiée au lead magnet",
        "Rédaction du contenu et création visuelle du lead magnet",
        "Formulaire simplifié avec intégration CRM/emailing",
        "Éléments de réassurance et témoignages",
        "Tests A/B et optimisation continue pendant 2 mois",
        "Rapport mensuel et recommandations d'amélioration"
      ],
      icon: <Star className="w-8 h-8 text-pink-600" />
    }
  ];

  const additionalServices = [
    "Création de contenu vidéo",
    "Campagne emailing associée", 
    "Maintenance technique à l'année",
    "Création de landing pages supplémentaires avec tarif dégressif"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-purple-600">Offres</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Création de Landing Pages Performantes - Choisissez le pack adapté à vos besoins
          </p>
          <div className="flex justify-center">
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
              🎯 Consultation gratuite incluse dans tous nos packs
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                offer.popular ? 'ring-4 ring-purple-400 scale-105' : ''
              }`}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    ⭐ Le plus populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">{offer.icon}</div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{offer.name}</CardTitle>
                <p className="text-lg text-purple-600 font-semibold">{offer.subtitle}</p>
                <div className="my-6">
                  <div className="text-4xl font-bold text-gray-900">
                    {offer.price}<span className="text-lg text-gray-600"> € HT</span>
                  </div>
                  <div className="flex items-center justify-center mt-2 text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{offer.duration}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Pour qui ?</h4>
                  <p className="text-gray-600 text-sm">{offer.target}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Ce que vous obtenez :</h4>
                  <ul className="space-y-2">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    offer.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  size="lg"
                >
                  Choisir ce pack
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Options complémentaires <span className="text-purple-600">(sur devis)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Demander un devis personnalisé
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
