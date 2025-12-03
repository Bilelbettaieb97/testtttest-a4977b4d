import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Palette, 
  Search, 
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
  Sparkles
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      id: "sites-web",
      icon: <Globe className="w-5 h-5" />,
      label: "Sites Web",
      title: "Création de Sites Web",
      description: "Des solutions web sur-mesure adaptées à vos objectifs",
      gradient: "from-violet-500 to-purple-600",
      lightGradient: "from-violet-50 to-purple-50",
      accentColor: "text-violet-600",
      link: "/services/sites-web",
      services: [
        {
          name: "Landing Page",
          icon: <Rocket className="w-5 h-5" />,
          description: "Page unique optimisée pour la conversion de vos visiteurs en clients",
          features: ["Design responsive", "Optimisation conversion", "Formulaire contact", "Hébergement inclus"],
          link: "/services/landing-page"
        },
        {
          name: "Site Vitrine",
          icon: <FileText className="w-5 h-5" />,
          description: "Présentation complète et professionnelle de votre activité",
          features: ["Multi-pages", "SEO optimisé", "Design personnalisé", "Support inclus"],
          link: "/services/site-vitrine"
        },
        {
          name: "Site E-commerce",
          icon: <Store className="w-5 h-5" />,
          description: "Boutique en ligne performante pour vendre vos produits",
          features: ["Paiement sécurisé", "Gestion stocks", "Formation incluse", "Analytics"],
          link: "/services/site-ecommerce"
        },
        {
          name: "Application Web",
          icon: <Code className="w-5 h-5" />,
          description: "Solutions sur-mesure pour des besoins spécifiques",
          features: ["Développement custom", "API intégrées", "Scalable", "Maintenance"],
          link: "/services/application-web"
        },
        {
          name: "Refonte de Site",
          icon: <RefreshCw className="w-5 h-5" />,
          description: "Modernisez votre présence en ligne existante",
          features: ["Audit complet", "Nouveau design", "Migration données", "SEO préservé"],
          link: "/services/refonte-site"
        }
      ]
    },
    {
      id: "design",
      icon: <Palette className="w-5 h-5" />,
      label: "Design",
      title: "Design & Identité Visuelle",
      description: "Une image de marque mémorable qui vous distingue",
      gradient: "from-pink-500 to-rose-600",
      lightGradient: "from-pink-50 to-rose-50",
      accentColor: "text-pink-600",
      link: "/services/design",
      services: [
        {
          name: "Design UI/UX",
          icon: <PenTool className="w-5 h-5" />,
          description: "Interfaces intuitives qui optimisent l'expérience utilisateur",
          features: ["Wireframes", "Prototypes interactifs", "Tests utilisateurs", "Design system"],
          link: "/services/design-ui-ux"
        },
        {
          name: "Identité Visuelle",
          icon: <Fingerprint className="w-5 h-5" />,
          description: "Logo et charte graphique pour une image cohérente",
          features: ["Création logo", "Charte graphique", "Déclinaisons supports", "Guide d'utilisation"],
          link: "/services/identite-visuelle"
        }
      ]
    },
    {
      id: "seo",
      icon: <Search className="w-5 h-5" />,
      label: "SEO",
      title: "SEO & Visibilité",
      description: "Soyez trouvé par vos clients potentiels sur Google",
      gradient: "from-emerald-500 to-teal-600",
      lightGradient: "from-emerald-50 to-teal-50",
      accentColor: "text-emerald-600",
      link: "/services/seo",
      services: [
        {
          name: "Référencement SEO",
          icon: <TrendingUp className="w-5 h-5" />,
          description: "Améliorez durablement votre positionnement sur les moteurs de recherche",
          features: ["Optimisation on-page", "Stratégie contenu", "Netlinking", "Suivi positions"],
          link: "/services/referencement-seo"
        },
        {
          name: "Audit SEO",
          icon: <ClipboardCheck className="w-5 h-5" />,
          description: "Analyse complète de votre visibilité actuelle et axes d'amélioration",
          features: ["Rapport détaillé", "Analyse concurrence", "Recommandations", "Plan d'action"],
          link: "/services/audit-seo"
        }
      ]
    },
    {
      id: "sea",
      icon: <TrendingUp className="w-5 h-5" />,
      label: "SEA",
      title: "Publicité en ligne",
      description: "Boostez votre visibilité avec des campagnes publicitaires ciblées",
      gradient: "from-amber-500 to-orange-600",
      lightGradient: "from-amber-50 to-orange-50",
      accentColor: "text-amber-600",
      link: "/services/sea",
      services: [
        {
          name: "Google Ads",
          icon: <Search className="w-5 h-5" />,
          description: "Campagnes Search, Display et Shopping pour capter vos clients au bon moment",
          features: ["Campagnes Search", "Google Shopping", "Display", "Remarketing"],
          link: "/services/google-ads"
        },
        {
          name: "Meta Ads",
          icon: <Fingerprint className="w-5 h-5" />,
          description: "Publicités Facebook et Instagram pour toucher votre audience idéale",
          features: ["Facebook Ads", "Instagram Ads", "Ciblage précis", "Créatifs optimisés"],
          link: "/services/meta-ads"
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
    <section id="services" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 dark:from-violet-900/30 dark:to-pink-900/30 mb-6">
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Nos services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Ce que nous{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              faisons
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Des solutions digitales complètes, un accompagnement personnalisé
          </p>
        </header>

        {/* Tabs */}
        <Tabs defaultValue="sites-web" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 mb-12 h-auto p-1.5 bg-muted/70 backdrop-blur-sm rounded-2xl">
            <TabsTrigger 
              value="sites-web"
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Sites Web</span>
            </TabsTrigger>
            <TabsTrigger 
              value="design"
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <Palette className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Design</span>
            </TabsTrigger>
            <TabsTrigger 
              value="seo"
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">SEO</span>
            </TabsTrigger>
            <TabsTrigger 
              value="sea"
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <TrendingUp className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">SEA</span>
            </TabsTrigger>
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="mt-0 focus-visible:outline-none animate-fade-in"
            >
              {/* Category header */}
              <div className="text-center mb-12">
                <h3 className={`text-2xl sm:text-3xl font-bold text-foreground mb-3`}>
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {category.description}
                </p>
              </div>

              {/* Services grid */}
              <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, index) => (
                  <div 
                    key={index}
                    className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.lightGradient} dark:from-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      
                      {/* Content */}
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/90">
                        {service.name}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                            +{service.features.length - 3}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <Link 
                        to={service.link}
                        className={`inline-flex items-center gap-1 text-sm font-medium ${category.accentColor} hover:opacity-80 transition-opacity group/btn`}
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* En savoir plus link */}
              <div className="text-center mt-8">
                <Link 
                  to={category.link}
                  className={`inline-flex items-center gap-2 ${category.accentColor} hover:opacity-80 font-medium transition-opacity`}
                >
                  En savoir plus sur nos services {category.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Vous ne trouvez pas ce que vous cherchez ?
              </h3>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Discutons ensemble de votre projet sur-mesure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Discutons de votre projet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Link 
                  to="/portfolio" 
                  className="text-sm text-white/90 hover:text-white transition-colors underline underline-offset-4"
                >
                  Voir nos réalisations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
