
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Send, Phone, Clock, Gift } from "lucide-react";
import { useState } from "react";

const SimplifiedContact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
    urgency: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (formData.name && formData.email && formData.project) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const projectTypes = [
    { value: "starter", label: "Landing Page Produit (1 490€)", popular: false },
    { value: "lead-generation", label: "Page Génération de Leads (2 490€)", popular: true },
    { value: "lead-magnet", label: "Lead Magnet + Landing (3 490€)", popular: false },
    { value: "audit", label: "Audit de page existante (490€)", popular: false },
    { value: "custom", label: "Projet sur mesure (Devis)", popular: false }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Boostez vos conversions <span className="text-purple-400">dès maintenant</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Réservez votre audit gratuit de 30 minutes et découvrez comment multiplier vos conversions
          </p>
          
          {/* Urgency banner */}
          <div className="inline-flex items-center bg-red-500/20 text-red-400 px-6 py-3 rounded-full font-semibold mb-8 animate-pulse">
            <Gift className="w-5 h-5 mr-2" />
            🎁 Audit gratuit - Offre limitée à 20 entreprises/mois
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Benefits sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Ce que vous obtenez :</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Audit complet gratuit</h4>
                  <p className="text-gray-300 text-sm">Analyse de vos pages actuelles et identification des points d'amélioration</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Plan d'action personnalisé</h4>
                  <p className="text-gray-300 text-sm">Recommandations spécifiques pour votre secteur d'activité</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Estimation ROI</h4>
                  <p className="text-gray-300 text-sm">Projection des gains potentiels avec nos optimisations</p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <div>
                  <div className="font-semibold">Besoin d'aide ?</div>
                  <div className="text-sm text-gray-300">+33 1 23 45 67 89</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-400 mr-3" />
                <div>
                  <div className="font-semibold">Disponibilité</div>
                  <div className="text-sm text-gray-300">Lun-Ven 9h-18h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-sm border-purple-400/30 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-center flex items-center justify-center gap-3">
                  <span>Étape {step} sur 2</span>
                  <div className="flex gap-2">
                    <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-purple-400' : 'bg-gray-600'}`}></div>
                    <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-purple-400' : 'bg-gray-600'}`}></div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-white">Nom complet *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white">Email professionnel *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400"
                            placeholder="votre@entreprise.com"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-white">Entreprise</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      <div>
                        <Label htmlFor="project" className="text-white">Type de projet recherché *</Label>
                        <div className="grid grid-cols-1 gap-3 mt-3">
                          {projectTypes.map((type) => (
                            <label
                              key={type.value}
                              className={`relative flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                                ${formData.project === type.value 
                                  ? 'border-purple-400 bg-purple-400/20' 
                                  : 'border-purple-400/30 bg-white/5 hover:bg-white/10'
                                }
                                ${type.popular ? 'ring-2 ring-yellow-400' : ''}
                              `}
                            >
                              <input
                                type="radio"
                                name="project"
                                value={type.value}
                                checked={formData.project === type.value}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-white">{type.label}</span>
                                  {type.popular && (
                                    <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                                      POPULAIRE
                                    </span>
                                  )}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <Button 
                        type="button"
                        onClick={handleNextStep}
                        disabled={!formData.name || !formData.email || !formData.project}
                        size="lg"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-semibold transition-all duration-300 disabled:opacity-50"
                      >
                        Continuer vers l'étape 2
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="text-white">Téléphone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400"
                            placeholder="+33 1 23 45 67 89"
                          />
                        </div>
                        <div>
                          <Label htmlFor="urgency" className="text-white">Quand souhaitez-vous commencer ?</Label>
                          <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-white/10 border border-purple-400/30 rounded-md text-white"
                          >
                            <option value="">Sélectionnez</option>
                            <option value="asap">Dès que possible</option>
                            <option value="this-month">Ce mois-ci</option>
                            <option value="next-month">Le mois prochain</option>
                            <option value="later">Plus tard</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-white">Décrivez votre projet et vos objectifs</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400 min-h-[120px]"
                          placeholder="Parlez-nous de votre projet, vos objectifs de conversion, votre cible... Plus vous nous en direz, mieux nous pourrons vous aider lors de l'audit gratuit !"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          type="button"
                          onClick={() => setStep(1)}
                          variant="outline"
                          size="lg"
                          className="border-purple-400/30 text-white bg-transparent hover:bg-purple-400/20 px-6 py-3"
                        >
                          <ArrowLeft className="mr-2 w-5 h-5" />
                          Retour
                        </Button>
                        
                        <Button 
                          type="submit"
                          size="lg"
                          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          🚀 Réserver mon audit gratuit
                          <Send className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                      
                      <p className="text-sm text-gray-400 text-center">
                        📧 Vous recevrez un email de confirmation avec le lien de votre consultation dans les 2h
                      </p>
                    </>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedContact;
