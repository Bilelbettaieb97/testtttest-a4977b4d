import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  CheckCircle, ArrowRight, ArrowLeft, Sparkles, User, Mail, Phone,
  Globe, Briefcase, FileText, Clock, Shield, Zap, Calculator,
  Store, Code, RefreshCw, Rocket, MonitorSmartphone, Search,
  FileDown, CalendarCheck, Languages, Palette, Share2, Gauge,
  Wrench, CreditCard, Package, Truck, Tag, UserCheck, Star,
  Target, PenTool, BarChart3, ClipboardList, Link2, Eye,
  TrendingUp, Plus, Layout, ShoppingCart
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Step 1: Site types
const siteTypes = [
  { value: 'vitrine', label: 'Site vitrine', icon: MonitorSmartphone, description: 'Présenter votre activité' },
  { value: 'ecommerce', label: 'Site e-commerce', icon: Store, description: 'Vendre vos produits en ligne' },
  { value: 'landing', label: 'Landing page', icon: Rocket, description: 'Page unique de conversion' },
  { value: 'refonte', label: 'Refonte d\'un site', icon: RefreshCw, description: 'Moderniser l\'existant' },
];

// Step 2: Conditional options per site type
const vitrineOptions = [
  { value: 'seo', label: 'SEO optimisé', icon: Search, description: 'Visibilité Google' },
  { value: 'one-page', label: 'Site one page', icon: FileText, description: 'Une seule page' },
  { value: 'multi-pages', label: 'Site multipages', icon: Layout, description: 'Plusieurs pages' },
  { value: 'blog', label: 'Blog / actualités', icon: PenTool, description: 'Publier du contenu' },
  { value: 'contact-form', label: 'Formulaire de contact', icon: ClipboardList, description: 'Recevoir des demandes' },
  { value: 'rdv', label: 'Prise de rendez-vous', icon: CalendarCheck, description: 'Agenda en ligne' },
  { value: 'multilingue', label: 'Multilingue', icon: Languages, description: 'Plusieurs langues' },
  { value: 'design-sur-mesure', label: 'Design sur mesure', icon: Palette, description: 'Création unique' },
  { value: 'reseaux-sociaux', label: 'Intégration réseaux sociaux', icon: Share2, description: 'Facebook, Instagram…' },
  { value: 'vitesse', label: 'Optimisation vitesse', icon: Gauge, description: 'Performance maximale' },
  { value: 'hebergement', label: 'Hébergement + maintenance', icon: Wrench, description: 'Tout inclus' },
];

const vitrinePages = [
  { value: '1', label: '1 page' },
  { value: '2-5', label: '2 à 5 pages' },
  { value: '5-10', label: '5 à 10 pages' },
  { value: '10+', label: '+10 pages' },
];

const ecommerceOptions = [
  { value: 'paiement', label: 'Paiement en ligne', icon: CreditCard, description: 'CB, PayPal…' },
  { value: 'produits', label: 'Gestion des produits', icon: Package, description: 'Catalogue complet' },
  { value: 'commandes', label: 'Gestion des commandes', icon: ShoppingCart, description: 'Suivi commandes' },
  { value: 'livraison', label: 'Livraison / frais de port', icon: Truck, description: 'Options de livraison' },
  { value: 'promo', label: 'Codes promo', icon: Tag, description: 'Réductions & offres' },
  { value: 'compte-client', label: 'Compte client', icon: UserCheck, description: 'Espace personnel' },
  { value: 'avis', label: 'Avis clients', icon: Star, description: 'Témoignages produits' },
  { value: 'multilingue', label: 'Multilingue', icon: Languages, description: 'Plusieurs langues' },
  { value: 'seo-ecommerce', label: 'SEO e-commerce', icon: Search, description: 'Visibilité Google' },
];

const ecommerceProducts = [
  { value: '1-10', label: '1 à 10' },
  { value: '10-50', label: '10 à 50' },
  { value: '50-200', label: '50 à 200' },
  { value: '200+', label: '+200' },
];

const landingObjectives = [
  { value: 'leads', label: 'Génération de leads', icon: Target, description: 'Capturer des contacts' },
  { value: 'vente', label: 'Vente d\'un produit', icon: ShoppingCart, description: 'Vendre directement' },
  { value: 'evenement', label: 'Inscription événement', icon: CalendarCheck, description: 'Gérer les inscriptions' },
  { value: 'telechargement', label: 'Télécharger un document', icon: FileDown, description: 'Lead magnet' },
];

const landingOptions = [
  { value: 'design-premium', label: 'Design premium', icon: Palette, description: 'Haut de gamme' },
  { value: 'copywriting', label: 'Copywriting', icon: PenTool, description: 'Textes persuasifs' },
  { value: 'seo', label: 'SEO', icon: Search, description: 'Référencement naturel' },
  { value: 'tracking', label: 'Tracking marketing', icon: BarChart3, description: 'Meta / Google Ads' },
  { value: 'formulaire-avance', label: 'Formulaire avancé', icon: ClipboardList, description: 'Multi-étapes' },
  { value: 'crm', label: 'Intégration CRM', icon: Link2, description: 'HubSpot, Pipedrive…' },
];

const refonteReasons = [
  { value: 'design-depasse', label: 'Design dépassé', icon: Eye },
  { value: 'mauvais-seo', label: 'Mauvais référencement', icon: Search },
  { value: 'site-lent', label: 'Site lent', icon: Gauge },
  { value: 'ajout-fonctionnalites', label: 'Ajouter des fonctionnalités', icon: Plus },
];

const refonteImprovements = [
  { value: 'design', label: 'Design', icon: Palette },
  { value: 'seo', label: 'SEO', icon: Search },
  { value: 'performance', label: 'Performance', icon: Gauge },
  { value: 'conversion', label: 'Conversion', icon: TrendingUp },
  { value: 'ajout-pages', label: 'Ajout de pages', icon: Plus },
];

const EstimationPrix = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const [form, setForm] = useState({
    site_type: '',
    options: [] as string[],
    page_count: '',
    product_count: '',
    landing_objective: '',
    refonte_url: '',
    refonte_reasons: [] as string[],
    refonte_improvements: [] as string[],
    name: '',
    email: '',
    phone: '',
    company: '',
    description: '',
  });

  const TOTAL_STEPS = 3; // 1: type, 2: conditional options, 3: contact

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: string, value: string) => {
    setForm(prev => {
      const arr = prev[field as keyof typeof prev] as string[];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value],
      };
    });
  };

  const goToStep = (newStep: number) => {
    if (animating) return;
    setDirection(newStep > step ? 'forward' : 'backward');
    setAnimating(true);
    setTimeout(() => {
      setStep(newStep);
      setAnimating(false);
    }, 250);
  };

  const canProceed = () => {
    if (step === 1) return !!form.site_type;
    if (step === 2) {
      if (form.site_type === 'vitrine') return form.options.length > 0;
      if (form.site_type === 'ecommerce') return form.options.length > 0;
      if (form.site_type === 'landing') return !!form.landing_objective;
      if (form.site_type === 'refonte') return form.refonte_reasons.length > 0;
    }
    if (step === 3) return !!(form.name && form.email && form.phone);
    return false;
  };

  const getStepLabels = () => {
    const labels: { num: number; label: string; icon: any }[] = [
      { num: 1, label: 'Type de site', icon: Globe },
    ];
    if (form.site_type === 'vitrine') labels.push({ num: 2, label: 'Options & pages', icon: Layout });
    else if (form.site_type === 'ecommerce') labels.push({ num: 2, label: 'Fonctionnalités', icon: Store });
    else if (form.site_type === 'landing') labels.push({ num: 2, label: 'Objectif & options', icon: Target });
    else if (form.site_type === 'refonte') labels.push({ num: 2, label: 'Besoins', icon: RefreshCw });
    else labels.push({ num: 2, label: 'Options', icon: Code });
    labels.push({ num: 3, label: 'Vos coordonnées', icon: User });
    return labels;
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      toast({ title: 'Champs requis', description: 'Veuillez remplir tous les champs obligatoires.', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('price_estimations' as any).insert({
        site_type: form.site_type,
        options: form.options,
        page_count: form.page_count || null,
        product_count: form.product_count || null,
        landing_objective: form.landing_objective || null,
        refonte_url: form.refonte_url.trim() || null,
        refonte_reasons: form.refonte_reasons,
        refonte_improvements: form.refonte_improvements,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim() || null,
        description: form.description.trim() || null,
      });

      if (error) throw error;

      // Send email notification
      await supabase.functions.invoke('notify-contact', {
        body: {
          type: 'estimation',
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim() || null,
          site_type: form.site_type,
          options: form.options.join(', '),
          page_count: form.page_count || null,
          product_count: form.product_count || null,
          landing_objective: form.landing_objective || null,
          refonte_url: form.refonte_url.trim() || null,
          refonte_reasons: form.refonte_reasons.join(', '),
          refonte_improvements: form.refonte_improvements.join(', '),
          description: form.description.trim() || null,
        },
      });

      setIsSubmitted(true);
    } catch {
      toast({ title: 'Erreur', description: 'Une erreur est survenue. Réessayez ou contactez-nous directement.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confetti on success
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);
  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const colors = ['#8B5CF6', '#E04090', '#F59E0B', '#10B981', '#3B82F6'];
      setParticles(
        Array.from({ length: 30 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5,
        }))
      );
    }
  }, [isSubmitted]);

  // Multi-select option card
  const OptionCard = ({ value, label, icon: Icon, description, selected, onClick }: {
    value: string; label: string; icon: any; description?: string; selected: boolean; onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={cn(
        "group relative p-4 rounded-xl border-2 transition-all duration-300 text-left",
        selected
          ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/20"
          : "border-slate-700/50 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800/50"
      )}
    >
      {selected && (
        <div className="absolute top-2 right-2">
          <CheckCircle className="w-4 h-4 text-violet-400" />
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0",
          selected ? "bg-gradient-to-br from-violet-500 to-pink-500" : "bg-slate-800 group-hover:bg-slate-700"
        )}>
          <Icon className={cn("w-4 h-4 transition-colors", selected ? "text-white" : "text-slate-400 group-hover:text-violet-400")} />
        </div>
        <div>
          <h3 className={cn("font-semibold text-sm transition-colors", selected ? "text-white" : "text-slate-300")}>{label}</h3>
          {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
        </div>
      </div>
    </button>
  );

  // Single-select pill
  const PillSelect = ({ options, value, onChange }: { options: { value: string; label: string }[]; value: string; onChange: (v: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300",
            value === opt.value
              ? "border-violet-500 bg-violet-500/20 text-violet-300"
              : "border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  if (isSubmitted) {
    return (
      <>
        <SEO url="/estimation-prix-site-web" title="Estimation envoyée | ConvertiLab" description="Votre demande d'estimation a bien été envoyée." />
        <Navigation />
        <main className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute w-3 h-3 rounded-full opacity-0"
              style={{
                left: `${p.x}%`, top: `${p.y}%`, backgroundColor: p.color,
                animation: `confetti-float 3s ease-out ${p.delay}s forwards`,
              }}
            />
          ))}
          <div className="text-center max-w-lg mx-auto px-4 relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-[scale-in_0.5s_ease-out] shadow-2xl shadow-primary/30">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 animate-[fade-in_0.5s_ease-out_0.2s_both]">
              Estimation reçue ! 📊
            </h1>
            <p className="text-lg text-muted-foreground mb-4 animate-[fade-in_0.5s_ease-out_0.4s_both]">
              Merci ! Notre équipe analyse votre projet et vous enverra une estimation détaillée très rapidement.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8 animate-[fade-in_0.5s_ease-out_0.6s_both]">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Sans engagement</span>
              </div>
            </div>
            <Button asChild size="lg" className="animate-[fade-in_0.5s_ease-out_0.8s_both]">
              <Link to="/">Retour à l'accueil <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </main>
        <Footer />
        <style>{`
          @keyframes confetti-float {
            0% { opacity: 1; transform: translateY(0) rotate(0deg) scale(1); }
            100% { opacity: 0; transform: translateY(-200px) rotate(720deg) scale(0); }
          }
        `}</style>
      </>
    );
  }

  const stepLabels = getStepLabels();

  return (
    <>
      <SEO
        url="/estimation-prix-site-web"
        title="Estimation Prix Site Web Gratuite | ConvertiLab"
        description="Estimez gratuitement le prix de votre site web en quelques clics. Site vitrine, e-commerce, landing page ou refonte — obtenez un devis personnalisé."
        keywords="estimation prix site web, devis site internet, combien coûte un site web, prix site vitrine, prix site e-commerce"
      />
      <Navigation />

      <main className="pt-16 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Estimation prix site web</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-violet-500/10 to-pink-500/10 backdrop-blur-sm border border-violet-500/20 text-violet-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-violet-500/10 animate-[fade-in_0.5s_ease-out]">
                <Calculator className="w-5 h-5 mr-2" />
                Gratuit · Sans engagement · Réponse sous 24h
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-[fade-in_0.5s_ease-out_0.1s_both]">
                Estimez le prix de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                  votre site web
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto animate-[fade-in_0.5s_ease-out_0.2s_both]">
                En 3 étapes, décrivez votre projet et recevez une estimation de prix personnalisée pour votre site internet.
              </p>
            </div>

            {/* Progress bar */}
            <div className="max-w-xl mx-auto mb-10 animate-[fade-in_0.5s_ease-out_0.3s_both]">
              <div className="flex items-center justify-between mb-3">
                {stepLabels.map((s) => (
                  <button
                    key={s.num}
                    onClick={() => s.num < step && goToStep(s.num)}
                    className={cn(
                      "flex items-center gap-2 transition-all duration-300",
                      step >= s.num ? "text-white" : "text-slate-500",
                      s.num < step && "cursor-pointer hover:text-violet-300"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-2",
                      step === s.num
                        ? "bg-gradient-to-br from-violet-500 to-pink-500 border-violet-400 shadow-lg shadow-violet-500/30 scale-110"
                        : step > s.num
                        ? "bg-violet-600/30 border-violet-500/50"
                        : "bg-slate-800 border-slate-700"
                    )}>
                      {step > s.num ? <CheckCircle className="w-5 h-5" /> : <s.icon className="w-4 h-4" />}
                    </div>
                    <span className="hidden sm:block text-sm font-medium">{s.label}</span>
                  </button>
                ))}
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                />
              </div>
            </div>

            {/* Steps container */}
            <div className="max-w-3xl mx-auto">
              <div className={cn(
                "transition-all duration-250",
                animating
                  ? direction === 'forward' ? "opacity-0 translate-x-8" : "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
              )}>

                {/* Step 1: Site type */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white text-center mb-2">Quel type de site souhaitez-vous ?</h2>
                    <p className="text-slate-400 text-center mb-8">Sélectionnez l'option qui correspond le mieux</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {siteTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = form.site_type === type.value;
                        return (
                          <button
                            key={type.value}
                            onClick={() => {
                              handleChange('site_type', type.value);
                              // Reset conditional fields
                              setForm(prev => ({ ...prev, site_type: type.value, options: [], page_count: '', product_count: '', landing_objective: '', refonte_url: '', refonte_reasons: [], refonte_improvements: [] }));
                            }}
                            className={cn(
                              "group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden",
                              isSelected
                                ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/20"
                                : "border-slate-700/50 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800/50"
                            )}
                          >
                            {isSelected && (
                              <div className="absolute top-3 right-3">
                                <CheckCircle className="w-5 h-5 text-violet-400" />
                              </div>
                            )}
                            <div className={cn(
                              "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                              isSelected ? "bg-gradient-to-br from-violet-500 to-pink-500 shadow-lg" : "bg-slate-800 group-hover:bg-slate-700"
                            )}>
                              <Icon className={cn("w-6 h-6 transition-colors", isSelected ? "text-white" : "text-slate-400 group-hover:text-violet-400")} />
                            </div>
                            <h3 className={cn("font-bold text-lg mb-1 transition-colors", isSelected ? "text-white" : "text-slate-300")}>{type.label}</h3>
                            <p className="text-sm text-slate-500">{type.description}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 2: Conditional options */}
                {step === 2 && form.site_type === 'vitrine' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-white text-center mb-2">Quelles options pour votre site vitrine ?</h2>
                      <p className="text-slate-400 text-center mb-6">Sélectionnez toutes les options souhaitées</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {vitrineOptions.map(opt => (
                          <OptionCard
                            key={opt.value}
                            {...opt}
                            selected={form.options.includes(opt.value)}
                            onClick={() => toggleArrayValue('options', opt.value)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Combien de pages souhaitez-vous ?</h3>
                      <PillSelect options={vitrinePages} value={form.page_count} onChange={(v) => handleChange('page_count', v)} />
                    </div>
                  </div>
                )}

                {step === 2 && form.site_type === 'ecommerce' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-white text-center mb-2">Fonctionnalités e-commerce souhaitées</h2>
                      <p className="text-slate-400 text-center mb-6">Sélectionnez les fonctionnalités dont vous avez besoin</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {ecommerceOptions.map(opt => (
                          <OptionCard
                            key={opt.value}
                            {...opt}
                            selected={form.options.includes(opt.value)}
                            onClick={() => toggleArrayValue('options', opt.value)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Combien de produits ?</h3>
                      <PillSelect options={ecommerceProducts} value={form.product_count} onChange={(v) => handleChange('product_count', v)} />
                    </div>
                  </div>
                )}

                {step === 2 && form.site_type === 'landing' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-white text-center mb-2">Objectif de votre landing page</h2>
                      <p className="text-slate-400 text-center mb-6">Quel est l'objectif principal ?</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {landingObjectives.map(obj => {
                          const Icon = obj.icon;
                          const isSelected = form.landing_objective === obj.value;
                          return (
                            <button
                              key={obj.value}
                              onClick={() => handleChange('landing_objective', obj.value)}
                              className={cn(
                                "group p-5 rounded-xl border-2 transition-all duration-300 text-left",
                                isSelected
                                  ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/20"
                                  : "border-slate-700/50 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800/50"
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <div className={cn(
                                  "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0",
                                  isSelected ? "bg-gradient-to-br from-violet-500 to-pink-500" : "bg-slate-800 group-hover:bg-slate-700"
                                )}>
                                  <Icon className={cn("w-5 h-5 transition-colors", isSelected ? "text-white" : "text-slate-400 group-hover:text-violet-400")} />
                                </div>
                                <div>
                                  <h3 className={cn("font-semibold transition-colors", isSelected ? "text-white" : "text-slate-300")}>{obj.label}</h3>
                                  <p className="text-xs text-slate-500">{obj.description}</p>
                                </div>
                              </div>
                              {isSelected && <CheckCircle className="w-4 h-4 text-violet-400 absolute top-3 right-3" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Options supplémentaires</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {landingOptions.map(opt => (
                          <OptionCard
                            key={opt.value}
                            {...opt}
                            selected={form.options.includes(opt.value)}
                            onClick={() => toggleArrayValue('options', opt.value)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && form.site_type === 'refonte' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-white text-center mb-2">Parlez-nous de votre refonte</h2>
                      <p className="text-slate-400 text-center mb-6">Décrivez vos besoins actuels</p>

                      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 mb-6">
                        <Label className="text-slate-300 flex items-center gap-2 mb-3">
                          <Globe className="w-4 h-4 text-violet-400" /> URL de votre site actuel
                        </Label>
                        <Input
                          type="url"
                          placeholder="https://monsite.com"
                          value={form.refonte_url}
                          onChange={e => handleChange('refonte_url', e.target.value)}
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Pourquoi souhaitez-vous une refonte ?</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {refonteReasons.map(r => (
                          <OptionCard
                            key={r.value}
                            value={r.value}
                            label={r.label}
                            icon={r.icon}
                            selected={form.refonte_reasons.includes(r.value)}
                            onClick={() => toggleArrayValue('refonte_reasons', r.value)}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Que souhaitez-vous améliorer ?</h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {refonteImprovements.map(r => (
                          <OptionCard
                            key={r.value}
                            value={r.value}
                            label={r.label}
                            icon={r.icon}
                            selected={form.refonte_improvements.includes(r.value)}
                            onClick={() => toggleArrayValue('refonte_improvements', r.value)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact info */}
                {step === 3 && (
                  <div className="max-w-xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-2">Vos coordonnées</h2>
                    <p className="text-slate-400 text-center mb-8">Pour recevoir votre estimation personnalisée</p>

                    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-slate-300 flex items-center gap-2">
                            <User className="w-4 h-4 text-violet-400" /> Nom complet *
                          </Label>
                          <Input id="name" placeholder="Jean Dupont" value={form.name} onChange={e => handleChange('name', e.target.value)} required maxLength={200} className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-300 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-violet-400" /> Email *
                          </Label>
                          <Input id="email" type="email" placeholder="jean@exemple.com" value={form.email} onChange={e => handleChange('email', e.target.value)} required maxLength={255} className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-slate-300 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-violet-400" /> Téléphone *
                          </Label>
                          <Input id="phone" type="tel" placeholder="06 12 34 56 78" value={form.phone} onChange={e => handleChange('phone', e.target.value)} required maxLength={50} className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-slate-300 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-violet-400" /> Entreprise <span className="text-slate-500">(optionnel)</span>
                          </Label>
                          <Input id="company" placeholder="Mon entreprise" value={form.company} onChange={e => handleChange('company', e.target.value)} maxLength={200} className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-slate-300 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-violet-400" /> Description du projet <span className="text-slate-500">(optionnel)</span>
                        </Label>
                        <Textarea id="description" placeholder="Décrivez votre projet, vos objectifs, vos inspirations..." value={form.description} onChange={e => handleChange('description', e.target.value)} rows={4} maxLength={2000} className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20 resize-none" />
                      </div>

                      {/* Summary chips */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {form.site_type && (
                          <span className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 px-3 py-1.5 rounded-full text-xs font-medium border border-violet-500/20">
                            <Globe className="w-3 h-3" /> {siteTypes.find(t => t.value === form.site_type)?.label}
                          </span>
                        )}
                        {form.options.length > 0 && (
                          <span className="inline-flex items-center gap-1.5 bg-pink-500/10 text-pink-300 px-3 py-1.5 rounded-full text-xs font-medium border border-pink-500/20">
                            <Zap className="w-3 h-3" /> {form.options.length} option{form.options.length > 1 ? 's' : ''}
                          </span>
                        )}
                        {form.page_count && (
                          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 px-3 py-1.5 rounded-full text-xs font-medium border border-amber-500/20">
                            <Layout className="w-3 h-3" /> {form.page_count} pages
                          </span>
                        )}
                        {form.product_count && (
                          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-500/20">
                            <Package className="w-3 h-3" /> {form.product_count} produits
                          </span>
                        )}
                        {form.landing_objective && (
                          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 px-3 py-1.5 rounded-full text-xs font-medium border border-amber-500/20">
                            <Target className="w-3 h-3" /> {landingObjectives.find(o => o.value === form.landing_objective)?.label}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-10 max-w-xl mx-auto">
                {step > 1 ? (
                  <Button variant="outline" onClick={() => goToStep(step - 1)} className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                  </Button>
                ) : <div />}

                {step < TOTAL_STEPS ? (
                  <Button onClick={() => goToStep(step + 1)} disabled={!canProceed()} className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-lg shadow-violet-500/20 disabled:opacity-40 disabled:shadow-none transition-all duration-300">
                    Suivant <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!canProceed() || isSubmitting} className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-lg shadow-violet-500/20 disabled:opacity-40 disabled:shadow-none transition-all duration-300 px-8">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Envoi...
                      </>
                    ) : (
                      <>Recevoir mon estimation <Sparkles className="w-4 h-4 ml-2" /></>
                    )}
                  </Button>
                )}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 mb-8">
                {[
                  { icon: Shield, text: 'Données sécurisées' },
                  { icon: Clock, text: 'Réponse sous 24h' },
                  { icon: Zap, text: 'Sans engagement' },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <badge.icon className="w-4 h-4 text-violet-500/60" />
                    {badge.text}
                  </div>
                ))}
              </div>

              <p className="text-xs text-center text-slate-600 pb-8">
                En soumettant ce formulaire, vous acceptez notre{' '}
                <Link to="/politique-de-confidentialite" className="underline hover:text-violet-400 transition-colors">politique de confidentialité</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EstimationPrix;
