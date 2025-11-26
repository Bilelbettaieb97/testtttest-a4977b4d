import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";

const PricingComparison = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { category: "Pages & Contenu", items: [
      { name: "Nombre de pages", landing: "1 page", vitrine: "Jusqu'à 5 pages", ecommerce: "Illimité" },
      { name: "Gestion produits", landing: false, vitrine: false, ecommerce: "Jusqu'à 50 produits" },
      { name: "Blog intégré", landing: false, vitrine: true, ecommerce: true },
    ]},
    { category: "Design & UX", items: [
      { name: "Design responsive", landing: true, vitrine: true, ecommerce: true },
      { name: "Design personnalisé", landing: "Template adapté", vitrine: "100% sur-mesure", ecommerce: "100% sur-mesure" },
      { name: "Animations & effets", landing: "Basiques", vitrine: "Avancées", ecommerce: "Avancées" },
      { name: "Identité visuelle", landing: false, vitrine: true, ecommerce: true },
    ]},
    { category: "Fonctionnalités", items: [
      { name: "Formulaire de contact", landing: true, vitrine: true, ecommerce: true },
      { name: "Google Maps", landing: false, vitrine: true, ecommerce: true },
      { name: "Paiement en ligne", landing: false, vitrine: false, ecommerce: "Stripe/PayPal" },
      { name: "Gestion des stocks", landing: false, vitrine: false, ecommerce: true },
      { name: "Comptes clients", landing: false, vitrine: false, ecommerce: true },
      { name: "Galerie photos", landing: "Limitée", vitrine: "Complète", ecommerce: "Complète" },
    ]},
    { category: "SEO & Performance", items: [
      { name: "Optimisation SEO", landing: "Basique", vitrine: "Avancée", ecommerce: "Avancée" },
      { name: "Certificat SSL", landing: true, vitrine: true, ecommerce: true },
      { name: "Performance garantie", landing: "< 2s", vitrine: "< 2s", ecommerce: "< 3s" },
      { name: "Google Analytics", landing: true, vitrine: true, ecommerce: true },
    ]},
    { category: "Support & Formation", items: [
      { name: "Formation admin", landing: false, vitrine: "30 min", ecommerce: "2 heures" },
      { name: "Documentation", landing: true, vitrine: true, ecommerce: true },
      { name: "Support inclus", landing: "1 mois", vitrine: "3 mois", ecommerce: "6 mois" },
      { name: "Mises à jour", landing: "Mensuelles", vitrine: "Mensuelles", ecommerce: "Bimensuelles" },
    ]},
    { category: "Hébergement & Garanties", items: [
      { name: "Hébergement inclus", landing: "1 an", vitrine: "1 an", ecommerce: "1 an" },
      { name: "Nom de domaine", landing: "En option", vitrine: "Inclus 1 an", ecommerce: "Inclus 1 an" },
      { name: "Emails professionnels", landing: false, vitrine: "3 adresses", ecommerce: "10 adresses" },
      { name: "Garantie satisfaction", landing: true, vitrine: true, ecommerce: true },
    ]},
  ];

  const offers = [
    {
      name: "Landing Page",
      price: "490€",
      delay: "5 jours",
      gradient: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      name: "Site Vitrine",
      price: "990€",
      delay: "10 jours",
      gradient: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      name: "Site E-commerce",
      price: "2490€",
      delay: "21 jours",
      gradient: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm text-gray-700 font-medium">{value}</span>;
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <header className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-2 text-sm font-semibold mb-6 border-0">
            <Star className="w-4 h-4 mr-2" />
            Comparateur Détaillé
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comparez nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3 Offres</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez l'offre qui correspond parfaitement à vos besoins
          </p>
        </header>

        {/* Version Desktop - Tableau */}
        <Card className="hidden lg:block overflow-hidden shadow-2xl border-2 border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-6 bg-white">
                    <span className="text-lg font-bold text-gray-900">Fonctionnalités</span>
                  </th>
                  {offers.map((offer, index) => (
                    <th key={index} className={`p-6 text-center relative ${offer.popular ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-gray-50'}`}>
                      {offer.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 text-xs font-bold">
                          ⭐ POPULAIRE
                        </Badge>
                      )}
                      <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${offer.gradient} text-white mb-2`}>
                        <div className="text-xl font-bold">{offer.name}</div>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{offer.price}</div>
                      <div className="text-sm text-gray-600">Livré en {offer.delay}</div>
                      <Button 
                        onClick={scrollToContact}
                        size="sm"
                        className={`mt-4 bg-gradient-to-r ${offer.gradient} text-white hover:opacity-90`}
                      >
                        Choisir
                      </Button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((category, catIndex) => (
                  <>
                    <tr key={`cat-${catIndex}`} className="bg-gray-100">
                      <td colSpan={4} className="p-4">
                        <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                          {category.category}
                        </span>
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={`item-${catIndex}-${itemIndex}`} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-gray-700 font-medium">{item.name}</td>
                        <td className="p-4 text-center">{renderFeatureValue(item.landing)}</td>
                        <td className={`p-4 text-center ${offers[1].popular ? 'bg-yellow-50/30' : ''}`}>
                          {renderFeatureValue(item.vitrine)}
                        </td>
                        <td className="p-4 text-center">{renderFeatureValue(item.ecommerce)}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Version Mobile - Cards */}
        <div className="lg:hidden space-y-6">
          {offers.map((offer, offerIndex) => (
            <Card key={offerIndex} className={`overflow-hidden shadow-lg border-2 ${offer.popular ? 'border-yellow-400' : 'border-gray-200'}`}>
              <div className={`p-6 text-center bg-gradient-to-r ${offer.gradient} text-white relative`}>
                {offer.popular && (
                  <Badge className="absolute top-2 right-2 bg-white text-orange-600 px-3 py-1 text-xs font-bold">
                    ⭐ POPULAIRE
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{offer.name}</h3>
                <div className="text-4xl font-bold mb-1">{offer.price}</div>
                <div className="text-sm opacity-90 mb-4">Livré en {offer.delay}</div>
                <Button 
                  onClick={scrollToContact}
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  Choisir cette offre
                </Button>
              </div>
              <div className="p-6">
                {features.map((category, catIndex) => (
                  <div key={catIndex} className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 border-b pb-2">
                      {category.category}
                    </h4>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => {
                        const value = offerIndex === 0 ? item.landing : offerIndex === 1 ? item.vitrine : item.ecommerce;
                        return (
                          <div key={itemIndex} className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">{item.name}</span>
                            <div className="flex-shrink-0 ml-4">
                              {renderFeatureValue(value)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Besoin d'aide pour choisir ? Discutons de votre projet ensemble
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 px-10 py-6 text-lg font-semibold shadow-xl"
          >
            Demander conseil gratuitement
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
