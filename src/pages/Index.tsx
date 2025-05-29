
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import TrustSection from "@/components/TrustSection";
import Offers from "@/components/Offers";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import SimplifiedContact from "@/components/SimplifiedContact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustSection />
      <Services />
      <Methodology />
      <Offers />
      <Portfolio />
      <Testimonials />
      <Blog />
      <FAQ />
      <About />
      <SimplifiedContact />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
