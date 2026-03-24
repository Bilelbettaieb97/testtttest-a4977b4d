import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Utensils, Home, Dumbbell, Sparkles, BookOpen, Briefcase } from "lucide-react";
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
import portfolioEcommerce from "@/assets/portfolio-ecommerce.webp";
import portfolioRestaurant from "@/assets/portfolio-restaurant.webp";
import portfolioImmobilier from "@/assets/portfolio-immobilier.webp";
import portfolioFitness from "@/assets/portfolio-fitness.webp";
import portfolioBeaute from "@/assets/portfolio-beaute.webp";
import portfolioFormation from "@/assets/portfolio-formation.webp";
import portfolioB2B from "@/assets/portfolio-b2b.webp";
import portfolioArancini from "@/assets/portfolio-arancini.jpg";
import portfolioAranciniHero from "@/assets/portfolio-arancini-hero.png";
import portfolioFunestoreHero from "@/assets/portfolio-funestore-hero.png";
import portfolioPapapretHero from "@/assets/portfolio-papapret-hero.png";
import portfolioAcbHero from "@/assets/portfolio-acb-hero.png";
import portfolioElevaHero from "@/assets/portfolio-eleva-hero.png";
import portfolioAdsbHero from "@/assets/portfolio-adsb-hero.png";
import galleryEcommerce1 from "@/assets/gallery-ecommerce-1.jpg";
import galleryEcommerce2 from "@/assets/gallery-ecommerce-2.jpg";
import galleryRestaurant1 from "@/assets/gallery-restaurant-1.jpg";
import galleryRestaurant2 from "@/assets/gallery-restaurant-2.jpg";
import galleryImmobilier1 from "@/assets/gallery-immobilier-1.jpg";
import galleryImmobilier2 from "@/assets/gallery-immobilier-2.jpg";

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
        { src: portfolioAranciniHero, alt: "Page d'accueil Monsieur Arancini", caption: "Page d'accueil avec mise en avant de l'authenticité sicilienne" },
        { src: portfolioArancini, alt: "Catalogue produits", caption: "Présentation des 15+ saveurs d'arancini artisanaux" },
        { src: portfolioArancini, alt: "Section partenaires", caption: "Espace dédié aux professionnels et partenaires B2B" }
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
        { src: portfolioFunestoreHero, alt: "Page d'accueil Funestore", caption: "Page d'accueil avec accès espace professionnel et catalogue" },
        { src: portfolioFunestoreHero, alt: "Catalogue produits", caption: "Catalogue complet d'articles funéraires avec tarifs compétitifs" },
        { src: portfolioFunestoreHero, alt: "Espace client", caption: "Espace client réservé aux professionnels du funéraire" }
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
        { src: portfolioPapapretHero, alt: "Page d'accueil PapaPrêt", caption: "Landing page avec copywriting persuasif et preuve sociale" },
        { src: portfolioPapapretHero, alt: "Section programme", caption: "Présentation structurée du programme de formation" },
        { src: portfolioPapapretHero, alt: "Section témoignages", caption: "Preuves sociales et témoignages de papas formés" }
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
    "boutique-elegance": {
      icon: <ShoppingCart className="w-8 h-8" />,
      sector: "E-commerce",
      client: "Boutique Élégance",
      title: "Site e-commerce haute conversion",
      subtitle: "Refonte complète avec optimisation du tunnel de vente",
      image: portfolioEcommerce,
      gallery: [
        { src: portfolioEcommerce, alt: "Page d'accueil", caption: "Page d'accueil élégante avec mise en avant des nouveautés" },
        { src: galleryEcommerce1, alt: "Page produit", caption: "Fiche produit détaillée avec galerie et avis clients" },
        { src: galleryEcommerce2, alt: "Tunnel de paiement", caption: "Processus de paiement sécurisé avec Stripe" }
      ],
      chartData: [
        { name: "Ventes", before: 1000, after: 4400 },
        { name: "Visiteurs", before: 5000, after: 15000 },
        { name: "Conversion", before: 0.9, after: 4.8 }
      ],
      challenge: "Boutique Élégance faisait face à un taux d'abandon de panier de 82% et une expérience utilisateur confuse. Le site était lent, peu sécurisé et n'inspirait pas confiance aux clients potentiels.",
      solution: "Nous avons créé une plateforme e-commerce moderne avec un design élégant, un tunnel de vente optimisé, l'intégration de Stripe pour les paiements sécurisés, et une navigation intuitive.",
      metrics: [
        { label: "Ventes en ligne", value: "+340%", description: "Augmentation du chiffre d'affaires" },
        { label: "Taux de conversion", value: "4.8%", description: "Contre 0.9% avant" },
        { label: "Temps de chargement", value: "1.2s", description: "Optimisation des performances" },
        { label: "Panier moyen", value: "+67%", description: "Grâce aux recommandations" }
      ],
      technologies: ["React", "Stripe", "Tailwind CSS", "PostgreSQL"],
      timeline: [
        { phase: "Analyse", duration: "1 semaine", description: "Audit UX et analyse concurrentielle" },
        { phase: "Design", duration: "2 semaines", description: "Maquettes et prototypes interactifs" },
        { phase: "Développement", duration: "4 semaines", description: "Création de la plateforme" },
        { phase: "Tests & Lancement", duration: "1 semaine", description: "Tests utilisateurs et mise en ligne" }
      ],
      results: "Le chiffre d'affaires en ligne a été multiplié par 3 en seulement 6 mois. La boutique génère maintenant plus de revenus en ligne que dans son magasin physique.",
      testimonial: "Notre boutique en ligne génère maintenant plus que notre magasin physique ! L'équipe a su comprendre nos besoins et créer une expérience d'achat exceptionnelle.",
      author: "Sophie Martineau",
      role: "Fondatrice"
    },
    "le-gourmet": {
      icon: <Utensils className="w-8 h-8" />,
      sector: "Restaurant",
      client: "Le Gourmet",
      title: "Site gastronomique avec commande",
      subtitle: "Transformation digitale d'un restaurant gastronomique",
      image: portfolioRestaurant,
      gallery: [
        { src: portfolioRestaurant, alt: "Page d'accueil", caption: "Page d'accueil élégante avec ambiance gastronomique" },
        { src: galleryRestaurant1, alt: "Menu interactif", caption: "Menu digital avec photos professionnelles des plats" },
        { src: galleryRestaurant2, alt: "Réservation", caption: "Système de réservation en ligne simple et efficace" }
      ],
      chartData: [
        { name: "Réservations", before: 400, after: 1400 },
        { name: "Commandes", before: 200, after: 1000 },
        { name: "Visiteurs", before: 2000, after: 7000 }
      ],
      challenge: "Le restaurant souffrait d'un manque de visibilité en ligne et avait perdu 60% de son chiffre d'affaires pendant la pandémie. Aucun système de commande en ligne n'était en place.",
      solution: "Création d'un site élégant avec menu interactif, système de réservation en ligne, commande à emporter intégrée et galerie photo professionnelle pour mettre en valeur les plats.",
      metrics: [
        { label: "Réservations", value: "+250%", description: "Augmentation des réservations" },
        { label: "Commandes en ligne", value: "+400%", description: "Nouveau canal de revenus" },
        { label: "Note moyenne", value: "4.9★", description: "Satisfaction client" },
        { label: "Taux de remplissage", value: "95%", description: "Tables occupées" }
      ],
      technologies: ["WordPress", "WooCommerce", "Bookly", "Google Maps"],
      timeline: [
        { phase: "Stratégie", duration: "1 semaine", description: "Définition de la vision digitale" },
        { phase: "Création contenu", duration: "2 semaines", description: "Photos et descriptions de plats" },
        { phase: "Développement", duration: "3 semaines", description: "Site et intégrations" },
        { phase: "Formation", duration: "1 semaine", description: "Formation de l'équipe" }
      ],
      results: "Le restaurant a retrouvé 100% de son CA pré-Covid et a même augmenté de 60% grâce aux commandes en ligne qui représentent maintenant 35% du chiffre d'affaires.",
      testimonial: "Le site nous a littéralement sauvés pendant les fermetures ! Aujourd'hui, c'est devenu un canal de vente essentiel qui complète parfaitement notre service en salle.",
      author: "Pierre Dubois",
      role: "Chef & Propriétaire"
    },
    "prestige-habitat": {
      icon: <Home className="w-8 h-8" />,
      sector: "Immobilier",
      client: "Prestige Habitat",
      title: "Plateforme immobilière moderne",
      subtitle: "Transformation digitale d'une agence immobilière",
      image: portfolioImmobilier,
      gallery: [
        { src: portfolioImmobilier, alt: "Page d'accueil", caption: "Interface moderne avec recherche avancée" },
        { src: galleryImmobilier1, alt: "Fiche bien", caption: "Fiches détaillées avec visite virtuelle 360°" },
        { src: galleryImmobilier2, alt: "Recherche", caption: "Recherche multicritères avec carte interactive" }
      ],
      chartData: [
        { name: "Visiteurs", before: 5000, after: 20000 },
        { name: "Demandes", before: 250, after: 700 },
        { name: "Ventes", before: 12, after: 35 }
      ],
      challenge: "L'agence perdait des clients face aux plateformes nationales. Le site était obsolète, la recherche de biens difficile et aucune visite virtuelle n'était proposée.",
      solution: "Développement d'une plateforme complète avec recherche avancée multicritères, visites virtuelles 360°, carte interactive et espace client personnalisé pour suivre les dossiers.",
      metrics: [
        { label: "Visiteurs uniques", value: "+300%", description: "Augmentation du trafic" },
        { label: "Demandes qualifiées", value: "+180%", description: "Leads de qualité" },
        { label: "Taux de conversion", value: "8.2%", description: "Visites vers ventes" },
        { label: "Délai de vente", value: "-30%", description: "Vente plus rapide" }
      ],
      technologies: ["React", "Google Maps API", "Matterport", "CRM Integration"],
      timeline: [
        { phase: "Analyse", duration: "2 semaines", description: "Étude de marché et besoins" },
        { phase: "UX/UI Design", duration: "3 semaines", description: "Design et wireframes" },
        { phase: "Développement", duration: "6 semaines", description: "Plateforme complète" },
        { phase: "Intégration CRM", duration: "2 semaines", description: "Connexion aux outils existants" }
      ],
      results: "L'agence est devenue la référence locale avec 30% de parts de marché en plus. Les biens se vendent en moyenne 30% plus rapidement grâce aux visites virtuelles.",
      testimonial: "Nous sommes passés d'une petite agence locale à LA référence de la région. Le site nous donne une crédibilité et une visibilité incomparables.",
      author: "Catherine Moreau",
      role: "Directrice d'Agence"
    },
    "fitzone-studio": {
      icon: <Dumbbell className="w-8 h-8" />,
      sector: "Sport & Fitness",
      client: "FitZone Studio",
      title: "Plateforme fitness avec abonnements",
      subtitle: "Digitalisation complète d'une salle de sport",
      image: portfolioFitness,
      gallery: [
        { src: portfolioFitness, alt: "Page d'accueil", caption: "Interface dynamique avec réservation de cours" },
        { src: portfolioFitness, alt: "Planning des cours", caption: "Calendrier interactif pour réserver les séances" },
        { src: portfolioFitness, alt: "Espace membre", caption: "Dashboard personnel avec suivi d'entraînement" }
      ],
      chartData: [
        { name: "Membres", before: 150, after: 780 },
        { name: "Réservations", before: 500, after: 2800 },
        { name: "Revenu mensuel", before: 8000, after: 35000 }
      ],
      challenge: "La salle perdait des membres face aux applications de fitness. La gestion des réservations était chaotique et le suivi des membres inexistant.",
      solution: "Création d'une plateforme complète avec réservation de cours en temps réel, suivi personnalisé des entraînements, paiements d'abonnements automatisés et application mobile.",
      metrics: [
        { label: "Membres actifs", value: "+420%", description: "Croissance de la base" },
        { label: "Taux de réservation", value: "95%", description: "Cours complets" },
        { label: "Rétention", value: "89%", description: "Fidélisation membres" },
        { label: "Satisfaction", value: "4.8/5", description: "Note moyenne" }
      ],
      technologies: ["React", "Stripe", "Firebase", "Progressive Web App"],
      timeline: [
        { phase: "Recherche", duration: "2 semaines", description: "Interviews utilisateurs" },
        { phase: "Design", duration: "3 semaines", description: "App et interface web" },
        { phase: "Développement", duration: "8 semaines", description: "Plateforme et app" },
        { phase: "Beta test", duration: "2 semaines", description: "Tests avec membres" }
      ],
      results: "La salle a triplé son nombre de membres actifs et maintient un taux de rétention exceptionnel de 89%, bien au-dessus de la moyenne du secteur.",
      testimonial: "La digitalisation a complètement révolutionné notre salle ! Nous offrons maintenant une expérience premium qui rivalise avec les grandes chaînes.",
      author: "Marc Leroy",
      role: "Fondateur FitZone"
    },
    "institut-belle-vie": {
      icon: <Sparkles className="w-8 h-8" />,
      sector: "Beauté & Bien-être",
      client: "Institut Belle Vie",
      title: "Site spa avec réservation en ligne",
      subtitle: "Modernisation d'un institut de beauté",
      image: portfolioBeaute,
      gallery: [
        { src: portfolioBeaute, alt: "Page d'accueil", caption: "Design élégant et apaisant pour l'institut" },
        { src: portfolioBeaute, alt: "Réservation", caption: "Système de booking en ligne 24/7" },
        { src: portfolioBeaute, alt: "Packages", caption: "Offres et forfaits personnalisables" }
      ],
      chartData: [
        { name: "Réservations", before: 350, after: 1330 },
        { name: "Packages vendus", before: 80, after: 232 },
        { name: "Taux occupation", before: 65, after: 98 }
      ],
      challenge: "L'institut gérait tout manuellement avec un agenda papier. Les créneaux vides étaient fréquents et le suivi client inexistant.",
      solution: "Site élégant avec système de réservation en ligne 24/7, packages personnalisables, programme de fidélité automatisé et rappels SMS.",
      metrics: [
        { label: "Réservations en ligne", value: "+280%", description: "Plus de réservations" },
        { label: "Ventes de packages", value: "+190%", description: "Revenus supplémentaires" },
        { label: "Satisfaction client", value: "9.6/10", description: "Expérience premium" },
        { label: "Taux d'occupation", value: "98%", description: "Presque plus de créneaux vides" }
      ],
      technologies: ["WordPress", "Bookly Pro", "WooCommerce", "Mailchimp"],
      timeline: [
        { phase: "Audit", duration: "1 semaine", description: "Analyse des besoins" },
        { phase: "Design", duration: "2 semaines", description: "Design luxueux" },
        { phase: "Développement", duration: "3 semaines", description: "Site et booking" },
        { phase: "Migration", duration: "1 semaine", description: "Import des données" }
      ],
      results: "L'institut affiche complet 3 semaines à l'avance et a augmenté son CA de 75% grâce aux packages et à l'optimisation des créneaux.",
      testimonial: "Nous n'avons plus jamais de créneaux vides ! Le système de réservation en ligne a transformé notre gestion et nos clientes adorent la facilité.",
      author: "Émilie Bernard",
      role: "Gérante"
    },
    "skillsup-academy": {
      icon: <BookOpen className="w-8 h-8" />,
      sector: "Formation",
      client: "SkillsUp Academy",
      title: "Plateforme e-learning moderne",
      subtitle: "Création d'une académie en ligne",
      image: portfolioFormation,
      gallery: [
        { src: portfolioFormation, alt: "Page d'accueil", caption: "Plateforme e-learning avec catalogue de cours" },
        { src: portfolioFormation, alt: "Interface cours", caption: "Lecteur vidéo avec quiz interactifs" },
        { src: portfolioFormation, alt: "Dashboard étudiant", caption: "Suivi de progression et certificats" }
      ],
      chartData: [
        { name: "Étudiants", before: 50, after: 325 },
        { name: "Cours vendus", before: 180, after: 864 },
        { name: "Revenu mensuel", before: 3500, after: 17500 }
      ],
      challenge: "Le formateur donnait uniquement des cours en présentiel, limitant sa capacité à 20 étudiants par session. Aucune présence en ligne n'existait.",
      solution: "Plateforme e-learning complète avec hébergement vidéo, quiz interactifs, suivi de progression, forum communautaire et certifications automatisées.",
      metrics: [
        { label: "Étudiants actifs", value: "+550%", description: "Croissance exponentielle" },
        { label: "Cours vendus", value: "+380%", description: "Revenus récurrents" },
        { label: "Taux de complétion", value: "78%", description: "Engagement élevé" },
        { label: "Revenus mensuels", value: "×5", description: "Multiplication des revenus" }
      ],
      technologies: ["React", "Vimeo", "Stripe", "Discord API"],
      timeline: [
        { phase: "Stratégie pédagogique", duration: "2 semaines", description: "Structure des cours" },
        { phase: "Production contenu", duration: "4 semaines", description: "Vidéos et quiz" },
        { phase: "Développement", duration: "6 semaines", description: "Plateforme LMS" },
        { phase: "Lancement", duration: "2 semaines", description: "Marketing et lancement" }
      ],
      results: "Plus de 200 étudiants actifs quotidiennement, des revenus multipliés par 5, et une communauté engagée qui génère du bouche-à-oreille.",
      testimonial: "Je ne pensais pas qu'il était possible de créer une plateforme qui rivalise avec les géants comme Udemy ! Aujourd'hui j'ai ma propre académie rentable.",
      author: "Thomas Petit",
      role: "Fondateur & Formateur"
    },
    "consultpro": {
      icon: <Briefcase className="w-8 h-8" />,
      sector: "Services B2B",
      client: "ConsultPro",
      title: "Site corporate avec génération de leads",
      subtitle: "Optimisation de la génération de leads B2B",
      image: portfolioB2B,
      gallery: [
        { src: portfolioB2B, alt: "Page d'accueil", caption: "Site corporate professionnel avec CTA clairs" },
        { src: portfolioB2B, alt: "Formulaire lead", caption: "Formulaires intelligents pour qualifier les prospects" },
        { src: portfolioB2B, alt: "Blog", caption: "Contenu de valeur pour le SEO et l'expertise" }
      ],
      chartData: [
        { name: "Leads mensuels", before: 25, after: 140 },
        { name: "Trafic organique", before: 800, after: 4200 },
        { name: "Conversions", before: 3, after: 17 }
      ],
      challenge: "Le cabinet recevait très peu de demandes qualifiées via son site. Le positionnement était flou et le site peu professionnel.",
      solution: "Site corporate premium avec SEO optimisé, tunnel de conversion intelligent, formulaires qualifiants, intégration CRM et contenu de valeur (blog, études de cas).",
      metrics: [
        { label: "Leads qualifiés", value: "+460%", description: "Demandes entrantes" },
        { label: "Taux de conversion", value: "12.3%", description: "Visiteurs → leads" },
        { label: "ROI marketing", value: "850%", description: "Retour sur investissement" },
        { label: "Closing rate", value: "+85%", description: "Leads → clients" }
      ],
      technologies: ["Next.js", "HubSpot", "Google Analytics", "SEO Tools"],
      timeline: [
        { phase: "Stratégie", duration: "2 semaines", description: "Positionnement et SEO" },
        { phase: "Content", duration: "3 semaines", description: "Rédaction et études de cas" },
        { phase: "Développement", duration: "5 semaines", description: "Site et intégrations" },
        { phase: "SEO & Launch", duration: "2 semaines", description: "Optimisation et lancement" }
      ],
      results: "Le pipeline commercial a été multiplié par 5. Le site génère maintenant 60% des nouveaux clients, contre moins de 10% avant le projet.",
      testimonial: "C'est le meilleur investissement que nous ayons fait cette année ! Notre site est devenu notre meilleur commercial, disponible 24/7.",
      author: "Laurent Dupuis",
      role: "Directeur Général"
    }
  };

  const caseStudy = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  // Order of projects for navigation
  const projectOrder = [
    "monsieur-arancini",
    "funestore",
    "papapret",
    "acb-renovation",
    "eleva-conciergerie",
    "boutique-elegance",
    "le-gourmet",
    "prestige-habitat",
    "fitzone-studio",
    "institut-belle-vie",
    "skillsup-academy",
    "consultpro"
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
