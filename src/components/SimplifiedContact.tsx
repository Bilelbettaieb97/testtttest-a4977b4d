import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Send, Phone, Clock, Gift, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SimplifiedContact = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    project: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !isValidEmail(formData.email),
      project: !formData.project
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    } else {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires correctement.",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      project: "",
      budget: "",
      message: "",
      urgency: ""
    });
    setStep(1);
    setErrors({
      name: false,
      email: false,
      project: false
    });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/bilel-bettaieb-naboo', '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep1()) {
      setStep(1);
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", formData);
      
      // Insérer les données dans Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            phone: formData.phone || null,
            project: formData.project,
            budget: formData.budget || null,
            message: formData.message || null,
            urgency: formData.urgency || null
          }
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("Form submitted successfully:", data);
      
      toast({
        title: "Demande envoyée avec succès ! 🎉",
        description: "Nous vous recontacterons dans les 2h pour planifier votre audit gratuit.",
      });
      
      resetForm();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: "starter", label: "Landing Page Produit (1 490€)", popular: false },
    { value: "lead-generation", label: "Page Génération de Leads (2 490€)", popular: true },
    { value: "lead-magnet", label: "Lead Magnet + Landing (3 490€)", popular: false },
    { value: "audit", label: "Audit de page existante (490€)", popular: false },
    { value: "custom", label: "Projet sur mesure (Devis)", popular: false }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Boostez vos conversions <span className="text-purple-400">dès maintenant</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Audit gratuit de 30 minutes - Découvrez comment multiplier vos conversions
          </p>
          
          {/* Calendly button */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="inline-flex items-center bg-red-500/20 text-red-400 px-6 py-3 rounded-full font-semibold animate-pulse">
              <Gift className="w-5 h-5 mr-2" />
              🎁 Audit gratuit - Offre limitée
            </div>
            <Button 
              onClick={openCalendly}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Calendar className="mr-2 w-6 h-6" />
              🚀 Réserver mon audit gratuit
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits sidebar - Raccourci */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Ce que vous obtenez :</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Audit complet gratuit</h4>
                  <p className="text-gray-300 text-sm">Analyse de vos conversions actuelles</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Plan d'action</h4>
                  <p className="text-gray-300 text-sm">Recommandations personnalisées</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Estimation ROI</h4>
                  <p className="text-gray-300 text-sm">Projection des gains potentiels</p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <div>
                  <div className="font-semibold">07 83 49 47 09</div>
                  <div className="text-sm text-gray-300">Lun-Ven 9h-18h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Simplifié */}
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
              <CardContent className="p-6">
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
                            className={`bg-white/10 border-purple-400/30 text-white placeholder-gray-400 ${
                              errors.name ? 'border-red-500' : ''
                            }`}
                            placeholder="Votre nom"
                          />
                          {errors.name && <p className="text-red-400 text-sm mt-1">Le nom est requis</p>}
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
                            className={`bg-white/10 border-purple-400/30 text-white placeholder-gray-400 ${
                              errors.email ? 'border-red-500' : ''
                            }`}
                            placeholder="votre@entreprise.com"
                          />
                          {errors.email && <p className="text-red-400 text-sm mt-1">Un email valide est requis</p>}
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
                        {errors.project && <p className="text-red-400 text-sm mb-2">Veuillez sélectionner un type de projet</p>}
                        <div className="grid grid-cols-1 gap-3 mt-3">
                          {projectTypes.map((type) => (
                            <label
                              key={type.value}
                              className={`relative flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                                ${formData.project === type.value 
                                  ? 'border-purple-400 bg-purple-400/20' 
                                  : errors.project
                                  ? 'border-red-500/50 bg-white/5 hover:bg-white/10'
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
                          disabled={isSubmitting}
                        >
                          <ArrowLeft className="mr-2 w-5 h-5" />
                          Retour
                        </Button>
                        
                        <Button 
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              🚀 Réserver mon audit gratuit
                              <Send className="ml-2 w-5 h-5" />
                            </>
                          )}
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
