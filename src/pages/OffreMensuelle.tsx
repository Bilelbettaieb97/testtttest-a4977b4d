import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, XCircle, Globe, Paintbrush, Rocket, Headphones, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// ── Portfolio data (reuse existing portfolio images or placeholders) ──
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
    icon: <Globe className="w-6 h-6 text-primary-foreground" />,
    title: "Analyse de votre activité",
    description: "Nous étudions votre secteur, vos concurrents et votre cible pour créer un site qui vous ressemble et qui convertit vos visiteurs en clients."
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-primary-foreground" />,
    title: "Design sur-mesure",
    description: "Chaque site est unique. Nous concevons un design moderne et professionnel, adapté à votre image de marque et optimisé pour mobile."
  },
  {
    icon: <Rocket className="w-6 h-6 text-primary-foreground" />,
    title: "Mise en ligne rapide",
    description: "Votre site est prêt en 7 jours. Hébergement, nom de domaine et certificat SSL inclus. Vous n'avez rien à gérer techniquement."
  },
  {
    icon: <Headphones className="w-6 h-6 text-primary-foreground" />,
    title: "Support & évolutions",
    description: "Un interlocuteur dédié pour toutes vos questions. Mises à jour de contenu, ajout de pages et maintenance technique inclus."
  }
];

const withoutUs = [
  "Site bricolé sur un constructeur gratuit",
  "Design générique et non professionnel",
  "Aucune optimisation SEO",
  "Pas de support technique",
  "Site lent et mal référencé",
];

const withUs = [
  "Site professionnel créé par des experts",
  "Design sur-mesure à votre image",
  "SEO optimisé dès le lancement",
  "Support technique illimité",
  "Hébergement premium ultra-rapide",
];

const testimonials = [
  {
    quote: "Mon site a été livré en 5 jours, le résultat est incroyable pour le prix. Je recommande à 100%.",
    name: "Sophie M.",
    company: "Naturopathe",
  },
  {
    quote: "Enfin un vrai site pro sans me ruiner. L'équipe est réactive et à l'écoute.",
    name: "Marc D.",
    company: "Plombier",
  },
  {
    quote: "J'ai doublé mes demandes de devis depuis que j'ai mon nouveau site. Un investissement rentable.",
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
        title="Site Internet à 39€/mois | Création Site Web Professionnel"
        description="Votre site internet professionnel pour seulement 39€/mois. Design sur-mesure, SEO optimisé, hébergement inclus. Livré en 7 jours. Sans engagement."
        url="/offre-mensuelle"
        keywords="site internet pas cher, site web 39 euros, création site internet mensuel, site professionnel abordable"
      />
      <Navigation />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in">
            Rapide · Professionnel · Abordable
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 animate-fade-in">
            Votre site internet professionnel pour seulement{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-primary)' }}>
              39&nbsp;€/mois
            </span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-4 animate-fade-in">
            Design sur-mesure, hébergement, SEO et support inclus.
          </p>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-in">
            On s'occupe de tout pour que vous puissiez vous concentrer sur votre activité.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4 animate-fade-in">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Lancer mon site
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-lg text-primary hover:text-primary/80">
              <a href="#tarifs">
                Voir les tarifs
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4">
            Découvrez quelques-unes de nos réalisations
          </h2>
          <div className="text-center mb-10">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <Link to="/portfolio">
                Voir plus de réalisations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <Globe className="w-8 h-8 text-primary mb-3 opacity-60" />
                  <p className="font-semibold text-foreground text-sm sm:text-base">{item.title}</p>
                  <span className="text-xs text-muted-foreground mt-1">{item.category}</span>
                </div>
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTRE APPROCHE ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <span className="block text-center mb-4">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Notre approche
            </span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-14 leading-tight">
            Une approche pensée pour faire grandir votre activité en ligne
          </h2>

          <div className="space-y-6">
            {approachSteps.map((step, i) => (
              <Card key={i} className="p-6 sm:p-8 bg-muted/40 border-0 shadow-none">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Lancer mon site
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── COMPARAISON ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <span className="block text-center mb-4">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Pourquoi ConvertiLab ?
            </span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-14 leading-tight">
            Une approche plus intelligente de la création de site internet
          </h2>

          {/* Sans */}
          <Card className="p-6 sm:p-8 bg-muted/40 border-0 shadow-none mb-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Sans ConvertiLab</h3>
            <ul className="space-y-4">
              {withoutUs.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Avec */}
          <Card className="p-6 sm:p-8 bg-foreground text-primary-foreground border-0 shadow-none">
            <h3 className="text-xl font-bold mb-6">
              Converti<span className="text-primary">Lab</span>
            </h3>
            <ul className="space-y-4">
              {withUs.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
            Ils nous font confiance pour leur site internet
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Des entrepreneurs et indépendants choisissent ConvertiLab pour la qualité, la rapidité et le prix de leur site.
          </p>

          <div className="relative">
            <Card className="p-8 sm:p-10 bg-muted/40 border-0 shadow-none text-center">
              <Star className="w-6 h-6 text-primary mx-auto mb-4" />
              <p className="text-lg sm:text-xl font-medium text-foreground mb-6 leading-relaxed italic">
                "{testimonials[testimonialIndex].quote}"
              </p>
              <p className="font-bold text-foreground">{testimonials[testimonialIndex].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[testimonialIndex].company}</p>
            </Card>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section id="tarifs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <span className="block text-center mb-4">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Tarifs
            </span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
            Des offres simples et transparentes
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-lg max-w-xl mx-auto">
            Une tarification claire, sans frais cachés. Vous choisissez l'offre adaptée à votre besoin, nous nous occupons de la création.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className={`text-sm font-medium ${billingMode === 'oneshot' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Paiement unique
            </span>
            <button
              onClick={() => setBillingMode(billingMode === 'monthly' ? 'oneshot' : 'monthly')}
              className={`relative w-14 h-7 rounded-full transition-colors ${billingMode === 'monthly' ? 'bg-primary' : 'bg-muted-foreground/30'}`}
              aria-label="Changer le mode de paiement"
            >
              <span
                className={`absolute top-0.5 w-6 h-6 rounded-full bg-background shadow transition-transform ${billingMode === 'monthly' ? 'translate-x-7' : 'translate-x-0.5'}`}
              />
            </button>
            <span className={`text-sm font-medium ${billingMode === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Mensuel
            </span>
            {billingMode === 'monthly' && (
              <span className="text-xs text-primary font-semibold">(-17%)</span>
            )}
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Essentiel */}
            <Card className="p-6 sm:p-8 border-2 border-border bg-background">
              <h3 className="text-lg font-bold text-foreground mb-2">Essentiel</h3>
              <p className="text-muted-foreground text-sm mb-6">Idéal pour les indépendants et artisans</p>

              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-foreground">
                  {billingMode === 'monthly' ? '39' : '468'}€
                </span>
                <span className="text-muted-foreground ml-1">
                  {billingMode === 'monthly' ? '/mois' : ' unique'}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Site vitrine jusqu'à 5 pages",
                  "Design responsive sur-mesure",
                  "Optimisation SEO de base",
                  "Hébergement & SSL inclus",
                  "Support par email",
                  "Livraison en 7 jours",
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" variant="outline" className="w-full text-base">
                <Link to="/contact">
                  Choisir Essentiel
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>

            {/* Pro */}
            <Card className="p-6 sm:p-8 border-2 border-primary bg-background relative overflow-hidden">
              <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                Populaire
              </span>

              <h3 className="text-lg font-bold text-foreground mb-2">Professionnel</h3>
              <p className="text-muted-foreground text-sm mb-6">Pour ceux qui veulent maximiser leur présence</p>

              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-foreground">
                  {billingMode === 'monthly' ? '69' : '828'}€
                </span>
                <span className="text-muted-foreground ml-1">
                  {billingMode === 'monthly' ? '/mois' : ' unique'}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Site jusqu'à 10 pages",
                  "Design premium sur-mesure",
                  "SEO avancé + Google My Business",
                  "Hébergement premium & SSL",
                  "Support prioritaire",
                  "Livraison en 7 jours",
                  "Blog intégré",
                  "Formulaire de contact avancé",
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="w-full text-base bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Choisir Professionnel
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Prêt à lancer votre site internet ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Recevez un devis personnalisé sous 24h. Consultation gratuite, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6">
              <Link to="/contact">
                Lancer mon site maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-6">
            ⚡ Livré en 7 jours · 🔒 Sans engagement · ✅ Paiement en 3x sans frais
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OffreMensuelle;
