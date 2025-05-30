
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import TrustSection from "@/components/TrustSection";
import Offers from "@/components/Offers";
import Portfolio from "@/components/Portfolio";
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
      <section id="portfolio">
        <Portfolio />
      </section>
      <TrustSection />
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="methodology">
        <Methodology />
      </section>
      <section id="offers">
        <Offers />
      </section>
      <section id="contact">
        <SimplifiedContact />
      </section>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
