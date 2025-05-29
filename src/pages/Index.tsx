
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Offers from "@/components/Offers";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Methodology />
      <Offers />
      <Portfolio />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
