import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewsletterConfirmation from "./pages/NewsletterConfirmation";
import CaseStudy from "./pages/CaseStudy";
import ChatAnalytics from "./pages/ChatAnalytics";
import OffreSpeciale from "./pages/OffreSpeciale";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/newsletter-confirmation" element={<NewsletterConfirmation />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
          <Route path="/chat-analytics" element={<ChatAnalytics />} />
          <Route path="/offre-speciale" element={<OffreSpeciale />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
