import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "../Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import DigitalMarketing from "./pages/DigitalMarketing";
import ProductBranding from "./pages/ProductBranding";
import CelebrityManagement from "./pages/CelebrityManagement";
import EventManagement from "./pages/EventManagement";
import FilmAndAdProduction from "./pages/FilmAndAdProduction";
import FilmPromotion from "./pages/FilmPromotion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={ <Services /> } />
          <Route path="/aboutus" element={ <AboutUs />} />
          <Route path="/services/product-branding" element={ <ProductBranding /> } />
          <Route path="/services/celebrity-management" element={ <CelebrityManagement /> } />
          <Route path="/services/digital-marketing" element={ <DigitalMarketing /> } />
          <Route path="/services/film-and-ad-production" element={ <FilmAndAdProduction /> } />
          <Route path="/services/film-promotion" element={ <FilmPromotion /> } />
          <Route path="/services/event-management" element={ <EventManagement /> } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
