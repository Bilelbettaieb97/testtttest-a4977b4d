import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import { Button } from '@/components/ui/button';
import RelatedServicesSection from '@/components/internal-links/RelatedServicesSection';
import SuggestedArticles from '@/components/internal-links/SuggestedArticles';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, Palette, PenTool, Fingerprint, Clock, Shield, Headphones, Eye, Layers } from 'lucide-react';

const DesignPage = () => {
  const services = [
    {
      id: 'design-ui-ux',
      icon: <PenTool className="w-8 h-8" />,
      title: 'Design UI/UX',
      subtitle: 'Interfaces intuitives et esthétiques',
      description: "Le design UI/UX place l'utilisateur au centre de la conception. Nous créons des interfaces qui non seulement séduisent visuellement, mais guident naturellement vos visiteurs vers la conversion.",
      features: [
        'Recherche utilisateur (UX Research)',
        'Wireframes et architecture',
        'Prototypes interactifs',
        'Design system complet',
        'Tests utilisateurs',
        'Itérations illimitées',
        'Fichiers sources (Figma)'
      ],
      process: [
        { step: 'Découverte', desc: 'Analyse de vos besoins et de votre audience' },
        { step: 'Architecture', desc: 'Structure et parcours utilisateur' },
        { step: 'Wireframes', desc: 'Maquettes fonctionnelles' },
        { step: 'Design', desc: 'Création visuelle complète' },
        { step: 'Prototype', desc: 'Version interactive testable' },
        { step: 'Validation', desc: 'Tests et ajustements' }
      ],
      deliveryTime: '10-20 jours'
    },
    {
      id: 'identite-visuelle',
      icon: <Fingerprint className="w-8 h-8" />,
      title: 'Identité Visuelle',
      subtitle: 'Logo et charte graphique complète',
      description: "Votre identité visuelle est le premier contact avec vos clients. Nous créons des logos mémorables et des chartes graphiques cohérentes qui reflètent vos valeurs et vous différencient de la concurrence.",
      features: [
        'Création de logo (3 propositions)',
        'Charte graphique complète',
        'Palette de couleurs',
        'Typographies définies',
        'Déclinaisons tous supports',
        'Guide d\'utilisation',
        'Fichiers vectoriels (AI, SVG, PDF)'
      ],
      process: [
        { step: 'Brief', desc: 'Compréhension de votre univers' },
        { step: 'Recherche', desc: 'Benchmark et inspiration' },
        { step: 'Concepts', desc: '3 directions créatives' },
        { step: 'Sélection', desc: 'Choix et affinage' },
        { step: 'Finalisation', desc: 'Déclinaisons et charte' },
        { step: 'Livraison', desc: 'Fichiers et documentation' }
      ],
      deliveryTime: '10-15 jours'
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <SEO
        url="/services/design"
        title="Design UI/UX & Identité Visuelle | ConvertiLab"
        description="Design UI/UX et identité visuelle : logo, charte graphique, prototypes Figma. Interfaces qui convertissent. Devis gratuit."
        keywords="design UI/UX, identité visuelle, logo, charte graphique, prototypage Figma, web design"
      />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Design", url: "/services/design" }
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
                <BreadcrumbPage>Design</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 mb-6">
                <Palette className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Design & Identité</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Design & Identité Visuelle
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Des créations visuelles qui marquent les esprits et transforment votre image de marque en avantage concurrentiel.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-pink-500 to-rose-600">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">Voir nos créations</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div key={service.id} id={service.id}>
                  {/* Header */}
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mx-auto mb-6">
                      {service.icon}
                    </div>
                    <p className="text-sm font-medium text-pink-600 mb-2">{service.subtitle}</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Features */}
                    <div className="p-8 rounded-2xl border border-border bg-card">
                      <div className="flex items-center gap-3 mb-6">
                        <Layers className="w-6 h-6 text-pink-600" />
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
                          <Clock className="w-5 h-5 text-pink-600" />
                          <span className="font-medium">Délai: {service.deliveryTime}</span>
                        </div>
                        <Button onClick={scrollToContact} className="w-full bg-gradient-to-r from-pink-500 to-rose-600">
                          Demander un devis
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Process */}
                    <div className="p-8 rounded-2xl border border-border bg-card">
                      <div className="flex items-center gap-3 mb-6">
                        <Eye className="w-6 h-6 text-pink-600" />
                        <h3 className="text-xl font-semibold">Notre processus</h3>
                      </div>
                      <div className="space-y-6">
                        {service.process.map((item, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                              {i + 1}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{item.step}</p>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ce que nos clients disent</h2>
              <p className="text-muted-foreground">Des identités visuelles qui ont transformé leur image</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Notre nouveau logo et notre charte graphique ont complètement transformé notre image. Nos clients nous perçoivent maintenant comme une entreprise premium."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Julie R.</p>
                    <p className="text-sm text-muted-foreground">Directrice, Cabinet Conseil</p>
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
                  "Le design UX de notre application a fait chuter notre taux de rebond de 60%. Les utilisateurs restent et convertissent. Excellent travail !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold">
                    T
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Thomas B.</p>
                    <p className="text-sm text-muted-foreground">CEO, AppMobile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={[
          { q: "Quelle est la différence entre UI et UX design ?", a: "L'UX (User Experience) se concentre sur l'expérience utilisateur : parcours, ergonomie, facilité d'utilisation. L'UI (User Interface) concerne l'aspect visuel : couleurs, typographies, boutons. Les deux sont indissociables pour un design efficace." },
          { q: "Pourquoi investir dans une identité visuelle professionnelle ?", a: "Votre identité visuelle est le premier contact avec vos clients. Un logo et une charte graphique professionnels inspirent confiance, renforcent la mémorisation de votre marque et vous différencient de la concurrence." },
          { q: "Combien de propositions de logo recevrai-je ?", a: "Nous proposons 3 directions créatives distinctes pour votre logo. Après votre choix, nous affinons la version retenue avec 2 tours de révisions inclus pour aboutir au résultat parfait." },
          { q: "Quels fichiers me seront livrés ?", a: "Vous recevez tous les fichiers sources (AI, PSD, PDF) ainsi que les déclinaisons optimisées pour le web, le print et les réseaux sociaux. Un guide d'utilisation complet accompagne la livraison." },
          { q: "Travaillez-vous avec Figma ?", a: "Oui, Figma est notre outil principal pour le design UI/UX. Vous accédez à vos maquettes en temps réel, pouvez commenter et suivre l'avancement. Les prototypes interactifs sont également réalisés sur Figma." }
        ]} />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à transformer votre image ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Discutons de votre projet de design et créons ensemble une identité qui vous ressemble.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-white text-pink-600 hover:bg-white/90">
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

export default DesignPage;
