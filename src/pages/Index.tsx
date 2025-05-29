
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Methodology />
      <Portfolio />
      <Blog />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
