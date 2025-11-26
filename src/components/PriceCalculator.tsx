import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calculator, Plus, Sparkles, ArrowRight } from "lucide-react";

const PriceCalculator = () => {
  const baseOffers = [
    { id: "landing", name: "Landing Page", price: 490, delay: "5 jours" },
    { id: "vitrine", name: "Site Vitrine", price: 990, delay: "10 jours", popular: true },
    { id: "ecommerce", name: "Site E-commerce", price: 2490, delay: "21 jours" }
  ];

  const additionalOptions = [
    { 
      category: "Pages & Contenu",
      options: [
        { id: "extra-pages", name: "Pages supplémentaires", price: 150, unit: "/page" },
        { id: "copywriting", name: "Rédaction de contenu professionnel", price: 300 },
        { id: "translation", name: "Version multilingue", price: 400 }
      ]
    },
    {
      category: "Design & Branding",
      options: [
        { id: "logo", name: "Création de logo", price: 350 },
        { id: "photo-shoot", name: "Shooting photo professionnel", price: 500 },
        { id: "video", name: "Vidéo de présentation", price: 800 }
      ]
    },
    {
      category: "Fonctionnalités",
      options: [
        { id: "chatbot", name: "Chatbot IA intégré", price: 250 },
        { id: "booking", name: "Système de réservation", price: 400 },
        { id: "newsletter", name: "Newsletter automatisée", price: 200 },
        { id: "crm", name: "CRM intégré", price: 600 }
      ]
    },
    {
      category: "SEO & Marketing",
      options: [
        { id: "seo-premium", name: "SEO Premium avancé", price: 450 },
        { id: "google-ads", name: "Configuration Google Ads", price: 300 },
        { id: "analytics", name: "Analytics & Tracking avancé", price: 200 }
      ]
    },
    {
      category: "Maintenance & Support",
      options: [
        { id: "maintenance-1y", name: "Maintenance 1 an", price: 600 },
        { id: "support-priority", name: "Support prioritaire 1 an", price: 400 },
        { id: "training", name: "Formation avancée (2h)", price: 300 }
      ]
    }
  ];

  const [selectedBase, setSelectedBase] = useState("vitrine");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const calculateTotal = () => {
    const basePrice = baseOffers.find(o => o.id === selectedBase)?.price || 0;
    const optionsPrice = additionalOptions
      .flatMap(cat => cat.options)
      .filter(opt => selectedOptions.includes(opt.id))
      .reduce((sum, opt) => sum + opt.price, 0);
    return basePrice + optionsPrice;
  };

  const getSelectedDelay = () => {
    const baseDelay = baseOffers.find(o => o.id === selectedBase)?.delay || "";
    if (selectedOptions.length === 0) return baseDelay;
    if (selectedOptions.length <= 3) return baseDelay;
    // Add 5-7 days for many options
    const baseDays = parseInt(baseDelay);
    return `${baseDays + 5}-${baseDays + 7} jours`;
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-2 text-sm font-semibold mb-6 border-0">
            <Calculator className="w-4 h-4 mr-2" />
            Calculateur Intelligent
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Estimez votre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projet</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Personnalisez votre offre et obtenez un devis instantané
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Base Offer Selection */}
            <Card className="shadow-lg border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Choisissez votre offre de base
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4">
                  {baseOffers.map(offer => (
                    <button
                      key={offer.id}
                      onClick={() => setSelectedBase(offer.id)}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedBase === offer.id
                          ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                          : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      {offer.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs">
                          Populaire
                        </Badge>
                      )}
                      <div className="font-bold text-lg text-gray-900 mb-2">{offer.name}</div>
                      <div className="text-2xl font-bold text-purple-600 mb-1">{offer.price}€</div>
                      <div className="text-sm text-gray-600">{offer.delay}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Options */}
            <Card className="shadow-lg border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5 text-blue-600" />
                  Options supplémentaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {additionalOptions.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide border-b pb-2">
                      {category.category}
                    </h4>
                    <div className="space-y-3">
                      {category.options.map(option => (
                        <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <Checkbox
                            id={option.id}
                            checked={selectedOptions.includes(option.id)}
                            onCheckedChange={() => toggleOption(option.id)}
                            className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <Label
                            htmlFor={option.id}
                            className="flex-1 cursor-pointer text-sm"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-900 font-medium">{option.name}</span>
                              <span className="font-bold text-purple-600">
                                +{option.price}€{option.unit || ""}
                              </span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-2xl border-2 border-purple-200 sticky top-24">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-center text-xl">Votre Devis</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {/* Base Offer */}
                <div className="pb-4 border-b border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Offre de base</div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">
                      {baseOffers.find(o => o.id === selectedBase)?.name}
                    </span>
                    <span className="font-bold text-gray-900">
                      {baseOffers.find(o => o.id === selectedBase)?.price}€
                    </span>
                  </div>
                </div>

                {/* Selected Options */}
                {selectedOptions.length > 0 && (
                  <div className="pb-4 border-b border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Options ({selectedOptions.length})</div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {additionalOptions
                        .flatMap(cat => cat.options)
                        .filter(opt => selectedOptions.includes(opt.id))
                        .map(opt => (
                          <div key={opt.id} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700">{opt.name}</span>
                            <span className="font-semibold text-gray-900">+{opt.price}€</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="pt-4">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 mb-4">
                    <div className="text-sm text-gray-600 mb-1">Total estimé</div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {calculateTotal().toLocaleString()}€
                    </div>
                    <div className="text-sm text-gray-600">
                      Délai estimé : <span className="font-semibold">{getSelectedDelay()}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 py-6 text-lg font-semibold"
                  >
                    Demander ce devis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-xs text-center text-gray-500 mt-3">
                    Prix indicatifs • Devis final après consultation gratuite
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Besoin d'une estimation plus précise ?
          </p>
          <p className="text-sm text-gray-500">
            Nos experts sont disponibles pour discuter de votre projet et affiner votre devis
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
