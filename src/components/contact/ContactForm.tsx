import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Building2, Phone, Briefcase, Target, Clock, MessageSquare, ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

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

const projectTypes = [
  { value: "vitrine", label: "Site web vitrine", icon: "🌐" },
  { value: "ecommerce", label: "E-commerce", icon: "🛒" },
  { value: "landing", label: "Landing Page", icon: "📄" },
  { value: "audit", label: "Audit de conversion", icon: "🔍" },
];

const budgets = [
  { value: "<2k", label: "< 2 000€" },
  { value: "2k-5k", label: "2k - 5k€" },
  { value: "5k-10k", label: "5k - 10k€" },
  { value: "10k+", label: "> 10 000€" },
];

const timelines = [
  { value: "urgent", label: "Urgent" },
  { value: "1month", label: "Ce mois" },
  { value: "3months", label: "3 mois" },
  { value: "flexible", label: "Flexible" },
];

const ContactForm = () => {
  const [step, setStep] = useState(1);
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

  const totalSteps = 3;

  const validateStep1 = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      toast({ title: "Nom requis", description: "Veuillez entrer votre nom.", variant: "destructive" });
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Email invalide", description: "Veuillez entrer un email valide.", variant: "destructive" });
      return false;
    }
    if (!formData.company.trim()) {
      toast({ title: "Entreprise requise", description: "Veuillez entrer votre entreprise.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.project) {
      toast({ title: "Projet requis", description: "Veuillez sélectionner un type de projet.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      if (typeof window !== 'undefined' && (window as any).trackFormConversion) {
        (window as any).trackFormConversion();
      }

      toast({
        title: "Message envoyé ! 🎉",
        description: "Nous vous recontacterons sous 24h avec votre audit personnalisé.",
      });

      setFormData({
        name: "", email: "", company: "", phone: "",
        project: "", budget: "", main_challenge: "",
        timeline: "", message: "", urgency: ""
      });
      setStep(1);
    } catch (error: any) {
      toast({
        title: "Erreur d'envoi",
        description: error?.message || "Une erreur est survenue.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="overflow-hidden border-0 shadow-2xl bg-background">
      {/* Progress Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Demande de devis</span>
          </div>
          <span className="text-sm opacity-90">Étape {step}/{totalSteps}</span>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                s <= step ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Contact Info */}
          {step === 1 && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                Vos coordonnées
              </h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Votre nom complet *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-11 h-12 text-base border-2 focus:border-purple-500"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="votre@email.com *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-11 h-12 text-base border-2 focus:border-purple-500"
                  />
                </div>
                
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Nom de votre entreprise *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="pl-11 h-12 text-base border-2 focus:border-purple-500"
                  />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="Téléphone (optionnel)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-11 h-12 text-base border-2 focus:border-purple-500"
                  />
                </div>
              </div>

              <Button
                type="button"
                onClick={nextStep}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-base font-semibold"
              >
                Continuer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Step 2: Project Info */}
          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-600" />
                Votre projet
              </h3>

              <div>
                <label className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Type de projet *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, project: type.value })}
                      className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                        formData.project === type.value
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-950'
                          : 'border-border hover:border-purple-300 hover:bg-muted/50'
                      }`}
                    >
                      <span className="text-lg">{type.icon}</span>
                      <p className="text-xs font-medium mt-1 text-foreground">{type.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b.value })}
                        className={`px-3 py-2 rounded-lg text-xs font-medium border-2 transition-all ${
                          formData.budget === b.value
                            ? 'border-purple-500 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                            : 'border-border hover:border-purple-300'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Délai
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: t.value })}
                        className={`px-3 py-2 rounded-lg text-xs font-medium border-2 transition-all ${
                          formData.timeline === t.value
                            ? 'border-purple-500 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                            : 'border-border hover:border-purple-300'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-12"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Retour
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Continuer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Message */}
          {step === 3 && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                Dernière étape !
              </h3>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-foreground mb-2">Récapitulatif</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>👤 {formData.name} • {formData.company}</p>
                  <p>📧 {formData.email}</p>
                  <p>🎯 {projectTypes.find(p => p.value === formData.project)?.label || 'Non défini'}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Décrivez votre projet (optionnel)
                </label>
                <Textarea
                  placeholder="Parlez-nous de vos objectifs, votre situation actuelle, vos attentes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="border-2 focus:border-purple-500 text-base"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-12"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Retour
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-semibold"
                >
                  {isSubmitting ? (
                    "Envoi..."
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 w-5 h-5" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                ✅ Réponse sous 24h • ✅ Audit personnalisé • ✅ 100% gratuit
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
