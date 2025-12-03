import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, Rocket, FileText, Store, Code, RefreshCw, Clock, Shield, Headphones } from 'lucide-react';

const SitesWebPage = () => {
  const services = [
    {
      id: 'landing-page',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Landing Page',
      subtitle: 'Page unique optimisée conversion',
      description: 'Une landing page est une page web autonome, créée spécifiquement pour convertir vos visiteurs en prospects ou clients. Idéale pour le lancement de produits, les campagnes publicitaires ou la capture de leads.',
      features: [
        'Design 100% responsive',
        'Optimisation pour la conversion (CRO)',
        'Formulaire de contact intégré',
        'Intégration analytics',
        'Hébergement 1 an inclus',
        'Support technique 1 mois'
      ],
      idealFor: ['Lancement de produit', 'Campagnes publicitaires', 'Capture de leads', 'Tests A/B'],
      deliveryTime: '5-7 jours'
    },
    {
      id: 'site-vitrine',
      icon: <FileText className="w-8 h-8" />,
      title: 'Site Vitrine',
      subtitle: 'Présentation professionnelle complète',
      description: 'Un site vitrine présente votre entreprise, vos services et vos valeurs de manière professionnelle. Il renforce votre crédibilité et permet à vos prospects de vous trouver facilement sur Google.',
      features: [
        'Jusqu\'à 5 pages personnalisées',
        'Design sur-mesure unique',
        'Optimisation SEO complète',
        'Responsive tous appareils',
        'Formulaire de contact + Google Maps',
        'Blog intégré (optionnel)',
        'Support technique 3 mois'
      ],
      idealFor: ['PME et artisans', 'Professions libérales', 'Associations', 'Restaurants et commerces'],
      deliveryTime: '10-15 jours'
    },
    {
      id: 'site-ecommerce',
      icon: <Store className="w-8 h-8" />,
      title: 'Site E-commerce',
      subtitle: 'Boutique en ligne performante',
      description: 'Vendez vos produits en ligne avec une boutique e-commerce professionnelle. Gestion des stocks, paiements sécurisés, et tableau de bord complet pour piloter votre activité.',
      features: [
        'Jusqu\'à 50 produits configurés',
        'Paiement sécurisé (Stripe, PayPal)',
        'Gestion des stocks automatisée',
        'Tableau de bord analytique',
        'Multi-devises et multi-langues',
        'Formation administration incluse',
        'Support technique 6 mois'
      ],
      idealFor: ['Commerces', 'Artisans créateurs', 'Marques de mode', 'Producteurs locaux'],
      deliveryTime: '21-30 jours'
    },
    {
      id: 'application-web',
      icon: <Code className="w-8 h-8" />,
      title: 'Application Web',
      subtitle: 'Solutions sur-mesure complexes',
      description: 'Pour des besoins spécifiques qui dépassent un site classique : portails clients, tableaux de bord, outils métiers, SaaS... Nous développons des applications web robustes et évolutives.',
      features: [
        'Développement sur-mesure',
        'Architecture scalable',
        'API et intégrations tierces',
        'Base de données optimisée',
        'Authentification sécurisée',
        'Documentation technique',
        'Maintenance évolutive'
      ],
      idealFor: ['Startups', 'Entreprises', 'Outils internes', 'SaaS'],
      deliveryTime: 'Sur devis'
    },
    {
      id: 'refonte-site',
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Refonte de Site',
      subtitle: 'Modernisation de l\'existant',
      description: 'Votre site actuel est obsolète ou ne convertit pas ? Nous le modernisons tout en préservant votre référencement et en améliorant l\'expérience utilisateur.',
      features: [
        'Audit complet de l\'existant',
        'Nouveau design moderne',
        'Migration des contenus',
        'Préservation du SEO',
        'Amélioration des performances',
        'Redirection des URLs',
        'Support post-refonte'
      ],
      idealFor: ['Sites vieillissants', 'Problèmes de performance', 'Mauvaise conversion', 'Image de marque à rafraîchir'],
      deliveryTime: '15-25 jours'
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <Helmet>
        <title>Création de Sites Web | Landing Page, Vitrine, E-commerce | ConvertiLab</title>
        <meta name="description" content="Services de création de sites web : landing page, site vitrine, e-commerce, application web et refonte. Solutions sur-mesure avec devis gratuit sous 24h." />
        <link rel="canonical" href="https://convertilab.fr/services/sites-web" />
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
                <BreadcrumbPage>Sites Web</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 mb-6">
                <Globe className="w-5 h-5 text-violet-600" />
                <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Création Web</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Création de Sites Web
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                De la landing page à l'application web complexe, nous créons des sites performants qui convertissent vos visiteurs en clients.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">Voir nos réalisations</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-violet-600 mb-2">{service.subtitle}</p>
                      <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button onClick={scrollToContact} className="bg-gradient-to-r from-violet-600 to-purple-600">
                      Demander un devis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  {/* Card */}
                  <div className="flex-1 w-full max-w-md">
                    <div className="p-8 rounded-2xl border border-border bg-card shadow-lg">
                      <div className="flex items-center gap-2 mb-6">
                        <Clock className="w-5 h-5 text-violet-600" />
                        <span className="font-medium">Délai: {service.deliveryTime}</span>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-sm font-medium text-muted-foreground mb-3">Idéal pour:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.idealFor.map((item, i) => (
                            <span key={i} className="text-xs px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Shield className="w-4 h-4" />
                          <span>Satisfaction garantie</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                          <Headphones className="w-4 h-4" />
                          <span>Support inclus</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Études de cas</h2>
              <p className="text-muted-foreground">Des projets concrets avec des résultats mesurables</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Case Study 1 */}
              <div className="rounded-2xl border border-border overflow-hidden bg-background hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Store className="w-16 h-16 text-white/80" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-violet-600 bg-violet-100 dark:bg-violet-900/30 px-2 py-1 rounded-full">E-commerce</span>
                  <h3 className="text-xl font-bold text-foreground mt-3 mb-2">Boutique Mode Éthique</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Création d'une boutique e-commerce complète avec gestion des stocks et paiements sécurisés.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-violet-600">+280%</p>
                      <p className="text-xs text-muted-foreground">Ventes en ligne</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-violet-600">21 jours</p>
                      <p className="text-xs text-muted-foreground">Délai livraison</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Case Study 2 */}
              <div className="rounded-2xl border border-border overflow-hidden bg-background hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-white/80" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">Site Vitrine</span>
                  <h3 className="text-xl font-bold text-foreground mt-3 mb-2">Cabinet d'Architectes</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Site vitrine premium avec galerie de projets et prise de rendez-vous intégrée.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">+150%</p>
                      <p className="text-xs text-muted-foreground">Demandes devis</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">12 jours</p>
                      <p className="text-xs text-muted-foreground">Délai livraison</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Case Study 3 */}
              <div className="rounded-2xl border border-border overflow-hidden bg-background hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Rocket className="w-16 h-16 text-white/80" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">Landing Page</span>
                  <h3 className="text-xl font-bold text-foreground mt-3 mb-2">Startup SaaS B2B</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Landing page haute conversion pour le lancement d'un nouveau produit tech.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-green-600">8.5%</p>
                      <p className="text-xs text-muted-foreground">Taux conversion</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">5 jours</p>
                      <p className="text-xs text-muted-foreground">Délai livraison</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium">
                Voir toutes nos réalisations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ce que nos clients disent</h2>
              <p className="text-muted-foreground">Des projets web qui ont transformé leur activité</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Notre landing page a généré 150 leads en 2 semaines. Le ROI est incroyable. L'équipe a parfaitement compris nos besoins."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Marie L.</p>
                    <p className="text-sm text-muted-foreground">Fondatrice, StartupTech</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Notre site vitrine nous apporte désormais 80% de nos nouveaux clients. Un investissement qui a changé notre entreprise."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Pierre D.</p>
                    <p className="text-sm text-muted-foreground">Artisan menuisier</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Chiffre d'affaires multiplié par 3 depuis le lancement de notre e-commerce. L'équipe nous accompagne au quotidien."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Sophie M.</p>
                    <p className="text-sm text-muted-foreground">Gérante, Boutique Mode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à lancer votre projet web ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Discutons de vos besoins et obtenez un devis personnalisé sous 24h.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-white text-violet-600 hover:bg-white/90">
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

// Add missing import
import { Globe, Star } from 'lucide-react';

export default SitesWebPage;
