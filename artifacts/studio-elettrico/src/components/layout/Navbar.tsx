import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/ORSI_DAVIDE_LOGOwh_1781513396998.png";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Chi Siamo", href: "#about" },
    { name: "Servizi", href: "#services" },
    { name: "Progetti", href: "#projects" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#071208] border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center z-50" data-testid="link-home">
          <img src={logo} alt="Davide Orsi Studio Tecnico STP SRL" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-white/90 hover:text-primary transition-colors"
              data-testid={`button-nav-${link.name.toLowerCase().replace(' ', '-')}`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="text-sm font-bold text-primary px-6 py-2.5 rounded border-[1.5px] border-primary bg-transparent hover:bg-primary hover:text-white transition-all"
            data-testid="button-cta-navbar"
          >
            Richiedi Preventivo
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="button-toggle-menu"
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
              className="absolute top-full left-0 right-0 bg-[#071208] border-t border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-lg font-medium text-white py-3 border-b border-white/5 text-left"
                  data-testid={`button-mobile-nav-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="text-sm font-bold text-primary mt-4 px-6 py-3 rounded border-[1.5px] border-primary bg-transparent w-full text-center hover:bg-primary hover:text-white transition-all"
                data-testid="button-mobile-cta"
              >
                Richiedi Preventivo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
