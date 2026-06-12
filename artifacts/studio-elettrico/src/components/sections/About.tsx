import { motion } from "framer-motion";
import aboutImg from "@/assets/images/about.png";

export function About() {
  const stats = [
    { label: "Progetti", value: "150+" },
    { label: "Anni di Esperienza", value: "20" },
    { label: "Clienti Soddisfatti", value: "98%" },
    { label: "Certificati", value: "ISO" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={aboutImg}
                alt="Ingegneri elettrici che esaminano progetti"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating Glass Stats */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                  className="glass-card bg-white/80 p-6 text-center shadow-xl backdrop-blur-xl"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary font-heading">{stat.value}</div>
                  <div className="text-xs md:text-sm font-medium text-slate-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:pl-10 mt-16 lg:mt-0"
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm">Chi Siamo</h2>
            <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Esperienza e rigore al servizio della sicurezza.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Da oltre 20 anni, il nostro studio accompagna imprese e committenti nella progettazione di impianti elettrici sicuri, efficienti e a norma di legge. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Il nostro team di ingegneri certificati opera in tutta Italia con competenza, rigore tecnico e attenzione ai dettagli, garantendo standard qualitativi di altissimo livello per ogni singolo progetto.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
