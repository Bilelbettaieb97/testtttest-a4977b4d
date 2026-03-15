import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all non-homepage routes
const NewsletterConfirmation = lazy(() => import("./pages/NewsletterConfirmation"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const ChatAnalytics = lazy(() => import("./pages/ChatAnalytics"));
const OffreSpeciale = lazy(() => import("./pages/OffreSpeciale"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const ServicesPage = lazy(() => import("./pages/Services"));
const SitesWebPage = lazy(() => import("./pages/services/SitesWeb"));
const DesignPage = lazy(() => import("./pages/services/Design"));
const SeoPage = lazy(() => import("./pages/services/Seo"));
const SeaPage = lazy(() => import("./pages/services/Sea"));
const LandingPageService = lazy(() => import("./pages/services/LandingPage"));
const SiteVitrineService = lazy(() => import("./pages/services/SiteVitrine"));
const SiteEcommerceService = lazy(() => import("./pages/services/SiteEcommerce"));
const ApplicationWebService = lazy(() => import("./pages/services/ApplicationWeb"));
const RefonteSiteService = lazy(() => import("./pages/services/RefonteSite"));
const DesignUiUxService = lazy(() => import("./pages/services/DesignUiUx"));
const IdentiteVisuelleService = lazy(() => import("./pages/services/IdentiteVisuelle"));
const ReferencementSeoService = lazy(() => import("./pages/services/ReferencementSeo"));
const AuditSeoService = lazy(() => import("./pages/services/AuditSeo"));
const GoogleAdsService = lazy(() => import("./pages/services/GoogleAds"));
const MetaAdsService = lazy(() => import("./pages/services/MetaAds"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
