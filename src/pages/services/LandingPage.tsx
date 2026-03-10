import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, Rocket, Clock, Target, Zap, BarChart, Smartphone } from 'lucide-react';

const LandingPageService = () => {
  const features = [
    { icon: <Target className="w-6 h-6" />, title: "Optimisation Conversion", description: "Chaque élément est pensé pour convertir vos visiteurs en clients" },
    { icon: <Smartphone className="w-6 h-6" />, title: "100% Responsive", description: "Parfaitement adapté à tous les écrans : mobile, tablette, desktop" },
    { icon: <Zap className="w-6 h-6" />, title: "Chargement Ultra-Rapide", description: "Performances optimisées pour un temps de chargement minimal" },
    { icon: <BarChart className="w-6 h-6" />, title: "Analytics Intégrés", description: "Suivez vos conversions et optimisez vos résultats" },
  ];

  const includes = [
    "Design 100% responsive et moderne",
    "Optimisation pour la conversion (CRO)",
    "Formulaire de contact intégré",
    "Intégration Google Analytics",
    "Hébergement 1 an inclus",
    "Support technique 1 mois",
    "Optimisation SEO de base",
    "Certificat SSL gratuit"
  ];

  const idealFor = [
    "Lancement de produit ou service",
    "Campagnes publicitaires Google/Meta",
    "Capture de leads qualifiés",
    "Tests A/B marketing",
    "Événements et webinaires",
    "Promotions temporaires"
  ];

  return (
    <>
      <Helmet>
        <title>Landing Page Haute Conversion | ConvertiLab - Agence Marketing Digital</title>
        <meta name="description" content="Création de landing pages optimisées pour vos campagnes Google Ads et Meta Ads. Maximisez votre ROI avec notre agence marketing digital." />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/" className="text-white/70 hover:text-white">Accueil</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/services" className="text-white/70 hover:text-white">Services</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/services/sites-web" className="text-white/70 hover:text-white">Sites Web</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Landing Page</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Rocket className="w-8 h-8" />
                </div>
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">Sites Web</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Landing Page
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Une page unique optimisée pour convertir vos visiteurs en clients. Idéale pour vos campagnes marketing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Livraison : 5-7 jours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir une Landing Page ?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ce qui est inclus</h2>
                <p className="text-gray-600 mb-8">
                  Notre offre Landing Page comprend tout ce dont vous avez besoin pour lancer votre campagne marketing avec succès.
                </p>
                <ul className="space-y-4">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Idéal pour</h3>
                <ul className="space-y-3">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à lancer votre Landing Page ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LandingPageService;
