import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { SEO } from "@/components/SEO";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  FAQSchema,
  ReviewsSchema,
} from "@/components/seo/StructuredData";

const OfferSection = lazy(() => import("@/components/home/OfferSection"));
const ProblemSection = lazy(() => import("@/components/home/ProblemSection"));
const SolutionSection = lazy(() => import("@/components/home/SolutionSection"));
const HomepageServices = lazy(() => import("@/components/home/HomepageServices"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const HomepageTestimonials = lazy(() => import("@/components/home/HomepageTestimonials"));
const HomepageProcess = lazy(() => import("@/components/home/HomepageProcess"));
const PricingSection = lazy(() => import("@/components/home/PricingSection"));
const SeoLocalSection = lazy(() => import("@/components/home/SeoLocalSection"));
const FinalCTA = lazy(() => import("@/components/home/FinalCTA"));
const HomepageContactForm = lazy(() => import("@/components/home/HomepageContactForm"));
const Footer = lazy(() => import("@/components/Footer"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const SocialProofToast = lazy(() => import("@/components/SocialProofToast"));
const StickyMobileCTA = lazy(() => import("@/components/StickyMobileCTA"));

const faqData = [
  { question: "Combien coûte un site internet ?", answer: "Nos sites démarrent à partir de 300€. Le prix dépend de vos besoins : site vitrine, e-commerce, landing page. Maquette gratuite et sans engagement." },
  { question: "En combien de temps mon site est-il livré ?", answer: "Votre site est livré en 48h après validation de la maquette. La maquette est créée en 24h." },
  { question: "Est-ce que le SEO est inclus ?", answer: "Oui, chaque site est optimisé pour Google dès la création : structure, balises, vitesse, contenu." },
  { question: "Y a-t-il un engagement ?", answer: "Aucun engagement. La maquette est gratuite. Vous ne payez que si vous êtes satisfait du résultat." },
  { question: "Proposez-vous un accompagnement après la livraison ?", answer: "Oui, un accompagnement et un support sont inclus pendant 6 mois après la mise en ligne." },
];

const reviewsData = [
  { author: "Client vérifié", reviewBody: "Site créé en 24h, ultra pro", rating: 5 },
  { author: "Entrepreneur", reviewBody: "Très réactif, je recommande", rating: 5 },
  { author: "Gérant PME", reviewBody: "J'ai déjà des clients grâce au site", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        url="/"
        title="Création site internet | Convertilab"
        description="Site internet à partir de 300€. Maquette gratuite. Convertilab crée des sites modernes optimisés pour convertir vos visiteurs en clients."
        keywords="création site internet, site web, maquette gratuite, site vitrine, site e-commerce, SEO, agence web France"
      />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqData} />
      <ReviewsSchema reviews={reviewsData} />

      <Navigation />
      <div style={{ paddingTop: "64px" }}>
        <section id="hero">
          <Hero />
        </section>
      </div>

      <Suspense fallback={<div className="min-h-[200px]" />}>
        {/* 2. Offre */}
        <OfferSection />

        {/* 3. Problème */}
        <ProblemSection />

        {/* 4. Solution */}
        <SolutionSection />

        {/* 5. Services */}
        <section id="services">
          <HomepageServices />
        </section>

        {/* 6. Portfolio / Preuves */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* 7. Avis clients */}
        <section id="testimonials">
          <HomepageTestimonials />
        </section>

        {/* 8. Process */}
        <HomepageProcess />

        {/* 9. Prix */}
        <PricingSection />

        {/* 10. SEO local */}
        <SeoLocalSection />

        {/* 11. CTA final */}
        <FinalCTA />

        {/* 12. Contact */}
        <HomepageContactForm />

        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <ExitIntentPopup />
        <SocialProofToast />
        <StickyMobileCTA />
      </Suspense>
    </div>
  );
};

export default Index;
