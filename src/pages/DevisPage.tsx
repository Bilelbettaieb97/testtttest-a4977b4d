import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
  ArrowRight, ArrowLeft, CheckCircle2, Send, User, Mail,
  Building2, Phone, Sparkles, Shield, Clock, Star,
  Briefcase, Store, Scissors, Utensils, Stethoscope, Hammer,
  Car, GraduationCap, Camera, MoreHorizontal, Calendar,
  Crown, Zap, Monitor, Globe, CheckCircle
} from 'lucide-react';

/* ─── Data ─── */
const sectors = [
  { value: "artisan", label: "Artisan", icon: Hammer, emoji: "🔨" },
  { value: "restaurant", label: "Restaurant / Food", icon: Utensils, emoji: "🍽️" },
  { value: "beaute", label: "Beauté / Bien-être", icon: Scissors, emoji: "✂️" },
  { value: "sante", label: "Santé", icon: Stethoscope, emoji: "🩺" },
  { value: "commerce", label: "Commerce", icon: Store, emoji: "🏪" },
  { value: "auto", label: "Auto / Garage", icon: Car, emoji: "🚗" },
  { value: "formation", label: "Formation / Coach", icon: GraduationCap, emoji: "🎓" },
  { value: "photo", label: "Photo / Créatif", icon: Camera, emoji: "📸" },
  { value: "consultant", label: "Consultant", icon: Briefcase, emoji: "💼" },
  { value: "autre", label: "Autre", icon: MoreHorizontal, emoji: "✨" },
];

const offers = [
  {
    value: "essentiel",
    name: "Essentiel",
    price: "39,50",
    desc: "Idéal pour démarrer en ligne",
    features: [
      { text: "Site vitrine jusqu'à 3 pages", highlight: false, bold: false },
      { text: "Design responsive sur-mesure", highlight: false, bold: false },
      { text: "SEO de base — visible sur Google", highlight: false, bold: false },
      { text: "Hébergement + nom de domaine inclus", highlight: false, bold: false },
      { text: "Support par email", highlight: false, bold: false },
    ],
    popular: false,
    savings: "",
  },
  {
    value: "pro",
    name: "Pro",
    price: "47,50",
    desc: "Le choix le plus populaire",
    features: [
      { text: "Tout de l'offre Essentiel", highlight: false, bold: false },
      { text: "Jusqu'à 7 pages", highlight: true, bold: false },
      { text: "SEO avancé + Google My Business", highlight: true, bold: false },
      { text: "Blog intégré pour le SEO", highlight: true, bold: false },
      { text: "Formulaire de contact avancé", highlight: true, bold: false },
      { text: "Support prioritaire", highlight: true, bold: false },
    ],
    popular: false,
    savings: "+30€ de valeur/mois",
  },
  {
    value: "premium",
    name: "Premium",
    price: "52,50",
    desc: "Tout inclus, sans compromis",
    features: [
      { text: "Tout de l'offre Pro", highlight: false, bold: false },
      { text: "Pages illimitées", highlight: true, bold: false },
      { text: "Page admin pour modifier le contenu", highlight: true, bold: true },
      { text: "Maintenance & mises à jour incluses", highlight: true, bold: false },
      { text: "Support prioritaire dédié", highlight: true, bold: false },
    ],
    popular: true,
    savings: "Meilleur ROI",
  },
];

const STORAGE_KEY = "convertilab_devis_form";

/* ─── Component ─── */
const DevisPage = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [formData, setFormData] = useState({
    sector: "",
    companyDescription: "",
    offer: searchParams.get('offre') || "",
    name: "", email: "", company: "", phone: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const totalSteps = 3; // 0=activité, 1=offre, 2=coordonnées

  // Load saved contact info
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, name: parsed.name || "", email: parsed.email || "", company: parsed.company || "", phone: parsed.phone || "" }));
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
    if (step === 0) return !!formData.sector;
    if (step === 1) return !!formData.offer;
    if (step === 2) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      const phoneOk = /^[\d\s+()-]{10,}$/.test(formData.phone);
      return !!formData.name.trim() && emailOk && !!formData.company.trim() && phoneOk;
    }
    return true;
  };

  const handleNext = () => {
    if (!canContinue()) {
      if (step === 0) toast({ title: "Sélectionnez votre secteur d'activité", variant: "destructive" });
      if (step === 1) toast({ title: "Choisissez une offre", variant: "destructive" });
      if (step === 2) toast({ title: "Remplissez tous les champs obligatoires", variant: "destructive" });
      return;
    }
    if (step === 2) {
      handleSubmit();
    } else {
      go('forward');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const selectedOffer = offers.find(o => o.value === formData.offer);
      const { error } = await supabase.from('contact_submissions').insert([{
        name: formData.name, email: formData.email, company: formData.company,
        phone: formData.phone, project: "vitrine",
        main_challenge: formData.sector,
        message: `Offre: ${selectedOffer?.name} (${selectedOffer?.price}€/mois) | Secteur: ${formData.sector} | ${formData.companyDescription ? 'Description: ' + formData.companyDescription : ''} ${formData.message ? '| Message: ' + formData.message : ''}`.trim(),
      }]);
      if (error) throw error;

      await supabase.functions.invoke('notify-contact', {
        body: {
          type: 'devis',
          ...formData,
          project: "vitrine",
          offer: formData.offer,
          offerName: selectedOffer?.name,
          offerPrice: selectedOffer?.price,
        },
      });

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

  const progress = step <= totalSteps ? (step / totalSteps) * 100 : 100;
  const stepLabels = ["Activité", "Offre", "Coordonnées"];

  return (
    <>
      <SEO
        url="/offre-mensuelle/devis"
        title="Demander votre site vitrine | ConvertiLab"
        description="Obtenez votre site vitrine professionnel à partir de 39€/mois. Formulaire rapide, réponse sous 24h."
        keywords="devis site vitrine, site internet 39 euros, création site web devis"
      />
      <Navigation />

      <main className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 max-w-lg">

          {/* Header */}
          <div className="text-center mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Site vitrine · Devis en 2 min
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              Lancez votre <span className="text-primary">site vitrine</span>
            </h1>
            <p className="text-sm text-muted-foreground">Réponse personnalisée sous 24h · Sans engagement</p>
          </div>

          {/* Progress */}
          {step <= totalSteps && step < 3 && (
            <div className="mb-6">
              <div className="flex justify-between text-[10px] text-muted-foreground mb-2">
                {stepLabels.map((label, i) => (
                  <span key={i} className={`flex items-center gap-1 ${i <= step ? 'text-primary font-medium' : ''}`}>
                    {i < step ? (
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    ) : (
                      <span className={`w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold ${
                        i === step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>{i + 1}</span>
                    )}
                    {label}
                  </span>
                ))}
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

              {/* ─── Step 0: Secteur d'activité ─── */}
              {step === 0 && (
                <div key="step0" className={animClass}>
                  <h2 className="text-lg font-bold text-foreground mb-1">Votre activité</h2>
                  <p className="text-xs text-muted-foreground mb-4">Dans quel secteur exercez-vous ?</p>

                  <div className="grid grid-cols-2 gap-2.5">
                    {sectors.map((s) => {
                      const Icon = s.icon;
                      const active = formData.sector === s.value;
                      return (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, sector: s.value })}
                          className={`relative flex items-center gap-2.5 p-3 rounded-xl transition-all duration-300 border-2 text-left ${
                            active
                              ? 'border-primary bg-primary/5 shadow-md'
                              : 'border-border bg-card hover:border-primary/30'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                            active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-medium text-foreground leading-tight">{s.label}</span>
                          {active && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary absolute top-1.5 right-1.5 animate-scale-in" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Optional description */}
                  <div className="mt-4">
                    <Textarea
                      placeholder="Décrivez brièvement votre activité... (optionnel)"
                      value={formData.companyDescription}
                      onChange={(e) => setFormData({ ...formData, companyDescription: e.target.value })}
                      rows={2}
                      className="bg-muted/50 border-border rounded-xl text-sm focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                </div>
              )}

              {/* ─── Step 1: Choix de l'offre ─── */}
              {step === 1 && (
                <div key="step1" className={animClass}>
                  <h2 className="text-lg font-bold text-foreground mb-1">Choisissez votre offre</h2>
                  <p className="text-xs text-muted-foreground mb-4">Vous êtes propriétaire dans les 3 formules</p>

                  {/* Recap activité */}
                  <div className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-lg px-3 py-2 mb-4 text-xs">
                    <span className="text-lg">{sectors.find(s => s.value === formData.sector)?.emoji}</span>
                    <span className="font-medium text-foreground">
                      {sectors.find(s => s.value === formData.sector)?.label}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {offers.map((offer) => {
                      const active = formData.offer === offer.value;
                      return (
                        <button
                          key={offer.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, offer: offer.value })}
                          className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 relative ${
                            active
                              ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                              : 'border-border bg-card hover:border-primary/30 hover:shadow-md'
                          }`}
                        >
                          {offer.popular && (
                            <span className="absolute -top-2.5 right-3 bg-primary text-primary-foreground text-[9px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <Crown className="w-3 h-3" /> Populaire
                            </span>
                          )}

                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-bold text-foreground text-sm">{offer.name}</h3>
                              <p className="text-[10px] text-muted-foreground">{offer.desc}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-extrabold text-foreground">{offer.price}€</span>
                              <span className="text-[10px] text-muted-foreground block">/mois</span>
                            </div>
                          </div>

                          <ul className="space-y-1.5">
                            {offer.features.map((feat, i) => (
                              <li key={i} className={`flex items-start gap-2 text-[11px] ${feat.highlight ? 'bg-primary/5 -mx-1 px-1 py-0.5 rounded' : ''}`}>
                                <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                                  feat.highlight ? 'text-primary' : active ? 'text-primary' : 'text-muted-foreground'
                                }`} />
                                <span className={`${
                                  feat.bold ? 'font-bold text-primary' : feat.highlight ? 'font-semibold text-foreground' : active ? 'text-foreground' : 'text-muted-foreground'
                                }`}>
                                  {feat.text}
                                  {feat.bold && <Monitor className="w-3 h-3 inline ml-1 -mt-0.5" />}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {offer.savings && (
                            <div className="mt-3 text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 inline-block">
                              🚀 {offer.savings}
                            </div>
                          )}

                          {active && (
                            <div className="absolute top-4 right-4">
                              <CheckCircle2 className="w-5 h-5 text-primary animate-scale-in" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ─── Step 2: Coordonnées ─── */}
              {step === 2 && (
                <div key="step2" className={animClass}>
                  <h2 className="text-lg font-bold text-foreground mb-1">Vos coordonnées</h2>
                  <p className="text-xs text-muted-foreground mb-4">Pour recevoir votre devis personnalisé</p>

                  {/* Recap */}
                  <div className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-lg px-3 py-2 mb-4 text-xs flex-wrap">
                    <span className="text-lg">{sectors.find(s => s.value === formData.sector)?.emoji}</span>
                    <span className="font-medium text-foreground">
                      {sectors.find(s => s.value === formData.sector)?.label}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="font-semibold text-primary">
                      {offers.find(o => o.value === formData.offer)?.name} — {offers.find(o => o.value === formData.offer)?.price}€/mois
                    </span>
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
                      placeholder="Un message ou des précisions ? (optionnel)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={2}
                      className="bg-muted/50 border-border rounded-xl text-sm focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                </div>
              )}

              {/* ─── Step 3: Confirmation ─── */}
              {step === 3 && (
                <div key="step3" className="animate-scale-in text-center py-4">
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
                      <span className="text-foreground">Site vitrine — {sectors.find(s => s.value === formData.sector)?.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-foreground">Offre {offers.find(o => o.value === formData.offer)?.name} — {offers.find(o => o.value === formData.offer)?.price}€/mois</span>
                    </div>
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
                      <Link to="/offre-mensuelle">Retour aux offres</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* ─── Navigation Buttons ─── */}
            {step <= 2 && (
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
                      step === 2
                        ? 'bg-gradient-to-r from-primary to-pink-500 text-primary-foreground hover:opacity-90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Envoi…
                      </span>
                    ) : step === 2 ? (
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
          {step <= 2 && (
            <div className="mt-4 text-center animate-fade-in">
              <p className="text-xs text-muted-foreground">
                ⭐ Rejoint par <span className="font-semibold text-foreground">+50 entreprises</span> en 2024
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />

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
