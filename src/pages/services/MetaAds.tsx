import { SEO } from '@/components/SEO';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RelatedServicesSection from '@/components/internal-links/RelatedServicesSection';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, Fingerprint, Clock, Users, Image, Target, TrendingUp } from 'lucide-react';

const MetaAdsService = () => {
  const features = [
    { icon: <Users className="w-6 h-6" />, title: "Ciblage Précis", description: "Touchez votre audience idéale" },
    { icon: <Image className="w-6 h-6" />, title: "Créatifs Optimisés", description: "Visuels et vidéos performants" },
    { icon: <Target className="w-6 h-6" />, title: "Retargeting", description: "Reconvertissez vos visiteurs" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Scaling", description: "Augmentez vos budgets sans perdre en ROI" },
  ];

  const includes = [
    "Audit de compte existant",
    "Stratégie d'audience",
    "Création des campagnes",
    "Design des créatifs",
    "Tests A/B continus",
    "Optimisation quotidienne",
    "Rapports hebdomadaires",
    "Conseils créatifs"
  ];

  const idealFor = [
    "E-commerce mode/beauté",
    "Applications mobiles",
    "Services B2C",
    "Événements",
    "Marques lifestyle",
    "Restaurants"
  ];

  return (
    <>
      <SEO
        url="/services/sea/meta-ads"
        title="Meta Ads | Facebook & Instagram"
        description="Publicités Facebook et Instagram : ciblage précis, créatifs optimisés, ROI maximisé. Audit de compte gratuit."
        keywords="Meta Ads, Facebook Ads, Instagram Ads, publicité Facebook, publicité Instagram, social ads"
      />

      <Navigation />
      
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white py-20 overflow-hidden">
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
                  <BreadcrumbPage className="text-white">Meta Ads</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Fingerprint className="w-8 h-8" />
                </div>
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">SEA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Meta Ads</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Publicités Facebook et Instagram pour toucher votre audience idéale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link to="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Résultats : 1-2 semaines</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Notre expertise Meta</h2>
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

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ce qui est inclus</h2>
                <p className="text-gray-600 mb-8">
                  Une gestion complète de vos campagnes Meta pour un ROI optimal.
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
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl">
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

        <ServiceFAQ faqs={[
          { q: "Facebook Ads ou Instagram Ads : lequel choisir ?", a: "Les deux plateformes sont gérées depuis le même outil (Meta Business Suite). Nous diffusons sur les deux simultanément et optimisons la répartition selon les performances. Instagram est idéal pour le visuel, Facebook pour le ciblage détaillé." },
          { q: "Quel type de contenu fonctionne le mieux en Meta Ads ?", a: "Les vidéos courtes (15-30s), les carrousels produits et les témoignages clients performent le mieux. Nous créons ou optimisons vos visuels pour maximiser l'engagement et les conversions." },
          { q: "Comment fonctionne le ciblage sur Meta Ads ?", a: "Meta offre un ciblage ultra-précis : données démographiques, centres d'intérêt, comportements d'achat, audiences similaires (lookalike) et retargeting de vos visiteurs. Nous exploitons ces options pour toucher votre audience idéale." },
          { q: "Puis-je voir les résultats en temps réel ?", a: "Oui, vous avez accès à un tableau de bord en temps réel et recevez des rapports hebdomadaires détaillés avec les métriques clés : impressions, clics, conversions, coût par acquisition et ROAS." }
        ]} />

        <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à conquérir les réseaux sociaux ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Développez votre présence sur Facebook et Instagram avec des campagnes performantes.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link to="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MetaAdsService;
