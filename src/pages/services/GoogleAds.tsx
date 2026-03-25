import { SEO } from '@/components/SEO';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, Search, Clock, Target, ShoppingBag, Monitor, RefreshCw } from 'lucide-react';

const GoogleAdsService = () => {
  const features = [
    { icon: <Search className="w-6 h-6" />, title: "Campagnes Search", description: "Apparaissez en tête des résultats Google" },
    { icon: <ShoppingBag className="w-6 h-6" />, title: "Google Shopping", description: "Mettez vos produits en avant" },
    { icon: <Monitor className="w-6 h-6" />, title: "Display", description: "Bannières sur le réseau Google" },
    { icon: <RefreshCw className="w-6 h-6" />, title: "Remarketing", description: "Reconquérez vos visiteurs" },
  ];

  const includes = [
    "Audit de compte existant",
    "Recherche de mots-clés",
    "Création des campagnes",
    "Rédaction des annonces",
    "Configuration du tracking",
    "Optimisation continue",
    "Rapports hebdomadaires",
    "Accompagnement stratégique"
  ];

  const idealFor = [
    "E-commerce",
    "Génération de leads",
    "Services B2B",
    "Commerces locaux",
    "Applications mobiles",
    "Événements"
  ];

  return (
    <>
      <SEO
        url="/services/sea/google-ads"
        title="Google Ads | x4.8 ROAS Moyen"
        description="Campagnes Google Ads optimisées : Search, Shopping, Display, Remarketing. x4.8 ROAS moyen. Audit gratuit."
        keywords="Google Ads, campagne Google, publicité Google, Google Shopping, remarketing, ROAS, agence Google Ads"
      />

      <Navigation />
      
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white py-20 overflow-hidden">
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
                  <BreadcrumbLink asChild><Link to="/services/sea" className="text-white/70 hover:text-white">SEA</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Google Ads</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Search className="w-8 h-8" />
                </div>
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">SEA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Google Ads</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Campagnes Search, Display et Shopping pour capter vos clients au bon moment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Résultats : Immédiat</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Types de campagnes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
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
                  Une gestion complète de vos campagnes Google Ads pour maximiser votre ROI.
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
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Idéal pour</h3>
                <ul className="space-y-3">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={[
          { q: "Quel budget minimum pour Google Ads ?", a: "Nous recommandons un budget minimum de 500€/mois en dépense publicitaire pour obtenir des données suffisantes et optimiser vos campagnes. Le budget idéal dépend de votre secteur et de vos objectifs." },
          { q: "Combien de temps pour rentabiliser mes campagnes ?", a: "Les premiers résultats sont visibles dès les premiers jours. L'optimisation complète prend 2 à 4 semaines pour atteindre un ROAS optimal. Nos clients atteignent en moyenne un ROAS de x4.8." },
          { q: "Google Ads est-il adapté à mon activité ?", a: "Google Ads est efficace pour presque tous les secteurs : e-commerce, services B2B, professions libérales, commerces locaux. Si vos clients recherchent vos produits/services sur Google, c'est pertinent." },
          { q: "Que comprend votre gestion de campagnes ?", a: "Notre gestion inclut la recherche de mots-clés, la création d'annonces, la configuration du tracking, l'optimisation continue des enchères, les tests A/B et des rapports hebdomadaires détaillés." }
        ]} />

        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à booster vos ventes ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Obtenez un audit gratuit de votre compte Google Ads ou lancez vos premières campagnes.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GoogleAdsService;
