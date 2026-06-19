import { motion } from "framer-motion";
import { Zap, FileText } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "PROGETTAZIONE ELETTRICA E SPECIALE",
    items: [
      "Impianti elettrici civili e industriali",
      "Impianti rete dati e cablaggio strutturato",
      "Impianti Zootecnici",
      "Impianti domotici",
      "Impianti di sicurezza (antifurti, antincendio, sistemi di videosorveglianza)",
      "Impianti in ambienti particolari quali, a maggior rischio in caso di incendio, ambulatori medici, luoghi di pubblico spettacolo, ecc.",
      "Impianti elettrici per la protezione contro le scariche e le sovratensioni di origine atmosferica",
      "Impianti fotovoltaici e di accumulo di energia",
    ],
  },
  {
    icon: FileText,
    title: "DOCUMENTAZIONE DI VALUTAZIONE DEI RISCHI (D.LGS. 81/08)",
    items: [
      "Redazione della valutazione del rischio da scariche atmosferiche",
      "Redazione della valutazione del rischio elettrico",
      "Redazione della valutazione e classificazione delle zone ATEX",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">
            I Nostri Servizi
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#111] mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-[#555] max-w-2xl">
            Soluzioni ingegneristiche su misura per ogni settore. Dalla progettazione alla
            certificazione, ogni impianto è una firma di precisione e affidabilità.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="border border-[#d4e8d4] rounded-sm p-7 bg-white"
                data-testid={`service-card-${idx}`}
              >
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-8 h-8 border border-[#d4e8d4] rounded flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-[#111] leading-snug pt-1">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#444]">
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeOpacity="0.4"/>
                        <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
