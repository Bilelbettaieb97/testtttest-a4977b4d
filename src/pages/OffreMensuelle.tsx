import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, CheckCircle, XCircle, Globe, Paintbrush, Rocket, Headphones, Star, ChevronLeft, ChevronRight, Search, Key, Shield, Monitor, Users, TrendingUp } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection";

const approachSteps = [
  {
    icon: <Globe className="w-5 h-5 text-primary-foreground" />,
    title: "Analyse de votre activité",
    description: "On étudie votre secteur et vos concurrents pour créer un site qui convertit."
  },
  {
    icon: <Paintbrush className="w-5 h-5 text-primary-foreground" />,
    title: "Design sur-mesure, 100% à vous",
    description: "Design unique adapté à votre image. Vous êtes propriétaire de votre site."
  },
  {
    icon: <Search className="w-5 h-5 text-primary-foreground" />,
    title: "Visible sur Google",
    description: "SEO optimisé dès le lancement. Vos clients vous trouvent quand ils cherchent."
  },
  {
    icon: <Rocket className="w-5 h-5 text-primary-foreground" />,
    title: "En ligne en 7 jours",
    description: "Hébergement, domaine et SSL inclus. On gère tout le technique."
  },
  {
    icon: <Headphones className="w-5 h-5 text-primary-foreground" />,
    title: "Support inclus",
    description: "Un interlocuteur dédié. Modifications et maintenance incluses."
  }
];

const withoutUs = [
  "Site sur Wix/WordPress que vous ne maîtrisez pas",
  "Invisible sur Google, zéro trafic",
  "Design générique déjà vu 1 000 fois",
  "Pas de support, vous êtes seul",
  "Vous n'êtes pas propriétaire de votre site",
];

const withUs = [
  "Vous êtes 100% propriétaire de votre site",
  "Référencé sur Google dès la mise en ligne",
  "Design sur-mesure à votre image",
  "Support technique & modifications illimités",
  "Hébergement premium ultra-rapide inclus",
];

const testimonials = [
  {
    quote: "Mon site a été livré en 5 jours. Je suis déjà sur Google et j'ai reçu mes premiers appels. Incroyable pour 39€/mois.",
    name: "Sophie M.",
    company: "Naturopathe",
  },
  {
    quote: "Enfin un vrai site pro dont je suis propriétaire, sans me ruiner. L'équipe est réactive et à l'écoute.",
    name: "Marc D.",
    company: "Plombier",
  },
  {
    quote: "J'ai doublé mes demandes de devis depuis que j'ai mon nouveau site. Il sort en premier sur Google dans ma ville.",
    name: "Camille R.",
    company: "Photographe",
  },
];

// Features for pricing — shared = same in both, proOnly = highlighted extras
const sharedFeatures = [
  "Vous êtes propriétaire du site",
  "Design responsive sur-mesure",
  "SEO optimisé — visible sur Google",
  "Hébergement & SSL inclus",
  "Livraison en 7 jours",
];

const essentialExtras = [
  "Site vitrine jusqu'à 5 pages",
  "Support par email",
];

const proExtras = [
  { text: "Site jusqu'à 10 pages", highlight: true },
  { text: "Design premium sur-mesure", highlight: true },
  { text: "SEO avancé + Google My Business", highlight: true },
  { text: "Support prioritaire", highlight: true },
  { text: "Blog intégré pour le SEO", highlight: true },
  { text: "Formulaire de contact avancé", highlight: true },
  { text: "Page admin pour modifier votre contenu", highlight: true, bold: true },
];

const OffreMensuelle = () => {
  const [billingMode, setBillingMode] = useState<'monthly' | 'oneshot'>('monthly');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <SEO
        title="Site Internet à 39€/mois | Vous êtes propriétaire, visible sur Google"
        description="Votre site internet professionnel pour 39€/mois. Vous êtes propriétaire, visible sur Google dès le lancement. Design sur-mesure, SEO optimisé, livré en 7 jours."
        url="/offre-mensuelle"
        keywords="site internet pas cher, site web 39 euros, création site internet mensuel, site professionnel abordable, propriétaire site web"
      />
      <Navigation />

      {/* ── HERO ── */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-6 text-center max-w-4xl">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 animate-fade-in">
            🔑 Vous êtes propriétaire de votre site
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] mb-4 animate-fade-in">
            Votre site internet professionnel pour seulement{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-primary)' }}>
              39&nbsp;€/mois
            </span>
          </h1>

          <p className="text-muted-foreground text-sm sm:text-xl max-w-2xl mx-auto mb-2.5 animate-fade-in">
            <strong className="text-foreground">Vous êtes propriétaire</strong> de votre site. Design sur-mesure, SEO optimisé pour Google, hébergement et support inclus.
          </p>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto mb-7 animate-fade-in">
            On s'occupe de tout pour que vous puissiez vous concentrer sur votre activité.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 mb-5 animate-fade-in">
            <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Lancer mon site
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto text-base sm:text-lg text-primary hover:text-primary/80">
              <a href="#tarifs">
                Voir les tarifs
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="flex justify-center gap-6 sm:gap-10 text-center animate-fade-in">
            <div className="flex flex-col items-center gap-1">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <p className="text-lg sm:text-2xl font-bold text-primary">+50</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Clients</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <p className="text-lg sm:text-2xl font-bold text-primary">+280%</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">CA moyen</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <p className="text-lg sm:text-2xl font-bold text-primary">4.9/5</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <Portfolio />

      {/* ── NOTRE APPROCHE — CAROUSEL ── */}
      <AnimatedSection animation="fade-up">
        <section className="py-10 sm:py-16 bg-background">
          <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
            <span className="block text-center mb-3">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Notre approche
              </span>
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-center mb-8 leading-tight">
              Un site qui vous appartient, visible sur Google
            </h2>

            {/* Carousel on mobile, grid on desktop */}
            <div className="sm:hidden">
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-3">
                  {approachSteps.map((step, i) => (
                    <CarouselItem key={i} className="pl-3 basis-[85%]">
                      <Card className="p-5 bg-muted/40 border-0 shadow-none h-full">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-3">
                          {step.icon}
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-1.5">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex justify-center mt-3 text-[11px] text-muted-foreground">
                <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                <span>Glissez pour découvrir</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>

            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {approachSteps.map((step, i) => (
                <Card key={i} className="p-6 bg-muted/40 border-0 shadow-none">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-3">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg" className="w-full sm:w-auto text-base px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Lancer mon site
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── COMPARAISON ── */}
      <AnimatedSection animation="fade-up">
        <section className="py-10 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <span className="block text-center mb-3">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Pourquoi ConvertiLab ?
              </span>
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-center mb-8 leading-tight">
              Arrêtez de louer votre site. Devenez propriétaire.
            </h2>

            <Card className="p-5 sm:p-8 bg-muted/40 border-0 shadow-none mb-4">
              <h3 className="text-base sm:text-xl font-bold text-foreground mb-4">Sans ConvertiLab</h3>
              <ul className="space-y-3">
                {withoutUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-5 sm:p-8 bg-foreground text-primary-foreground border-0 shadow-none">
              <h3 className="text-base sm:text-xl font-bold mb-4">
                Converti<span className="text-primary">Lab</span>
              </h3>
              <ul className="space-y-3">
                {withUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* ── TÉMOIGNAGES ── */}
      <AnimatedSection animation="fade-up">
        <section className="py-10 sm:py-16 bg-background">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-center mb-2 leading-tight">
              Ils sont propriétaires de leur site
            </h2>
            <p className="text-xs sm:text-base text-muted-foreground text-center mb-8">
              Des entrepreneurs choisissent ConvertiLab pour un site pro, visible sur Google.
            </p>

            <Card className="p-5 sm:p-10 bg-muted/40 border-0 shadow-none text-center">
              <div className="flex justify-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm sm:text-lg font-medium text-foreground mb-4 leading-relaxed italic">
                "{testimonials[testimonialIndex].quote}"
              </p>
              <p className="font-bold text-foreground text-xs sm:text-sm">{testimonials[testimonialIndex].name}</p>
              <p className="text-muted-foreground text-[10px] sm:text-xs">{testimonials[testimonialIndex].company}</p>
            </Card>

            <div className="flex items-center justify-center gap-2 mt-4">
              <button
                onClick={prevTestimonial}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors active:scale-95"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === testimonialIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
              <button
                onClick={nextTestimonial}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors active:scale-95"
                aria-label="Suivant"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── TARIFS ── */}
      <AnimatedSection animation="fade-up">
        <section id="tarifs" className="py-10 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
            <span className="block text-center mb-3">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Tarifs
              </span>
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-center mb-2 leading-tight">
              Des offres simples et transparentes
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mb-7 max-w-md mx-auto">
              Vous êtes propriétaire de votre site dans tous les cas. Sans frais cachés.
            </p>

            {/* Toggle */}
            <div className="flex justify-center mb-7">
              <div className="inline-grid grid-cols-2 gap-1 rounded-xl border bg-muted/40 p-1 w-full max-w-xs sm:w-auto sm:max-w-none">
                <button
                  onClick={() => setBillingMode('oneshot')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    billingMode === 'oneshot' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Paiement unique
                </button>
                <button
                  onClick={() => setBillingMode('monthly')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    billingMode === 'monthly' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Mensuel <span className="text-primary text-[10px] font-semibold">(-17%)</span>
                </button>
              </div>
            </div>

            {/* Pricing cards */}
            <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
              {/* Essentiel */}
              <Card className="p-5 sm:p-7 border-2 border-border bg-background">
                <h3 className="text-sm sm:text-lg font-bold text-foreground mb-0.5">Essentiel</h3>
                <p className="text-muted-foreground text-[10px] sm:text-xs mb-4">Idéal pour les indépendants et artisans</p>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                    {billingMode === 'monthly' ? '39' : '468'}€
                  </span>
                  <span className="text-muted-foreground text-xs ml-1">
                    {billingMode === 'monthly' ? '/mois' : ' unique'}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {[...sharedFeatures, ...essentialExtras].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] sm:text-xs text-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" variant="outline" className="w-full text-xs sm:text-sm">
                  <Link to="/contact">
                    Choisir Essentiel
                    <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Link>
                </Button>
              </Card>

              {/* Pro */}
              <Card className="p-5 sm:p-7 border-2 border-primary bg-background relative overflow-hidden">
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Populaire
                </span>

                <h3 className="text-sm sm:text-lg font-bold text-foreground mb-0.5">Professionnel</h3>
                <p className="text-muted-foreground text-[10px] sm:text-xs mb-4">Pour maximiser votre visibilité Google</p>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                    {billingMode === 'monthly' ? '69' : '828'}€
                  </span>
                  <span className="text-muted-foreground text-xs ml-1">
                    {billingMode === 'monthly' ? '/mois' : ' unique'}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {/* Shared features */}
                  {sharedFeatures.map((feat, i) => (
                    <li key={`s-${i}`} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] sm:text-xs text-foreground">{feat}</span>
                    </li>
                  ))}
                  {/* Pro extras — highlighted */}
                  {proExtras.map((feat, i) => (
                    <li key={`p-${i}`} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className={`text-[11px] sm:text-xs ${feat.bold ? 'font-bold text-primary' : 'text-primary font-medium'}`}>
                        {feat.text}
                        {feat.bold && <Monitor className="w-3 h-3 inline ml-1 -mt-0.5" />}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="w-full text-xs sm:text-sm bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    Choisir Professionnel
                    <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Link>
                </Button>
              </Card>
            </div>

            <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-5">
              🔑 Propriétaire dans les 2 formules · 📍 Référencé sur Google · 🔒 Sans engagement
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── CTA FINAL ── */}
      <section className="py-10 sm:py-16 bg-primary">
        <div className="container mx-auto px-5 sm:px-6 text-center max-w-2xl">
          <h2 className="text-xl sm:text-3xl font-bold text-primary-foreground mb-2 sm:mb-3">
            Prêt à avoir votre propre site internet ?
          </h2>
          <p className="text-primary-foreground/80 mb-5 text-xs sm:text-base">
            Devenez propriétaire d'un site professionnel, visible sur Google. Sans engagement.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 text-sm sm:text-lg px-8 py-5 sm:py-6">
            <Link to="/contact">
              Lancer mon site maintenant
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </Button>
          <p className="text-primary-foreground/60 text-[10px] sm:text-xs mt-4">
            ⚡ Livré en 7 jours · 🔑 Vous êtes propriétaire · 📍 Visible sur Google
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OffreMensuelle;
