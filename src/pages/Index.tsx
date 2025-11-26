
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="portfolio" className="-mt-4">
        <Portfolio />
      </section>
      <ProcessTimeline />
      <section id="services" className="-mt-4">
        <Services />
      </section>
      <section id="testimonials" className="-mt-4">
        <Testimonials />
      </section>
      <About />
      <FAQ />
      <section id="contact" className="-mt-4">
        <SimplifiedContact />
      </section>
      <Footer />
      <StickyMobileCTA />
      <ExitIntentPopup />
      <ChatBot />
    </div>
  );
};

export default Index;
