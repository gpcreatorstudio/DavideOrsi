import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Headphones } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      icon: Target,
      title: "Precisione Assoluta",
      desc: "Ogni progetto è sviluppato con rigore tecnico e attenzione ai dettagli normativi."
    },
    {
      icon: Lightbulb,
      title: "Innovazione",
      desc: "Utilizziamo le tecnologie più avanzate per impianti efficienti e a lungo termine."
    },
    {
      icon: Shield,
      title: "Sicurezza Garantita",
      desc: "Tutti i nostri impianti sono progettati in piena conformità con le normative vigenti CEI e UNI."
    },
    {
      icon: Headphones,
      title: "Supporto Continuo",
      desc: "Assistenza tecnica e consulenza disponibile in ogni fase del progetto e post-consegna."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-primary font-heading font-extrabold uppercase tracking-widest text-sm mb-2">Perché Sceglierci</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-[#111]">
            Perché Sceglierci
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-heading font-bold text-[#111] mb-3">{reason.title}</h4>
                <p className="text-[#555] leading-relaxed text-sm">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
