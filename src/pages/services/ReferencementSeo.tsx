import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, TrendingUp, Clock, Search, FileText, Link2, BarChart } from 'lucide-react';

const ReferencementSeoService = () => {
  const features = [
    { icon: <Search className="w-6 h-6" />, title: "Optimisation On-Page", description: "Structure, balises, contenu optimisés pour Google" },
    { icon: <FileText className="w-6 h-6" />, title: "Stratégie Contenu", description: "Création de contenus qui rankent" },
    { icon: <Link2 className="w-6 h-6" />, title: "Netlinking", description: "Acquisition de backlinks de qualité" },
    { icon: <BarChart className="w-6 h-6" />, title: "Suivi Positions", description: "Monitoring et rapports mensuels" },
  ];

  const includes = [
    "Optimisation on-page complète",
    "Recherche de mots-clés",
    "Stratégie de contenu",
    "Optimisation technique",
    "Netlinking qualitatif",
    "Suivi des positions",
    "Rapports mensuels détaillés",
    "Recommandations continues"
  ];

  const idealFor = [
    "Sites e-commerce",
    "Sites vitrines",
    "Blogs professionnels",
    "Entreprises locales",
    "Startups B2B",
    "Professions libérales"
  ];

  return (
    <>
      <SEO
        url="/services/seo/referencement"
        title="Référencement SEO | Page 1 Google"
        description="Stratégie SEO complète : optimisation on-page, netlinking, contenu. Atteignez la page 1 de Google. Audit SEO gratuit."
        keywords="référencement SEO, SEO naturel, optimisation Google, netlinking, stratégie SEO, positionnement Google"
      />

      <Navigation />
      
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white py-20 overflow-hidden">
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
                  <BreadcrumbLink asChild><Link to="/services/seo" className="text-white/70 hover:text-white">SEO</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Référencement SEO</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">SEO</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Référencement SEO</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Améliorez durablement votre positionnement sur les moteurs de recherche.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <Link to="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Résultats : 3-6 mois</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Notre approche SEO</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
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
                  Une stratégie SEO complète pour dominer les résultats de recherche.
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
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Idéal pour</h3>
                <ul className="space-y-3">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à booster votre visibilité ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Obtenez un audit SEO gratuit de votre site et découvrez votre potentiel.
            </p>
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Link to="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ReferencementSeoService;
