import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { 
  OrganizationSchema, 
  LocalBusinessSchema, 
  ServicesSchema, 
  FAQSchema, 
  ReviewsSchema 
} from "@/components/seo/StructuredData";

// Lazy load below-fold and non-critical components
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Services = lazy(() => import("@/components/Services"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const SimplifiedContact = lazy(() => import("@/components/SimplifiedContact"));
const Footer = lazy(() => import("@/components/Footer"));
const PromoBanner = lazy(() => import("@/components/PromoBanner"));
const ProcessTimeline = lazy(() => import("@/components/ProcessTimeline"));
const About = lazy(() => import("@/components/About"));
const FAQ = lazy(() => import("@/components/FAQ"));
const ChatBot = lazy(() => import("@/components/ChatBot"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const SuggestedArticles = lazy(() => import("@/components/internal-links/SuggestedArticles"));
const SocialProofToast = lazy(() => import("@/components/SocialProofToast"));
const StickyMobileCTA = lazy(() => import("@/components/StickyMobileCTA"));

const faqData = [
  {
    question: "Quels services de marketing digital proposez-vous ?",
    answer: "Nous proposons une offre 360° : création de sites web, SEO, Google Ads & Meta Ads, gestion des réseaux sociaux, email marketing, content marketing, branding et identité visuelle."
  },
  {
    question: "Combien de temps avant de voir les premiers résultats ?",
    answer: "La publicité (Google/Meta Ads) génère des résultats dès les premières semaines. Le SEO prend 3 à 6 mois. Le social media commence à porter ses fruits après 1 à 3 mois."
  },
  {
    question: "Comment mesurez-vous le ROI de vos actions ?",
    answer: "Tracking complet dès le départ (Google Analytics, pixels, UTMs). Rapports mensuels avec KPIs clés : trafic, leads, conversions, coût par acquisition, ROI."
  },
  {
    question: "Quelle est la différence avec une agence web classique ?",
    answer: "Notre approche couvre l'ensemble du tunnel d'acquisition digital : attirer (SEO, Ads), convertir (landing pages, UX), fidéliser (email, social). Chaque action est pensée pour générer du business."
  },
  {
    question: "Quel budget prévoir pour une stratégie marketing digitale ?",
    answer: "Nos accompagnements démarrent à partir de 500€/mois. Le budget dépend de vos objectifs, votre secteur et les leviers activés."
  }
];

const reviewsData = [
  { author: "Marie Dubois", reviewBody: "Notre chiffre d'affaires en ligne a augmenté de 250% grâce à leur stratégie digitale !", rating: 5 },
  { author: "Thomas Laurent", reviewBody: "50+ leads qualifiés par mois grâce aux Meta Ads et au social media.", rating: 5 },
  { author: "Sophie Martin", reviewBody: "On est passé de 5 à 30 demandes de devis par semaine avec le SEO + Google Ads.", rating: 5 },
  { author: "Alexandre Chen", reviewBody: "Notre coût par acquisition a baissé de 60% grâce à leur approche data-driven.", rating: 5 }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        url="/"
        title="Agence Marketing Digital Paris | SEO, Ads, Social Media"
        description="Agence de marketing digital à Paris. SEO, Google Ads, Meta Ads, Social Media, Email Marketing, création de sites web. Stratégies data-driven pour booster votre croissance."
        keywords="agence marketing digital, SEO, Google Ads, Meta Ads, social media, email marketing, création site web, marketing digital Paris"
      />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <ServicesSchema />
      <FAQSchema faqs={faqData} />
      <ReviewsSchema reviews={reviewsData} />
      
      <Suspense fallback={null}>
        <PromoBanner />
      </Suspense>
      <Navigation />
      <section id="hero" style={{ marginTop: '64px' }}>
        <Hero />
      </section>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AnimatedSection animation="fade-up">
          <section id="portfolio" className="-mt-4" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' } as React.CSSProperties}>
            <Portfolio />
          </section>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={100}>
          <ProcessTimeline />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <section id="services" className="-mt-4">
            <Services />
          </section>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={100}>
          <section id="testimonials" className="-mt-4">
            <Testimonials />
          </section>
        </AnimatedSection>
        <AnimatedSection animation="scale">
          <About />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <FAQ />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <SuggestedArticles title="Derniers articles du blog" max={3} />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <section id="contact" className="-mt-4">
            <SimplifiedContact />
          </section>
        </AnimatedSection>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <ExitIntentPopup />
        <ChatBot />
        <SocialProofToast />
        <StickyMobileCTA />
      </Suspense>
    </div>
  );
};

export default Index;
