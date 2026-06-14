import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all non-homepage routes
const NewsletterConfirmation = lazy(() => import("./pages/NewsletterConfirmation"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const OffreSpeciale = lazy(() => import("./pages/OffreSpeciale"));
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
const DemandeMaquette = lazy(() => import("./pages/DemandeMaquette"));
const OffreMensuelle = lazy(() => import("./pages/OffreMensuelle"));
const DevisPage = lazy(() => import("./pages/DevisPage"));
const EstimationPrix = lazy(() => import("./pages/EstimationPrix"));
const PromoSiteWeb = lazy(() => import("./pages/PromoSiteWeb"));

const queryClient = new QueryClient();

const CaseStudyRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/etude-de-cas/${slug}`} replace />;
};

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
              <Route path="/promo-site-web" element={<PromoSiteWeb />} />
              <Route path="*" element={<Navigate to="/promo-site-web" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
