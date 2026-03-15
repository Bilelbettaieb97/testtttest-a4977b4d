import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, Code, Clock, Database, Lock, Layers, Cog } from 'lucide-react';

const ApplicationWebService = () => {
  const features = [
    { icon: <Code className="w-6 h-6" />, title: "Développement Sur-Mesure", description: "Solutions adaptées à vos besoins spécifiques" },
    { icon: <Database className="w-6 h-6" />, title: "Base de Données", description: "Architecture optimisée et scalable" },
    { icon: <Lock className="w-6 h-6" />, title: "Sécurité Avancée", description: "Authentification et protection des données" },
    { icon: <Layers className="w-6 h-6" />, title: "API & Intégrations", description: "Connexion avec vos outils existants" },
  ];

  const includes = [
    "Développement sur-mesure complet",
    "Architecture scalable et performante",
    "API et intégrations tierces",
    "Base de données optimisée",
    "Authentification sécurisée",
    "Documentation technique complète",
    "Tests et assurance qualité",
    "Maintenance évolutive"
  ];

  const idealFor = [
    "Startups tech",
    "Entreprises B2B",
    "Outils internes métiers",
    "Plateformes SaaS",
    "Portails clients",
    "Tableaux de bord analytiques"
  ];

  return (
    <>
      <Helmet>
        <title>Application Web Sur-Mesure | ConvertiLab</title>
        <meta name="description" content="Développement d'applications web : SaaS, portails clients, outils métiers. Architecture scalable et sécurisée. Devis gratuit." />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 overflow-hidden">
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
                  <BreadcrumbPage className="text-white">Application Web</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Code className="w-8 h-8" />
                </div>
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">Sites Web</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Application Web</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Solutions sur-mesure pour des besoins complexes : SaaS, portails, outils métiers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
                  <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Livraison : Sur devis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Expertise Technique</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
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
                  Nos applications web sont développées avec les meilleures pratiques de l'industrie.
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
              <div className="bg-gradient-to-br from-slate-100 to-gray-200 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Idéal pour</h3>
                <ul className="space-y-3">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-slate-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Un projet d'application web ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et définissons ensemble la meilleure solution technique.
            </p>
            <Button asChild size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
              <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ApplicationWebService;
