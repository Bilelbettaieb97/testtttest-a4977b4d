import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData';
import ServiceDetailSchema from '@/components/seo/ServiceDetailSchema';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, CheckCircle, Store, Clock, CreditCard, Package, BarChart, ShieldCheck, Star, Users, Award, Shield, RotateCcw, Lock, Headphones, Phone, TrendingUp } from 'lucide-react';
import ServiceCaseStudies from '@/components/services/ServiceCaseStudies';

const SiteEcommerceService = () => {
  const features = [
    { icon: <CreditCard className="w-6 h-6" />, title: "Paiement Sécurisé", description: "Stripe, PayPal et autres moyens de paiement intégrés pour des transactions en toute confiance" },
    { icon: <Package className="w-6 h-6" />, title: "Gestion des Stocks", description: "Suivi automatisé de votre inventaire en temps réel avec alertes de réapprovisionnement" },
    { icon: <BarChart className="w-6 h-6" />, title: "Tableau de Bord", description: "Analysez vos ventes, votre trafic et vos performances en un coup d'œil" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Sécurité Maximale", description: "SSL, protection des données clients et conformité RGPD intégrée" },
  ];

  const includes = [
    "Jusqu'à 50 produits configurés",
    "Paiement sécurisé (Stripe, PayPal)",
    "Gestion des stocks automatisée",
    "Tableau de bord analytique",
    "Design sur-mesure responsive",
    "Optimisation SEO complète",
    "Formation administration incluse",
    "Hébergement 1 an inclus",
    "Support technique 6 mois",
    "Certificat SSL gratuit",
  ];

  const processSteps = [
    { num: "01", title: "Consultation & stratégie", desc: "On échange sur vos produits, votre cible et vos objectifs de vente. Devis détaillé sous 24h." },
    { num: "02", title: "Design & catalogue", desc: "Design sur-mesure, structuration du catalogue produits et parcours d'achat optimisé." },
    { num: "03", title: "Développement & tests", desc: "Intégration, paiement sécurisé, tests multi-navigateurs et optimisation performance." },
    { num: "04", title: "Lancement & formation", desc: "Mise en ligne, formation à la gestion de votre boutique, support technique inclus." },
  ];

  const testimonials = [
    {
      quote: "Notre boutique en ligne génère 40% de notre chiffre d'affaires. Le passage au digital a transformé notre activité.",
      result: "+40% de CA en ligne",
      name: "Sophie R.",
      role: "Créatrice de bijoux",
      initial: "S"
    },
    {
      quote: "Le tableau de bord est incroyable. Je suis mes ventes en temps réel et j'ai une vision claire de mon activité.",
      result: "Gestion simplifiée",
      name: "Marc D.",
      role: "Épicerie fine, Paris",
      initial: "M"
    },
    {
      quote: "Mes clients adorent l'expérience d'achat. Le site est rapide, élégant et inspire confiance dès la première visite.",
      result: "Taux de conversion x3",
      name: "Léa P.",
      role: "Marque de cosmétique",
      initial: "L"
    }
  ];

  const guarantees = [
    { icon: <RotateCcw className="w-5 h-5" />, title: "Satisfait ou retravaillé", desc: "On retravaille gratuitement si le résultat ne correspond pas au brief validé." },
    { icon: <Lock className="w-5 h-5" />, title: "Prix fixe garanti", desc: "Le devis signé est le prix final. Aucun coût caché, aucune surprise." },
    { icon: <Shield className="w-5 h-5" />, title: "Livraison 21-30 jours", desc: "Délai garanti. 10% de remise en cas de retard de notre fait." },
    { icon: <Headphones className="w-5 h-5" />, title: "Support 6 mois", desc: "Support technique inclus pendant 6 mois. Réponse sous 24h." },
  ];

  const faqs = [
    { q: "Quelle plateforme utilisez-vous pour l'e-commerce ?", a: "Nous utilisons les technologies les plus adaptées à votre projet : solutions sur-mesure, Shopify, WooCommerce selon vos besoins spécifiques. Nous vous recommandons la meilleure option lors de la consultation." },
    { q: "Combien de produits puis-je ajouter ?", a: "L'offre de base inclut la configuration de 50 produits. Vous pouvez en ajouter autant que vous le souhaitez après la livraison grâce à la formation administration incluse." },
    { q: "Les frais de transaction sont-ils inclus ?", a: "Les frais de passerelle de paiement (Stripe ~1.4% + 0.25€ par transaction) sont appliqués par le prestataire de paiement, pas par nous. Il n'y a aucune commission supplémentaire de notre part." },
    { q: "Puis-je vendre à l'international ?", a: "Oui. Nous configurons votre boutique pour la vente multi-devises et multi-langues si nécessaire. Les frais de livraison internationaux sont paramétrables." },
    { q: "Comment gérer les retours et remboursements ?", a: "Le tableau de bord inclut une gestion complète des commandes : suivi, remboursements, échanges. Nous vous formons à toutes ces fonctionnalités." },
    { q: "Proposez-vous le paiement en plusieurs fois ?", a: "Oui, paiement en 2 ou 3 fois sans frais : un acompte au démarrage, le solde à la livraison (ou réparti sur 2 échéances)." },
  ];

  return (
    <>
      <SEO
        url="/services/sites-web/site-ecommerce"
        title="Site E-commerce dès 800€ | Agence Paris"
        description="Boutique en ligne professionnelle en 21-30 jours. Paiement sécurisé, gestion des stocks, SEO intégré. Devis gratuit sous 24h."
        keywords="site e-commerce, boutique en ligne, création e-commerce, site marchand, vente en ligne"
      />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Sites Web", url: "/services/sites-web" },
        { name: "E-commerce", url: "/services/sites-web/site-ecommerce" }
      ]} />
      <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <ServiceDetailSchema name="Création Site E-commerce" description="Boutique en ligne professionnelle avec paiement sécurisé, gestion des stocks et SEO intégré." url="/services/sites-web/site-ecommerce" price="800" />

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
              <BreadcrumbItem><BreadcrumbPage>Site E-commerce</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-accent">🛒 2 créneaux disponibles ce mois-ci</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Une Boutique en Ligne Qui <span className="text-primary">Vend Pour Vous 24h/24</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nos clients e-commerce constatent en moyenne <strong className="text-foreground">+40% de ventes en ligne</strong> dès le premier mois. Paiement sécurisé, gestion des stocks, tout est inclus.
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
                  <span><strong className="text-foreground">+50</strong> clients satisfaits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Satisfaction <strong className="text-foreground">garantie</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="py-10 bg-primary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { value: "21-30j", label: "Délai de livraison" },
                { value: "50+", label: "Produits configurés" },
                { value: "Sécurisé", label: "Paiement en ligne" },
                { value: "6 mois", label: "Support inclus" },
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tout ce qu'il faut pour vendre en ligne</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Une boutique en ligne complète avec les fonctionnalités essentielles pour développer votre activité e-commerce.</p>
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

        {/* Included + Pricing card */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Tout est inclus, sans surprise</h2>
                <p className="text-muted-foreground mb-8">
                  Design, développement, paiement sécurisé, SEO, hébergement et support : tout est compris dans le prix.
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

              <div className="w-full max-w-md mx-auto">
                <div className="p-8 rounded-2xl border-2 border-primary bg-card shadow-xl relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                      E-commerce complet
                    </span>
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-4xl font-black text-foreground">À partir de 800€</p>
                    <p className="text-sm text-muted-foreground mt-1">Prix fixe, sans surprise</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Livraison : 21-30 jours</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {["Artisans créateurs", "Marques de mode", "Épiceries fines"].map((tag, i) => (
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Votre boutique en ligne en 4 étapes</h2>
              <p className="text-muted-foreground">Un processus clair et prévisible, du premier échange à la mise en ligne.</p>
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
          category="e-commerce" 
          title="Nos boutiques e-commerce réalisées" 
          subtitle="Découvrez les sites e-commerce que nous avons créés pour nos clients"
        />

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Résultats concrets de nos clients</h2>
              <p className="text-muted-foreground">Des boutiques en ligne qui ont transformé leur activité</p>
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

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Questions fréquentes</h2>
                <p className="text-muted-foreground">Tout ce que vous devez savoir avant de lancer votre boutique</p>
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

        {/* Final CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à lancer votre boutique en ligne ?
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

export default SiteEcommerceService;
