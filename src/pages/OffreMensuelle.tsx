import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import { ArrowRight, CheckCircle, XCircle, Globe, Paintbrush, Rocket, Headphones, Star, ChevronLeft, ChevronRight, Search, Key, Shield } from 'lucide-react';

// ── Portfolio data ──
const portfolioItems = [
  { title: "Site vitrine restaurant", category: "Restauration" },
  { title: "Landing page coaching", category: "Services" },
  { title: "Site artisan plombier", category: "Artisans" },
  { title: "Boutique bijoux", category: "E-commerce" },
  { title: "Cabinet avocat", category: "Professionnel" },
  { title: "Studio photo", category: "Créatif" },
  { title: "Coach sportif", category: "Bien-être" },
  { title: "Agence immobilière", category: "Immobilier" },
  { title: "Salon de coiffure", category: "Beauté" },
  { title: "Cabinet dentaire", category: "Santé" },
  { title: "Auto-école", category: "Formation" },
  { title: "Fleuriste", category: "Commerce" },
];

const approachSteps = [
  {
    icon: <Globe className="w-5 h-5 text-primary-foreground" />,
    title: "Analyse de votre activité",
    description: "On étudie votre secteur et vos concurrents pour créer un site qui vous ressemble et qui convertit vos visiteurs en clients."
  },
  {
    icon: <Paintbrush className="w-5 h-5 text-primary-foreground" />,
    title: "Design sur-mesure, 100% à vous",
    description: "Chaque site est unique et vous appartient. Design moderne, responsive et adapté à votre image de marque. Vous êtes propriétaire de votre site."
  },
  {
    icon: <Search className="w-5 h-5 text-primary-foreground" />,
    title: "Visible sur Google dès le lancement",
    description: "SEO optimisé, indexation Google, balises techniques et mots-clés ciblés. Vos clients vous trouvent quand ils cherchent vos services."
  },
  {
    icon: <Rocket className="w-5 h-5 text-primary-foreground" />,
    title: "Mise en ligne en 7 jours",
    description: "Hébergement, nom de domaine et certificat SSL inclus. Vous n'avez rien à gérer techniquement, on s'occupe de tout."
  },
  {
    icon: <Headphones className="w-5 h-5 text-primary-foreground" />,
    title: "Support & évolutions inclus",
    description: "Un interlocuteur dédié. Mises à jour de contenu, ajout de pages et maintenance technique inclus dans votre abonnement."
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
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-20 bg-background">
        <div className="container mx-auto px-5 sm:px-6 text-center max-w-4xl">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 animate-fade-in">
            🔑 Propriétaire · 📍 Visible sur Google · ⚡ Livré en 7 jours
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] mb-5 animate-fade-in">
            Votre site internet professionnel pour seulement{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-primary)' }}>
              39&nbsp;€/mois
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-xl max-w-2xl mx-auto mb-3 animate-fade-in">
            <strong className="text-foreground">Vous êtes propriétaire</strong> de votre site. Design sur-mesure, SEO optimisé pour Google, hébergement et support inclus.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 animate-fade-in">
            On s'occupe de tout pour que vous puissiez vous concentrer sur votre activité.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 mb-6 animate-fade-in">
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

          {/* Trust badges mobile */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground animate-fade-in">
            <span className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-full">
              <Key className="w-3.5 h-3.5 text-primary" />
              Propriétaire du site
            </span>
            <span className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-full">
              <Search className="w-3.5 h-3.5 text-primary" />
              Visible sur Google
            </span>
            <span className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5 text-primary" />
              Sans engagement
            </span>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-3 sm:mb-4">
            Découvrez nos réalisations
          </h2>
          <div className="text-center mb-8 sm:mb-10">
            <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              <Link to="/portfolio">
                Voir plus de réalisations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 text-center">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 opacity-60" />
                  <p className="font-semibold text-foreground text-xs sm:text-base leading-tight">{item.title}</p>
                  <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">{item.category}</span>
                </div>
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTRE APPROCHE ── */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <span className="block text-center mb-3">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Notre approche
            </span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-8 sm:mb-14 leading-tight">
            Un site qui vous appartient, visible sur Google
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {approachSteps.map((step, i) => (
              <Card key={i} className="p-5 sm:p-8 bg-muted/40 border-0 shadow-none">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary flex items-center justify-center mb-3 sm:mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Lancer mon site
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── COMPARAISON ── */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <span className="block text-center mb-3">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Pourquoi ConvertiLab ?
            </span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-8 sm:mb-14 leading-tight">
            Arrêtez de louer votre site. Devenez propriétaire.
          </h2>

          {/* Sans */}
          <Card className="p-5 sm:p-8 bg-muted/40 border-0 shadow-none mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Sans ConvertiLab</h3>
            <ul className="space-y-3 sm:space-y-4">
              {withoutUs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Avec */}
          <Card className="p-5 sm:p-8 bg-foreground text-primary-foreground border-0 shadow-none">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Converti<span className="text-primary">Lab</span>
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {withUs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-3 sm:mb-4 leading-tight">
            Ils sont propriétaires de leur site
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground text-center mb-8 sm:mb-12">
            Des entrepreneurs choisissent ConvertiLab pour avoir un site professionnel, visible sur Google et dont ils sont propriétaires.
          </p>

          <div className="relative">
            <Card className="p-6 sm:p-10 bg-muted/40 border-0 shadow-none text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-base sm:text-xl font-medium text-foreground mb-5 sm:mb-6 leading-relaxed italic">
                "{testimonials[testimonialIndex].quote}"
              </p>
              <p className="font-bold text-foreground text-sm sm:text-base">{testimonials[testimonialIndex].name}</p>
              <p className="text-muted-foreground text-xs sm:text-sm">{testimonials[testimonialIndex].company}</p>
            </Card>

            <div className="flex justify-center gap-3 mt-5">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors active:scale-95"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
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
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors active:scale-95"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section id="tarifs" className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <span className="block text-center mb-3">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Tarifs
            </span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-3 sm:mb-4 leading-tight">
            Des offres simples et transparentes
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground text-center mb-8 sm:mb-10 max-w-xl mx-auto">
            Tarification claire, sans frais cachés. Vous êtes propriétaire de votre site dans tous les cas.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
            <span className={`text-xs sm:text-sm font-medium ${billingMode === 'oneshot' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Paiement unique
            </span>
            <button
              onClick={() => setBillingMode(billingMode === 'monthly' ? 'oneshot' : 'monthly')}
              className={`relative w-12 h-6 sm:w-14 sm:h-7 rounded-full transition-colors ${billingMode === 'monthly' ? 'bg-primary' : 'bg-muted-foreground/30'}`}
              aria-label="Changer le mode de paiement"
            >
              <span
                className={`absolute top-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background shadow transition-transform ${billingMode === 'monthly' ? 'translate-x-6 sm:translate-x-7' : 'translate-x-0.5'}`}
              />
            </button>
            <span className={`text-xs sm:text-sm font-medium ${billingMode === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Mensuel
            </span>
            {billingMode === 'monthly' && (
              <span className="text-[10px] sm:text-xs text-primary font-semibold">(-17%)</span>
            )}
          </div>

          {/* Pricing cards */}
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6">
            {/* Essentiel */}
            <Card className="p-5 sm:p-8 border-2 border-border bg-background">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Essentiel</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-5">Idéal pour les indépendants et artisans</p>

              <div className="mb-5">
                <span className="text-3xl sm:text-5xl font-extrabold text-foreground">
                  {billingMode === 'monthly' ? '39' : '468'}€
                </span>
                <span className="text-muted-foreground text-sm ml-1">
                  {billingMode === 'monthly' ? '/mois' : ' unique'}
                </span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {[
                  "Vous êtes propriétaire du site",
                  "Site vitrine jusqu'à 5 pages",
                  "Design responsive sur-mesure",
                  "SEO optimisé — visible sur Google",
                  "Hébergement & SSL inclus",
                  "Support par email",
                  "Livraison en 7 jours",
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" variant="outline" className="w-full text-sm sm:text-base">
                <Link to="/contact">
                  Choisir Essentiel
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>

            {/* Pro */}
            <Card className="p-5 sm:p-8 border-2 border-primary bg-background relative overflow-hidden">
              <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
                Populaire
              </span>

              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Professionnel</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-5">Pour maximiser votre visibilité Google</p>

              <div className="mb-5">
                <span className="text-3xl sm:text-5xl font-extrabold text-foreground">
                  {billingMode === 'monthly' ? '69' : '828'}€
                </span>
                <span className="text-muted-foreground text-sm ml-1">
                  {billingMode === 'monthly' ? '/mois' : ' unique'}
                </span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {[
                  "Vous êtes propriétaire du site",
                  "Site jusqu'à 10 pages",
                  "Design premium sur-mesure",
                  "SEO avancé + Google My Business",
                  "Hébergement premium & SSL",
                  "Support prioritaire",
                  "Blog intégré pour le SEO",
                  "Formulaire de contact avancé",
                  "Livraison en 7 jours",
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="w-full text-sm sm:text-base bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Choisir Professionnel
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>
          </div>

          {/* Reassurance sous les tarifs */}
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6">
            🔑 Vous êtes propriétaire dans les 2 formules · 📍 Référencé sur Google · 🔒 Sans engagement
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-12 sm:py-20 bg-primary">
        <div className="container mx-auto px-5 sm:px-6 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Prêt à avoir votre propre site internet ?
          </h2>
          <p className="text-primary-foreground/80 mb-6 sm:mb-8 text-sm sm:text-lg">
            Devenez propriétaire d'un site professionnel, visible sur Google. Consultation gratuite, sans engagement.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 text-base sm:text-lg px-8 py-6">
            <Link to="/contact">
              Lancer mon site maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="text-primary-foreground/60 text-xs sm:text-sm mt-5">
            ⚡ Livré en 7 jours · 🔑 Vous êtes propriétaire · 📍 Visible sur Google
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OffreMensuelle;
