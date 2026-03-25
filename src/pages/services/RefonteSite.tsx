import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, RefreshCw, Clock, Search, Zap, Shield, TrendingUp } from 'lucide-react';

const RefonteSiteService = () => {
  const features = [
    { icon: <Search className="w-6 h-6" />, title: "Audit Complet", description: "Analyse approfondie de votre site existant" },
    { icon: <Zap className="w-6 h-6" />, title: "Performances", description: "Optimisation vitesse et Core Web Vitals" },
    { icon: <Shield className="w-6 h-6" />, title: "SEO Préservé", description: "Migration sans perte de référencement" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Conversion", description: "Design optimisé pour convertir" },
  ];

  const includes = [
    "Audit complet de l'existant",
    "Nouveau design moderne",
    "Migration des contenus",
    "Préservation du SEO",
    "Amélioration des performances",
    "Redirection des URLs",
    "Hébergement 1 an inclus",
    "Support post-refonte 3 mois"
  ];

  const idealFor = [
    "Sites vieillissants (+3 ans)",
    "Problèmes de performance",
    "Mauvais taux de conversion",
    "Image de marque à rafraîchir",
    "Site non responsive",
    "Changement d'activité"
  ];

  return (
    <>
      <Helmet>
        <title>Refonte de Site Web | ConvertiLab Paris</title>
        <meta name="description" content="Modernisez votre site web : design actuel, SEO préservé, conversion optimisée. Audit gratuit et devis sous 24h." />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white py-20 overflow-hidden">
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
                  <BreadcrumbPage className="text-white">Refonte de Site</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <RefreshCw className="w-8 h-8" />
                </div>
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">Sites Web</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Refonte de Site</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Modernisez votre site existant tout en préservant votre référencement et vos acquis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Livraison : 15-25 jours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi refondre votre site ?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ce qui est inclus</h2>
                <p className="text-gray-600 mb-8">
                  Une refonte complète qui respecte votre historique tout en vous projetant vers l'avenir.
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
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Idéal pour</h3>
                <ul className="space-y-3">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-orange-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à moderniser votre site ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Obtenez un audit gratuit de votre site actuel et découvrez son potentiel d'amélioration.
            </p>
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link to="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RefonteSiteService;
