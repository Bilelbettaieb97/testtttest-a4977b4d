
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import TrustSection from "@/components/TrustSection";
import Offers from "@/components/Offers";
import Portfolio from "@/components/Portfolio";
import ConversionOptimization from "@/components/ConversionOptimization";
import Testimonials from "@/components/Testimonials";
import SimplifiedContact from "@/components/SimplifiedContact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import PromoBanner from "@/components/PromoBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PromoBanner />
      <section id="hero">
        <Hero />
      </section>
      <TrustSection />
      <section id="services">
        <Services />
      </section>
      <section id="methodology">
        <Methodology />
      </section>
      <section id="offers">
        <Offers />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <ConversionOptimization />
      <Testimonials />
      <section id="contact">
        <SimplifiedContact />
      </section>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
