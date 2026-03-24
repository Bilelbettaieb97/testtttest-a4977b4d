import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Building2, Phone, ArrowRight, ArrowLeft, CheckCircle2, Send, Globe, ShoppingCart, FileText, Search, Zap, Calendar, Target, Waves } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  project: string;
  
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


const timelines = [
  { value: "urgent", label: "< 1 semaine", icon: Zap, desc: "Express", recommended: false },
  { value: "1-2weeks", label: "1 à 2 semaines", icon: Calendar, desc: "Idéal", recommended: true },
  { value: "1month", label: "1 mois", icon: Target, desc: "Confortable", recommended: false },
  { value: "flexible", label: "Flexible", icon: Waves, desc: "Pas de rush", recommended: false },
];

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
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
    if (!formData.project) {
      toast({ title: "Sélectionnez un type de site", variant: "destructive" });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    return true;
  };

  const validateStep3 = () => {
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

      // Send email notification to owner
      const { error: notifyError } = await supabase.functions.invoke('notify-contact', {
        body: formData,
      });

      if (notifyError) {
        console.error('Email notification error:', notifyError);
      }

      if (typeof window !== 'undefined' && (window as any).trackFormConversion) {
        (window as any).trackFormConversion();
      }

      // Trigger confetti celebration
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#8b5cf6', '#ec4899', '#a855f7', '#f472b6']
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#8b5cf6', '#ec4899', '#a855f7', '#f472b6']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();

      toast({
        title: "Demande envoyée ! 🎉",
        description: "Nous vous recontacterons sous 24h.",
      });

      setStep(4); // Go to confirmation screen
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
      <div className={`px-4 sm:px-5 py-2.5 sm:py-3 ${step === 4 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-purple-600 to-pink-600'}`}>
        <h3 className="text-white font-bold text-base sm:text-lg text-center">
          {step === 4 ? 'Demande envoyée !' : 'Devis instantané'}
        </h3>
        <p className="text-white/80 text-[10px] sm:text-xs text-center mt-0.5">
          {step === 4 ? 'Merci pour votre confiance' : 'On revient vers vous sous 24h'}
        </p>
      </div>

      {/* Progress Bar - hidden on confirmation */}
      {step <= totalSteps && (
        <div className="px-4 sm:px-5 pt-3 pb-1">
          <div className="relative">
            {/* Background bar */}
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              {/* Animated progress fill */}
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite] -translate-x-full" 
                     style={{ animation: 'shimmer 2s infinite' }} />
              </div>
            </div>
            
            {/* Step indicators */}
            <div className="flex justify-between mt-2">
              {[
                { num: 1, label: "Projet" },
                { num: 2, label: "Détails" },
                { num: 3, label: "Contact" }
              ].map((s) => (
                <div key={s.num} className="flex flex-col items-center">
                   <div className={`
                    w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-xs
                    transition-all duration-500 ease-out transform
                    ${s.num < step 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-100' 
                      : s.num === step 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40 scale-110 ring-4 ring-purple-200 dark:ring-purple-900' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 scale-95'}
                  `}>
                    {s.num < step ? (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 animate-scale-in" />
                    ) : (
                      <span className={s.num === step ? 'animate-pulse' : ''}>{s.num}</span>
                    )}
                  </div>
                  <span className={`mt-1 text-[9px] sm:text-[10px] font-medium transition-all duration-300 ${
                    s.num < step ? 'text-purple-500' : s.num === step ? 'text-purple-600 font-semibold' : 'text-slate-400'
                  }`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-2">
            <span className="text-[10px] text-slate-500">
              Étape <span className="font-bold text-purple-600">{step}</span> sur <span className="font-bold">{totalSteps}</span>
            </span>
          </div>
        </div>
      )}

      {/* Reassurance badges - hidden on confirmation */}
      {step <= totalSteps && (
        <div className="px-4 sm:px-5 pb-2">
          <div className="flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs">
            <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">✓ 100% gratuit</span>
            <span className="bg-pink-50 text-pink-700 px-2 py-1 rounded-full font-medium">✓ Sans engagement</span>
            <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">✓ Réponse rapide</span>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-5 pt-1">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="space-y-3 sm:space-y-4 animate-fade-in">
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Votre projet</h3>
                <p className="text-slate-500 text-[10px] sm:text-xs mt-0.5">Quel type de site recherchez-vous ?</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {projectTypes.map((type) => {
                  const IconComponent = type.icon;
                  const isSelected = formData.project === type.value;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, project: type.value })}
                      className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center transition-all duration-300 border-2 ${
                        isSelected
                          ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 shadow-lg shadow-purple-500/20 scale-[1.02]'
                          : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 bg-white dark:bg-slate-800 hover:shadow-md'
                      }`}
                    >
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all ${
                        isSelected ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                      }`}>
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{type.label}</p>
                      <p className="text-slate-500 text-[10px] sm:text-xs mt-1">{type.desc}</p>
                    </button>
                  );
                })}
              </div>

              <Button
                type="button"
                onClick={nextStep}
                className="w-full h-12 sm:h-14 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25"
              >
                Continuer
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          )}

          {/* Step 2: Project Info */}
          {step === 2 && (
            <div className="space-y-4 sm:space-y-5 animate-fade-in">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Détails du projet</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Délai souhaité</p>
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

              {/* Timeline Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">⏱️ Délai souhaité</label>
                  <span className="text-[10px] sm:text-xs text-slate-400">Optionnel</span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {timelines.map((t) => {
                    const IconComponent = t.icon;
                    const isSelected = formData.timeline === t.value;
                    return (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: t.value })}
                        className={`relative p-3 sm:p-4 rounded-xl text-left transition-all duration-300 group ${
                          isSelected
                            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 scale-[1.02]'
                            : 'bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 hover:shadow-md hover:scale-[1.01]'
                        }`}
                      >
                        {t.recommended && (
                          <span className={`absolute -top-2 right-2 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected ? 'bg-white text-purple-600' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          }`}>
                            Recommandé
                          </span>
                        )}
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isSelected ? 'bg-white/20' : 'bg-pink-100 dark:bg-pink-900/30'
                          }`}>
                            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? 'text-white' : 'text-pink-600 dark:text-pink-400'}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                              {t.label}
                            </p>
                            <p className={`text-[10px] sm:text-xs ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                              {t.desc}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reassurance message */}
              <div className="text-center py-2">
                <p className="text-[10px] sm:text-xs text-slate-400 italic">
                  💡 Ces informations nous aident à mieux estimer votre projet
                </p>
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

          {/* Step 3: Contact Info & Message */}
          {step === 3 && (
            <div className="space-y-3 sm:space-y-4 animate-fade-in">
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Vos coordonnées</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Pour vous recontacter rapidement</p>
              </div>

              {/* Project Summary */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500 text-white">
                    {(() => {
                      const IconComponent = projectTypes.find(p => p.value === formData.project)?.icon || Globe;
                      return <IconComponent className="w-4 h-4" />;
                    })()}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{projectTypes.find(p => p.value === formData.project)?.label}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs">
                      {formData.timeline && timelines.find(t => t.value === formData.timeline)?.label}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Fields */}
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

              <Textarea
                placeholder="Décrivez brièvement votre projet... (optionnel)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={2}
                className="bg-slate-50 dark:bg-slate-800 border-0 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 resize-none"
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
                  type="button"
                  onClick={(e) => {
                    if (validateStep3()) {
                      handleSubmit(e as any);
                    }
                  }}
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

          {/* Step 4: Confirmation Screen */}
          {step === 4 && (
            <div className="py-6 sm:py-8 animate-fade-in text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center animate-scale-in">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Merci {formData.name.split(' ')[0]} ! 🎉
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-6 max-w-sm mx-auto">
                Votre demande a bien été envoyée. Notre équipe vous recontactera sous <span className="font-semibold text-purple-600">24 heures</span>.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-4 mb-6 text-left">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-3">Récapitulatif de votre demande :</h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-500" />
                    <span>{projectTypes.find(p => p.value === formData.project)?.label}</span>
                  </div>
                  {formData.timeline && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span>Délai : {timelines.find(t => t.value === formData.timeline)?.label}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-500" />
                    <span>{formData.email}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  type="button"
                  onClick={() => window.open('https://calendly.com/convertilab-5bsc/30min', '_blank')}
                  className="w-full h-12 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm"
                >
                  <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Réserver un appel maintenant
                </Button>
                
                <Button
                  type="button"
                  onClick={() => {
                    setFormData({
                      name: "", email: "", company: "", phone: "",
                      project: "", main_challenge: "non_specifie",
                      timeline: "", message: "", urgency: ""
                    });
                    setStep(1);
                  }}
                  variant="outline"
                  className="w-full h-10 sm:h-12 rounded-xl border-2 text-sm text-slate-600"
                >
                  Nouvelle demande
                </Button>
              </div>

              <p className="text-[10px] sm:text-xs text-slate-400 mt-4">
                Un email de confirmation a été envoyé à {formData.email}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
