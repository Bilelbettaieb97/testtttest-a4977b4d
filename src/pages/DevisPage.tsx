import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Send, Globe, ShoppingCart,
  FileText, Search, Zap, Calendar, Target, Waves, User, Mail,
  Building2, Phone, Sparkles, Shield, Clock, Star
} from 'lucide-react';

/* ─── Data ─── */
const projectTypes = [
  { value: "vitrine", label: "Site vitrine", icon: Globe, desc: "Présenter votre activité", emoji: "🌐" },
  { value: "ecommerce", label: "E-commerce", icon: ShoppingCart, desc: "Vendre en ligne", emoji: "🛒" },
  { value: "landing", label: "Landing Page", icon: FileText, desc: "Page de conversion", emoji: "🎯" },
  { value: "audit", label: "Audit SEO", icon: Search, desc: "Analyser & optimiser", emoji: "🔍" },
];

const timelines = [
  { value: "urgent", label: "< 1 semaine", icon: Zap, desc: "Express" },
  { value: "1-2weeks", label: "1–2 semaines", icon: Calendar, desc: "Idéal", recommended: true },
  { value: "1month", label: "1 mois", icon: Target, desc: "Confortable" },
  { value: "flexible", label: "Flexible", icon: Waves, desc: "Pas de rush" },
];

const budgets = [
  { value: "small", label: "< 500 €", color: "from-blue-500 to-cyan-400" },
  { value: "medium", label: "500 – 1 500 €", color: "from-primary to-purple-400" },
  { value: "large", label: "1 500 – 5 000 €", color: "from-pink-500 to-rose-400" },
  { value: "custom", label: "Sur mesure", color: "from-amber-500 to-orange-400" },
];

const STORAGE_KEY = "convertilab_devis_form";

/* ─── Component ─── */
const DevisPage = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [formData, setFormData] = useState({
    project: "", timeline: "", budget: "",
    name: "", email: "", company: "", phone: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const totalSteps = 5; // 0-based: 0=project, 1=timeline, 2=budget, 3=contact, 4=confirm

  // Load saved contact info
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed }));
      }
    } catch { /* ignore */ }
  }, []);

  // Save contact info
  useEffect(() => {
    if (formData.name || formData.email) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        name: formData.name, email: formData.email,
        company: formData.company, phone: formData.phone,
      }));
    }
  }, [formData.name, formData.email, formData.company, formData.phone]);

  const go = (dir: 'forward' | 'back') => {
    setDirection(dir);
    setStep(s => dir === 'forward' ? s + 1 : s - 1);
  };

  const canContinue = () => {
    if (step === 0) return !!formData.project;
    if (step === 3) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      const phoneOk = /^[\d\s+()-]{10,}$/.test(formData.phone);
      return !!formData.name.trim() && emailOk && !!formData.company.trim() && phoneOk;
    }
    return true;
  };

  const handleNext = () => {
    if (!canContinue()) {
      if (step === 0) toast({ title: "Choisissez un type de projet", variant: "destructive" });
      if (step === 3) toast({ title: "Remplissez tous les champs obligatoires", variant: "destructive" });
      return;
    }
    if (step === 3) {
      handleSubmit();
    } else {
      go('forward');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert([{
        name: formData.name, email: formData.email, company: formData.company,
        phone: formData.phone, project: formData.project,
        main_challenge: "non_specifie", timeline: formData.timeline,
        message: formData.message, budget: formData.budget,
      }]);
      if (error) throw error;

      await supabase.functions.invoke('notify-contact', { body: formData });

      // Confetti
      const end = Date.now() + 2500;
      const frame = () => {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#8b5cf6', '#ec4899'] });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#8b5cf6', '#ec4899'] });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();

      go('forward');
    } catch {
      toast({ title: "Erreur, veuillez réessayer", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const animClass = direction === 'forward'
    ? 'animate-[slideInRight_0.4s_ease-out]'
    : 'animate-[slideInLeft_0.4s_ease-out]';

  const progress = step < 4 ? ((step) / 3) * 100 : 100;

  return (
    <>
      <SEO
        url="/devis"
        title="Demander un Devis Gratuit | ConvertiLab"
        description="Obtenez votre devis personnalisé en 2 minutes. Formulaire simple et rapide. Réponse sous 24h."
        keywords="devis site internet, devis gratuit, création site web devis"
      />
      <Navigation />

      <main className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 max-w-lg">

          {/* Header */}
          <div className="text-center mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Devis en 2 min
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              Votre projet <span className="text-primary">commence ici</span>
            </h1>
            <p className="text-sm text-muted-foreground">Réponse personnalisée sous 24h</p>
          </div>

          {/* Progress */}
          {step < 4 && (
            <div className="mb-6">
              <div className="flex justify-between text-[10px] text-muted-foreground mb-1.5">
                <span>Étape {step + 1}/4</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-pink-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Card */}
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-5 sm:p-6">

              {/* ─── Step 0: Project Type ─── */}
              {step === 0 && (
                <div key="step0" className={animClass}>
                  <h2 className="text-lg font-bold text-foreground mb-1">Quel type de projet ?</h2>
                  <p className="text-xs text-muted-foreground mb-4">Sélectionnez ce qui correspond le mieux</p>

                  <div className="grid grid-cols-2 gap-3">
                    {projectTypes.map((t) => {
                      const Icon = t.icon;
                      const active = formData.project === t.value;
                      return (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, project: t.value })}
                          className={`relative p-4 rounded-xl text-center transition-all duration-300 border-2 group ${
                            active
                              ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10 scale-[1.03]'
                              : 'border-border bg-card hover:border-primary/30 hover:shadow-md'
                          }`}
                        >
                          <span className="text-2xl mb-2 block">{t.emoji}</span>
                          <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-2 transition-all ${
                            active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <p className="font-semibold text-sm text-foreground">{t.label}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">{t.desc}</p>
                          {active && (
                            <div className="absolute top-2 right-2">
                              <CheckCircle2 className="w-4 h-4 text-primary animate-scale-in" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ─── Step 1: Timeline ─── */}
              {step === 1 && (
                <div key="step1" className={animClass}>
                  <h2 className="text-lg font-bold text-foreground mb-1">Quel délai ?</h2>
                  <p className="text-xs text-muted-foreground mb-4">Optionnel — aide à planifier</p>

                  <div className="space-y-2.5">
                    {timelines.map((t) => {
                      const Icon = t.icon;
                      const active = formData.timeline === t.value;
                      return (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: t.value })}
                          className={`w-full flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300 border-2 text-left ${
                            active
                              ? 'border-primary bg-primary/5 shadow-md'
                              : 'border-border hover:border-primary/30 bg-card'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                            active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-foreground">{t.label}</p>
                            <p className="text-[10px] text-muted-foreground">{t.desc}</p>
                          </div>
                          {t.recommended && (
                            <span className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Recommandé
                            </span>
                          )}
                          {active && <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ─── Step 2: Budget ─── */}
              {step === 2 && (
                <div key="step2" className={animClass}>
                  <h2 className="text-lg font-bold text-foreground mb-1">Votre budget ?</h2>
                  <p className="text-xs text-muted-foreground mb-4">Optionnel — pour ajuster notre proposition</p>

                  <div className="grid grid-cols-2 gap-3">
                    {budgets.map((b) => {
                      const active = formData.budget === b.value;
                      return (
                        <button
                          key={b.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b.value })}
                          className={`p-4 rounded-xl text-center transition-all duration-300 border-2 ${
                            active
                              ? 'border-primary bg-primary/5 shadow-md scale-[1.03]'
                              : 'border-border bg-card hover:border-primary/30'
                          }`}
                        >
                          <div className={`w-10 h-10 mx-auto rounded-full bg-gradient-to-br ${b.color} flex items-center justify-center mb-2`}>
                            <span className="text-white text-xs font-bold">€</span>
                          </div>
                          <p className="font-semibold text-sm text-foreground">{b.label}</p>
                          {active && <CheckCircle2 className="w-4 h-4 text-primary mx-auto mt-1 animate-scale-in" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ─── Step 3: Contact ─── */}
              {step === 3 && (
                <div key="step3" className={animClass}>
                  <h2 className="text-lg font-bold text-foreground mb-1">Vos coordonnées</h2>
                  <p className="text-xs text-muted-foreground mb-4">Pour recevoir votre devis</p>

                  {/* Recap pill */}
                  <div className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-lg px-3 py-2 mb-4 text-xs">
                    <span className="text-lg">{projectTypes.find(p => p.value === formData.project)?.emoji}</span>
                    <span className="font-medium text-foreground">
                      {projectTypes.find(p => p.value === formData.project)?.label}
                    </span>
                    {formData.timeline && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-muted-foreground">{timelines.find(t => t.value === formData.timeline)?.label}</span>
                      </>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          placeholder="Votre nom *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pl-9 h-11 text-sm bg-muted/50 border-border rounded-xl focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="relative group">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          placeholder="Entreprise *"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="pl-9 h-11 text-sm bg-muted/50 border-border rounded-xl focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        type="email"
                        placeholder="votre@email.com *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-9 h-11 text-sm bg-muted/50 border-border rounded-xl focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="relative group">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        type="tel"
                        placeholder="Votre téléphone *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-9 h-11 text-sm bg-muted/50 border-border rounded-xl focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Textarea
                      placeholder="Décrivez brièvement votre projet... (optionnel)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="bg-muted/50 border-border rounded-xl text-sm focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                </div>
              )}

              {/* ─── Step 4: Confirmation ─── */}
              {step === 4 && (
                <div key="step4" className="animate-scale-in text-center py-4">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Merci {formData.name.split(' ')[0]} ! 🎉
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
                    Votre demande a été envoyée. Nous vous recontacterons sous <span className="font-semibold text-primary">24 heures</span>.
                  </p>

                  {/* Recap */}
                  <div className="bg-muted/40 rounded-xl p-4 mb-6 text-left space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{projectTypes.find(p => p.value === formData.project)?.label}</span>
                    </div>
                    {formData.timeline && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{timelines.find(t => t.value === formData.timeline)?.label}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{formData.email}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <Button
                      type="button"
                      onClick={() => window.open('https://calendly.com/convertilab-5bsc/30min', '_blank')}
                      className="w-full h-12 bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 rounded-xl font-semibold text-sm text-primary-foreground"
                    >
                      <Calendar className="mr-2 w-4 h-4" />
                      Réserver un appel
                    </Button>
                    <Button asChild variant="outline" className="w-full h-10 rounded-xl text-sm">
                      <Link to="/">Retour à l'accueil</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* ─── Navigation Buttons ─── */}
            {step < 4 && (
              <div className="px-5 pb-5 pt-1">
                <div className="flex gap-3">
                  {step > 0 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => go('back')}
                      className="flex-1 h-12 rounded-xl border-2 text-sm"
                    >
                      <ArrowLeft className="mr-1.5 w-4 h-4" />
                      Retour
                    </Button>
                  )}
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={isSubmitting}
                    className={`${step > 0 ? 'flex-1' : 'w-full'} h-12 rounded-xl font-semibold text-sm transition-all ${
                      step === 3
                        ? 'bg-gradient-to-r from-primary to-pink-500 text-primary-foreground hover:opacity-90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Envoi…
                      </span>
                    ) : step === 3 ? (
                      <>
                        <Send className="mr-1.5 w-4 h-4" />
                        Envoyer ma demande
                      </>
                    ) : (
                      <>
                        Continuer
                        <ArrowRight className="ml-1.5 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="flex justify-center gap-4 mt-4 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-primary" /> 100% gratuit
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary" /> Réponse 24h
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-primary" /> Sans engagement
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Social proof */}
          {step < 4 && (
            <div className="mt-4 text-center animate-fade-in">
              <p className="text-xs text-muted-foreground">
                ⭐ Rejoint par <span className="font-semibold text-foreground">+50 entreprises</span> en 2024
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Custom keyframes for slide animations */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default DevisPage;
