
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  project: string;
  budget: string;
  main_challenge: string;
  timeline: string;
  message: string;
  urgency: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation côté client
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires (nom, email, entreprise).",
        variant: "destructive",
      });
      return;
    }
    
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.project) {
      toast({
        title: "Type de projet manquant",
        description: "Veuillez sélectionner un type de projet.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.main_challenge) {
      toast({
        title: "Défi manquant",
        description: "Veuillez sélectionner votre principal défi.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) {
        console.error("Contact form Supabase error:", error);
        throw error;
      }

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
    } catch (error: any) {
      console.error("Contact form error:", error);
      toast({
        title: "Erreur d'envoi",
        description: error?.message || "Une erreur est survenue. Vérifiez que les permissions de la base de données sont correctes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
  );
};

export default ContactForm;
