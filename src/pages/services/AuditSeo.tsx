import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, ClipboardCheck, Clock, Search, FileText, Target, Lightbulb } from 'lucide-react';

const AuditSeoService = () => {
  const features = [
    { icon: <Search className="w-6 h-6" />, title: "Analyse Technique", description: "Performance, indexation, structure du site" },
    { icon: <FileText className="w-6 h-6" />, title: "Audit Contenu", description: "Qualité, pertinence, optimisation des pages" },
    { icon: <Target className="w-6 h-6" />, title: "Analyse Concurrence", description: "Positionnement vs vos concurrents" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Recommandations", description: "Plan d'action priorisé et détaillé" },
  ];

  const includes = [
    "Rapport détaillé (+50 pages)",
    "Analyse technique complète",
    "Audit du contenu",
    "Étude de la concurrence",
    "Analyse des backlinks",
    "Recommandations priorisées",
    "Plan d'action concret",
    "Call de restitution 1h"
  ];

  const idealFor = [
    "Avant une refonte",
    "Baisse de trafic",
    "Nouveau site",
    "Lancement SEO",
    "Problèmes de positionnement",
    "Due diligence"
  ];

  return (
    <>
      <Helmet>
        <title>Audit SEO Complet | ConvertiLab Paris</title>
        <meta name="description" content="Audit SEO complet : technique, contenu, concurrence. Rapport détaillé + plan d'action priorisé. Premier audit gratuit." />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 text-white py-20 overflow-hidden">
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
                  <BreadcrumbPage className="text-white">Audit SEO</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">SEO</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Audit SEO</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Analyse complète de votre visibilité actuelle et axes d'amélioration prioritaires.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/contact">Demander un audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Livraison : 5-7 jours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ce que nous analysons</h2>
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
                  Un audit complet pour comprendre votre situation et savoir exactement quoi améliorer.
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
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
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

        <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à auditer votre site ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez les points forts et les axes d'amélioration de votre référencement.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Demander un audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AuditSeoService;
