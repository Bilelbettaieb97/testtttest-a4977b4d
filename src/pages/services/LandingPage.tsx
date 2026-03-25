import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, CheckCircle, Rocket, Clock, Target, Zap, BarChart, Smartphone, Star, Users, Shield, RotateCcw, Lock, Headphones, Phone, TrendingUp } from 'lucide-react';
import ServiceCaseStudies from '@/components/services/ServiceCaseStudies';

const LandingPageService = () => {
  const features = [
    { icon: <Target className="w-6 h-6" />, title: "Optimisation Conversion", description: "Chaque élément est pensé pour maximiser votre taux de conversion" },
    { icon: <Smartphone className="w-6 h-6" />, title: "100% Responsive", description: "Parfaitement adapté à tous les écrans : mobile, tablette, desktop" },
    { icon: <Zap className="w-6 h-6" />, title: "Ultra-Rapide", description: "Score PageSpeed > 90 pour un chargement quasi instantané" },
    { icon: <BarChart className="w-6 h-6" />, title: "Analytics Intégrés", description: "Tracking complet pour mesurer et optimiser vos résultats" },
  ];

  const includes = [
    "Design 100% responsive et moderne",
    "Optimisation pour la conversion (CRO)",
    "Formulaire de contact / capture de leads",
    "Intégration Google Analytics + Meta Pixel",
    "Hébergement 1 an inclus",
    "Support technique 1 mois",
    "Optimisation SEO technique",
    "Certificat SSL gratuit",
  ];

  const processSteps = [
    { num: "01", title: "Brief & stratégie", desc: "On définit ensemble vos objectifs, votre cible et votre proposition de valeur." },
    { num: "02", title: "Maquette & validation", desc: "Vous validez le design avant développement. Modifications illimitées à cette étape." },
    { num: "03", title: "Développement", desc: "Intégration pixel-perfect, optimisation vitesse et SEO technique." },
    { num: "04", title: "Livraison & lancement", desc: "Mise en ligne, tests cross-browser, tracking configuré. Prêt à convertir." },
  ];

  const testimonials = [
    {
      quote: "Notre landing page a généré 150 leads qualifiés en 2 semaines. Le ROI de nos campagnes Google Ads a été multiplié par 4.",
      result: "+150 leads en 14 jours",
      name: "Marie L.",
      role: "Fondatrice, StartupTech",
      initial: "M"
    },
    {
      quote: "Taux de conversion passé de 1,2% à 8,7% après la refonte de notre landing page. Un investissement ultra rentable.",
      result: "Taux de conversion x7",
      name: "Thomas R.",
      role: "Responsable Marketing, SaaS B2B",
      initial: "T"
    },
    {
      quote: "Page livrée en 5 jours, pile dans les temps pour notre lancement produit. Résultat : 340 inscriptions le premier jour.",
      result: "340 inscriptions jour 1",
      name: "Julie K.",
      role: "Product Manager",
      initial: "J"
    }
  ];

  const guarantees = [
    { icon: <RotateCcw className="w-5 h-5" />, title: "Satisfait ou retravaillé", desc: "On retravaille gratuitement si le résultat ne correspond pas au brief validé." },
    { icon: <Lock className="w-5 h-5" />, title: "Prix fixe garanti", desc: "Le devis signé est le prix final. Aucun coût caché." },
    { icon: <Shield className="w-5 h-5" />, title: "Livraison 5-7 jours", desc: "Délai garanti. 10% de remise en cas de retard de notre fait." },
    { icon: <Headphones className="w-5 h-5" />, title: "Support inclus", desc: "1 mois de support technique après livraison. Réponse sous 24h." },
  ];

  const faqs = [
    { q: "Qu'est-ce qu'une landing page exactement ?", a: "C'est une page web autonome, conçue spécifiquement pour convertir les visiteurs en leads ou clients. Contrairement à un site classique, elle n'a qu'un seul objectif : inciter à l'action (formulaire, achat, inscription)." },
    { q: "Combien de temps pour créer ma landing page ?", a: "5 à 7 jours ouvrés entre le brief validé et la mise en ligne. Nous respectons ce délai avec un engagement de 10% de remise en cas de dépassement." },
    { q: "Ma landing page sera-t-elle compatible mobile ?", a: "Absolument. Le design est pensé mobile-first : 70% du trafic publicitaire vient du mobile. Votre page sera parfaitement optimisée sur tous les écrans." },
    { q: "Puis-je utiliser ma landing page pour Google Ads et Meta Ads ?", a: "Oui, c'est exactement pour ça qu'elle est conçue. Nous intégrons le tracking Google Analytics, Google Ads et Meta Pixel pour mesurer vos conversions." },
    { q: "Que se passe-t-il après la livraison ?", a: "Vous bénéficiez d'1 mois de support technique inclus. Nous restons disponibles pour les ajustements mineurs et le suivi des performances." },
    { q: "Proposez-vous le paiement en plusieurs fois ?", a: "Oui, paiement en 2 ou 3 fois sans frais : un acompte au démarrage, le solde à la livraison." },
  ];

  return (
    <>
      <SEO
        url="/services/sites-web/landing-page"
        title="Landing Page dès 300€ | Haute Conversion"
        description="Landing page haute conversion livrée en 5-7 jours. Optimisée pour Google Ads & Meta Ads. +50 clients satisfaits, prix fixe. Devis gratuit."
        keywords="landing page, page de conversion, landing page prix, création landing page, page de capture"
      />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Sites Web", url: "/services/sites-web" },
        { name: "Landing Page", url: "/services/sites-web/landing-page" }
      ]} />
      <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />

      <Navigation />

      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/services">Services</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/services/sites-web">Sites Web</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Landing Page</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero — benefit-oriented headline + urgency + social proof */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-accent">🔥 3 créneaux disponibles ce mois-ci</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Une Landing Page Qui <span className="text-primary">Multiplie Vos Conversions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nos clients obtiennent en moyenne <strong className="text-foreground">5x plus de leads</strong> qu'avec un site classique. Livrée en 5-7 jours, prix fixe.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg">
                  <Link to="/contact">
                    Obtenir mon devis gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/portfolio">Voir nos réalisations →</Link>
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium text-foreground">4.9/5</span>
                  <span>sur 47 avis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span><strong className="text-foreground">+50</strong> landing pages livrées</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Livrée en <strong className="text-foreground">5-7 jours</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key metrics bar */}
        <section className="py-10 bg-primary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { value: "5-7j", label: "Délai de livraison" },
                { value: "x5", label: "Taux de conversion moyen" },
                { value: "100%", label: "Responsive mobile" },
                { value: ">90", label: "Score PageSpeed" },
              ].map((m, i) => (
                <div key={i}>
                  <p className="text-3xl sm:text-4xl font-black text-primary-foreground">{m.value}</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Pourquoi une Landing Page convertit mieux ?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Un seul objectif, un seul message, un seul appel à l'action = un maximum de conversions.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included + Pricing anchor */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Tout est inclus dans votre landing page</h2>
                <p className="text-muted-foreground mb-8">
                  Pas de surprise, pas d'options cachées. Vous recevez une page complète, prête à convertir.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing card */}
              <div className="w-full max-w-md mx-auto">
                <div className="p-8 rounded-2xl border-2 border-primary bg-card shadow-xl relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                      Le plus rapide
                    </span>
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-4xl font-black text-foreground">À partir de 300€</p>
                    <p className="text-sm text-muted-foreground mt-1">Prix fixe, sans surprise</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Livraison : 5-7 jours</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {["Campagnes Ads", "Capture leads", "Lancement produit"].map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base">
                    <Link to="/contact">
                      Demander mon devis gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-3">💳 Paiement en 2-3x sans frais</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Votre landing page en 4 étapes</h2>
              <p className="text-muted-foreground">Un processus simple et transparent, de la première idée à la mise en ligne.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((s, i) => (
                <div key={i} className="relative text-center">
                  <div className="text-5xl font-black text-primary/15 mb-2">{s.num}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 text-primary/30 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700 dark:text-green-300">Zéro risque</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Nos garanties</h2>
              <p className="text-muted-foreground">Vous ne prenez aucun risque en travaillant avec nous.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {guarantees.map((g, i) => (
                <div key={i} className="text-center p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 text-green-600">
                    {g.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <ServiceCaseStudies 
          category="landing-page" 
          title="Nos landing pages réalisées" 
          subtitle="Découvrez les landing pages que nous avons créées pour nos clients"
        />

        {/* Testimonials with results */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Résultats concrets de nos clients</h2>
              <p className="text-muted-foreground">Des landing pages qui ont transformé leurs campagnes</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold mb-4">
                    📈 {t.result}
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic text-sm">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — objection handling */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Questions fréquentes</h2>
                <p className="text-muted-foreground">Tout ce que vous devez savoir avant de vous lancer</p>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                    <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA — dual action */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à lancer votre landing page ?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
              Recevez un devis personnalisé sous 24h. Consultation gratuite, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6">
                <Link to="/contact">
                  Obtenir mon devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
                <a href="tel:+33123456789">
                  <Phone className="mr-2 w-4 h-4" />
                  Nous appeler
                </a>
              </Button>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-6">
              ⚡ Réponse sous 24h · 🔒 Prix fixe garanti · ✅ Paiement en 3x sans frais
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LandingPageService;
