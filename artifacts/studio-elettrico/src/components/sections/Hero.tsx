import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import heroBg from "@/assets/images/hero.png";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-foreground">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Ingegneria Elettrica Control Room"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay with radial green glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 to-[#1a2e1a]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Ingegneria Elettrica <br />
            <span className="text-primary">di Precisione</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Progettiamo impianti elettrici complessi per il settore industriale, commerciale e residenziale. Affidabilità certificata, precisione ingegneristica.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("#projects")}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg h-14"
            >
              Scopri i Nostri Progetti
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg h-14 backdrop-blur-sm"
            >
              Contattaci
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
