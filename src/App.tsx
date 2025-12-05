import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NewsletterConfirmation from "./pages/NewsletterConfirmation";
import CaseStudy from "./pages/CaseStudy";
import ChatAnalytics from "./pages/ChatAnalytics";
import OffreSpeciale from "./pages/OffreSpeciale";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import ServicesPage from "./pages/Services";
import SitesWebPage from "./pages/services/SitesWeb";
import DesignPage from "./pages/services/Design";
import SeoPage from "./pages/services/Seo";
import SeaPage from "./pages/services/Sea";
import LandingPageService from "./pages/services/LandingPage";
import SiteVitrineService from "./pages/services/SiteVitrine";
import SiteEcommerceService from "./pages/services/SiteEcommerce";
import ApplicationWebService from "./pages/services/ApplicationWeb";
import RefonteSiteService from "./pages/services/RefonteSite";
import DesignUiUxService from "./pages/services/DesignUiUx";
import IdentiteVisuelleService from "./pages/services/IdentiteVisuelle";
import ReferencementSeoService from "./pages/services/ReferencementSeo";
import AuditSeoService from "./pages/services/AuditSeo";
import GoogleAdsService from "./pages/services/GoogleAds";
import MetaAdsService from "./pages/services/MetaAds";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/sites-web" element={<SitesWebPage />} />
            <Route path="/services/sites-web/landing-page" element={<LandingPageService />} />
            <Route path="/services/sites-web/site-vitrine" element={<SiteVitrineService />} />
            <Route path="/services/sites-web/site-ecommerce" element={<SiteEcommerceService />} />
            <Route path="/services/sites-web/application-web" element={<ApplicationWebService />} />
            <Route path="/services/sites-web/refonte-site" element={<RefonteSiteService />} />
            <Route path="/services/design" element={<DesignPage />} />
            <Route path="/services/design/ui-ux" element={<DesignUiUxService />} />
            <Route path="/services/design/identite-visuelle" element={<IdentiteVisuelleService />} />
            <Route path="/services/seo" element={<SeoPage />} />
            <Route path="/services/seo/referencement" element={<ReferencementSeoService />} />
            <Route path="/services/seo/audit" element={<AuditSeoService />} />
            <Route path="/services/sea" element={<SeaPage />} />
            <Route path="/services/sea/google-ads" element={<GoogleAdsService />} />
            <Route path="/services/sea/meta-ads" element={<MetaAdsService />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/newsletter-confirmation" element={<NewsletterConfirmation />} />
            <Route path="/case-study/:slug" element={<CaseStudy />} />
            <Route path="/chat-analytics" element={<ChatAnalytics />} />
            <Route path="/offre-speciale" element={<OffreSpeciale />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
