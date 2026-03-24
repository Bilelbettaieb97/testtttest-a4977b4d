import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Utensils, ShoppingCart, Home, Sparkles, BookOpen, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CaseStudySchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyOverview from "@/components/case-study/CaseStudyOverview";
import CaseStudyChallenge from "@/components/case-study/CaseStudyChallenge";
import CaseStudySolution from "@/components/case-study/CaseStudySolution";
import CaseStudyGallery from "@/components/case-study/CaseStudyGallery";
import CaseStudyCharts from "@/components/case-study/CaseStudyCharts";
import CaseStudyMetrics from "@/components/case-study/CaseStudyMetrics";
import CaseStudyTimeline from "@/components/case-study/CaseStudyTimeline";
import CaseStudyTestimonial from "@/components/case-study/CaseStudyTestimonial";
import CaseStudyCTA from "@/components/case-study/CaseStudyCTA";
import CaseStudyNavigation from "@/components/case-study/CaseStudyNavigation";
import portfolioArancini from "@/assets/portfolio-arancini.jpg";
import portfolioAranciniHero from "@/assets/portfolio-arancini-hero.png";
import galleryArancini1 from "@/assets/gallery-arancini-1.png";
import galleryArancini2 from "@/assets/gallery-arancini-2.png";
import galleryArancini3 from "@/assets/gallery-arancini-3.png";
import galleryArancini4 from "@/assets/gallery-arancini-4.png";
import galleryArancini5 from "@/assets/gallery-arancini-5.png";
import galleryAranciniFullpage1 from "@/assets/gallery-arancini-fullpage-1.jpg";
import galleryAranciniFullpage2 from "@/assets/gallery-arancini-fullpage-2.jpg";
import portfolioFunestoreHero from "@/assets/portfolio-funestore-hero.png";
import galleryFunestoreFullpage1 from "@/assets/gallery-funestore-fullpage-1.jpg";
import galleryFunestoreFullpage2 from "@/assets/gallery-funestore-fullpage-2.jpg";
import galleryFunestoreFullpage3 from "@/assets/gallery-funestore-fullpage-3.jpg";
import galleryFunestoreCatalogue from "@/assets/gallery-funestore-catalogue.png";
import galleryFunestoreProduit from "@/assets/gallery-funestore-produit.png";
import portfolioPapapretHero from "@/assets/portfolio-papapret-hero.png";
import galleryPapapretFullpage1 from "@/assets/gallery-papapret-fullpage-1.jpg";
import galleryPapapretFullpage2 from "@/assets/gallery-papapret-fullpage-2.jpg";
import galleryPapapretFullpage3 from "@/assets/gallery-papapret-fullpage-3.jpg";
import galleryPapapretFullpage4 from "@/assets/gallery-papapret-fullpage-4.jpg";
import galleryPapapretFullpage5 from "@/assets/gallery-papapret-fullpage-5.jpg";
import portfolioAcbHero from "@/assets/portfolio-acb-hero.png";
import portfolioElevaHero from "@/assets/portfolio-eleva-hero.png";
import portfolioAdsbHero from "@/assets/portfolio-adsb-hero.png";
import portfolioAsiHero from "@/assets/portfolio-asi-hero.png";
import portfolioTrieventHero from "@/assets/portfolio-trievent-hero.png";
import portfolioTemplezenHero from "@/assets/portfolio-templezen-hero.png";
import portfolioInstitutNomadHero from "@/assets/portfolio-institut-nomad-hero.png";
import portfolioAhstudioHero from "@/assets/portfolio-ahstudio-hero.png";
import portfolioVinoboatHero from "@/assets/portfolio-vinoboat-hero.png";
import portfolioCouleursableHero from "@/assets/portfolio-couleursable-hero.png";
import portfolioFilmreelHero from "@/assets/portfolio-filmreel-hero.png";
import portfolioArtdesrosesHero from "@/assets/portfolio-artdesroses-hero.png";
import portfolioSegermesHero from "@/assets/portfolio-segermes-hero.png";
import portfolioSpectacleHero from "@/assets/portfolio-spectacle-hero.png";

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const caseStudies = {
    "monsieur-arancini": {
      icon: <Utensils className="w-8 h-8" />,
      sector: "Restauration",
      client: "Monsieur Arancini",
      title: "Site vitrine premium pour artisan sicilien",
      subtitle: "Création d'un site web vitrine haut de gamme pour une marque d'arancini artisanaux",
      image: portfolioAranciniHero,
      gallery: [
        { src: galleryAranciniFullpage1, alt: "Page complète Monsieur Arancini - Partie 1", caption: "Vue complète du site : accueil, histoire, catalogue Mini Arancini" },
        { src: galleryAranciniFullpage2, alt: "Page complète Monsieur Arancini - Partie 2", caption: "Vue complète : créations exclusives, galerie, contact et footer" },
        { src: galleryArancini1, alt: "Mini Arancini - Catalogue produits", caption: "Gamme de Mini Arancini : Bolognese, Pistache, Truffe, Jambon, Épinard, Champignon" },
        { src: galleryArancini2, alt: "Créations exclusives Monsieur Arancini", caption: "Créations siciliennes exclusives : Pâtes Carbonara et Pâtes Amatriciana" },
        { src: galleryArancini3, alt: "Galerie Arancini en action", caption: "Nos arancini en action : moments de dégustation authentiques" },
        { src: galleryArancini4, alt: "Footer et contact Monsieur Arancini", caption: "Section partenaires et contact avec gamme complète de produits" },
        { src: galleryArancini5, alt: "Page contact Monsieur Arancini", caption: "Formulaire de contact et coordonnées avec localisation Le Pontet" }
      ],
      chartData: [
        { name: "Crédibilité", before: 20, after: 95 },
        { name: "Visibilité", before: 10, after: 70 },
        { name: "Demandes", before: 5, after: 30 }
      ],
      challenge: "Monsieur Arancini, artisan spécialisé dans les arancini siciliens certifiés HACCP, n'avait aucune présence en ligne. L'entreprise avait besoin d'une image de marque premium pour se positionner auprès des professionnels et développer sa clientèle.",
      solution: "Nous avons créé un site vitrine premium avec un design UI/UX orienté conversion, une structuration claire de l'offre produit (mini arancini, créations originales), une optimisation mobile complète et une intégration de contenu visuel mettant en valeur l'authenticité sicilienne.",
      metrics: [
        { label: "Image de marque", value: "Premium", description: "Positionnement haut de gamme" },
        { label: "Offre structurée", value: "15+ saveurs", description: "Catalogue clair et attractif" },
        { label: "Certification", value: "HACCP", description: "Mise en avant de la qualité" },
        { label: "Mobile", value: "100%", description: "Responsive et optimisé" }
      ],
      technologies: ["Site Vitrine", "Design UI/UX", "Branding", "Responsive Design"],
      timeline: [
        { phase: "Stratégie", duration: "1 semaine", description: "Analyse du marché et positionnement de marque" },
        { phase: "Design", duration: "2 semaines", description: "Création du design premium et de l'identité visuelle" },
        { phase: "Développement", duration: "3 semaines", description: "Intégration du site et optimisation mobile" },
        { phase: "Lancement", duration: "1 semaine", description: "Mise en ligne et accompagnement" }
      ],
      results: "Monsieur Arancini dispose désormais d'une image de marque premium et professionnelle, avec une présentation claire de son offre qui facilite le développement commercial auprès des partenaires B2B.",
      testimonial: "Je suis très content d'avoir travaillé avec cette compagnie, très sérieux et réactifs. Ils m'ont fait un très joli site web avec de bons conseils et du professionnalisme. Je recommande vivement !",
      author: "Monsieur Arancini",
      role: "Fondateur"
    },
    "funestore": {
      icon: <ShoppingCart className="w-8 h-8" />,
      sector: "E-commerce B2B",
      client: "Funestore",
      title: "E-commerce B2B pour le secteur funéraire",
      subtitle: "Création d'une plateforme e-commerce professionnelle pour les articles funéraires",
      image: portfolioFunestoreHero,
      gallery: [
        { src: galleryFunestoreFullpage1, alt: "Page complète Funestore - Partie 1", caption: "Accueil, services, espace professionnel et sélection de produits" },
        { src: galleryFunestoreFullpage2, alt: "Page complète Funestore - Partie 2", caption: "Catégories, essences de bois et espace communauté professionnelle" },
        { src: galleryFunestoreFullpage3, alt: "Page complète Funestore - Partie 3", caption: "Catalogue complet et détails des articles funéraires" }
      ],
      chartData: [
        { name: "Visibilité", before: 15, after: 85 },
        { name: "Commandes", before: 0, after: 100 },
        { name: "Temps gagné", before: 20, after: 80 }
      ],
      challenge: "Funestore opérait uniquement en B2B traditionnel sans aucune présence digitale. Les professionnels du funéraire devaient passer leurs commandes par téléphone ou email, ce qui était chronophage et limitait la croissance de l'entreprise.",
      solution: "Nous avons conçu une plateforme e-commerce B2B complète avec un design professionnel adapté à ce secteur sensible, un catalogue structuré pour l'achat rapide, un espace client réservé aux professionnels avec tarifs dégressifs jusqu'à -30%, et un parcours utilisateur optimisé pour la commande en ligne.",
      metrics: [
        { label: "Digitalisation", value: "100%", description: "Passage complet au digital" },
        { label: "Catalogue", value: "24/7", description: "Accessible en permanence" },
        { label: "Réductions", value: "-30%", description: "Tarifs compétitifs pour pros" },
        { label: "Commandes", value: "En ligne", description: "Gain de temps opérationnel" }
      ],
      technologies: ["E-commerce", "UX Design", "Espace Pro", "Catalogue B2B"],
      timeline: [
        { phase: "Analyse", duration: "2 semaines", description: "Compréhension de l'écosystème funéraire et besoins B2B" },
        { phase: "Design", duration: "3 semaines", description: "Design professionnel adapté au secteur sensible" },
        { phase: "Développement", duration: "5 semaines", description: "Plateforme e-commerce avec espace pro" },
        { phase: "Lancement", duration: "1 semaine", description: "Mise en ligne et formation" }
      ],
      results: "Funestore a réussi sa digitalisation complète, offrant un catalogue accessible 24/7 aux professionnels du funéraire avec des tarifs compétitifs et un processus de commande simplifié.",
      testimonial: "Réactivité, compétence, flexibilité. J'ai adoré travailler avec ConvertiLab. Pendant nos rendez-vous, Billel a pris le temps de bien comprendre notre écosystème et de proposer un magnifique site dans un domaine assez feutré et confidentiel. Merci à toi Billel, et à bientôt pour la suite !",
      author: "Funestore",
      role: "Dirigeant"
    },
    "papapret": {
      icon: <BookOpen className="w-8 h-8" />,
      sector: "Formation / Infoproduit",
      client: "PapaPrêt",
      title: "Landing page haute conversion pour formation parentalité",
      subtitle: "Création d'une landing page avec tunnel de vente optimisé pour une formation destinée aux futurs papas",
      image: portfolioPapapretHero,
      gallery: [
        { src: galleryPapapretFullpage1, alt: "Page complète PapaPrêt - Partie 1", caption: "Accueil, promesse et statistiques : 15K+ papas formés, note 4.9/5" },
        { src: galleryPapapretFullpage2, alt: "Page complète PapaPrêt - Partie 2", caption: "Transformation avant/après et contenu des 6 modules de formation" },
        { src: galleryPapapretFullpage3, alt: "Page complète PapaPrêt - Partie 3", caption: "Programme détaillé des 7 heures de formation intensive" },
        { src: galleryPapapretFullpage4, alt: "Page complète PapaPrêt - Partie 4", caption: "Témoignages vérifiés, garanties et section réservation" },
        { src: galleryPapapretFullpage5, alt: "Page complète PapaPrêt - Partie 5", caption: "Tarif, calendrier de réservation et FAQ" }
      ],
      chartData: [
        { name: "Engagement", before: 15, after: 75 },
        { name: "Conversion", before: 2, after: 12 },
        { name: "Crédibilité", before: 30, after: 95 }
      ],
      challenge: "PapaPrêt proposait une formation unique pour les futurs papas mais manquait d'un support digital impactant pour convertir les visiteurs en inscrits. Le message n'était pas clair et le parcours utilisateur n'incitait pas à l'action.",
      solution: "Nous avons créé une landing page haute conversion avec une structure marketing éprouvée (problème → solution → transformation), un copywriting orienté vente, des sections persuasives avec preuves sociales (15K+ papas formés, note 4.9/5), et un design UX optimisé pour le passage à l'action.",
      metrics: [
        { label: "Papas formés", value: "15K+", description: "Communauté grandissante" },
        { label: "Satisfaction", value: "4.9/5", description: "Note moyenne des participants" },
        { label: "Livraison", value: "24h", description: "Projet livré en un temps record" },
        { label: "Prix", value: "150€", description: "Formation accessible et premium" }
      ],
      technologies: ["Landing Page", "Copywriting", "UX Conversion", "Responsive Design"],
      timeline: [
        { phase: "Stratégie", duration: "1 jour", description: "Compréhension du marché et positionnement" },
        { phase: "Copywriting", duration: "1 jour", description: "Rédaction persuasive et structuration du tunnel" },
        { phase: "Design & Dev", duration: "1 jour", description: "Création et intégration de la landing page" },
        { phase: "Optimisation", duration: "En continu", description: "Tests et optimisation des conversions" }
      ],
      results: "PapaPrêt dispose d'un tunnel de vente structuré et impactant qui positionne la formation de manière premium et crédible, avec une base solide pour l'acquisition via Meta Ads et TikTok.",
      testimonial: "Bilel est un pro qui comprend votre projet et vous permet d'avoir des solutions sur le net qui sont modernes et impactantes. Je le recommande à 100%. Il a réalisé mon projet en 24 heures, un résultat qui correspond à 100% à mes attentes. C'est un vrai partenaire très réactif qui va penser votre projet pour enclencher une compréhension immédiate et un passage à l'acte d'achat. Excellent rapport qualité-prix.",
      author: "Gilles",
      role: "Fondateur PapaPrêt"
    },
    "acb-renovation": {
      icon: <Home className="w-8 h-8" />,
      sector: "BTP / Rénovation",
      client: "ACB Rénovation",
      title: "Site vitrine BTP avec génération de devis",
      subtitle: "Création d'un site professionnel pour une entreprise de rénovation et construction dans le Grand Est",
      image: portfolioAcbHero,
      gallery: [
        { src: portfolioAcbHero, alt: "Page d'accueil ACB Rénovation", caption: "Page d'accueil professionnelle avec mise en avant des services BTP" },
        { src: portfolioAcbHero, alt: "Services ACB", caption: "Présentation structurée des services : charpente, couverture, zinguerie" },
        { src: portfolioAcbHero, alt: "Formulaire devis", caption: "Formulaire de demande de devis gratuit optimisé conversion" }
      ],
      chartData: [
        { name: "Visibilité", before: 10, after: 80 },
        { name: "Demandes devis", before: 5, after: 35 },
        { name: "Crédibilité", before: 25, after: 90 }
      ],
      challenge: "ACB Rénovation, entreprise spécialisée en couverture, charpente et rénovation avec plus de 12 ans d'expérience, n'avait aucune présence en ligne. Les clients potentiels ne pouvaient pas découvrir leurs services ni demander de devis facilement.",
      solution: "Nous avons créé un site vitrine professionnel avec un design adapté au secteur BTP, une structuration claire des services, des appels à l'action optimisés pour la génération de devis, et une mise en avant de la garantie décennale et de l'expérience de l'entreprise.",
      metrics: [
        { label: "Expérience", value: "12+ ans", description: "Mise en avant du savoir-faire" },
        { label: "Devis", value: "Gratuit", description: "Formulaire de contact optimisé" },
        { label: "Garantie", value: "Décennale", description: "Gage de confiance affiché" },
        { label: "Livraison", value: "1 jour", description: "Site créé en une journée" }
      ],
      technologies: ["Site Vitrine", "SEO Local", "UX Conversion", "Responsive Design"],
      timeline: [
        { phase: "Échange", duration: "1h", description: "Compréhension des besoins et du positionnement" },
        { phase: "Design", duration: "4h", description: "Création du design professionnel BTP" },
        { phase: "Développement", duration: "6h", description: "Intégration et optimisation" },
        { phase: "Livraison", duration: "1h", description: "Mise en ligne et formation" }
      ],
      results: "ACB Rénovation dispose d'une présence digitale professionnelle qui génère des demandes de devis qualifiées et renforce la crédibilité de l'entreprise auprès des clients du Grand Est.",
      testimonial: "Je viens de faire appel à ConvertiLab et c'est impressionnant la réactivité de cette entreprise et surtout la compréhension de mes besoins pour la création d'un site internet, qui a été fait dans la journée. Je vais donc lui faire confiance pour mon marketing digital et déjà 2 de mes collègues vont travailler avec lui.",
      author: "ACB Rénovation",
      role: "Dirigeant"
    },
    "eleva-conciergerie": {
      icon: <Home className="w-8 h-8" />,
      sector: "Conciergerie / Immobilier",
      client: "Eleva Conciergerie",
      title: "Site premium pour conciergerie locative haut de gamme",
      subtitle: "Création d'un site luxueux pour une conciergerie de location courte durée avec tunnel de conversion",
      image: portfolioElevaHero,
      gallery: [
        { src: portfolioElevaHero, alt: "Page d'accueil Eleva Conciergerie", caption: "Design premium avec estimation de revenus gratuite" },
        { src: portfolioElevaHero, alt: "Services Eleva", caption: "Présentation des services de gestion locative haut de gamme" },
        { src: portfolioElevaHero, alt: "Témoignages", caption: "Preuves sociales et résultats propriétaires" }
      ],
      chartData: [
        { name: "Crédibilité", before: 20, after: 95 },
        { name: "Leads", before: 5, after: 40 },
        { name: "Conversion", before: 2, after: 15 }
      ],
      challenge: "Eleva Conciergerie avait besoin d'un site à la hauteur de son positionnement premium pour convaincre les propriétaires de lui confier la gestion de leurs biens en location courte durée. Le marché étant très concurrentiel, il fallait se démarquer visuellement et inspirer confiance.",
      solution: "Nous avons créé un site au design luxueux avec un tunnel de conversion optimisé : estimation gratuite des revenus, preuves sociales (+50 propriétaires accompagnés, 4.9/5), copywriting persuasif et CTAs stratégiques. Le tout avec une expérience mobile impeccable.",
      metrics: [
        { label: "Propriétaires", value: "+50", description: "Accompagnés avec succès" },
        { label: "Satisfaction", value: "4.9/5", description: "Sur +50 avis clients" },
        { label: "Réponse", value: "24h", description: "Délai de réponse garanti" },
        { label: "Engagement", value: "0", description: "Sans engagement" }
      ],
      technologies: ["Site Vitrine Premium", "UX Conversion", "Copywriting", "Responsive Design"],
      timeline: [
        { phase: "Stratégie", duration: "1 semaine", description: "Analyse du marché et positionnement luxe" },
        { phase: "Design", duration: "2 semaines", description: "Création du design premium et branding" },
        { phase: "Développement", duration: "3 semaines", description: "Intégration et tunnel de conversion" },
        { phase: "Lancement", duration: "1 semaine", description: "Tests et mise en ligne" }
      ],
      results: "Eleva Conciergerie dispose d'un site premium qui reflète parfaitement son positionnement haut de gamme et génère des leads qualifiés de propriétaires souhaitant déléguer la gestion de leurs biens.",
      testimonial: "Le site est incroyable, très professionnel et surtout pensé pour vendre. Le rendu est premium et on sent que tout a été optimisé pour convertir.",
      author: "Eleva Conciergerie",
      role: "Fondateur"
    },
    "adsb-wissembourg": {
      icon: <Users className="w-8 h-8" />,
      sector: "Association",
      client: "ADSB Wissembourg",
      title: "Site vitrine pour association de donneurs de sang bénévoles",
      subtitle: "Création d'un site engageant pour promouvoir le don de sang et organiser les collectes",
      image: portfolioAdsbHero,
      gallery: [
        { src: portfolioAdsbHero, alt: "Page d'accueil ADSB", caption: "Page d'accueil avec message impactant et appel au don" },
        { src: portfolioAdsbHero, alt: "Collectes ADSB", caption: "Agenda des collectes de sang à venir" },
        { src: portfolioAdsbHero, alt: "Contact ADSB", caption: "Formulaire pour devenir donneur bénévole" }
      ],
      chartData: [
        { name: "Visibilité", before: 10, after: 75 },
        { name: "Engagement", before: 15, after: 60 },
        { name: "Inscriptions", before: 5, after: 30 }
      ],
      challenge: "L'Association des Donneurs de Sang Bénévoles de Wissembourg manquait de visibilité en ligne pour recruter de nouveaux donneurs et communiquer sur les collectes à venir. Sans site web, la communication se limitait au bouche-à-oreille.",
      solution: "Nous avons créé un site engageant avec un message fort ('Chaque don sauve des vies'), un agenda des collectes, un formulaire d'inscription simplifié et des appels à l'action clairs pour encourager le don de sang.",
      metrics: [
        { label: "Mission", value: "Sauver des vies", description: "Message clair et impactant" },
        { label: "Collectes", value: "Agenda en ligne", description: "Calendrier des prochaines collectes" },
        { label: "Inscription", value: "En ligne", description: "Formulaire simplifié pour donneurs" },
        { label: "Mobile", value: "100%", description: "Responsive et accessible" }
      ],
      technologies: ["Site Vitrine", "UX Design", "Engagement", "Responsive"],
      timeline: [
        { phase: "Échange", duration: "1 jour", description: "Compréhension de la mission et des besoins" },
        { phase: "Design", duration: "3 jours", description: "Design engageant et émotionnel" },
        { phase: "Développement", duration: "5 jours", description: "Intégration et optimisation" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne" }
      ],
      results: "L'ADSB Wissembourg dispose désormais d'un site moderne et engageant qui facilite le recrutement de donneurs et la communication sur les collectes de sang.",
      testimonial: "Un travail très professionnel sur un projet technique complexe. Le site est clair, moderne et permet de présenter efficacement notre solution à nos clients.",
      author: "ADSB Wissembourg",
      role: "Président"
    },
    "alliance-securite-incendie": {
      icon: <Briefcase className="w-8 h-8" />,
      sector: "Sécurité Incendie",
      client: "Alliance Sécurité Incendie",
      title: "Site vitrine B2B pour spécialiste sécurité incendie",
      subtitle: "Création d'un site professionnel pour une entreprise de sécurité incendie en Île-de-France",
      image: portfolioAsiHero,
      gallery: [
        { src: portfolioAsiHero, alt: "Page d'accueil ASI", caption: "Page d'accueil avec mise en avant de l'expertise et CTAs conversion" },
        { src: portfolioAsiHero, alt: "Services ASI", caption: "Présentation structurée des services : inspection, conformité, ingénierie" },
        { src: portfolioAsiHero, alt: "Contact ASI", caption: "Formulaire d'audit gratuit et contact direct" }
      ],
      chartData: [
        { name: "Crédibilité", before: 20, after: 90 },
        { name: "Leads", before: 5, after: 40 },
        { name: "Visibilité", before: 15, after: 75 }
      ],
      challenge: "Alliance Sécurité Incendie, spécialiste de la sécurité incendie pour copropriétés en Île-de-France, avait besoin d'un site professionnel pour présenter son expertise technique et générer des demandes d'audit auprès des syndics et copropriétés.",
      solution: "Nous avons créé un site vitrine B2B avec un design professionnel, une structuration claire des services (inspection, conformité, ingénierie), des CTAs optimisés (audit gratuit, appel direct), et une mise en avant des chiffres clés : 150+ copropriétés accompagnées, 98% de conformité, intervention en 24h.",
      metrics: [
        { label: "Copropriétés", value: "150+", description: "Accompagnées avec succès" },
        { label: "Conformité", value: "98%", description: "Taux de conformité atteint" },
        { label: "Intervention", value: "24h", description: "Délai d'intervention garanti" },
        { label: "Devis", value: "Gratuit", description: "Audit sans engagement" }
      ],
      technologies: ["Site Vitrine", "UX B2B", "SEO Local", "Génération Leads"],
      timeline: [
        { phase: "Analyse", duration: "1 semaine", description: "Compréhension du secteur et des normes" },
        { phase: "Design", duration: "2 semaines", description: "Design professionnel secteur sécurité" },
        { phase: "Développement", duration: "3 semaines", description: "Intégration et optimisation conversion" },
        { phase: "Lancement", duration: "1 semaine", description: "Mise en ligne et formation" }
      ],
      results: "Alliance Sécurité Incendie dispose d'un site professionnel qui génère des demandes d'audit qualifiées et positionne l'entreprise comme référence en sécurité incendie pour copropriétés en Île-de-France.",
      testimonial: "Un site très professionnel qui reflète parfaitement notre expertise. Le rendu est clair, structuré et nous aide à présenter efficacement nos services auprès de nos clients.",
      author: "Alliance Sécurité Incendie",
      role: "Dirigeant"
    },
    "trievent": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "Recyclage / Événementiel",
      client: "Tri Event",
      title: "Site vitrine éco-responsable pour recyclage événementiel",
      subtitle: "Création d'un site engagé pour une entreprise spécialisée dans le tri et recyclage des déchets événementiels",
      image: portfolioTrieventHero,
      gallery: [
        { src: portfolioTrieventHero, alt: "Page d'accueil Tri Event", caption: "Page d'accueil avec message écologique fort et CTAs" },
        { src: portfolioTrieventHero, alt: "Services Tri Event", caption: "Présentation des services de collecte et recyclage" },
        { src: portfolioTrieventHero, alt: "Contact Tri Event", caption: "Formulaire de devis et contact WhatsApp" }
      ],
      chartData: [
        { name: "Visibilité", before: 10, after: 70 },
        { name: "Crédibilité", before: 20, after: 85 },
        { name: "Demandes", before: 5, after: 30 }
      ],
      challenge: "Tri Event, spécialiste de la collecte et du recyclage de déchets, avait besoin d'un site reflétant son engagement écologique et clarifiant son offre pour les professionnels et particuliers.",
      solution: "Nous avons créé un site vitrine au design moderne et éco-responsable avec une mise en avant forte de la mission environnementale, une structuration claire des services (collecte, tri, recyclage), des CTAs pour devis gratuit et contact WhatsApp, le tout en version responsive.",
      metrics: [
        { label: "Mission", value: "Écologique", description: "Positionnement engagé" },
        { label: "Services", value: "Complets", description: "Collecte, tri, recyclage" },
        { label: "Devis", value: "Gratuit", description: "Contact simplifié" },
        { label: "Mobile", value: "100%", description: "Responsive optimisé" }
      ],
      technologies: ["Site Vitrine", "Design Éco", "UX", "Responsive Design"],
      timeline: [
        { phase: "Échange", duration: "1 jour", description: "Compréhension de la mission et des services" },
        { phase: "Design", duration: "3 jours", description: "Design moderne avec identité écologique" },
        { phase: "Développement", duration: "5 jours", description: "Intégration et optimisation" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne" }
      ],
      results: "Tri Event dispose d'un site professionnel qui reflète son engagement écologique et facilite la compréhension de ses services auprès des organisateurs d'événements.",
      testimonial: "Très satisfait du site réalisé, il reflète parfaitement notre engagement écologique et notre activité. Le rendu est professionnel et clair pour nos clients.",
      author: "Tri Event",
      role: "Fondateur"
    },
    "temple-zen": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "Bien-être / Massage",
      client: "Le Temple de l'Énergie",
      title: "Site vitrine immersif pour espace bien-être et massage",
      subtitle: "Création d'un site apaisant et premium pour un espace dédié au bien-être, massage et coaching",
      image: portfolioTemplezenHero,
      gallery: [
        { src: portfolioTemplezenHero, alt: "Page d'accueil Le Temple de l'Énergie", caption: "Design immersif avec ambiance zen et apaisante" },
        { src: portfolioTemplezenHero, alt: "Prestations", caption: "Présentation des massages, soins et séances de coaching" },
        { src: portfolioTemplezenHero, alt: "Réservation", caption: "Système de réservation en ligne simplifié" }
      ],
      chartData: [
        { name: "Image de marque", before: 25, after: 95 },
        { name: "Compréhension", before: 30, after: 90 },
        { name: "Réservations", before: 10, after: 50 }
      ],
      challenge: "Le Temple de l'Énergie avait besoin d'un site qui transmette l'univers zen et apaisant de son espace bien-être, tout en présentant clairement ses prestations et en facilitant la prise de rendez-vous dans un secteur très concurrentiel.",
      solution: "Nous avons créé un site au design immersif et apaisant avec une esthétique premium, une structuration claire des prestations (massages, soins, coaching), des CTAs optimisés pour la réservation en ligne et une expérience mobile impeccable.",
      metrics: [
        { label: "Ambiance", value: "Premium", description: "Design zen et élégant" },
        { label: "Prestations", value: "Structurées", description: "Compréhension immédiate" },
        { label: "Réservation", value: "En ligne", description: "Prise de RDV simplifiée" },
        { label: "Mobile", value: "100%", description: "Responsive optimisé" }
      ],
      technologies: ["Site Vitrine", "Design Zen", "UX Premium", "Responsive Design"],
      timeline: [
        { phase: "Immersion", duration: "1 jour", description: "Découverte de l'univers et du positionnement" },
        { phase: "Design", duration: "3 jours", description: "Création du design immersif et apaisant" },
        { phase: "Développement", duration: "5 jours", description: "Intégration et fonctionnalités" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne et ajustements" }
      ],
      results: "Le Temple de l'Énergie dispose d'un site qui reflète parfaitement son univers zen et premium, renforçant sa crédibilité et facilitant la prise de rendez-vous.",
      testimonial: "Le site reflète parfaitement l'univers que je voulais transmettre. C'est élégant, apaisant et très professionnel. Mes clients comprennent immédiatement mon offre.",
      author: "Le Temple de l'Énergie",
      role: "Fondatrice"
    },
    "institut-nomad": {
      icon: <BookOpen className="w-8 h-8" />,
      sector: "Éducation / Pédagogie alternative",
      client: "Institut Nomad",
      title: "Site vitrine pour accompagnement éducatif alternatif",
      subtitle: "Création d'un site institutionnel moderne pour un centre d'accompagnement des jeunes en difficulté scolaire",
      image: portfolioInstitutNomadHero,
      gallery: [
        { src: portfolioInstitutNomadHero, alt: "Page d'accueil Institut Nomad", caption: "Design moderne et institutionnel avec mise en avant de la mission éducative" },
        { src: portfolioInstitutNomadHero, alt: "Accompagnements", caption: "Présentation des pôles éducatifs et programmes d'accompagnement" },
        { src: portfolioInstitutNomadHero, alt: "Contact", caption: "Formulaire de contact optimisé pour parents et élèves" }
      ],
      chartData: [
        { name: "Crédibilité", before: 30, after: 90 },
        { name: "Compréhension", before: 25, after: 85 },
        { name: "Contacts", before: 10, after: 45 }
      ],
      challenge: "Institut Nomad proposait une offre éducative alternative riche mais difficile à comprendre en ligne. L'ancien site manquait de professionnalisme et ne reflétait pas la qualité de l'accompagnement proposé aux jeunes en difficulté.",
      solution: "Nous avons créé un site institutionnel moderne avec une structuration claire des pôles éducatifs, une mise en avant de la pédagogie alternative, des CTAs optimisés pour la prise de contact (parents/élèves) et un back-office permettant une grande autonomie dans la gestion des contenus.",
      metrics: [
        { label: "Pôles éducatifs", value: "3", description: "Accompagnement structuré" },
        { label: "Satisfaction", value: "95%", description: "Parents et jeunes satisfaits" },
        { label: "Intervenants", value: "10+", description: "Experts mobilisés" },
        { label: "Autonomie", value: "100%", description: "Gestion admin autonome" }
      ],
      technologies: ["Site Vitrine", "Design Institutionnel", "UX Contact", "Back-office Admin"],
      timeline: [
        { phase: "Découverte", duration: "1 jour", description: "Compréhension de la mission éducative et des besoins" },
        { phase: "Structuration", duration: "2 jours", description: "Organisation des contenus et pôles éducatifs" },
        { phase: "Design & Dev", duration: "5 jours", description: "Création du site avec back-office admin" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne et formation" }
      ],
      results: "Institut Nomad dispose d'un site professionnel qui clarifie son offre éducative unique, renforce sa crédibilité auprès des parents et permet une gestion autonome des contenus.",
      testimonial: "Convertilab a compris rapidement ce que je souhaitais mettre en avant sur mon site. Il a rendu mon ancien site plus professionnel. La page admin me permet une grande autonomie dans la gestion des contenus du site.",
      author: "Institut Nomad",
      role: "Fondateur"
    },
    "ah-studio": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "Photographie / Branding",
      client: "AH Studio Caen",
      title: "Site vitrine portfolio pour photographe professionnel",
      subtitle: "Création d'un site visuel premium pour un photographe spécialisé en portraits et corporate à Caen",
      image: portfolioAhstudioHero,
      gallery: [
        { src: portfolioAhstudioHero, alt: "Page d'accueil AH Studio", caption: "Design cinématique avec mise en avant des portraits" },
        { src: portfolioAhstudioHero, alt: "Portfolio", caption: "Galerie photo immersive avec navigation fluide" },
        { src: portfolioAhstudioHero, alt: "Prestations", caption: "Structuration des offres shooting et corporate" }
      ],
      chartData: [
        { name: "Image pro", before: 30, after: 95 },
        { name: "Compréhension", before: 25, after: 90 },
        { name: "Réservations", before: 10, after: 55 }
      ],
      challenge: "AH Studio avait testé plusieurs plateformes de création de site sans résultat satisfaisant. Le photographe avait besoin d'un site à la hauteur de la qualité de son travail, avec un portfolio percutant et une présentation claire de ses prestations.",
      solution: "Nous avons conçu un site vitrine visuel et premium avec un design cinématique, un portfolio photo immersif, une structuration claire des offres (portrait, corporate, book) et un parcours client fluide de la préparation au shooting jusqu'à la livraison HD.",
      metrics: [
        { label: "Portfolio", value: "Premium", description: "Galerie photo immersive" },
        { label: "Prestations", value: "Structurées", description: "Shooting, book, corporate" },
        { label: "Réservation", value: "En ligne", description: "Prise de RDV simplifiée" },
        { label: "Mobile", value: "100%", description: "Expérience fluide" }
      ],
      technologies: ["Site Vitrine", "Design Visuel", "UX Portfolio", "Responsive Design"],
      timeline: [
        { phase: "Découverte", duration: "1 jour", description: "Compréhension de l'univers photographique" },
        { phase: "Design", duration: "3 jours", description: "Création du design visuel premium" },
        { phase: "Développement", duration: "5 jours", description: "Intégration portfolio et fonctionnalités" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne et ajustements" }
      ],
      results: "AH Studio dispose d'un site à la hauteur de son talent, renforçant son image professionnelle et facilitant la réservation de shootings pour particuliers et entreprises.",
      testimonial: "Après avoir essayé plusieurs plateformes de création de site web, j'ai découvert Convertilab. De l'idée à la finition, Bilel nous accompagne tout le long de ce processus. Il a su me conseiller certaines options dont j'ignorais les possibilités. Disponible et accessible en cas de besoin. Je vous recommande Convertilab pour sa proximité avec le client. Mon expérience client est plus que parfaite. Gagnez du temps, optez pour Convertilab.",
      author: "AH Studio Caen",
      role: "Photographe"
    },
    "vinoboat": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "Tourisme de Luxe / Nautique",
      client: "Vinoboat Prestige",
      title: "Landing page premium pour expérience nautique de luxe",
      subtitle: "Création d'une landing page immersive et haut de gamme pour une expérience nautique exclusive à Cannes",
      image: portfolioVinoboatHero,
      gallery: [
        { src: portfolioVinoboatHero, alt: "Page d'accueil Vinoboat Prestige", caption: "Design premium avec immersion visuelle nautique" },
        { src: portfolioVinoboatHero, alt: "Tarifs", caption: "Grille tarifaire claire et élégante" },
        { src: portfolioVinoboatHero, alt: "Réservation", caption: "CTAs optimisés pour la réservation directe" }
      ],
      chartData: [
        { name: "Image premium", before: 30, after: 95 },
        { name: "Projection client", before: 20, after: 90 },
        { name: "Réservations", before: 15, after: 65 }
      ],
      challenge: "Vinoboat Prestige proposait une expérience nautique haut de gamme mais manquait d'un support digital à la hauteur de son positionnement. L'offre n'était pas clairement présentée et le potentiel de réservation en ligne était sous-exploité.",
      solution: "Nous avons créé une landing page immersive avec un design premium, un copywriting émotionnel orienté expérience (sensation, exclusivité), une grille tarifaire claire, des CTAs de réservation optimisés et des preuves sociales (avis, note 4.9/5, 500+ clients).",
      metrics: [
        { label: "Note clients", value: "4.9/5", description: "500+ clients satisfaits" },
        { label: "Réservation", value: "En ligne", description: "WhatsApp + téléphone" },
        { label: "Positionnement", value: "N°1", description: "Cannes sans permis" },
        { label: "Immersion", value: "Premium", description: "Design luxe immersif" }
      ],
      technologies: ["Landing Page", "Design Premium", "Copywriting", "UX Booking"],
      timeline: [
        { phase: "Briefing", duration: "1 jour", description: "Immersion dans l'univers nautique luxe" },
        { phase: "Design", duration: "3 jours", description: "Création du design premium immersif" },
        { phase: "Développement", duration: "4 jours", description: "Intégration et optimisation conversion" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne et tests" }
      ],
      results: "Vinoboat Prestige dispose d'un site à l'image de son service : élégant, premium et immersif, permettant aux clients de se projeter immédiatement dans l'expérience nautique.",
      testimonial: "Le site est exactement à l'image de notre service : élégant, premium et immersif. Il permet à nos clients de se projeter immédiatement dans l'expérience.",
      author: "Vinoboat Prestige",
      role: "Fondateur"
    },
    "couleur-sable": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "Coiffure / Beauté",
      client: "Couleur Sable by K",
      title: "Site vitrine premium pour salon de coiffure & Head Spa",
      subtitle: "Création d'un site élégant pour un salon de coiffure spécialisé avec 35 ans d'expérience à Haguenau",
      image: portfolioCouleursableHero,
      gallery: [
        { src: portfolioCouleursableHero, alt: "Page d'accueil Couleur Sable", caption: "Design élégant mettant en valeur le savoir-faire capillaire" },
        { src: portfolioCouleursableHero, alt: "Prestations", caption: "Structuration des services : coupe, coloration, Head Spa" },
        { src: portfolioCouleursableHero, alt: "Réservation", caption: "Prise de rendez-vous en ligne optimisée" }
      ],
      chartData: [
        { name: "Image pro", before: 35, after: 95 },
        { name: "Compréhension", before: 30, after: 90 },
        { name: "Réservations", before: 20, after: 60 }
      ],
      challenge: "Le salon Couleur Sable by K disposait de 35 ans d'expérience et d'un savoir-faire reconnu, mais n'avait pas de présence digitale à la hauteur de son expertise. Les prestations n'étaient pas clairement présentées en ligne et le potentiel de réservation était sous-exploité.",
      solution: "Nous avons créé un site vitrine élégant et féminin avec une mise en valeur du savoir-faire (colorations naturelles, Head Spa japonais), une structuration claire des prestations, des CTAs de réservation optimisés et une identité visuelle premium reflétant l'univers du salon.",
      metrics: [
        { label: "Expérience", value: "35+ ans", description: "Savoir-faire reconnu" },
        { label: "Études", value: "6 ans", description: "Formation spécialisée" },
        { label: "Produits", value: "100%", description: "Naturels et sans ammoniaque" },
        { label: "Réservation", value: "En ligne", description: "Prise de RDV simplifiée" }
      ],
      technologies: ["Site Vitrine", "Design Beauté", "UX Premium", "Responsive Design"],
      timeline: [
        { phase: "Découverte", duration: "1 jour", description: "Immersion dans l'univers du salon" },
        { phase: "Design", duration: "3 jours", description: "Création du design élégant et féminin" },
        { phase: "Développement", duration: "5 jours", description: "Intégration et fonctionnalités" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne et ajustements" }
      ],
      results: "Couleur Sable by K dispose d'un site à l'image de son salon : élégant, professionnel et mettant en valeur son savoir-faire unique en coiffure et Head Spa.",
      testimonial: "Le site reflète parfaitement l'image de mon salon. Il est élégant, clair et met vraiment en valeur mon travail. Mes clientes adorent.",
      author: "Couleur Sable by K",
      role: "Fondatrice"
    },
    "filmreel-gallery": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "Production Vidéo / Agence Créative",
      client: "FilmReel Gallery",
      title: "Site portfolio cinématographique pour agence créative",
      subtitle: "Création d'un site immersif avec design cinématographique et showreel pour une agence de production vidéo",
      image: portfolioFilmreelHero,
      gallery: [
        { src: portfolioFilmreelHero, alt: "Page d'accueil FilmReel Gallery", caption: "Design cinématographique dark avec typographie impactante" },
        { src: portfolioFilmreelHero, alt: "Showreel", caption: "Mise en avant des productions vidéo en plein écran" },
        { src: portfolioFilmreelHero, alt: "Portfolio", caption: "Galerie de projets créatifs avec navigation immersive" }
      ],
      chartData: [
        { name: "Impact visuel", before: 20, after: 95 },
        { name: "Crédibilité", before: 30, after: 90 },
        { name: "Demandes", before: 10, after: 55 }
      ],
      challenge: "FilmReel Gallery avait besoin d'un site à la hauteur de son travail créatif. Les plateformes classiques ne permettaient pas de créer l'effet immersif et cinématographique nécessaire pour impressionner les clients potentiels du secteur audiovisuel.",
      solution: "Nous avons conçu un site portfolio avec une esthétique cinématographique (dark mode, typographie massive, animations fluides), un showreel vidéo en plein écran, une galerie de projets immersive et un storytelling visuel qui capte immédiatement l'attention.",
      metrics: [
        { label: "Impact", value: "Wow", description: "Effet visuel immédiat" },
        { label: "Portfolio", value: "Premium", description: "Galerie immersive" },
        { label: "Booking", value: "En ligne", description: "Prise de contact optimisée" },
        { label: "Mobile", value: "100%", description: "Expérience responsive" }
      ],
      technologies: ["Site Portfolio", "Design Cinématographique", "Motion Design", "Responsive"],
      timeline: [
        { phase: "Direction artistique", duration: "2 jours", description: "Définition de l'univers visuel cinématographique" },
        { phase: "Design", duration: "3 jours", description: "Création du design dark immersif" },
        { phase: "Développement", duration: "5 jours", description: "Intégration animations et vidéos" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne et optimisations" }
      ],
      results: "FilmReel Gallery dispose d'un site qui impressionne dès la première seconde, positionne l'agence comme un acteur premium et génère des demandes de clients haut de gamme.",
      testimonial: "Le site met parfaitement en valeur mon univers créatif. L'effet visuel est incroyable et mes clients comprennent immédiatement la qualité de mon travail.",
      author: "FilmReel Gallery",
      role: "Directeur Créatif"
    },
    "art-des-roses": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "E-commerce / Art",
      client: "Art des Roses",
      title: "E-commerce artistique pour vente d'œuvres",
      subtitle: "Création d'un site e-commerce élégant pour une artiste peintre diplômée des Beaux-Arts",
      image: portfolioArtdesrosesHero,
      gallery: [
        { src: portfolioArtdesrosesHero, alt: "Page d'accueil Art des Roses", caption: "Design artistique avec mise en valeur des œuvres" },
        { src: portfolioArtdesrosesHero, alt: "Boutique", caption: "Catalogue d'œuvres avec parcours d'achat fluide" },
        { src: portfolioArtdesrosesHero, alt: "Collections", caption: "Organisation par collections et styles artistiques" }
      ],
      chartData: [
        { name: "Visibilité", before: 20, after: 85 },
        { name: "Ventes en ligne", before: 0, after: 60 },
        { name: "Crédibilité", before: 40, after: 95 }
      ],
      challenge: "L'artiste vendait ses œuvres uniquement via des expositions physiques et n'avait aucune présence digitale pour toucher un public plus large. Il manquait une galerie en ligne permettant de présenter et vendre ses créations.",
      solution: "Nous avons créé un site e-commerce avec un design artistique et immersif, un catalogue structuré par collections, un parcours d'achat fluide et une mise en valeur premium des œuvres avec une esthétique raffinée fidèle à l'univers de l'artiste.",
      metrics: [
        { label: "Galerie", value: "24/7", description: "Accessible en permanence" },
        { label: "Œuvres", value: "En ligne", description: "Catalogue complet" },
        { label: "Ventes", value: "Direct", description: "Achat en ligne sécurisé" },
        { label: "Exposition", value: "Mondiale", description: "Paris, NY, Monaco, Kyoto" }
      ],
      technologies: ["E-commerce", "Design Artistique", "UX Premium", "Responsive"],
      timeline: [
        { phase: "Immersion", duration: "1 jour", description: "Découverte de l'univers artistique" },
        { phase: "Design", duration: "3 jours", description: "Création du design élégant et raffiné" },
        { phase: "Développement", duration: "5 jours", description: "Intégration e-commerce et catalogue" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne et ajustements" }
      ],
      results: "Art des Roses dispose d'une galerie en ligne élégante qui met en valeur les œuvres et permet de les vendre directement, ouvrant un nouveau canal de revenus pour l'artiste.",
      testimonial: "Le site met parfaitement en valeur mes œuvres et me permet enfin de les vendre en ligne. Le rendu est élégant et très professionnel.",
      author: "Art des Roses",
      role: "Artiste Peintre"
    },
    "segermes": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "E-commerce / Alimentaire Premium",
      client: "Segermès",
      title: "E-commerce premium pour huile d'olive haut de gamme",
      subtitle: "Création d'un site e-commerce luxe pour une marque d'huile d'olive bio familiale depuis 1950",
      image: portfolioSegermesHero,
      gallery: [
        { src: portfolioSegermesHero, alt: "Page d'accueil Segermès", caption: "Design premium avec storytelling méditerranéen" },
        { src: portfolioSegermesHero, alt: "Produits", caption: "Catalogue d'huiles d'olive premium avec fiches détaillées" },
        { src: portfolioSegermesHero, alt: "Histoire", caption: "Storytelling de marque : tradition, terroir et savoir-faire" }
      ],
      chartData: [
        { name: "Image premium", before: 25, after: 95 },
        { name: "Ventes en ligne", before: 0, after: 70 },
        { name: "Crédibilité", before: 35, after: 90 }
      ],
      challenge: "Segermès produisait une huile d'olive bio d'exception depuis 1950 mais n'avait aucune présence digitale à la hauteur de la qualité de ses produits. La marque avait besoin d'un site qui reflète son positionnement premium et permette la vente en ligne.",
      solution: "Nous avons conçu un site e-commerce premium avec un design luxe, un storytelling de marque puissant (origine, tradition familiale, terroir tunisien), un catalogue produits élégant avec parcours d'achat fluide et des éléments de réassurance (bio, qualité, provenance).",
      metrics: [
        { label: "Héritage", value: "1950", description: "Domaine familial depuis 1950" },
        { label: "Qualité", value: "Bio", description: "Certification biologique" },
        { label: "Ventes", value: "En ligne", description: "E-commerce opérationnel" },
        { label: "Production", value: "A à Z", description: "Maîtrise complète" }
      ],
      technologies: ["E-commerce", "Design Premium", "Storytelling", "Responsive"],
      timeline: [
        { phase: "Immersion", duration: "1 jour", description: "Découverte du domaine et de l'histoire familiale" },
        { phase: "Design", duration: "3 jours", description: "Création du design luxe méditerranéen" },
        { phase: "Développement", duration: "5 jours", description: "Intégration e-commerce et catalogue" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne et optimisations" }
      ],
      results: "Segermès dispose d'un site à l'image de la qualité de ses produits : premium, élégant et racontant l'histoire d'un savoir-faire familial depuis 1950.",
      testimonial: "Le site reflète parfaitement la qualité et le positionnement premium de notre marque. Il met en valeur nos produits et notre histoire avec élégance.",
      author: "Segermès",
      role: "Fondateur"
    },
    "spectacle": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "Événementiel / Spectacle",
      client: "Spectacle",
      title: "Landing page événementielle pour spectacle vivant",
      subtitle: "Création d'une landing page immersive et dynamique pour la promotion d'un spectacle et la billetterie en ligne",
      image: portfolioSpectacleHero,
      gallery: [
        { src: portfolioSpectacleHero, alt: "Page d'accueil Spectacle", caption: "Design dynamique avec ambiance scénique immersive" },
        { src: portfolioSpectacleHero, alt: "Programme", caption: "Présentation du spectacle et des dates" },
        { src: portfolioSpectacleHero, alt: "Réservation", caption: "Système de réservation et billetterie en ligne" }
      ],
      chartData: [
        { name: "Visibilité", before: 20, after: 85 },
        { name: "Réservations", before: 15, after: 70 },
        { name: "Engagement", before: 25, after: 90 }
      ],
      challenge: "Le spectacle avait besoin d'un support digital pour centraliser les informations (dates, lieu, concept), promouvoir l'événement et faciliter la réservation en ligne auprès d'un public large.",
      solution: "Nous avons créé une landing page événementielle avec un design dynamique et immersif, une mise en avant du programme et des dates, des visuels attractifs créant l'envie, et des CTAs optimisés pour la réservation et la billetterie en ligne.",
      metrics: [
        { label: "Impact", value: "Immersif", description: "Effet wow immédiat" },
        { label: "Réservation", value: "En ligne", description: "Billetterie intégrée" },
        { label: "Promotion", value: "Digital", description: "Support marketing complet" },
        { label: "Mobile", value: "100%", description: "Responsive optimisé" }
      ],
      technologies: ["Landing Page", "Design Événementiel", "UX Conversion", "Responsive"],
      timeline: [
        { phase: "Briefing", duration: "1 jour", description: "Compréhension de l'univers du spectacle" },
        { phase: "Design", duration: "2 jours", description: "Création du design dynamique et immersif" },
        { phase: "Développement", duration: "4 jours", description: "Intégration et billetterie" },
        { phase: "Lancement", duration: "1 jour", description: "Mise en ligne et promotion" }
      ],
      results: "Le spectacle dispose d'un support digital à la hauteur de l'événement, centralisant les informations et facilitant la réservation pour un public toujours plus large.",
      testimonial: "Le site met parfaitement en valeur notre spectacle. Il est dynamique, clair et donne immédiatement envie de découvrir l'événement.",
      author: "Spectacle",
      role: "Organisateur"
    },
  };

  const caseStudy = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  // Order of projects for navigation
  const projectOrder = [
    "monsieur-arancini",
    "funestore",
    "papapret",
    "acb-renovation",
    "eleva-conciergerie",
    "adsb-wissembourg",
    "alliance-securite-incendie",
    "trievent",
    "temple-zen",
    "institut-nomad",
    "ah-studio",
    "vinoboat",
    "couleur-sable",
    "filmreel-gallery",
    "art-des-roses",
    "segermes",
    "spectacle"
  ];

  // Get navigation projects
  const getNavigationProjects = () => {
    if (!slug) return { previous: undefined, next: undefined };
    
    const currentIndex = projectOrder.indexOf(slug);
    if (currentIndex === -1) return { previous: undefined, next: undefined };

    const previousIndex = currentIndex === 0 ? projectOrder.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === projectOrder.length - 1 ? 0 : currentIndex + 1;

    const previousSlug = projectOrder[previousIndex];
    const nextSlug = projectOrder[nextIndex];

    const previousCase = caseStudies[previousSlug as keyof typeof caseStudies];
    const nextCase = caseStudies[nextSlug as keyof typeof caseStudies];

    return {
      previous: previousCase ? {
        slug: previousSlug,
        title: previousCase.title,
        client: previousCase.client,
        image: previousCase.image,
        sector: previousCase.sector
      } : undefined,
      next: nextCase ? {
        slug: nextSlug,
        title: nextCase.title,
        client: nextCase.client,
        image: nextCase.image,
        sector: nextCase.sector
      } : undefined
    };
  };

  const { previous, next } = getNavigationProjects();

  if (!caseStudy) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        url={`/case-study/${slug}`}
        title={`${caseStudy.client} - ${caseStudy.title}`}
        description={caseStudy.subtitle}
        image={typeof caseStudy.image === 'string' ? caseStudy.image : undefined}
        type="article"
        keywords={`étude de cas, ${caseStudy.sector}, ${caseStudy.client}, marketing digital, agence marketing, ${caseStudy.technologies.join(', ')}`}
      />
      <CaseStudySchema 
        caseStudy={{
          title: `${caseStudy.client} - ${caseStudy.title}`,
          description: caseStudy.subtitle,
          image: typeof caseStudy.image === 'string' ? caseStudy.image : 'https://convertilab.com/favicon.png'
        }}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Accueil', url: 'https://convertilab.com/' },
          { name: 'Portfolio', url: 'https://convertilab.com/portfolio' },
          { name: caseStudy.client, url: `https://convertilab.com/case-study/${slug}` }
        ]}
      />
      
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/portfolio">Portfolio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{caseStudy.client}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <Button
          variant="ghost"
          onClick={() => navigate("/portfolio")}
          className="-ml-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au portfolio
        </Button>
      </div>

      <CaseStudyHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        image={caseStudy.image}
        sector={caseStudy.sector}
        client={caseStudy.client}
        icon={caseStudy.icon}
      />

      <CaseStudyTestimonial
        testimonial={caseStudy.testimonial}
        author={caseStudy.author}
        role={caseStudy.role}
        client={caseStudy.client}
      />

      <CaseStudyOverview
        challenge={caseStudy.challenge}
        solution={caseStudy.solution}
        technologies={caseStudy.technologies}
      />

      <CaseStudyChallenge challenge={caseStudy.challenge} />

      <CaseStudySolution solution={caseStudy.solution} />

      <CaseStudyGallery images={caseStudy.gallery} />

      <CaseStudyCharts title={caseStudy.title} data={caseStudy.chartData} />

      <CaseStudyMetrics metrics={caseStudy.metrics} />

      <CaseStudyTimeline timeline={caseStudy.timeline} />

      <CaseStudyCTA results={caseStudy.results} />

      <CaseStudyNavigation
        previousProject={previous}
        nextProject={next}
      />

      <Footer />
    </div>
  );
};

export default CaseStudy;
