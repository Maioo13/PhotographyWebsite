import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PhotoModalProvider } from "@/components/PhotoModal";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <PhotoModalProvider>
        <div className="flex flex-col min-h-screen">
          <Header 
            isMobileMenuOpen={isMobileMenuOpen} 
            toggleMobileMenu={toggleMobileMenu} 
          />
          <main className="flex-grow pt-20">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </PhotoModalProvider>
    </QueryClientProvider>
  );
}

export default App;
