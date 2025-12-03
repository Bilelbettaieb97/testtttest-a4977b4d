import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import SimplifiedContact from "@/components/SimplifiedContact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import PromoBanner from "@/components/PromoBanner";
import ProcessTimeline from "@/components/ProcessTimeline";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ChatBot from "@/components/ChatBot";
import AnimatedSection from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { 
  OrganizationSchema, 
  LocalBusinessSchema, 
  ServicesSchema, 
  FAQSchema, 
  ReviewsSchema 
} from "@/components/seo/StructuredData";

const faqData = [
  {
    question: "Combien de temps avant de voir les premiers résultats ?",
    answer: "En moyenne, nos clients voient une amélioration significative dès la 1ère semaine après la mise en ligne. Les résultats complets sont généralement atteints entre 15 et 30 jours selon votre trafic."
  },
  {
    question: "Que se passe-t-il après la livraison de mon site ?",
    answer: "Nous incluons 3 mois de support et d'optimisation gratuits. Cela comprend : suivi des performances, ajustements basés sur les données réelles, support technique, et formation de votre équipe."
  },
  {
    question: "Comment êtes-vous sûrs que ça va fonctionner pour mon secteur ?",
    answer: "Nous avons travaillé avec +150 entreprises dans 25 secteurs différents. Notre méthodologie est basée sur des principes de psychologie cognitive universels qui fonctionnent quel que soit le secteur."
  },
  {
    question: "Quelle est la différence avec une agence web classique ?",
    answer: "Nous nous spécialisons exclusivement sur l'optimisation des conversions. Nos pages sont conçues avec une approche scientifique : tests A/B, analyse comportementale, optimisation continue."
  },
  {
    question: "Puis-je voir des exemples concrets de vos réalisations ?",
    answer: "Bien sûr ! Nous avons une section portfolio avec des cas clients détaillés, incluant les métriques avant/après."
  }
];

const reviewsData = [
  { author: "Sophie Martineau", reviewBody: "Notre boutique en ligne génère maintenant plus que notre magasin physique !", rating: 5 },
  { author: "Pierre Dubois", reviewBody: "Le site nous a littéralement sauvés pendant les fermetures !", rating: 5 },
  { author: "Catherine Moreau", reviewBody: "Nous sommes passés d'une petite agence locale à LA référence de la région.", rating: 5 },
  { author: "Marc Leroy", reviewBody: "La digitalisation a complètement révolutionné notre salle !", rating: 5 }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        url="/"
        title="Création de Sites Web Sur-Mesure"
        description="Agence web spécialisée dans la création de sites internet sur-mesure. Design unique, développement moderne, responsive. Devis gratuit pour votre projet digital."
        keywords="création site web, agence web, site internet sur mesure, développement web, design web, site responsive, e-commerce, site vitrine"
      />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <ServicesSchema />
      <FAQSchema faqs={faqData} />
      <ReviewsSchema reviews={reviewsData} />
      
      <PromoBanner />
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <AnimatedSection animation="fade-up">
        <section id="portfolio" className="-mt-4">
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
        <section id="contact" className="-mt-4">
          <SimplifiedContact />
        </section>
      </AnimatedSection>
      <Footer />
      <StickyMobileCTA />
      <ExitIntentPopup />
      <ChatBot />
    </div>
  );
};

export default Index;
