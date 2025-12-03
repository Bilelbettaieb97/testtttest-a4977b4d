import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, TrendingUp, Search, Clock, Target, BarChart3, Zap, DollarSign, Users, Eye } from 'lucide-react';

const SeaPage = () => {
  const services = [
    {
      id: 'google-ads',
      icon: <Search className="w-8 h-8" />,
      title: 'Google Ads',
      subtitle: 'Publicité sur le réseau Google',
      description: "Google Ads vous permet d'apparaître instantanément en tête des résultats de recherche. Idéal pour générer du trafic qualifié rapidement et mesurer précisément votre retour sur investissement.",
      features: [
        'Campagnes Search (mots-clés)',
        'Google Shopping (e-commerce)',
        'Display (bannières)',
        'YouTube Ads',
        'Remarketing dynamique',
        'Optimisation continue',
        'Reporting hebdomadaire'
      ],
      benefits: [
        { icon: <Target className="w-5 h-5" />, title: 'Ciblage précis', desc: 'Touchez les personnes qui recherchent vos services' },
        { icon: <Zap className="w-5 h-5" />, title: 'Résultats immédiats', desc: 'Trafic dès le premier jour de campagne' },
        { icon: <BarChart3 className="w-5 h-5" />, title: 'ROI mesurable', desc: 'Suivez chaque euro investi et son retour' },
        { icon: <DollarSign className="w-5 h-5" />, title: 'Budget maîtrisé', desc: 'Payez uniquement au clic, ajustez en temps réel' }
      ],
      deliveryTime: 'Mise en place: 5-7 jours'
    },
    {
      id: 'meta-ads',
      icon: <Users className="w-8 h-8" />,
      title: 'Meta Ads',
      subtitle: 'Publicité Facebook & Instagram',
      description: "Meta Ads vous permet de toucher votre audience idéale sur Facebook et Instagram avec des formats créatifs engageants. Parfait pour développer votre notoriété et générer des conversions.",
      features: [
        'Campagnes Facebook Ads',
        'Campagnes Instagram Ads',
        'Ciblage démographique avancé',
        'Audiences similaires (Lookalike)',
        'Créatifs visuels optimisés',
        'A/B testing continu',
        'Retargeting personnalisé'
      ],
      benefits: [
        { icon: <Users className="w-5 h-5" />, title: 'Audience massive', desc: '3 milliards d\'utilisateurs actifs mensuels' },
        { icon: <Eye className="w-5 h-5" />, title: 'Formats créatifs', desc: 'Stories, Reels, carrousels, vidéos...' },
        { icon: <Target className="w-5 h-5" />, title: 'Ciblage fin', desc: 'Intérêts, comportements, données démographiques' },
        { icon: <BarChart3 className="w-5 h-5" />, title: 'Pixel de suivi', desc: 'Mesurez les conversions avec précision' }
      ],
      deliveryTime: 'Mise en place: 5-7 jours'
    }
  ];

  const process = [
    { step: '1', title: 'Audit & Stratégie', desc: 'Analyse de votre marché et définition des objectifs' },
    { step: '2', title: 'Configuration', desc: 'Création des comptes, pixels et tracking' },
    { step: '3', title: 'Création', desc: 'Rédaction des annonces et visuels' },
    { step: '4', title: 'Lancement', desc: 'Mise en ligne des campagnes' },
    { step: '5', title: 'Optimisation', desc: 'Ajustements continus pour maximiser le ROI' },
    { step: '6', title: 'Reporting', desc: 'Rapports détaillés et recommandations' }
  ];

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <Helmet>
        <title>Publicité Google Ads et Meta Ads | SEA | ConvertiLab</title>
        <meta name="description" content="Services de publicité en ligne : Google Ads et Meta Ads (Facebook, Instagram). Campagnes optimisées pour maximiser votre ROI. Devis gratuit." />
        <link rel="canonical" href="https://convertilab.fr/services/sea" />
      </Helmet>
      
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
                <BreadcrumbPage>SEA</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-6">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-700 dark:text-amber-300">Publicité en ligne</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                SEA & Publicité Digitale
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Boostez votre visibilité et générez des leads qualifiés avec des campagnes publicitaires optimisées sur Google et les réseaux sociaux.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600">
                  Lancer ma campagne
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">Voir nos résultats</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-amber-600 mb-1">{service.subtitle}</p>
                      <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Ce qui est inclus:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6 p-4 rounded-xl bg-muted/50">
                    <h3 className="font-semibold mb-3">Les avantages:</h3>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 flex-shrink-0">
                            {benefit.icon}
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">{benefit.title}</p>
                            <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {service.deliveryTime}
                    </div>
                    <Button onClick={scrollToContact} className="bg-gradient-to-r from-amber-500 to-orange-600">
                      Demander un devis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Notre méthodologie</h2>
              <p className="text-muted-foreground">Un processus éprouvé pour des campagnes performantes</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
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
              <p className="text-muted-foreground">Des campagnes qui génèrent des résultats concrets</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Nos campagnes Google Ads génèrent maintenant un ROAS de 5.2. Chaque euro investi en rapporte plus de 5. Un game changer pour notre business."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
                    N
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Nicolas F.</p>
                    <p className="text-sm text-muted-foreground">Fondateur, E-shop Sport</p>
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
                  "Les campagnes Meta Ads nous ont permis de multiplier par 4 nos demandes de devis. Le ciblage est d'une précision redoutable."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
                    C
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Claire V.</p>
                    <p className="text-sm text-muted-foreground">Gérante, Institut Beauté</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à booster votre visibilité ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Discutons de vos objectifs et créons ensemble une stratégie publicitaire sur-mesure.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-white text-amber-600 hover:bg-white/90">
              Contactez-nous
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

export default SeaPage;
