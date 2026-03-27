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
  Palette, CheckCircle, ArrowRight, ArrowLeft, Sparkles, User, Mail, Phone, 
  Globe, Briefcase, FileText, Clock, Shield, Zap, Rocket, Store, Code, 
  RefreshCw, UtensilsCrossed, Building2, Heart, ShoppingBag, Handshake, 
  Hammer, GraduationCap, Shirt, Cpu, Users, PenTool
} from 'lucide-react';
import { cn } from '@/lib/utils';

const siteTypes = [
  { label: 'Landing Page', icon: Rocket, description: 'Page unique de conversion' },
  { label: 'Site Vitrine', icon: FileText, description: 'Présenter votre activité' },
  { label: 'Site E-commerce', icon: Store, description: 'Vendre en ligne' },
  { label: 'Application Web', icon: Code, description: 'Solution sur-mesure' },
  { label: 'Refonte de site', icon: RefreshCw, description: 'Moderniser l\'existant' },
  { label: 'Autre', icon: PenTool, description: 'Projet spécifique' },
];

const sectors = [
  { label: 'Restaurant / Food', icon: UtensilsCrossed },
  { label: 'Immobilier', icon: Building2 },
  { label: 'Santé / Bien-être', icon: Heart },
  { label: 'E-commerce / Retail', icon: ShoppingBag },
  { label: 'Services B2B', icon: Handshake },
  { label: 'Artisan / BTP', icon: Hammer },
  { label: 'Coaching / Formation', icon: GraduationCap },
  { label: 'Beauté / Mode', icon: Shirt },
  { label: 'Tech / SaaS', icon: Cpu },
  { label: 'Association / ONG', icon: Users },
  { label: 'Autre', icon: Briefcase },
];

const designStyles = [
  { label: 'Moderne & Minimaliste', description: 'Design épuré, beaucoup d\'espace blanc, typographie soignée', color: 'from-slate-400 to-slate-600', preview: 'bg-gradient-to-br from-slate-50 to-slate-200' },
  { label: 'Coloré & Dynamique', description: 'Couleurs vives, animations, énergie visuelle', color: 'from-orange-400 to-pink-500', preview: 'bg-gradient-to-br from-orange-100 to-pink-200' },
  { label: 'Élégant & Premium', description: 'Tons sombres, accents dorés, haut de gamme', color: 'from-amber-400 to-yellow-600', preview: 'bg-gradient-to-br from-slate-900 to-slate-800' },
  { label: 'Naturel & Organique', description: 'Couleurs terreuses, formes douces, ambiance zen', color: 'from-emerald-400 to-teal-600', preview: 'bg-gradient-to-br from-emerald-50 to-teal-100' },
  { label: 'Tech & Futuriste', description: 'Néons, dégradés audacieux, style cyberpunk', color: 'from-cyan-400 to-blue-600', preview: 'bg-gradient-to-br from-slate-950 to-blue-950' },
  { label: 'Je laisse carte blanche', description: 'Notre équipe choisira le meilleur style pour vous', color: 'from-violet-400 to-pink-500', preview: 'bg-gradient-to-br from-violet-100 to-pink-100' },
];

const TOTAL_STEPS = 4;

const DemandeMaquette = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    current_site_url: '',
    sector: '',
    site_type: '',
    description: '',
    design_style: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
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
    if (step === 2) return !!form.sector;
    if (step === 3) return !!form.design_style;
    return !!(form.name && form.email && form.phone);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.sector || !form.site_type) {
      toast({ title: 'Champs requis', description: 'Veuillez remplir tous les champs obligatoires.', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('mockup_requests' as any).insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        current_site_url: form.current_site_url.trim() || null,
        sector: form.sector,
        site_type: form.site_type,
        description: form.description.trim() || null,
      });

      if (error) throw error;
      setIsSubmitted(true);
    } catch {
      toast({ title: 'Erreur', description: 'Une erreur est survenue. Réessayez ou contactez-nous directement.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confetti-like particles on success
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);
  useEffect(() => {
    if (isSubmitted) {
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

  if (isSubmitted) {
    return (
      <>
        <SEO url="/demande-maquette" title="Demande envoyée | ConvertiLab" description="Votre demande de maquette a bien été envoyée." />
        <Navigation />
        <main className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          {/* Floating particles */}
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute w-3 h-3 rounded-full opacity-0"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                backgroundColor: p.color,
                animation: `confetti-float 3s ease-out ${p.delay}s forwards`,
              }}
            />
          ))}

          <div className="text-center max-w-lg mx-auto px-4 relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-[scale-in_0.5s_ease-out] shadow-2xl shadow-primary/30">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 animate-[fade-in_0.5s_ease-out_0.2s_both]">
              Demande reçue ! 🎨
            </h1>
            <p className="text-lg text-muted-foreground mb-4 animate-[fade-in_0.5s_ease-out_0.4s_both]">
              Merci pour votre confiance ! Notre équipe de designers prépare votre maquette personnalisée.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8 animate-[fade-in_0.5s_ease-out_0.6s_both]">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Réponse sous 48h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>100% gratuit</span>
              </div>
            </div>
            <Button asChild size="lg" className="animate-[fade-in_0.5s_ease-out_0.8s_both]">
              <Link to="/">
                Retour à l'accueil
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
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

  return (
    <>
      <SEO
        url="/demande-maquette"
        title="Demande de Maquette Gratuite | ConvertiLab"
        description="Demandez une maquette gratuite pour votre futur site web. Remplissez le formulaire et recevez un design personnalisé sous 48h."
        keywords="maquette site web gratuite, design site internet, maquette gratuite Paris"
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
                <BreadcrumbPage>Demande de maquette</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero with animated background */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-violet-500/10 to-pink-500/10 backdrop-blur-sm border border-violet-500/20 text-violet-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-violet-500/10 animate-[fade-in_0.5s_ease-out]">
                <Sparkles className="w-5 h-5 mr-2" />
                100% Gratuit · Sans engagement · Sous 48h
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-[fade-in_0.5s_ease-out_0.1s_both]">
                Recevez une{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                  maquette gratuite
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto animate-[fade-in_0.5s_ease-out_0.2s_both]">
                En 4 étapes simples, décrivez votre projet et notre équipe crée une maquette sur-mesure pour votre futur site web.
              </p>
            </div>

            {/* Progress bar */}
            <div className="max-w-xl mx-auto mb-10 animate-[fade-in_0.5s_ease-out_0.3s_both]">
              <div className="flex items-center justify-between mb-3">
                {[
                  { num: 1, label: 'Type de site', icon: Globe },
                  { num: 2, label: 'Votre secteur', icon: Briefcase },
                  { num: 3, label: 'Style visuel', icon: Palette },
                  { num: 4, label: 'Vos coordonnées', icon: User },
                ].map((s, i) => (
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
                  ? direction === 'forward' 
                    ? "opacity-0 translate-x-8" 
                    : "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
              )}>

                {/* Step 1: Site type */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white text-center mb-2">
                      Quel type de site souhaitez-vous ?
                    </h2>
                    <p className="text-slate-400 text-center mb-8">Sélectionnez l'option qui correspond le mieux à votre projet</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {siteTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = form.site_type === type.label;
                        return (
                          <button
                            key={type.label}
                            onClick={() => handleChange('site_type', type.label)}
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
                              isSelected
                                ? "bg-gradient-to-br from-violet-500 to-pink-500 shadow-lg"
                                : "bg-slate-800 group-hover:bg-slate-700"
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

                {/* Step 2: Sector */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white text-center mb-2">
                      Dans quel secteur êtes-vous ?
                    </h2>
                    <p className="text-slate-400 text-center mb-8">Cela nous aide à adapter le design à votre domaine d'activité</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {sectors.map((sector) => {
                        const Icon = sector.icon;
                        const isSelected = form.sector === sector.label;
                        return (
                          <button
                            key={sector.label}
                            onClick={() => handleChange('sector', sector.label)}
                            className={cn(
                              "group flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all duration-300",
                              isSelected
                                ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/20 scale-105"
                                : "border-slate-700/50 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800/50 hover:scale-[1.02]"
                            )}
                          >
                            <div className={cn(
                              "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                              isSelected
                                ? "bg-gradient-to-br from-violet-500 to-pink-500"
                                : "bg-slate-800 group-hover:bg-slate-700"
                            )}>
                              <Icon className={cn("w-5 h-5 transition-colors", isSelected ? "text-white" : "text-slate-400 group-hover:text-violet-400")} />
                            </div>
                            <span className={cn("text-sm font-medium text-center transition-colors", isSelected ? "text-white" : "text-slate-400")}>{sector.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Design style */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white text-center mb-2">
                      Quel style visuel vous inspire ?
                    </h2>
                    <p className="text-slate-400 text-center mb-8">Choisissez l'ambiance qui correspond à votre image de marque</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {designStyles.map((style) => {
                        const isSelected = form.design_style === style.label;
                        return (
                          <button
                            key={style.label}
                            onClick={() => handleChange('design_style', style.label)}
                            className={cn(
                              "group relative rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden",
                              isSelected
                                ? "border-violet-500 shadow-lg shadow-violet-500/20 scale-[1.02]"
                                : "border-slate-700/50 hover:border-slate-600 hover:scale-[1.01]"
                            )}
                          >
                            {/* Style preview band */}
                            <div className={cn("h-20 w-full", style.preview, "relative")}>
                              <div className={cn(
                                "absolute inset-0 bg-gradient-to-r opacity-60",
                                style.color
                              )} />
                              {isSelected && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                  <CheckCircle className="w-5 h-5 text-violet-600" />
                                </div>
                              )}
                            </div>
                            <div className="p-4 bg-slate-900/80">
                              <h3 className={cn("font-bold mb-1 transition-colors", isSelected ? "text-white" : "text-slate-300")}>
                                {style.label}
                              </h3>
                              <p className="text-xs text-slate-500">{style.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 4: Contact info */}
                {step === 4 && (
                  <div className="max-w-xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-2">
                      Comment vous contacter ?
                    </h2>
                    <p className="text-slate-400 text-center mb-8">Nous vous enverrons la maquette par email</p>
                    
                    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-slate-300 flex items-center gap-2">
                            <User className="w-4 h-4 text-violet-400" /> Nom complet *
                          </Label>
                          <Input 
                            id="name" 
                            placeholder="Jean Dupont" 
                            value={form.name} 
                            onChange={e => handleChange('name', e.target.value)} 
                            required 
                            maxLength={200}
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-300 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-violet-400" /> Email *
                          </Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="jean@exemple.com" 
                            value={form.email} 
                            onChange={e => handleChange('email', e.target.value)} 
                            required 
                            maxLength={255}
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-300 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-violet-400" /> Téléphone *
                        </Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="06 12 34 56 78" 
                          value={form.phone} 
                          onChange={e => handleChange('phone', e.target.value)} 
                          required 
                          maxLength={50}
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="url" className="text-slate-300 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-violet-400" /> Site actuel <span className="text-slate-500">(optionnel)</span>
                        </Label>
                        <Input 
                          id="url" 
                          type="url" 
                          placeholder="https://monsite.com" 
                          value={form.current_site_url} 
                          onChange={e => handleChange('current_site_url', e.target.value)}
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-slate-300 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-violet-400" /> Description du projet <span className="text-slate-500">(optionnel)</span>
                        </Label>
                        <Textarea 
                          id="description" 
                          placeholder="Objectifs, fonctionnalités souhaitées, inspirations..." 
                          value={form.description} 
                          onChange={e => handleChange('description', e.target.value)} 
                          rows={4} 
                          maxLength={2000}
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20 resize-none"
                        />
                      </div>

                      {/* Summary chips */}
                      {(form.site_type || form.sector || form.design_style) && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {form.site_type && (
                            <span className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 px-3 py-1.5 rounded-full text-xs font-medium border border-violet-500/20">
                              <Globe className="w-3 h-3" /> {form.site_type}
                            </span>
                          )}
                          {form.sector && (
                            <span className="inline-flex items-center gap-1.5 bg-pink-500/10 text-pink-300 px-3 py-1.5 rounded-full text-xs font-medium border border-pink-500/20">
                              <Briefcase className="w-3 h-3" /> {form.sector}
                            </span>
                          )}
                          {form.design_style && (
                            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 px-3 py-1.5 rounded-full text-xs font-medium border border-amber-500/20">
                              <Palette className="w-3 h-3" /> {form.design_style}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-10 max-w-xl mx-auto">
                {step > 1 ? (
                  <Button
                    variant="outline"
                    onClick={() => goToStep(step - 1)}
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                  </Button>
                ) : <div />}

                {step < TOTAL_STEPS ? (
                  <Button
                    onClick={() => goToStep(step + 1)}
                    disabled={!canProceed()}
                    className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-lg shadow-violet-500/20 disabled:opacity-40 disabled:shadow-none transition-all duration-300"
                  >
                    Suivant <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                    className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-lg shadow-violet-500/20 disabled:opacity-40 disabled:shadow-none transition-all duration-300 px-8"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Envoi...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande <Sparkles className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 mb-8">
                {[
                  { icon: Shield, text: 'Données sécurisées' },
                  { icon: Clock, text: 'Réponse sous 48h' },
                  { icon: Zap, text: '100% gratuit' },
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

export default DemandeMaquette;
