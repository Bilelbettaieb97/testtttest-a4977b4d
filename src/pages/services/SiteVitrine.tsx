import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, CheckCircle, FileText, Clock, Search, Palette, Globe, Users, Star, Shield, RotateCcw, Lock, Headphones, Phone, TrendingUp, Award } from 'lucide-react';
import ServiceCaseStudies from '@/components/services/ServiceCaseStudies';

const SiteVitrineService = () => {
  const features = [
    { icon: <Palette className="w-6 h-6" />, title: "Design Sur-Mesure", description: "Un design unique qui reflète votre identité et vous différencie de la concurrence" },
    { icon: <Search className="w-6 h-6" />, title: "SEO Optimisé", description: "Référencement naturel pour apparaître en première page Google sur vos mots-clés" },
    { icon: <Globe className="w-6 h-6" />, title: "Jusqu'à 5 Pages", description: "Accueil, services, à propos, contact, blog — tout pour présenter votre activité" },
    { icon: <Users className="w-6 h-6" />, title: "UX Conversion", description: "Navigation pensée pour guider vos visiteurs vers la prise de contact" },
  ];

  const includes = [
    "Jusqu'à 5 pages personnalisées",
    "Design sur-mesure unique",
    "Optimisation SEO complète",
    "Responsive mobile, tablette, desktop",
    "Formulaire de contact + Google Maps",
    "Blog intégré (optionnel)",
    "Hébergement 1 an inclus",
    "Support technique 3 mois",
  ];

  const processSteps = [
    { num: "01", title: "Consultation gratuite", desc: "On échange sur vos objectifs, votre cible et votre identité. Devis détaillé sous 24h." },
    { num: "02", title: "Maquette & validation", desc: "Vous validez le design page par page. Modifications illimitées à cette étape." },
    { num: "03", title: "Développement", desc: "Intégration pixel-perfect, contenu, SEO technique et optimisation performances." },
    { num: "04", title: "Livraison & formation", desc: "Mise en ligne, formation à l'administration, support technique inclus." },
  ];

  const testimonials = [
    {
      quote: "Notre site vitrine nous apporte 80% de nos nouveaux clients. Les prospects nous trouvent sur Google et nous contactent directement.",
      result: "80% des nouveaux clients",
      name: "Pierre D.",
      role: "Artisan menuisier",
      initial: "P"
    },
    {
      quote: "En 3 mois, notre trafic organique a été multiplié par 5. Le site nous a permis de nous positionner comme référence dans notre secteur.",
      result: "Trafic x5 en 3 mois",
      name: "Caroline M.",
      role: "Avocate, Cabinet juridique",
      initial: "C"
    },
    {
      quote: "Le design professionnel a complètement changé la perception de notre cabinet. Les clients nous prennent au sérieux dès le premier contact.",
      result: "+60% de demandes de devis",
      name: "Olivier B.",
      role: "Architecte d'intérieur",
      initial: "O"
    }
  ];

  const guarantees = [
    { icon: <RotateCcw className="w-5 h-5" />, title: "Satisfait ou retravaillé", desc: "On retravaille gratuitement si le résultat ne correspond pas au brief validé." },
    { icon: <Lock className="w-5 h-5" />, title: "Prix fixe garanti", desc: "Le devis signé est le prix final. Aucun coût caché, aucune surprise." },
    { icon: <Shield className="w-5 h-5" />, title: "Livraison 10-15 jours", desc: "Délai garanti. 10% de remise en cas de retard de notre fait." },
    { icon: <Headphones className="w-5 h-5" />, title: "Support 3 mois", desc: "Support technique inclus pendant 3 mois. Réponse sous 24h." },
  ];

  const faqs = [
    { q: "Quelle est la différence entre un site vitrine et une landing page ?", a: "Un site vitrine comporte plusieurs pages (accueil, services, à propos, contact, blog) pour présenter votre activité complète. Une landing page est une page unique optimisée pour convertir sur un objectif précis (campagne pub, lancement). Le site vitrine renforce votre crédibilité globale." },
    { q: "Combien de temps faut-il pour créer mon site vitrine ?", a: "10 à 15 jours ouvrés entre le brief validé et la mise en ligne. Ce délai inclut la maquette, le développement et la mise en ligne. Nous nous engageons contractuellement sur ce délai." },
    { q: "Mon site sera-t-il bien positionné sur Google ?", a: "Oui. Nous optimisons chaque page pour le SEO : balises meta, structure sémantique, vitesse, sitemap, robots.txt. Nos clients constatent en moyenne une apparition en première page Google sur leurs mots-clés locaux sous 2-3 mois." },
    { q: "Puis-je modifier le contenu moi-même ?", a: "Absolument. Nous vous formons à l'administration de votre site et vous fournissons une documentation. Pour les modifications complexes, notre support technique est disponible pendant 3 mois." },
    { q: "Y a-t-il des frais récurrents après la livraison ?", a: "L'hébergement de la première année est inclus. Ensuite, le renouvellement coûte environ 10€/mois. Il n'y a aucun autre frais obligatoire." },
    { q: "Proposez-vous le paiement en plusieurs fois ?", a: "Oui, paiement en 2 ou 3 fois sans frais : un acompte au démarrage, le solde à la livraison (ou réparti sur 2 échéances)." },
  ];

  return (
    <>
      <Helmet>
        <title>Site Vitrine dès 300€ | ConvertiLab Paris</title>
        <meta name="description" content="Site vitrine professionnel en 10-15 jours. Design sur-mesure, SEO optimisé, prix fixe garanti. Devis gratuit." />
        <link rel="canonical" href="https://convertilab.com/services/sites-web/site-vitrine" />
        <meta property="og:title" content="Site Vitrine Professionnel dès 300€ | ConvertiLab" />
        <meta property="og:description" content="Site vitrine sur-mesure, optimisé SEO, livré en 10-15 jours. Prix fixe, satisfaction garantie." />
        <meta property="og:url" content="https://convertilab.com/services/sites-web/site-vitrine" />
      </Helmet>

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
              <BreadcrumbItem><BreadcrumbPage>Site Vitrine</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-accent">🔥 3 créneaux disponibles ce mois-ci</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Un Site Vitrine Qui <span className="text-primary">Attire Vos Clients Idéaux</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nos clients reçoivent en moyenne <strong className="text-foreground">3x plus de demandes de contact</strong> après la mise en ligne. Design sur-mesure, SEO inclus.
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
                { value: "10-15j", label: "Délai de livraison" },
                { value: "5 pages", label: "Personnalisées" },
                { value: "Top Google", label: "SEO optimisé" },
                { value: "3 mois", label: "Support inclus" },
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Pourquoi un site vitrine professionnel change tout ?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">80% des consommateurs recherchent une entreprise en ligne avant de la contacter. Sans site, vous perdez des clients chaque jour.</p>
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
                  Design, développement, SEO, hébergement et support : tout est compris dans le prix.
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
                      Le plus populaire
                    </span>
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-4xl font-black text-foreground">À partir de 300€</p>
                    <p className="text-sm text-muted-foreground mt-1">Prix fixe, sans surprise</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Livraison : 10-15 jours</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {["PME & artisans", "Professions libérales", "Restaurants"].map((tag, i) => (
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Votre site vitrine en 4 étapes</h2>
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
          category="site-vitrine" 
          title="Nos sites vitrines réalisés" 
          subtitle="Découvrez les sites vitrines que nous avons créés pour nos clients"
          max={6}
        />

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Résultats concrets de nos clients</h2>
              <p className="text-muted-foreground">Des sites vitrines qui ont transformé leur visibilité</p>
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

        {/* Final CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à créer votre site vitrine professionnel ?
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

export default SiteVitrineService;
