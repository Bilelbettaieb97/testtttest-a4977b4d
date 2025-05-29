
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageSquare, Calendar } from "lucide-react";

const SimplifiedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
    budget: "",
    main_challenge: "",
    timeline: "",
    message: "",
    urgency: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons sous 24h avec votre audit personnalisé.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        project: "",
        budget: "",
        main_challenge: "",
        timeline: "",
        message: "",
        urgency: ""
      });
    } catch (error) {
      console.log("Contact form error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: newsletterEmail }]);

      if (error) throw error;

      toast({
        title: "Inscription réussie !",
        description: "Vous êtes maintenant abonné à notre newsletter.",
      });

      setNewsletterEmail("");
    } catch (error) {
      console.log("Newsletter error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription à la newsletter.",
        variant: "destructive",
      });
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/bilel-bettaieb-naboo', '_blank');
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-purple-50 to-pink-50" itemScope itemType="https://schema.org/ContactPage">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Audit <span className="text-purple-600">Gratuit</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Obtenez un audit personnalisé avec des recommandations concrètes pour booster vos conversions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <Card className="shadow-lg lg:col-span-1">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-lg sm:text-xl text-center">Demander un audit complet</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" itemScope itemType="https://schema.org/ContactForm">
                {/* Informations de base */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Nom complet *</Label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-sm"
                      itemProp="name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email professionnel *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="text-sm"
                      itemProp="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium">Entreprise *</Label>
                    <Input
                      id="company"
                      placeholder="Nom de votre entreprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="06 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                </div>

                {/* Informations projet */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="project" className="text-sm font-medium">Type de projet *</Label>
                    <select
                      id="project"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      required
                      className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="audit">Audit de conversion</option>
                      <option value="landing">Landing Page</option>
                      <option value="funnel">Tunnel de vente</option>
                      <option value="optimization">Optimisation site existant</option>
                      <option value="custom">Projet sur mesure</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-sm font-medium">Budget envisagé</Label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="<2k">Moins de 2 000€</option>
                      <option value="2k-5k">2 000€ - 5 000€</option>
                      <option value="5k-10k">5 000€ - 10 000€</option>
                      <option value="10k+">Plus de 10 000€</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="main_challenge" className="text-sm font-medium">Principal défi actuel *</Label>
                    <select
                      id="main_challenge"
                      value={formData.main_challenge}
                      onChange={(e) => setFormData({ ...formData, main_challenge: e.target.value })}
                      required
                      className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Sélectionnez votre principal défi</option>
                      <option value="traffic">Manque de trafic</option>
                      <option value="conversion">Faible taux de conversion</option>
                      <option value="leads">Pas assez de leads qualifiés</option>
                      <option value="sales">Difficultés à transformer en ventes</option>
                      <option value="retention">Fidélisation client</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="text-sm font-medium">Délai souhaité</Label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="urgent">Urgent (moins d'1 semaine)</option>
                      <option value="1month">Dans le mois</option>
                      <option value="3months">Dans les 3 mois</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Décrivez votre projet</Label>
                  <Textarea
                    id="message"
                    placeholder="Parlez-nous de vos objectifs, contraintes spécifiques, ou toute information importante..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="text-sm"
                    itemProp="message"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base py-3"
                >
                  {isSubmitting ? "Envoi en cours..." : "Recevoir mon audit gratuit"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  ✅ Audit personnalisé sous 24h • ✅ Recommandations concrètes • ✅ 100% gratuit
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2 sm:mr-3" />
                  <h3 className="font-semibold text-sm sm:text-base">Réservez un appel</h3>
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Discutons de votre projet en 15 minutes
                </p>
                <Button 
                  onClick={openCalendly}
                  variant="outline" 
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 text-sm"
                >
                  Prendre rendez-vous
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Card className="shadow-lg">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium" itemProp="telephone">07 83 49 47 09</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium" itemProp="email">contact@convertilab.fr</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-purple-50 border-purple-200 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-sm sm:text-base mb-2 text-center">Pourquoi nos audits sont efficaces ?</h3>
                <ul className="text-gray-600 text-xs sm:text-sm space-y-1">
                  <li>✅ Analyse complète de votre funnel</li>
                  <li>✅ Recommandations chiffrées</li>
                  <li>✅ Plan d'action prioritisé</li>
                  <li>✅ Exemples concrets d'optimisation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter Subscription */}
            <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-sm sm:text-base mb-2 text-center">Newsletter</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 text-center">
                  Recevez nos conseils en conversion directement dans votre boîte mail
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="text-sm"
                  />
                  <Button 
                    type="submit" 
                    disabled={isNewsletterSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-sm"
                  >
                    {isNewsletterSubmitting ? "Inscription..." : "S'abonner"}
                  </Button>
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
