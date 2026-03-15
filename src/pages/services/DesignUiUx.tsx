import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, PenTool, Clock, Layout, Users, Layers, MousePointer } from 'lucide-react';

const DesignUiUxService = () => {
  const features = [
    { icon: <Layout className="w-6 h-6" />, title: "Wireframes", description: "Maquettes fonctionnelles pour valider la structure" },
    { icon: <Layers className="w-6 h-6" />, title: "Prototypes", description: "Versions interactives pour tester l'expérience" },
    { icon: <Users className="w-6 h-6" />, title: "Tests Utilisateurs", description: "Validation avec de vrais utilisateurs" },
    { icon: <MousePointer className="w-6 h-6" />, title: "Design System", description: "Composants réutilisables et cohérents" },
  ];

  const includes = [
    "Recherche utilisateur (UX Research)",
    "Wireframes et architecture",
    "Prototypes interactifs Figma",
    "Tests utilisateurs",
    "Design system complet",
    "Guides de style",
    "Assets exportables",
    "Accompagnement développement"
  ];

  const idealFor = [
    "Applications mobiles",
    "Applications web",
    "Refonte d'interface",
    "Nouveaux produits digitaux",
    "Optimisation conversion",
    "Startups en phase MVP"
  ];

  return (
    <>
      <Helmet>
        <title>Design UI/UX | Interfaces Web | ConvertiLab</title>
        <meta name="description" content="Design UI/UX professionnel : wireframes, prototypes Figma, tests utilisateurs. Interfaces qui convertissent. Devis gratuit." />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white py-20 overflow-hidden">
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
                  <BreadcrumbLink asChild><Link to="/services/design" className="text-white/70 hover:text-white">Design</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Design UI/UX</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <PenTool className="w-8 h-8" />
                </div>
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Design UI/UX</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Des interfaces intuitives qui optimisent l'expérience utilisateur et augmentent vos conversions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Livraison : 10-20 jours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Notre processus UX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-4">
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
                  Un processus complet centré sur l'utilisateur pour créer des interfaces qui convertissent.
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
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Idéal pour</h3>
                <ul className="space-y-3">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-pink-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à améliorer votre UX ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et créons ensemble une expérience utilisateur exceptionnelle.
            </p>
            <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DesignUiUxService;
