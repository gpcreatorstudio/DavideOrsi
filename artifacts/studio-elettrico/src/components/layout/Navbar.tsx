import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Chi Siamo", href: "#about" },
    { name: "Progetti", href: "#projects" },
    { name: "Servizi", href: "#services" },
    { name: "Contatti", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav-scrolled py-3" : "glass-nav py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Zap className="w-8 h-8 text-primary" fill="currentColor" />
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            SE Impianti
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
          >
            Richiedi Preventivo
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 glass-nav border-t border-white/20 p-6 flex flex-col gap-4 md:hidden shadow-xl"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-lg font-medium text-foreground py-2 border-b border-white/10 text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("#contact")}
                className="bg-primary hover:bg-primary/90 text-white rounded-full w-full mt-4"
                size="lg"
              >
                Richiedi Preventivo
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
