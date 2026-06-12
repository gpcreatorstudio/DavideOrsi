import { motion } from "framer-motion";
import { Zap, Factory, Sun, Home, ClipboardCheck, BookOpen } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Progettazione Elettrica",
    description: "Sviluppo di impianti BT e MT, quadri elettrici generali e di zona per ogni destinazione d'uso.",
  },
  {
    icon: Factory,
    title: "Impianti Industriali",
    description: "Automazione industriale, distribuzione forza motrice e sistemi di sicurezza integrati.",
  },
  {
    icon: Sun,
    title: "Sistemi Fotovoltaici",
    description: "Progettazione e integrazione architettonica di impianti FV con sistemi di accumulo avanzati.",
  },
  {
    icon: Home,
    title: "Domotica & Smart Building",
    description: "Integrazione di sistemi building automation su protocolli standard KNX, BACnet e DALI.",
  },
  {
    icon: ClipboardCheck,
    title: "Verifiche e Collaudi",
    description: "Collaudi tecnico-funzionali secondo norme CEI 64-8 e verifiche DM 37/08.",
  },
  {
    icon: BookOpen,
    title: "Consulenza Normativa",
    description: "Supporto tecnico per conformità normative CEI, UNI e direttiva ATEX per zone classificate.",
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm">Competenze</h2>
          <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            I Nostri Servizi
          </h3>
          <p className="text-lg text-slate-400">
            Copriamo l'intero ciclo di vita dell'impianto elettrico: dalla fattibilità preliminare al collaudo finale.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card-dark p-8 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-heading font-bold text-white mb-4">
                  {service.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
