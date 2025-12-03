import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Palette, 
  Search, 
  HeadphonesIcon, 
  ArrowRight, 
  Rocket,
  FileText,
  Store,
  RefreshCw,
  Code,
  PenTool,
  Fingerprint,
  TrendingUp,
  ClipboardCheck,
  Wrench,
  GraduationCap
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      id: "sites-web",
      icon: <Globe className="w-5 h-5" />,
      label: "Sites Web",
      title: "Création de Sites Web",
      description: "Des solutions web sur-mesure adaptées à vos objectifs",
      services: [
        {
          name: "Landing Page",
          icon: <Rocket className="w-5 h-5" />,
          description: "Page unique optimisée pour la conversion de vos visiteurs en clients",
          features: ["Design responsive", "Optimisation conversion", "Formulaire contact", "Hébergement inclus"]
        },
        {
          name: "Site Vitrine",
          icon: <FileText className="w-5 h-5" />,
          description: "Présentation complète et professionnelle de votre activité",
          features: ["Multi-pages", "SEO optimisé", "Design personnalisé", "Support inclus"]
        },
        {
          name: "Site E-commerce",
          icon: <Store className="w-5 h-5" />,
          description: "Boutique en ligne performante pour vendre vos produits",
          features: ["Paiement sécurisé", "Gestion stocks", "Formation incluse", "Analytics"]
        },
        {
          name: "Application Web",
          icon: <Code className="w-5 h-5" />,
          description: "Solutions sur-mesure pour des besoins spécifiques",
          features: ["Développement custom", "API intégrées", "Scalable", "Maintenance"]
        },
        {
          name: "Refonte de Site",
          icon: <RefreshCw className="w-5 h-5" />,
          description: "Modernisez votre présence en ligne existante",
          features: ["Audit complet", "Nouveau design", "Migration données", "SEO préservé"]
        }
      ]
    },
    {
      id: "design",
      icon: <Palette className="w-5 h-5" />,
      label: "Design",
      title: "Design & Identité Visuelle",
      description: "Une image de marque mémorable qui vous distingue",
      services: [
        {
          name: "Design UI/UX",
          icon: <PenTool className="w-5 h-5" />,
          description: "Interfaces intuitives qui optimisent l'expérience utilisateur",
          features: ["Wireframes", "Prototypes interactifs", "Tests utilisateurs", "Design system"]
        },
        {
          name: "Identité Visuelle",
          icon: <Fingerprint className="w-5 h-5" />,
          description: "Logo et charte graphique pour une image cohérente",
          features: ["Création logo", "Charte graphique", "Déclinaisons supports", "Guide d'utilisation"]
        }
      ]
    },
    {
      id: "seo",
      icon: <Search className="w-5 h-5" />,
      label: "SEO",
      title: "SEO & Visibilité",
      description: "Soyez trouvé par vos clients potentiels sur Google",
      services: [
        {
          name: "Référencement SEO",
          icon: <TrendingUp className="w-5 h-5" />,
          description: "Améliorez durablement votre positionnement sur les moteurs de recherche",
          features: ["Optimisation on-page", "Stratégie contenu", "Netlinking", "Suivi positions"]
        },
        {
          name: "Audit SEO",
          icon: <ClipboardCheck className="w-5 h-5" />,
          description: "Analyse complète de votre visibilité actuelle et axes d'amélioration",
          features: ["Rapport détaillé", "Analyse concurrence", "Recommandations", "Plan d'action"]
        }
      ]
    },
    {
      id: "accompagnement",
      icon: <HeadphonesIcon className="w-5 h-5" />,
      label: "Accompagnement",
      title: "Accompagnement & Support",
      description: "Un partenaire durable pour votre croissance digitale",
      services: [
        {
          name: "Maintenance & Support",
          icon: <Wrench className="w-5 h-5" />,
          description: "Gardez votre site performant, sécurisé et à jour",
          features: ["Mises à jour", "Sauvegardes auto", "Monitoring", "Support réactif"]
        },
        {
          name: "Formation",
          icon: <GraduationCap className="w-5 h-5" />,
          description: "Maîtrisez vos outils digitaux en toute autonomie",
          features: ["Formation admin", "Bonnes pratiques", "Documentation", "Support post-formation"]
        }
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header minimaliste */}
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Nos services
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Ce que nous faisons
          </h2>
          <p className="text-muted-foreground text-lg">
            Des solutions digitales complètes, un accompagnement personnalisé
          </p>
        </header>

        {/* Tabs */}
        <Tabs defaultValue="sites-web" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 mb-12 h-auto p-1 bg-muted/50">
            {serviceCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2 py-3 px-4 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="mt-0 focus-visible:outline-none"
            >
              {/* Category header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Services list */}
              <div className="max-w-4xl mx-auto space-y-6">
                {category.services.map((service, index) => (
                  <div 
                    key={index}
                    className="group p-6 sm:p-8 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground flex-shrink-0">
                        {service.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-foreground mb-2">
                          {service.name}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="sm:self-center">
                        <Button 
                          onClick={scrollToContact}
                          variant="ghost" 
                          size="sm"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          Devis
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom CTA - minimaliste */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="px-8"
            >
              Discutons de votre projet
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link 
              to="/portfolio" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
