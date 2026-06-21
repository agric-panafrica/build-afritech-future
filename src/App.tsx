import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Programs = lazy(() => import("./pages/Programs"));
const Articles = lazy(() => import("./pages/Articles"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteFallback = () => (
  <div className="flex min-h-[45vh] items-center justify-center text-sm font-medium text-muted-foreground" aria-live="polite">
    Loading page...
  </div>
);

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pageBlurClass = isMobileMenuOpen
    ? "pointer-events-none select-none blur-[3px] opacity-80 md:pointer-events-auto md:select-auto md:blur-0 md:opacity-100"
    : "";

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const closeMenuOnDesktop = () => {
      if (mediaQuery.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    closeMenuOnDesktop();
    mediaQuery.addEventListener("change", closeMenuOnDesktop);

    return () => {
      mediaQuery.removeEventListener("change", closeMenuOnDesktop);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navigation isOpen={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} />
              <main className={`flex-grow origin-top transition-[filter,transform] duration-300 ease-out ${pageBlurClass}`} aria-hidden={isMobileMenuOpen}>
                <Suspense fallback={<RouteFallback />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <div className={`origin-bottom transition-[filter,transform] duration-300 ease-out ${pageBlurClass}`} aria-hidden={isMobileMenuOpen}>
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
