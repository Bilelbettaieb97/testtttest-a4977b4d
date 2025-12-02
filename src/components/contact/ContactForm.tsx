import { useState, useEffect } from "react";
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

const STORAGE_KEY = "convertilab_contact_form";

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

  // Load saved data from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({
          ...prev,
          name: parsed.name || "",
          email: parsed.email || "",
          company: parsed.company || "",
          phone: parsed.phone || "",
        }));
      }
    } catch (e) {
      // Ignore parse errors
    }
  }, []);

  // Save contact info to localStorage when it changes
  useEffect(() => {
    if (formData.name || formData.email || formData.company || formData.phone) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
      }));
    }
  }, [formData.name, formData.email, formData.company, formData.phone]);

  const validateStep1 = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    
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
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      toast({ title: "Téléphone requis (min. 10 chiffres)", variant: "destructive" });
      return false;
    }
    if (!formData.project) {
      toast({ title: "Sélectionnez un type de site", variant: "destructive" });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
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
    <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 sm:px-6 py-3 sm:py-4">
        <h3 className="text-white font-bold text-lg sm:text-xl text-center">Devis instantané</h3>
        <p className="text-purple-100 text-xs sm:text-sm text-center mt-1">On revient vers vous sous 24h</p>
      </div>

      {/* Progress Steps */}
      <div className="px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4">
        <div className="flex items-center justify-between mb-2">
          {[
            { num: 1, label: "Contact", color: "emerald" },
            { num: 2, label: "Projet", color: "blue" },
            { num: 3, label: "Message", color: "purple" }
          ].map((s, idx) => (
            <div key={s.num} className="flex items-center flex-1">
              <div className={`
                w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300
                ${s.num < step ? 'bg-emerald-500 text-white' : s.num === step ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}
              `}>
                {s.num < step ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> : s.num}
              </div>
              {idx < 2 && (
                <div className={`flex-1 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-300 ${s.num < step ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-700'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] sm:text-xs px-1">
          <span className={step >= 1 ? "text-emerald-600 font-medium" : "text-slate-400"}>🟢 Contact</span>
          <span className={step >= 2 ? "text-blue-600 font-medium" : "text-slate-400"}>🔵 Projet</span>
          <span className={step >= 3 ? "text-purple-600 font-medium" : "text-slate-400"}>🟣 Message</span>
        </div>
      </div>

      {/* Reassurance badges */}
      <div className="px-4 sm:px-6 pb-3">
        <div className="flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs">
          <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium">✓ 100% gratuit</span>
          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">✓ Sans engagement</span>
          <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">✓ Réponse rapide</span>
        </div>
      </div>

      <div className="p-4 sm:p-6 pt-2">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Contact Info */}
          {step === 1 && (
            <div className="space-y-3 sm:space-y-4 animate-fade-in">
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Vos coordonnées</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Pour vous recontacter rapidement</p>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                    <Input
                      placeholder="Votre nom *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-9 h-11 sm:h-12 text-sm bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                    <Input
                      type="email"
                      placeholder="votre@email.com *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-9 h-11 sm:h-12 text-sm bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="relative group">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                    <Input
                      placeholder="Votre entreprise *"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pl-9 h-11 sm:h-12 text-sm bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                    <Input
                      type="tel"
                      placeholder="Votre téléphone *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-9 h-11 sm:h-12 text-sm bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Type de site */}
              <div>
                <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Type de site *</label>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {projectTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, project: type.value })}
                        className={`p-2 sm:p-3 rounded-lg sm:rounded-xl text-center transition-all duration-200 border-2 ${
                          formData.project === type.value
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/50 shadow-md'
                            : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 bg-white dark:bg-slate-800'
                        }`}
                      >
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg mx-auto mb-1 flex items-center justify-center ${
                          formData.project === type.value ? 'bg-purple-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                        }`}>
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <p className="font-medium text-slate-900 dark:text-white text-[10px] sm:text-xs">{type.label}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button
                type="button"
                onClick={nextStep}
                className="w-full h-11 sm:h-12 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25"
              >
                Continuer
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Step 2: Project Info */}
          {step === 2 && (
            <div className="space-y-4 sm:space-y-5 animate-fade-in">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Détails du projet</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Budget et délai souhaités</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-3 mb-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500 text-white`}>
                    {(() => {
                      const IconComponent = projectTypes.find(p => p.value === formData.project)?.icon || Globe;
                      return <IconComponent className="w-4 h-4" />;
                    })()}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{projectTypes.find(p => p.value === formData.project)?.label || "Type de site"}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs">{projectTypes.find(p => p.value === formData.project)?.desc}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2 block">Budget</label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b.value })}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium transition-all ${
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
                  <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2 block">Délai</label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: t.value })}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium transition-all ${
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

              <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-12 sm:h-14 rounded-xl border-2 text-sm"
                >
                  <ArrowLeft className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                  Retour
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 h-12 sm:h-14 bg-purple-600 hover:bg-purple-700 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm"
                >
                  Continuer
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Message */}
          {step === 3 && (
            <div className="space-y-4 sm:space-y-5 animate-fade-in">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Presque fini !</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Un message à nous partager ?</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                    {formData.name.charAt(0).toUpperCase() || "?"}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{formData.name || "Votre nom"}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs">{formData.company} • {projectTypes.find(p => p.value === formData.project)?.label}</p>
                  </div>
                </div>
              </div>

              <Textarea
                placeholder="Décrivez brièvement votre projet... (optionnel)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="bg-slate-50 dark:bg-slate-800 border-0 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-purple-500 resize-none"
              />

              <div className="flex gap-2 sm:gap-3">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-12 sm:h-14 rounded-xl border-2 text-sm"
                >
                  <ArrowLeft className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                  Retour
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-12 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Envoi...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Envoyer
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-500 pt-1 sm:pt-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500" />
                  Réponse 24h
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500" />
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
