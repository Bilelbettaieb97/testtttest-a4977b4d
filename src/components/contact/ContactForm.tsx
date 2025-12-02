import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Building2, Phone, ArrowRight, ArrowLeft, CheckCircle2, Send, Globe, ShoppingCart, FileText, Search } from "lucide-react";

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
  { value: "vitrine", label: "Site vitrine", icon: Globe, desc: "Présenter votre activité" },
  { value: "ecommerce", label: "E-commerce", icon: ShoppingCart, desc: "Vendre en ligne" },
  { value: "landing", label: "Landing Page", icon: FileText, desc: "Page de conversion" },
  { value: "audit", label: "Audit", icon: Search, desc: "Analyser & optimiser" },
];

const budgets = [
  { value: "<2k", label: "< 2k€" },
  { value: "2k-5k", label: "2-5k€" },
  { value: "5k-10k", label: "5-10k€" },
  { value: "10k+", label: "10k€+" },
];

const timelines = [
  { value: "urgent", label: "< 2 sem" },
  { value: "1month", label: "1 mois" },
  { value: "3months", label: "2-3 mois" },
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
    main_challenge: "non_specifie",
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
      toast({ title: "Nom requis", variant: "destructive" });
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Email invalide", variant: "destructive" });
      return false;
    }
    if (!formData.company.trim()) {
      toast({ title: "Entreprise requise", variant: "destructive" });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.project) {
      toast({ title: "Sélectionnez un type de projet", variant: "destructive" });
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
        title: "Demande envoyée ! 🎉",
        description: "Nous vous recontacterons sous 24h.",
      });

      setFormData({
        name: "", email: "", company: "", phone: "",
        project: "", budget: "", main_challenge: "non_specifie",
        timeline: "", message: "", urgency: ""
      });
      setStep(1);
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: "Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
      {/* Progress Steps */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                ${s < step ? 'bg-green-500 text-white' : s === step ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}
              `}>
                {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${s < step ? 'bg-green-500' : 'bg-slate-200 dark:bg-slate-700'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-500 px-1">
          <span>Contact</span>
          <span>Projet</span>
          <span>Message</span>
        </div>
      </div>

      <div className="p-6 pt-2">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Contact Info */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vos coordonnées</h3>
                <p className="text-slate-500 text-sm mt-1">Pour vous recontacter rapidement</p>
              </div>
              
              <div className="space-y-3">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                  <Input
                    placeholder="Votre nom *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-12 h-14 text-base bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                  <Input
                    type="email"
                    placeholder="votre@email.com *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-12 h-14 text-base bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div className="relative group">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                  <Input
                    placeholder="Votre entreprise *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="pl-12 h-14 text-base bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                  <Input
                    type="tel"
                    placeholder="Téléphone (optionnel)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-12 h-14 text-base bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <Button
                type="button"
                onClick={nextStep}
                className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white text-base font-semibold rounded-xl mt-4 transition-all hover:shadow-lg hover:shadow-purple-500/25"
              >
                Continuer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Step 2: Project Info */}
          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Votre projet</h3>
                <p className="text-slate-500 text-sm mt-1">Quel type de site souhaitez-vous ?</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, project: type.value })}
                      className={`p-4 rounded-2xl text-left transition-all duration-200 border-2 ${
                        formData.project === type.value
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/50 shadow-lg shadow-purple-500/10'
                          : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 bg-white dark:bg-slate-800'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${
                        formData.project === type.value ? 'bg-purple-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">{type.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{type.desc}</p>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b.value })}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          formData.budget === b.value
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Délai</label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: t.value })}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          formData.timeline === t.value
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-14 rounded-xl border-2"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Retour
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 h-14 bg-purple-600 hover:bg-purple-700 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25"
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
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Presque fini !</h3>
                <p className="text-slate-500 text-sm mt-1">Un message à nous partager ?</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    {formData.name.charAt(0).toUpperCase() || "?"}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{formData.name || "Votre nom"}</p>
                    <p className="text-slate-500 text-xs">{formData.company} • {projectTypes.find(p => p.value === formData.project)?.label}</p>
                  </div>
                </div>
              </div>

              <Textarea
                placeholder="Décrivez brièvement votre projet, vos objectifs... (optionnel)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="bg-slate-50 dark:bg-slate-800 border-0 rounded-xl text-base focus:ring-2 focus:ring-purple-500 resize-none"
              />

              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-14 rounded-xl border-2"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Retour
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Envoi...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Envoyer
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  Réponse 24h
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  100% gratuit
                </span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
