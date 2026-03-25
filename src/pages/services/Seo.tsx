import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, Search, TrendingUp, ClipboardCheck, Clock, BarChart3, Target, FileSearch, Zap } from 'lucide-react';

const SeoPage = () => {
  const services = [
    {
      id: 'referencement-seo',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Référencement SEO',
      subtitle: 'Positionnement durable sur Google',
      description: "Le SEO est un investissement long terme qui génère du trafic qualifié sans coût publicitaire. Nous optimisons votre site pour qu'il apparaisse en tête des résultats de recherche sur vos mots-clés stratégiques.",
      features: [
        'Audit SEO initial complet',
        'Recherche de mots-clés',
        'Optimisation on-page',
        'Création de contenu SEO',
        'Stratégie de netlinking',
        'Suivi des positions',
        'Rapports mensuels détaillés'
      ],
      benefits: [
        { title: 'Trafic qualifié', desc: 'Visiteurs réellement intéressés par vos services' },
        { title: 'ROI durable', desc: 'Investissement rentable sur le long terme' },
        { title: 'Crédibilité', desc: 'Être en première page renforce la confiance' },
        { title: 'Visibilité 24/7', desc: 'Votre site travaille pour vous en permanence' }
      ],
      deliveryTime: 'Engagement 6 mois minimum'
    },
    {
      id: 'audit-seo',
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Audit SEO',
      subtitle: 'Diagnostic complet de votre visibilité',
      description: "Avant d'optimiser, il faut comprendre. Notre audit SEO analyse en profondeur votre site pour identifier les freins à votre référencement et les opportunités de croissance.",
      features: [
        'Analyse technique complète',
        'Audit de contenu',
        'Analyse des backlinks',
        'Étude de la concurrence',
        'Analyse des mots-clés actuels',
        'Rapport détaillé (30+ pages)',
        'Plan d\'action priorisé'
      ],
      benefits: [
        { title: 'Vision claire', desc: 'Comprendre votre situation actuelle' },
        { title: 'Priorités définies', desc: 'Savoir par où commencer' },
        { title: 'Budget optimisé', desc: 'Investir là où ça compte' },
        { title: 'Roadmap', desc: 'Plan d\'action concret à suivre' }
      ],
      deliveryTime: '5-7 jours'
    }
  ];

  const stats = [
    { value: '93%', label: 'des expériences en ligne commencent par un moteur de recherche' },
    { value: '75%', label: 'des utilisateurs ne dépassent jamais la 1ère page' },
    { value: '14.6%', label: 'taux de conversion moyen du SEO (vs 1.7% pour le print)' }
  ];

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <SEO
        url="/services/seo"
        title="SEO & Audit Référencement | ConvertiLab Paris"
        description="Référencement naturel et audit SEO. Atteignez la page 1 de Google avec une stratégie sur-mesure. Devis gratuit."
        keywords="SEO, référencement naturel, audit SEO, optimisation Google, stratégie SEO, agence SEO Paris"
      />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Services", url: "/services" },
        { name: "SEO", url: "/services/seo" }
      ]} />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>SEO</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-6">
                <Search className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Référencement naturel</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                SEO & Visibilité
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Dominez les résultats de recherche et attirez des clients qualifiés grâce à une stratégie SEO sur-mesure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600">
                  Demander un audit gratuit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog">Lire nos conseils SEO</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="space-y-32">
              {services.map((service) => (
                <div key={service.id} id={service.id}>
                  {/* Header */}
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mx-auto mb-6">
                      {service.icon}
                    </div>
                    <p className="text-sm font-medium text-emerald-600 mb-2">{service.subtitle}</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Features */}
                    <div className="p-8 rounded-2xl border border-border bg-card">
                      <div className="flex items-center gap-3 mb-6">
                        <FileSearch className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-xl font-semibold">Ce qui est inclus</h3>
                      </div>
                      <div className="space-y-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-border">
                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="w-5 h-5 text-emerald-600" />
                          <span className="font-medium">{service.deliveryTime}</span>
                        </div>
                        <Button onClick={scrollToContact} className="w-full bg-gradient-to-r from-emerald-500 to-teal-600">
                          Demander un devis
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="p-8 rounded-2xl border border-border bg-card">
                      <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-xl font-semibold">Les bénéfices</h3>
                      </div>
                      <div className="space-y-6">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                              <Target className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{benefit.title}</p>
                              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ce que nos clients disent</h2>
              <p className="text-muted-foreground">Des résultats SEO concrets et mesurables</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Nous sommes passés de la page 5 à la 1ère position sur nos mots-clés principaux en 6 mois. Notre trafic organique a augmenté de 340%."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Antoine C.</p>
                    <p className="text-sm text-muted-foreground">Directeur, Agence Immo</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "L'audit SEO a révélé des problèmes techniques qu'on ignorait. Après les corrections, notre taux de conversion a doublé."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                    L
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Laura P.</p>
                    <p className="text-sm text-muted-foreground">E-commerce Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={[
          { q: "Combien de temps faut-il pour voir des résultats en SEO ?", a: "Les premiers résultats SEO apparaissent généralement entre 3 et 6 mois. Le SEO est un investissement long terme : une fois les positions acquises, elles génèrent du trafic qualifié de manière durable sans coût publicitaire." },
          { q: "Quelle est la différence entre SEO et SEA ?", a: "Le SEO (référencement naturel) vise des résultats organiques durables sans payer au clic. Le SEA (publicité payante) offre une visibilité immédiate mais s'arrête dès que vous stoppez les dépenses. Idéalement, les deux stratégies se complètent." },
          { q: "Un audit SEO est-il vraiment utile ?", a: "Oui, l'audit SEO identifie les freins techniques, les opportunités de mots-clés et les axes d'amélioration prioritaires. C'est la base de toute stratégie SEO efficace et permet d'éviter de travailler à l'aveugle." },
          { q: "Pourquoi faire appel à une agence SEO plutôt que de faire soi-même ?", a: "Le SEO évolue constamment (algorithmes Google, bonnes pratiques). Une agence apporte l'expertise technique, les outils professionnels et l'expérience de dizaines de projets pour maximiser vos résultats." },
          { q: "Garantissez-vous la première position sur Google ?", a: "Aucune agence sérieuse ne peut garantir la position 1, car Google seul décide du classement. En revanche, nous garantissons une méthodologie éprouvée, un suivi rigoureux et une amélioration mesurable de votre visibilité." }
        ]} />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à dominer Google ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Commencez par un audit gratuit de votre visibilité actuelle.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
              Obtenir mon audit gratuit
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

// Add Star import
import { Star } from 'lucide-react';

export default SeoPage;
