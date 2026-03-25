import { SEO } from '@/components/SEO';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, CheckCircle, Code, Clock, Database, Lock, Layers, Cog, Star, Users, Shield, Zap, BarChart3, Calendar } from 'lucide-react';

const ApplicationWebService = () => {
  const features = [
    { icon: <Code className="w-6 h-6" />, title: "Développement Sur-Mesure", description: "Architecture pensée pour votre métier, pas un template générique" },
    { icon: <Database className="w-6 h-6" />, title: "Base de Données Scalable", description: "Supporte 10x votre croissance sans ralentissement" },
    { icon: <Lock className="w-6 h-6" />, title: "Sécurité Renforcée", description: "Authentification, chiffrement et conformité RGPD" },
    { icon: <Layers className="w-6 h-6" />, title: "API & Intégrations", description: "Connectez vos outils existants en quelques clics" },
  ];

  const includes = [
    "Développement sur-mesure complet",
    "Architecture scalable et performante",
    "API et intégrations tierces",
    "Base de données optimisée",
    "Authentification sécurisée",
    "Documentation technique complète",
    "Tests et assurance qualité",
    "Maintenance évolutive incluse"
  ];

  const idealFor = [
    "Startups tech en phase de scaling",
    "Entreprises B2B avec processus complexes",
    "Outils internes métiers sur-mesure",
    "Plateformes SaaS à forte valeur ajoutée",
    "Portails clients sécurisés",
    "Tableaux de bord analytiques temps réel"
  ];

  const results = [
    { metric: "+65%", label: "Productivité", detail: "gain moyen pour nos clients" },
    { metric: "99.9%", label: "Uptime", detail: "disponibilité garantie" },
    { metric: "< 200ms", label: "Temps de réponse", detail: "performance optimale" },
    { metric: "15+", label: "Apps livrées", detail: "en production" },
  ];

  const openCalendly = () => {
    window.open("https://calendly.com/convertilab-5bsc/30min", "_blank");
  };

  return (
    <>
      <SEO
        url="/services/sites-web/application-web"
        title="Application Web Sur-Mesure"
        description="Développement d'applications web sur-mesure : SaaS, portails clients, outils métiers. Architecture scalable, sécurisée et performante. Devis gratuit sous 24h."
        keywords="application web sur mesure, développement web, SaaS, portail client, outil métier, application professionnelle"
      />

      <Navigation />
      
      <main className="pt-20">
        {/* HERO — Benefit-focused avec urgence et social proof */}
        <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10 animate-float" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }} />

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
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm font-semibold">🔥 2 créneaux disponibles ce mois-ci</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Code className="w-8 h-8" />
                </div>
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">Sites Web</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Une Application Web Qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Automatise & Scale</span> Votre Business
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Arrêtez de perdre du temps sur des tâches manuelles. Nos apps sur-mesure <strong>boostent votre productivité de +65%</strong> en moyenne.
              </p>

              {/* Dual CTA */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300">
                  <Link to="/contact">
                    <Zap className="mr-2 w-5 h-5" />
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button onClick={openCalendly} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                  <Calendar className="mr-2 w-5 h-5" />
                  Appel découverte 15 min
                </Button>
              </div>

              {/* Social proof bar */}
              <div className="flex flex-wrap gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium text-white">4.9/5</span>
                  <span>sur 47 avis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span><strong className="text-white">+50</strong> entreprises accompagnées</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span><strong className="text-white">Satisfait ou remboursé</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RÉSULTATS CHIFFRÉS — Social proof quantitative */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-muted/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{item.metric}</div>
                  <div className="text-base font-semibold text-foreground mb-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE TECHNIQUE — Features avec bénéfices */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Expertise Technique de Pointe</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Chaque fonctionnalité est pensée pour un impact business mesurable</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CE QUI EST INCLUS + IDÉAL POUR */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Tout est inclus, zéro surprise</h2>
                <p className="text-muted-foreground mb-8">
                  Nos applications web sont développées avec les meilleures pratiques de l'industrie. Vous n'avez rien à gérer.
                </p>
                <ul className="space-y-4">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Idéal pour</h3>
                <ul className="space-y-4">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GARANTIES — Objection killers */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Zéro Risque, Garanti</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-background p-6 rounded-xl border border-border text-center hover:shadow-lg transition-all">
                <Shield className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Satisfait ou remboursé</h3>
                <p className="text-sm text-muted-foreground">Si le résultat ne vous convient pas, on vous rembourse intégralement</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border text-center hover:shadow-lg transition-all">
                <Cog className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Paiement après livraison</h3>
                <p className="text-sm text-muted-foreground">Vous ne payez qu'une fois votre application validée et fonctionnelle</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border text-center hover:shadow-lg transition-all">
                <BarChart3 className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Support 6 mois inclus</h3>
                <p className="text-sm text-muted-foreground">Corrections, ajustements et accompagnement post-lancement</p>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={[
          { q: "Quelle est la différence entre un site web et une application web ?", a: "Un site web est principalement informatif (vitrine, blog). Une application web est interactive : gestion de données, tableaux de bord, workflows, authentification utilisateurs. C'est un véritable outil métier accessible depuis un navigateur." },
          { q: "Quelles technologies utilisez-vous ?", a: "Nous utilisons des technologies modernes et éprouvées : React/TypeScript pour le frontend, Node.js ou Python pour le backend, PostgreSQL pour la base de données, et des services cloud pour l'hébergement scalable." },
          { q: "Comment garantissez-vous la sécurité de l'application ?", a: "Nous implémentons les bonnes pratiques de sécurité : authentification robuste, chiffrement des données, protection CSRF/XSS, conformité RGPD, tests de sécurité et mises à jour régulières." },
          { q: "Proposez-vous de la maintenance après livraison ?", a: "Oui, nous proposons des contrats de maintenance évolutive incluant les mises à jour de sécurité, le monitoring, le support utilisateur et le développement de nouvelles fonctionnalités." }
        ]} />

        {/* CTA FINAL — Urgence + bénéfice */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Réponse garantie sous 24h</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à automatiser votre activité ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et définissons ensemble la meilleure solution technique. <strong>Consultation gratuite, sans engagement.</strong>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Button asChild size="lg" className="bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button onClick={openCalendly} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                <Calendar className="mr-2 w-5 h-5" />
                Appel gratuit 15 min
              </Button>
            </div>
            <p className="text-white/60 text-sm">
              ⚡ Réponse sous 24h · 🔒 Devis gratuit et sans engagement · ✅ Paiement en 3x sans frais
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ApplicationWebService;
