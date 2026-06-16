import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.jpg";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#071208]/75 z-0" />

      <div className="container relative z-10 px-4 md:px-6 pt-24 pb-12 w-full flex justify-center">
        <motion.div
          className="max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-primary text-sm font-heading font-bold uppercase tracking-[0.2em] border border-primary/30 py-1.5 px-3 rounded-sm bg-primary/10">
              Studio Tecnico Impianti Elettrici
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[800] text-white leading-[1.1] mb-6 md:mb-8 uppercase"
          >
            Progettiamo il<br />
            Futuro<br />
            Dell'<span className="text-primary">Energia</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#d0d0d0] mb-10 max-w-2xl mx-auto leading-relaxed font-body"
          >
            Ingegneria elettrica civile e industriale di altissima qualità. Dalla progettazione alla certificazione, ogni impianto è una firma di precisione e affidabilità.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("#services")}
              className="w-full sm:w-auto bg-primary text-[#071208] font-bold rounded px-8 py-4 text-base hover:bg-primary/90 transition-colors"
              data-testid="button-hero-services"
            >
              Scopri i Servizi
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto bg-transparent border border-white text-white font-medium rounded px-8 py-4 text-base hover:bg-white/10 transition-colors"
              data-testid="button-hero-contact"
            >
              Contattaci
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
