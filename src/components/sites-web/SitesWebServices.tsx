import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Shield, Headphones, Rocket, FileText, Store, Code, RefreshCw } from 'lucide-react';

const services = [
  {
    id: 'landing-page',
    icon: <Rocket className="w-8 h-8" />,
    title: 'Landing Page',
    subtitle: 'Page unique optimisée conversion',
    price: 'À partir de 490€',
    description: 'Page web autonome créée pour convertir vos visiteurs en prospects. Idéale pour campagnes publicitaires et capture de leads.',
    features: [
      'Design 100% responsive',
      'Optimisation conversion (CRO)',
      'Formulaire de contact intégré',
      'Intégration analytics',
      'Hébergement 1 an inclus',
      'Support technique 1 mois'
    ],
    idealFor: ['Lancement produit', 'Campagnes Ads', 'Capture de leads'],
    deliveryTime: '5-7 jours',
    highlight: 'Le plus rapide'
  },
  {
    id: 'site-vitrine',
    icon: <FileText className="w-8 h-8" />,
    title: 'Site Vitrine',
    subtitle: 'Présentation professionnelle complète',
    price: 'À partir de 300€',
    description: 'Présentez votre entreprise de manière professionnelle. Renforcez votre crédibilité et soyez visible sur Google.',
    features: [
      'Jusqu\'à 5 pages personnalisées',
      'Design sur-mesure unique',
      'Optimisation SEO complète',
      'Responsive tous appareils',
      'Formulaire + Google Maps',
      'Blog intégré (optionnel)',
      'Support technique 3 mois'
    ],
    idealFor: ['PME et artisans', 'Professions libérales', 'Restaurants'],
    deliveryTime: '10-15 jours',
    highlight: 'Le plus populaire'
  },
  {
    id: 'site-ecommerce',
    icon: <Store className="w-8 h-8" />,
    title: 'Site E-commerce',
    subtitle: 'Boutique en ligne performante',
    price: 'À partir de 2 490€',
    description: 'Vendez en ligne avec une boutique professionnelle. Paiements sécurisés et gestion complète de votre activité.',
    features: [
      'Jusqu\'à 50 produits configurés',
      'Paiement sécurisé (Stripe, PayPal)',
      'Gestion des stocks automatisée',
      'Tableau de bord analytique',
      'Multi-devises et langues',
      'Formation administration',
      'Support technique 6 mois'
    ],
    idealFor: ['Commerces', 'Artisans créateurs', 'Marques'],
    deliveryTime: '21-30 jours',
    highlight: 'Meilleur ROI'
  },
  {
    id: 'application-web',
    icon: <Code className="w-8 h-8" />,
    title: 'Application Web',
    subtitle: 'Solutions sur-mesure complexes',
    price: 'Sur devis',
    description: 'Portails clients, tableaux de bord, outils métiers, SaaS... Applications web robustes et évolutives.',
    features: [
      'Développement sur-mesure',
      'Architecture scalable',
      'API et intégrations tierces',
      'Base de données optimisée',
      'Authentification sécurisée',
      'Documentation technique',
      'Maintenance évolutive'
    ],
    idealFor: ['Startups', 'Entreprises', 'SaaS'],
    deliveryTime: 'Sur devis',
    highlight: null
  },
  {
    id: 'refonte-site',
    icon: <RefreshCw className="w-8 h-8" />,
    title: 'Refonte de Site',
    subtitle: 'Modernisation de l\'existant',
    price: 'À partir de 790€',
    description: 'Modernisez votre site obsolète tout en préservant votre référencement et améliorant la conversion.',
    features: [
      'Audit complet de l\'existant',
      'Nouveau design moderne',
      'Migration des contenus',
      'Préservation du SEO',
      'Amélioration performances',
      'Redirection des URLs',
      'Support post-refonte'
    ],
    idealFor: ['Sites vieillissants', 'Mauvaise conversion', 'Rebranding'],
    deliveryTime: '15-25 jours',
    highlight: null
  }
];

const SitesWebServices = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choisissez la solution adaptée à vos besoins
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tous nos sites incluent : design responsive, optimisation SEO, hébergement et support technique.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">{service.subtitle}</p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{service.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Pricing Card */}
              <div className="flex-1 w-full max-w-md">
                <div className={`p-8 rounded-2xl border bg-card shadow-lg relative ${service.highlight === 'Le plus populaire' ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}>
                  {service.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                        {service.highlight}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-foreground">{service.price}</p>
                    <p className="text-sm text-muted-foreground mt-1">Prix fixe, sans surprise</p>
                  </div>

                  <div className="flex items-center gap-2 mb-4 justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Livraison : {service.deliveryTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {service.idealFor.map((item, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Satisfait ou retravaillé</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Headphones className="w-4 h-4 text-primary" />
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
  );
};

export default SitesWebServices;
