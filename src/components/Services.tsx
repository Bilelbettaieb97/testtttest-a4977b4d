import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Palette, 
  Search, 
  HeadphonesIcon, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
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
      icon: <Globe className="w-8 h-8" />,
      title: "Création de Sites Web",
      description: "Des solutions web sur-mesure pour chaque besoin",
      gradient: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Landing Page",
          icon: <Rocket className="w-5 h-5" />,
          description: "Page unique optimisée pour la conversion",
          features: ["Design responsive", "Optimisation conversion", "Formulaire contact"]
        },
        {
          name: "Site Vitrine",
          icon: <FileText className="w-5 h-5" />,
          description: "Présentation complète de votre activité",
          features: ["Multi-pages", "SEO optimisé", "Design personnalisé"]
        },
        {
          name: "Site E-commerce",
          icon: <Store className="w-5 h-5" />,
          description: "Boutique en ligne performante",
          features: ["Paiement sécurisé", "Gestion stocks", "Formation incluse"]
        },
        {
          name: "Application Web",
          icon: <Code className="w-5 h-5" />,
          description: "Solutions sur-mesure complexes",
          features: ["Développement custom", "API intégrées", "Évolutif"]
        },
        {
          name: "Refonte de Site",
          icon: <RefreshCw className="w-5 h-5" />,
          description: "Modernisez votre présence en ligne",
          features: ["Audit complet", "Nouveau design", "Migration données"]
        }
      ]
    },
    {
      id: "design",
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Identité",
      description: "Une image de marque mémorable et cohérente",
      gradient: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Design UI/UX",
          icon: <PenTool className="w-5 h-5" />,
          description: "Interfaces intuitives et esthétiques",
          features: ["Wireframes", "Prototypes", "Tests utilisateurs"]
        },
        {
          name: "Identité Visuelle",
          icon: <Fingerprint className="w-5 h-5" />,
          description: "Logo et charte graphique complète",
          features: ["Logo", "Charte graphique", "Déclinaisons"]
        }
      ]
    },
    {
      id: "seo",
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Visibilité",
      description: "Soyez trouvé par vos clients potentiels",
      gradient: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Référencement SEO",
          icon: <TrendingUp className="w-5 h-5" />,
          description: "Améliorez votre positionnement Google",
          features: ["Optimisation on-page", "Contenu SEO", "Backlinks"]
        },
        {
          name: "Audit SEO",
          icon: <ClipboardCheck className="w-5 h-5" />,
          description: "Analyse complète de votre visibilité",
          features: ["Rapport détaillé", "Recommandations", "Plan d'action"]
        }
      ]
    },
    {
      id: "accompagnement",
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Accompagnement",
      description: "Un partenaire pour votre croissance digitale",
      gradient: "from-orange-500 to-red-500",
      services: [
        {
          name: "Maintenance & Support",
          icon: <Wrench className="w-5 h-5" />,
          description: "Gardez votre site performant et sécurisé",
          features: ["Mises à jour", "Sauvegardes", "Support réactif"]
        },
        {
          name: "Formation",
          icon: <GraduationCap className="w-5 h-5" />,
          description: "Maîtrisez vos outils digitaux",
          features: ["Formation admin", "Bonnes pratiques", "Documentation"]
        }
      ]
    }
  ];

  const advantages = [
    {
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      text: "Consultation gratuite et devis sous 24h"
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      text: "Solutions adaptées à chaque budget"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Support inclus sur tous nos projets"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-950/10 dark:to-pink-950/10"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 px-6 py-2 text-sm font-semibold mb-6 border-0">
            <Star className="w-4 h-4 mr-2" />
            Nos Expertises
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Des services <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">complets</span> pour votre succès
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            De la conception à l'accompagnement, nous vous proposons une gamme complète de services digitaux
          </p>
          
          {/* Avantages */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-2">
                {advantage.icon}
                <span className="font-medium text-muted-foreground">{advantage.text}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category) => (
            <Card 
              key={category.id} 
              className="border border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground mb-1">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-border"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.gradient} bg-opacity-20 flex items-center justify-center text-foreground`}>
                          {service.icon}
                        </div>
                        <h4 className="font-semibold text-foreground">{service.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex} 
                            className="text-xs px-2 py-1 rounded-full bg-background border border-border text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Devis sur-mesure badge */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-sm font-medium">
                      Devis sur-mesure
                    </Badge>
                  </div>
                  <Button 
                    onClick={scrollToContact}
                    variant="ghost" 
                    className={`text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent hover:opacity-80`}
                  >
                    Demander un devis
                    <ArrowRight className="ml-2 w-4 h-4 text-purple-600" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Link */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-4">
            Découvrez comment nous avons aidé nos clients à développer leur activité
          </p>
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-semibold transition-colors"
          >
            Voir nos réalisations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Prêt à donner vie à votre projet ?
            </h3>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Discutons ensemble de vos besoins et obtenez un devis personnalisé gratuit sous 24h
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-50 px-10 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Obtenir un devis gratuit
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                <Link to="/blog">
                  Lire nos conseils
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
